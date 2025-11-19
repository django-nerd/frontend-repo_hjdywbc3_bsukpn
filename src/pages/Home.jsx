import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { AboutSection, MenuPreview, GallerySection, ContactSection } from '../components/Sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuPreview />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
