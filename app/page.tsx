import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import CategoryShowcase from '@/components/sections/CategoryShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import SocialProof from '@/components/sections/SocialProof';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <CategoryShowcase />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
