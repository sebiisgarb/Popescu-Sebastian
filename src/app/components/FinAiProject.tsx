import { ProjectDetail } from './ProjectDetail';

export function FinAiProject() {
  return (
    <ProjectDetail
      title="FinAI — AI-Powered Financial Companion"
      description="Intelligent banking robo-advisor that analyzes user spending, savings and risk tolerance to recommend personalized investment products."
      fullDescription={[
        "FinAI was built during the NEXXT AI Hackathon 2025, a national competition organized in partnership with Raiffeisen Bank. From over 70 initial teams (250+ candidates), only 13 advanced to the development phase — and FinAI by Team Skepya was selected as one of the 7 finalists.",
        "The core problem FinAI addresses is the gap between data and direction in modern banking: customers receive hundreds of charts and reports but no clear, personalized guidance. FinAI bridges that gap through intelligent profiling, dynamic product matching, and an AI conversational assistant powered by AWS Bedrock (Claude 3 Sonnet).",
        "The ML pipeline analyzes transaction history to estimate each user's risk profile in real time. An agentic reasoning layer interprets requests, queries the database, and returns personalized investment recommendations with transparent explanations — turning passive banking data into actionable financial insights.",
      ]}
      image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYWklMjBiYW5raW5nfGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
      tags={['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'AWS Bedrock', 'Docker', 'Machine Learning']}
      status="Finished"
      statusColor="green"
      type="NEXXT AI Hackathon 2025 — Raiffeisen Bank"
      youtubeId="M6zVGsbLZhI"
      github="https://github.com/sebiisgarb/FinAi-NEXXT-Hackathon-2025"
      features={[
        'AI-driven financial profile built from transaction history',
        'Dynamic investment product recommendations via ML model',
        'Conversational assistant powered by AWS Bedrock (Claude 3 Sonnet)',
        'Real-time spending and risk tolerance analysis',
        'Transparent AI explanations for every recommendation',
        'PostgreSQL database for clients, transactions & investments',
        'MCP Server integration for secure AI-backend orchestration',
        'Containerized deployment with Docker Compose',
      ]}
      challenges={[
        'Building a meaningful risk profile from raw transaction data in real time. Solution: Trained a custom ML pipeline on synthetic banking data to classify users into risk tiers, then used AWS Bedrock to contextualize the output in natural language.',
        'Keeping AI responses grounded in real financial data without hallucination. Solution: Implemented an agentic workflow where the AI agent fetches live database records before generating any recommendation, ensuring every suggestion is backed by actual user data.',
        'Designing a UI that feels trustworthy and clear for financial decisions. Solution: Built a dashboard with progressive disclosure — summary cards first, detailed breakdowns on demand — using Framer Motion for smooth transitions that reduce cognitive load.',
      ]}
    />
  );
}
