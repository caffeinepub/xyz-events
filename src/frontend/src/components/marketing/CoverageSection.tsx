import { MapPin, Building2, Award } from 'lucide-react';

export function CoverageSection() {
  return (
    <section id="coverage" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Nationwide Coverage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are here for you, wherever your event takes place
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">All 50 States</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our experienced team provides event production labor services throughout the entire United States, ensuring consistent quality no matter where your event is located.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Large Hotels & Event Venues</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized expertise in working with major hotels and large-scale event venues, understanding the unique requirements and logistics of premium facilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">15+ Years of Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Over a decade and a half of proven excellence in event production, delivering exceptional results for clients across diverse industries and event types.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/us-map.dim_1200x700.png"
                alt="United States coverage map"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
