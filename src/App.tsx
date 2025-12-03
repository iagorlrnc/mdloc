import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Equipment } from './components/Equipment';
import { About } from './components/About';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { BusinessHours } from './components/BusinessHours';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Equipment />
        <Location />
        <BusinessHours />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
