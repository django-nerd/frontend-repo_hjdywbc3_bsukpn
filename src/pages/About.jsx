import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold text-coffee-900">About Caffeine Cove</motion.h1>
          <p className="mt-3 text-coffee-800/80">We believe coffee is more than a drink — it’s a moment. Our beans are ethically sourced and roasted to perfection. Our space is designed to slow you down, spark creativity, and bring people together.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[1,2,3,4].map((i)=> (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-brown/20 p-6 bg-gradient-to-br from-beige to-coffee-50">
                <h3 className="font-semibold text-coffee-900">What we value</h3>
                <p className="mt-2 text-sm text-coffee-800/80">Sustainability, craftsmanship, and community. We partner with local bakers and farmers, and we minimize waste in our daily operations.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
