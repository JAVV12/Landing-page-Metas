import CountdownTimer from '@/components/CountdownTimer';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Modules from '@/components/Modules';
import Testimonial from '@/components/Testimonial';
import Pricing from '@/components/Pricing';
import Bonuses from '@/components/Bonuses';
import Guarantee from '@/components/Guarantee';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CountdownTimer />
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <Testimonial />
      <Pricing />
      <Bonuses />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
