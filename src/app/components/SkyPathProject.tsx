import { ProjectDetail } from './ProjectDetail';

export function SkyPathProject() {
  return (
    <ProjectDetail
      title="SkyPath — AI-Powered Travel Assistant"
      description="Multi-agent AI travel planning platform that earned 4th place at UiPath Future Forward Hackathon 2025."
      fullDescription={[
        "SkyPath was built for the UiPath Future Forward Hackathon 2025, where it placed 4th among competing teams. The platform tackles the complexity of travel planning by orchestrating multiple specialized AI agents — each responsible for a distinct part of the journey — coordinated by a central planner.",
        "Rather than a single model trying to handle everything, SkyPath uses a multi-agent architecture: a Flight Optimization Agent refines schedules, budgets, layover times and luggage constraints; a Hotel Recommendation Agent sources options with real Amadeus data; and an Itinerary Generator Agent assembles everything into a coherent day-by-day plan tailored to the traveler.",
        "The frontend delivers a clean, intuitive interface built with React and TypeScript, while the Django backend handles agent orchestration and Amadeus API integration. OpenAI models power the reasoning behind each agent's decision-making.",
      ]}
      image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwb3J0JTIwZmxpZ2h0fGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
      tags={['React', 'TypeScript', 'Tailwind CSS', 'Django', 'Python', 'OpenAI', 'Amadeus API']}
      status="Finished"
      statusColor="green"
      type="UiPath Future Forward Hackathon 2025 — 4th Place"
      github="https://github.com/sebiisgarb/UiPath-Hackathon-2025"
      features={[
        'Multi-agent AI architecture with a central orchestrator',
        'Flight optimization across schedules, budgets and layover constraints',
        'Real-time hotel recommendations via Amadeus API',
        'Custom day-by-day itinerary generation',
        'Integration with authentic Amadeus flight and activity datasets',
        'OpenAI-powered reasoning for each specialized agent',
        'React 18 + TypeScript frontend with Tailwind CSS',
        'Django backend handling agent coordination and API calls',
      ]}
      challenges={[
        'Coordinating multiple AI agents without them producing contradictory outputs. Solution: Designed a central orchestrator that feeds structured context between agents sequentially, ensuring each agent builds on verified outputs from the previous step.',
        'Working with live Amadeus API data within hackathon time constraints. Solution: Built a lightweight caching layer so repeated queries during demo sessions returned instantly without burning API quota.',
        'Keeping the UI intuitive despite the complexity of multi-stop, multi-constraint travel planning. Solution: Adopted a step-by-step flow — destination first, then constraints, then results — reducing the perceived complexity for the user.',
      ]}
    />
  );
}
