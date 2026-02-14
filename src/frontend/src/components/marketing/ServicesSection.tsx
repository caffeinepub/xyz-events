import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Video, Monitor, Radio, Users, Layers } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: 'Audio Production',
    description: 'Professional audio engineering and sound reinforcement for events of any scale, ensuring crystal-clear sound quality.',
    backgroundImage: '/assets/generated/service-audio-bg.dim_1200x800.png'
  },
  {
    icon: Layers,
    title: 'Event Production',
    description: 'Comprehensive event production services from planning to execution, delivering seamless experiences for your attendees.',
    backgroundImage: '/assets/generated/service-event-production-bg.dim_1200x800.png'
  },
  {
    icon: Monitor,
    title: 'LED Wall & Projection',
    description: 'State-of-the-art LED wall installations and projection mapping to create stunning visual displays for your event.',
    backgroundImage: '/assets/generated/service-led-projection-bg.dim_1200x800.png'
  },
  {
    icon: Video,
    title: 'Video Recording',
    description: 'High-quality video recording and live streaming services to capture and broadcast your event to any audience.',
    backgroundImage: '/assets/generated/service-video-recording-bg.dim_1200x800.png'
  },
  {
    icon: Radio,
    title: 'Engineering & Switching',
    description: 'Expert technical engineering and video switching for complex multi-camera productions and live broadcasts.',
    backgroundImage: '/assets/generated/service-engineering-switching-bg.dim_1200x800.png'
  },
  {
    icon: Users,
    title: 'Conference Support',
    description: 'Specialized support for large conferences with general sessions and multiple breakout rooms, ensuring smooth operations.',
    backgroundImage: '/assets/generated/service-conference-support-bg.dim_1200x800.png'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive event production labor services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden relative group"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}
                />
                
                {/* Strong overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background/90 dark:from-background/90 dark:via-background/85 dark:to-background/92" />
                
                {/* Content */}
                <div className="relative z-10">
                  <CardHeader className="bg-white/20">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm bg-white/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground services-text-shadow bg-white/20">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white/20">
                    <CardDescription className="text-base leading-relaxed font-medium text-foreground/90 services-text-shadow bg-white/20">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
