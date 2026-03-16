import { useEffect, useRef } from 'react';
import './ConversationThread.css';

/**
 * Shows the interview as a back-and-forth conversation.
 * Past lines as bubbles; current line highlighted and auto-scrolled into view.
 */
export function ConversationThread({ script, currentIndex }) {
  const endRef = useRef(null);
  const currentRef = useRef(null);

  useEffect(() => {
    currentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [currentIndex]);

  const visibleLines = script.slice(0, currentIndex + 1);

  return (
    <div className="conversation-thread" role="log" aria-live="polite" aria-label="Interview conversation">
      <div className="conversation-header">
        <span className="conversation-title">Conversation</span>
      </div>
      <div className="conversation-messages">
        {visibleLines.map((item, i) => {
          const isCurrent = i === currentIndex;
          const isOfficer = item.speaker === 'interviewer';
          return (
            <div
              key={i}
              ref={isCurrent ? currentRef : null}
              className={`conversation-turn ${isOfficer ? 'turn-officer' : 'turn-student'} ${isCurrent ? 'turn-current' : ''}`}
            >
              <div className="turn-avatar" aria-hidden="true">
                {isOfficer ? '👤' : '🎓'}
              </div>
              <div className="turn-bubble">
                <span className="turn-speaker">
                  {isOfficer ? 'Visa Officer' : 'Zaeem Uz Zafar'}
                </span>
                <p className="turn-text">{item.text}</p>
              </div>
            </div>
          );
        })}
        <div ref={endRef} className="conversation-anchor" />
      </div>
    </div>
  );
}
