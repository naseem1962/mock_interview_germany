import { useState, useEffect, useRef, useCallback } from 'react';
import { EmbassyRoom } from './EmbassyRoom';
import { ConversationThread } from './ConversationThread';
import { SCRIPT } from '../data/interviewScript';
import { useSpeech } from '../hooks/useSpeech';
import './InterviewPlayer.css';

const MIN_PAUSE_MS = 800;
const CANDIDATE_ANSWER_DURATION_MS = 30 * 1000; // 30 seconds (half minute) for candidate to answer

export function InterviewPlayer() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const timerRef = useRef(null);
  const { speak, cancel, isSupported } = useSpeech();

  const line = SCRIPT[index];
  const isLast = index >= SCRIPT.length - 1;
  const progress = SCRIPT.length > 0 ? ((index + 1) / SCRIPT.length) * 100 : 0;

  const advance = useCallback(() => {
    setIndex((i) => {
      if (i >= SCRIPT.length - 1) {
        setIsPlaying(false);
        return i;
      }
      return i + 1;
    });
  }, []);

  const goBack = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const reset = useCallback(() => {
    cancel();
    setIndex(0);
    setIsPlaying(false);
    setHasStarted(false);
  }, [cancel]);

  // Speak current line when index changes and audio is on
  useEffect(() => {
    if (!line || !audioEnabled || !isSupported) return;
    const isInterviewer = line.speaker === 'interviewer';
    speak(line.text, { male: !isInterviewer });
    return () => cancel();
  }, [index, audioEnabled, isSupported, line?.text, line?.speaker, speak, cancel]);

  // Cancel speech when pausing
  useEffect(() => {
    if (!isPlaying) cancel();
  }, [isPlaying, cancel]);

  // Auto-advance when playing (1 minute for candidate answers, normal duration for officer)
  useEffect(() => {
    if (!isPlaying || !line) return;

    const duration =
      line.speaker === 'student'
        ? CANDIDATE_ANSWER_DURATION_MS
        : Math.max(line.durationMs, MIN_PAUSE_MS);
    timerRef.current = setTimeout(advance, duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, isPlaying, line, advance]);

  const togglePlay = () => {
    if (!hasStarted) setHasStarted(true);
    setIsPlaying((p) => !p);
  };

  const handleNext = () => {
    if (isLast) return;
    cancel();
    if (timerRef.current) clearTimeout(timerRef.current);
    advance();
  };

  const handlePrev = () => {
    cancel();
    goBack();
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleJump = (next) => {
    cancel();
    setIndex(next);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div className="interview-player">
      <header className="player-header">
        <h1>Germany Student Visa Interview</h1>
        <p className="player-subtitle">Embassy-style mock interview • Zaeem Uz Zafar</p>
      </header>

      <div className="player-stage">
        <div className="player-scene">
          <EmbassyRoom
            camera={line?.camera ?? 'two-shot'}
            activeSpeaker={line?.speaker ?? null}
          />
        </div>
        <ConversationThread script={SCRIPT} currentIndex={index} />
      </div>

      <div className="player-controls">
        <div className="progress-wrap">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <span className="progress-label">
            {index + 1} / {SCRIPT.length}
          </span>
        </div>

        <div className="jump-to">
          <label htmlFor="jump-select">Jump to:</label>
          <select
            id="jump-select"
            value={index}
            onChange={(e) => handleJump(Number(e.target.value))}
            aria-label="Jump to question or line"
          >
            {SCRIPT.map((item, i) => (
              <option key={i} value={i}>
                {i + 1}. {item.speaker === 'interviewer' ? 'Officer' : 'Zaeem'}: {item.text.slice(0, 50)}{item.text.length > 50 ? '…' : ''}
              </option>
            ))}
          </select>
        </div>

        {isSupported && (
          <label className="audio-toggle">
            <input
              type="checkbox"
              checked={audioEnabled}
              onChange={(e) => setAudioEnabled(e.target.checked)}
              aria-label="Toggle audio"
            />
            <span>Audio (text-to-speech)</span>
          </label>
        )}

        <div className="buttons">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePrev}
            disabled={index === 0}
            aria-label="Previous line"
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? 'Pause' : hasStarted ? 'Resume' : 'Start interview'}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleNext}
            disabled={isLast}
            aria-label="Next line"
          >
            Next
          </button>
          <button
            type="button"
            className="btn btn-text"
            onClick={reset}
            aria-label="Restart from beginning"
          >
            Restart
          </button>
        </div>
      </div>

      {isLast && (
        <div className="player-ended" role="status">
          Interview complete. You can restart to watch again.
        </div>
      )}
    </div>
  );
}
