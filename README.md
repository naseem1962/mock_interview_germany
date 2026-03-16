# Germany Student Visa – Embassy Interview

A React + Vite app that presents a **realistic embassy-style interview** for a Germany student visa. It covers the full script with all questions and answers, camera-style cuts (interviewer / student / two-shot), and subtitle captions.

## Features

- **Full script**: All questions from the visa officer and answers from the student (Zaeem Uz Zafar), including ID, passport, education, work experience, visa history, sponsorship, blocked account, university, course, modules, assessment, costs, career goals, and why Germany.
- **Scene setup**: Embassy-style room with desk, characters (Visa Officer & Student), and German flag.
- **Camera angles**: Switches between interviewer focus, student focus, and two-shot based on who is speaking.
- **Subtitles**: Each line shown as captions with speaker label (Visa Officer / Zaeem Uz Zafar).
- **Controls**: Play/Pause, Previous, Next, Restart, and a **Jump to** dropdown to go to any question.
- **Pacing**: Each line has a duration for automatic advance; you can also step through manually.

## Run locally

```bash
cd embassy-interview
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/data/interviewScript.js` – Full Q&A script with speaker, camera angle, and duration per line.
- `src/components/EmbassyRoom.jsx` – Interview room and character layout with camera logic.
- `src/components/Captions.jsx` – Subtitle display.
- `src/components/InterviewPlayer.jsx` – Playback state, progress, and controls.
