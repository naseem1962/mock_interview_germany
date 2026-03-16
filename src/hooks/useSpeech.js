import { useEffect, useRef } from 'react';

/**
 * Speak text using Web Speech API. Returns a function to speak and one to cancel.
 */
export function useSpeech() {
  const synthRef = useRef(null);
  const voicesRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    synthRef.current = window.speechSynthesis;

    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const getVoice = (preferMale = true) => {
    const voices = voicesRef.current;
    if (!voices.length) return null;
    const en = voices.filter((v) => v.lang.startsWith('en'));
    if (!en.length) return voices[0];
    const male = en.find(
      (v) =>
        v.name.toLowerCase().includes('male') ||
        v.name.includes('David') ||
        v.name.includes('James') ||
        v.name.includes('Mark') ||
        v.name.includes('Daniel')
    );
    const female = en.find(
      (v) =>
        v.name.toLowerCase().includes('female') ||
        v.name.includes('Samantha') ||
        v.name.includes('Zira') ||
        v.name.includes('Karen') ||
        v.name.includes('Victoria')
    );
    if (preferMale && male) return male;
    if (!preferMale && female) return female;
    return en[0];
  };

  const speak = (text, options = {}) => {
    if (!synthRef.current || !text) return;
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate ?? 0.95;
    utterance.pitch = options.pitch ?? 1;
    utterance.volume = 1;
    const voice = getVoice(options.male !== false);
    if (voice) utterance.voice = voice;
    utterance.lang = 'en-GB';
    if (options.onEnd) utterance.onend = options.onEnd;
    if (options.onError) utterance.onerror = options.onError;
    synthRef.current.speak(utterance);
  };

  const cancel = () => {
    if (synthRef.current) synthRef.current.cancel();
  };

  return { speak, cancel, isSupported: typeof window !== 'undefined' && !!window.speechSynthesis };
}
