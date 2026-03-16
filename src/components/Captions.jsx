import './Captions.css';

/**
 * Subtitle captions for the current speaker and line.
 */
export function Captions({ speaker, text }) {
  if (!text) return null;

  const label = speaker === 'interviewer' ? 'Visa Officer' : 'Zaeem Uz Zafar';

  return (
    <div className={`captions captions-${speaker}`} role="region" aria-live="polite" aria-label="Interview subtitles">
      <span className="captions-label">{label}</span>
      <p className="captions-text">{text}</p>
    </div>
  );
}
