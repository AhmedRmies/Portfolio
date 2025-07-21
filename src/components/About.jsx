import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Palette, Zap, Users } from 'lucide-react'

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'Styling', items: ['Tailwind CSS', 'Styled Components', 'Material-UI', 'Shadcn/ui'] },
    { category: 'Tools', items: ['Git', 'Webpack', 'Vite', 'npm', 'VS Code'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', '.Net Core', 'SQL'] }
  ]

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces with attention to user experience and accessibility.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and excellent user experience.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Working effectively in teams using agile methodologies and modern development workflows.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate frontend developer with 1+ year of experience creating 
            modern web applications. I love turning ideas into beautiful, functional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - About Text */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I started my journey in web development during college, where I discovered my passion 
                for creating interactive and visually appealing websites. What began as a curiosity 
                quickly evolved into a career focused on frontend technologies.
              </p>
              <p>
                Over the years, I've worked on diverse projects ranging from e-commerce platforms 
                to SaaS applications, always striving to deliver exceptional user experiences. 
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and mentoring.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-6 mt-8">What I Bring</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <img 
                  src="/me.jpg" 
                  alt="Ahmed Masada working" 
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


