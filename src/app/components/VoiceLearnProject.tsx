import { ProjectDetail } from './ProjectDetail';

export function VoiceLearnProject() {
  return (
    <ProjectDetail
      title="VoiceLearn+ — AI Educational Platform"
      description="AI-powered literacy platform for early readers built at SmartHack 2025 (ASMI), combining speech recognition, dictation exercises and a teacher dashboard."
      fullDescription={[
        "VoiceLearn+ was developed by Team RAVS at SmartHack 2025, organized by ASMI. The platform targets a real and often overlooked problem in education: children in rural or under-resourced schools lack access to personalized feedback on reading and writing — the kind that a dedicated teacher in a small class can provide, but that scales poorly.",
        "The platform offers two core learning modes. In Read Aloud mode, students read sentences aloud while an AI evaluates pronunciation accuracy in real time using Faster Whisper — a state-of-the-art speech recognition model. In Listen & Write mode, students hear a sentence and type what they hear, with AI checking both spelling and contextual understanding.",
        "Teachers get a dedicated dashboard with automated progress reports that highlight each student's recurring mistakes and suggest personalized homework. The system treats AI as an assistant to the teacher, not a replacement — all voice data is processed ephemerally, with no permanent storage, keeping student privacy at the core of the design.",
      ]}
      image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
      tags={['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Faster Whisper', 'OpenAI']}
      status="Finished"
      statusColor="green"
      type="SmartHack 2025 — ASMI Hackathon"
      github="https://github.com/sebiisgarb/SmartHack-2025"
      features={[
        'Read Aloud mode with real-time AI pronunciation evaluation',
        'Listen & Write dictation mode with spelling and context checking',
        'Teacher dashboard with automated student progress reports',
        "Personalized homework suggestions based on each student's patterns",
        'Faster Whisper speech-to-text for accurate error detection',
        'OpenAI TTS for natural, clear audio playback',
        'Privacy-first: no permanent voice data storage',
        'Designed to bridge the urban–rural education gap',
      ]}
      challenges={[
        'Accurate pronunciation error detection for young children whose speech patterns differ significantly from adult training data. Solution: Fine-tuned Faster Whisper with phoneme-level evaluation and a lenient error threshold calibrated for early readers.',
        'Providing feedback that encourages rather than discourages children. Solution: Designed a gamified feedback system with positive reinforcement first, showing errors as "try again" moments rather than failures.',
        'Building a meaningful teacher dashboard in 24 hours. Solution: Focused on the highest-value signal — recurring error patterns — and auto-generated natural language summaries using GPT-4o-mini, making reports readable without extra teacher effort.',
      ]}
    />
  );
}
