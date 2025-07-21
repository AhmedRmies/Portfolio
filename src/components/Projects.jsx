import React from 'react';
import { Github, ExternalLink, Code, Palette, Database, Shirt, ShoppingCart, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CetakWorks - Custom T-shirt & Document Printing Platform",
      description: "A comprehensive platform for custom t-shirt and document printing with real-time 3D visualization. Built during my internship at Farbeat Technologies, featuring secure payment integration and AI-powered design generation.",
      technologies: ["React.js", "Three.js", "TailwindCSS", "Node.js", "Express.js", "Firebase", "OnPay Gateway", "OpenAI DALL·E 3"],
      githubUrl: "https://github.com/AhmedRmies",
      liveUrl: "#",
      icon: <Shirt className="w-6 h-6" />,
      category: "Full Stack",
      highlights: [
        "Real-time 3D product visualization with Three.js",
        "Secure payment integration with OnPay gateway",
        "AI-powered design generation using OpenAI DALL·E 3",
        "Firebase Storage for user-generated content"
      ]
    },
    {
      id: 2,
      title: "DesignAI Web App",
      description: "My final year project - an innovative t-shirt design platform that combines AI technology with interactive 3D visualization. Users can create custom designs, select colors, upload templates, and generate unique designs using AI.",
      technologies: ["React.js", "Three.js", "Tailwind CSS", "OpenAI API", "React Hooks"],
      githubUrl: "https://github.com/AhmedRmies",
      liveUrl: "#",
      icon: <Palette className="w-6 h-6" />,
      category: "Final Year Project",
      highlights: [
        "AI-driven design generation and logo creation",
        "Interactive 3D t-shirt visualization",
        "Color selection and template uploading",
        "Advanced React hooks implementation"
      ]
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "A full-stack e-commerce platform with comprehensive admin and user functionality. Features secure authentication, role-based access control, and a modern responsive interface built with the latest technologies.",
      technologies: [".NET Core 8", "React 19", "MS SQL Server", "Entity Framework", "JWT", "Vite", "shadcn/ui"],
      githubUrl: "https://github.com/AhmedRmies",
      liveUrl: "#",
      icon: <ShoppingCart className="w-6 h-6" />,
      category: "Full Stack",
      highlights: [
        "Secure admin dashboard with full CRUD operations",
        "User profile management with password security",
        "Role-based access control and JWT authentication",
        "Responsive UI with React 19 and shadcn/ui"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my key projects that showcase my expertise in full-stack development, 
            AI integration, and modern web technologies. Each project demonstrates different aspects 
            of my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-hover"
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Experience Section */}
        <div className="mt-16 bg-card rounded-lg border border-border p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Professional Experience</h3>
            <p className="text-muted-foreground">Recent internship and hands-on industry experience</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-foreground">Full Stack Web Developer (Internship)</h4>
                  <span className="text-sm text-muted-foreground">Jun 2024 – Dec 2024</span>
                </div>
                <p className="text-primary font-medium mb-3">Farbeat Technologies Sdn Bhd</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Gained hands-on experience in full-stack development, working on the CetakWorks platform. 
                  Developed expertise in modern web technologies, payment integration, and AI-powered features.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ReactJS", "Node.js", "Three.js", "Firebase", "OnPay Integration", "OpenAI API"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;



