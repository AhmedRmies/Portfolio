import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {

   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='home' className='min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted'>
      <div className="container mx-auto px-4 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* left content */}
        <div className='text-center lg:text-left'>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Ahmed <br/>Masada</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">Hi, I'm Ahmed Masada. I create beautiful,
             responsive web applications with modern 
             technologies and clean code.</p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
              <a 
                href="/Ahmed Masada resume.pdf" 
                target="_blank" 
              >
                <Button variant="outline" size="lg">
                  My Resume
                </Button>
              </a>
             </div>

             <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/AhmedRmies" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ahmed-masada-45a73b222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:ahmed.masada23@gmail.com">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
        </div>

{/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-2">
                <img 
                  src="/me1.jpg" 
                  alt="Ahmed Masada" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Git'].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


