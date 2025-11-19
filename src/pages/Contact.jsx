import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold text-coffee-900">Contact Us</motion.h1>
            <p className="mt-2 text-coffee-800/80">We usually respond within a day.</p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-brown/20 h-80">
              <iframe title="map" className="w-full h-full" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.5%2C-0.1%2C51.52&layer=mapnik"></iframe>
            </div>
          </div>
          <form className="bg-gradient-to-br from-beige to-coffee-50 p-6 rounded-2xl border border-brown/20 shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-coffee-900">Name</label>
              <input className="mt-1 w-full rounded-xl border border-brown/20 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coffee-400" placeholder="Your name"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-coffee-900">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-brown/20 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coffee-400" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-coffee-900">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-brown/20 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coffee-400" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" className="w-full rounded-xl bg-coffee-800 text-ivory py-3 font-semibold hover:bg-coffee-700">Send</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
