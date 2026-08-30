let audioCtx: AudioContext | null = null;
let gainNode: GainNode | null = null;
let sourceNode: AudioBufferSourceNode | null = null;
let isPlaying = false;
const listeners = new Set<(playing: boolean) => void>();

function notify() {
  listeners.forEach((listener) => {
    try {
      listener(isPlaying);
    } catch {}
  });
}

export function subscribeRainAudio(callback: (playing: boolean) => void) {
  listeners.add(callback);
  try {
    callback(isPlaying);
  } catch {}
  return () => {
    listeners.delete(callback);
  };
}

export function toggleRainAudio() {
  if (typeof window === "undefined") return;

  if (isPlaying) {
    try {
      if (gainNode && audioCtx) {
        gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.3);
        setTimeout(() => {
          if (sourceNode) {
            try {
              sourceNode.stop();
              sourceNode.disconnect();
            } catch {}
            sourceNode = null;
          }
          isPlaying = false;
          notify();
        }, 350);
      } else {
        isPlaying = false;
        notify();
      }
    } catch {
      isPlaying = false;
      notify();
    }
  } else {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      if (!AudioContextClass) {
        console.warn("Web Audio API not supported on this device.");
        return;
      }

      if (!audioCtx || audioCtx.state === "closed") {
        audioCtx = new AudioContextClass();
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume().catch(() => {});
      }

      const sampleRate = audioCtx.sampleRate || 44100;
      const bufferSize = sampleRate * 5;
      const buffer = audioCtx.createBuffer(2, bufferSize, sampleRate);
      const left = buffer.getChannelData(0);
      const right = buffer.getChannelData(1);

      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        const pink = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;

        left[i] = pink * 0.85 + (Math.random() * 0.04 - 0.02);
        right[i] = pink * 0.85 + (Math.random() * 0.04 - 0.02);
      }

      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      sourceNode = source;

      const lowpass = audioCtx.createBiquadFilter();
      lowpass.type = "lowpass";
      lowpass.frequency.setValueAtTime(780, audioCtx.currentTime);

      const highpass = audioCtx.createBiquadFilter();
      highpass.type = "highpass";
      highpass.frequency.setValueAtTime(120, audioCtx.currentTime);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gain.gain.setTargetAtTime(0.2, audioCtx.currentTime, 0.7);
      gainNode = gain;

      source.connect(lowpass);
      lowpass.connect(highpass);
      highpass.connect(gain);
      gain.connect(audioCtx.destination);

      source.start(0);
      isPlaying = true;
      notify();
    } catch (err) {
      console.error("Audio playback error:", err);
      isPlaying = false;
      notify();
    }
  }
}
