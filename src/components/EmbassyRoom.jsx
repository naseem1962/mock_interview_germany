import { useMemo } from 'react';
import './EmbassyRoom.css';

/**
 * Embassy interview room with configurable camera angle.
 * camera: 'interviewer' | 'student' | 'two-shot'
 */
export function EmbassyRoom({ camera = 'two-shot', activeSpeaker = null }) {
  const showInterviewer = useMemo(
    () => camera === 'interviewer' || camera === 'two-shot',
    [camera]
  );
  const showStudent = useMemo(
    () => camera === 'student' || camera === 'two-shot',
    [camera]
  );
  const isTwoShot = camera === 'two-shot';

  return (
    <div className={`embassy-room camera-${camera}`} role="img" aria-label="German Embassy interview room">
      <div className="room-backdrop" />
      <div className="room-desk" />
      <div className="room-flag" aria-hidden="true" />

      <div className="characters">
        {showInterviewer && (
          <div
            className={`character character-interviewer ${isTwoShot ? 'half' : 'full'} ${activeSpeaker === 'interviewer' ? 'speaking' : ''}`}
          >
            <div className="character-silhouette interviewer-silhouette" />
            <div className="character-label">Visa Officer</div>
          </div>
        )}
        {showStudent && (
          <div
            className={`character character-student ${isTwoShot ? 'half' : 'full'} ${activeSpeaker === 'student' ? 'speaking' : ''}`}
          >
            <div className="character-silhouette student-silhouette" />
            <div className="character-label">Zaeem Uz Zafar</div>
          </div>
        )}
      </div>
    </div>
  );
}
