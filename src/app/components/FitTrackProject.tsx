import { ProjectDetail } from './ProjectDetail';

export function FitTrackProject() {
  return (
    <ProjectDetail
      title="FitTrack - Personal Fitness Tracker"
      description="Web app to manage workouts, track goals and monitor your progress. Includes user authentication, workout logging and progress charts."
      fullDescription={[
        "FitTrack is a comprehensive fitness tracking web application designed to help users maintain their workout routines and achieve their fitness goals. The platform provides an intuitive interface for logging exercises, tracking progress over time, and visualizing fitness metrics through interactive charts.",
        "Developed as a team project, FitTrack showcases collaborative software development practices. My primary contributions focused on backend API development, frontend design implementation, and core business logic for workout tracking and goal management.",
        "The application features a modern, responsive design built with React and styled using Chakra UI and TailwindCSS, ensuring a seamless experience across all devices. The Django backend provides a robust REST API with comprehensive authentication and data validation.",
      ]}
      image="https://images.unsplash.com/photo-1580983693000-5654250f64d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzc1Mzg3MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      tags={['React', 'JavaScript', 'ChakraUI', 'TailwindCSS', 'Django', 'PostgreSQL']}
      status="Finished"
      statusColor="green"
      type="Team Web Development Project"
      features={[
        'User authentication and profile management',
        'Custom workout creation and logging',
        'Exercise library with detailed instructions',
        'Progress tracking with visual charts and graphs',
        'Goal setting and achievement tracking',
        'Workout history and statistics',
        'Responsive design for mobile and desktop',
        'RESTful API for data management',
        'PostgreSQL database for reliable data storage',
      ]}
      challenges={[
        'Creating an intuitive workout logging interface that could handle different exercise types (strength training, cardio, etc.) with varying metrics. Solution: Designed a flexible exercise template system with customizable fields.',
        'Implementing effective data visualization for progress tracking that provides meaningful insights. Solution: Integrated chart libraries with custom calculations for trends and performance metrics.',
        'Coordinating development work across team members with different skill levels. Solution: Established clear code standards, regular code reviews, and pair programming sessions.',
      ]}
    />
  );
}
