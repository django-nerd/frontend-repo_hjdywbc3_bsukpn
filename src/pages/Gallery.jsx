import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Gallery() {
  const images = Array.from({ length: 12 }).map((_, i) => `https://source.unsplash.com/collection/9585181/800x800?coffee&sig=${i}`)
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-coffee-900">Gallery</h1>
          <p className="mt-2 text-coffee-800/80">Moments from inside the Cove</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <motion.div key={i} initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="aspect-square overflow-hidden rounded-2xl border border-brown/20">
                <img src={src} alt="cafe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
