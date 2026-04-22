import { ProjectDetail } from './ProjectDetail';

export function ReviveProject() {
  return (
    <ProjectDetail
      title="ReVive - Intelligent Restoration of Old Images/Videos"
      description="Full-stack web application for restoring and colorizing old images and videos using deep learning."
      fullDescription={[
        "ReVive is a comprehensive AI-powered platform that breathes new life into old photographs and videos. The project implements state-of-the-art deep learning models to automatically colorize black and white media while preserving the original quality and details.",
        "The application provides users with multiple colorization methods, each optimized for different types of content. Users can upload their photos or videos, select their preferred colorization algorithm, apply various filters, and preview results in real-time before downloading.",
        "Built with scalability in mind, ReVive leverages AWS cloud infrastructure and Docker containerization to handle heavy computational workloads efficiently. The backend processing pipeline is optimized to handle both images and videos, with support for batch processing and queue management.",
      ]}
      image="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzUzNDI2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      tags={['Python', 'Django', 'AWS', 'Docker', 'React', 'Deep Learning']}
      status="Finished"
      statusColor="green"
      type="Personal Bachelor's Thesis Project"
      youtubeId="Hf2hmq6J0Aw"
      github="https://github.com/sebiisgarb/ReVive"
      features={[
        'Multiple AI colorization models for different content types',
        'Real-time preview of processed images and videos',
        'Custom filter application and enhancement tools',
        'Batch processing support for multiple files',
        'Cloud-based processing with AWS integration',
        'Docker containerization for easy deployment',
        'User authentication and project management',
        'Responsive React frontend with modern UI',
      ]}
      challenges={[
        'Optimizing deep learning models to run efficiently on cloud infrastructure while keeping costs manageable. Solution: Implemented smart caching and batch processing strategies.',
        'Handling large video files without overwhelming server resources. Solution: Developed a chunked upload system with progress tracking and queue-based processing.',
        'Ensuring color accuracy and consistency across different types of historical photos. Solution: Trained multiple specialized models and implemented a model selection algorithm based on image characteristics.',
      ]}
    />
  );
}
