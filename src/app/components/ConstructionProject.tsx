import { ProjectDetail } from './ProjectDetail';

export function ConstructionProject() {
  return (
    <ProjectDetail
      title="Internal Web/Mobile App for Construction Orders"
      description="Built both the backend and the web frontend for an internal system that captures and registers orders across multiple construction sites."
      fullDescription={[
        "This enterprise-level application was developed for Navis Max, a construction company, to streamline their order management and delivery tracking across multiple active construction sites. The system handles the complete lifecycle of construction material orders, from placement to delivery confirmation.",
        "The platform features a sophisticated role-based access control system, accommodating different user types including site managers, drivers, administrators, and logistics coordinators. Each role has specific permissions and interfaces tailored to their workflow needs.",
        "A key innovation is the integrated GPS navigation system for drivers, which provides direct integration with popular mapping services (Google Maps and Waze). This feature significantly reduced delivery times and improved route optimization for material deliveries.",
      ]}
      image="https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzUzNjQ0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      tags={['Django', 'React', 'Kotlin', 'REST API', 'PostgreSQL', 'Docker']}
      status="Soon to be deployed"
      statusColor="yellow"
      type="Internal Construction Company Project (Navis Max)"
      features={[
        'Multi-site order management and tracking',
        'Role-based access control for different user types',
        'Real-time order status updates and notifications',
        'GPS integration for driver navigation (Google Maps, Waze)',
        'Mobile app for drivers with offline capabilities',
        'Delivery confirmation with photo verification',
        'Comprehensive reporting and analytics dashboard',
        'REST API for third-party integrations',
        'PostgreSQL database with optimized queries',
        'Docker containerization for consistent deployment',
      ]}
      challenges={[
        'Designing a flexible data model that could accommodate varying order types and delivery workflows across different construction sites. Solution: Created a modular schema with customizable fields and workflow stages.',
        'Implementing offline functionality for the mobile app, as construction sites often have poor connectivity. Solution: Developed a local database sync system with conflict resolution.',
        'Integrating real-time GPS tracking while maintaining user privacy and battery efficiency. Solution: Implemented smart location polling that adjusts frequency based on delivery status and battery level.',
      ]}
    />
  );
}
