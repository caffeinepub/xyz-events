import { HeroSection } from './components/marketing/HeroSection';
import { ServicesSection } from './components/marketing/ServicesSection';
import { CoverageSection } from './components/marketing/CoverageSection';
import { ContactSection } from './components/marketing/ContactSection';
import { TopNav } from './components/marketing/TopNav';
import { Footer } from './components/marketing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <ServicesSection />
        <CoverageSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
