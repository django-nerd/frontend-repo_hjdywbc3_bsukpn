import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h2 className="text-3xl font-bold text-coffee-900">Our Story</h2>
          <p className="mt-4 text-coffee-800/80">Born from a love for perfect pours and mindful spaces, Caffeine Cove blends artisan roasting with a welcoming atmosphere. We source sustainable beans, craft each cup with care, and bake daily to keep things fresh.</p>
          <p className="mt-3 text-coffee-800/80">Whether you're here to work, catch up, or just unwind — there's a cozy corner waiting for you.</p>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="relative h-72 rounded-2xl overflow-hidden border border-brown/20 shadow-xl">
          <img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop" alt="Cafe interior" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-beige/40 to-transparent"/>
        </motion.div>
      </div>
    </section>
  )
}

export function MenuPreview() {
  const items = [
    { name: 'Espresso', desc: 'Rich, bold, and smooth', price: '$3.50' },
    { name: 'Cappuccino', desc: 'Perfect foam, perfect balance', price: '$4.50' },
    { name: 'Cold Brew', desc: 'Slow-steeped and refreshing', price: '$4.00' },
    { name: 'Almond Croissant', desc: 'Buttery layers with almond cream', price: '$3.75' },
  ]
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-coffee-900 text-center">Menu Highlights</h2>
        <p className="mt-2 text-center text-coffee-800/70">Crafted classics and seasonal specials</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <motion.div key={i.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="rounded-2xl border border-brown/20 bg-gradient-to-br from-beige to-coffee-50 p-5 shadow">
              <div className="h-36 rounded-xl overflow-hidden">
                <img src={`https://source.unsplash.com/collection/9585181/300x200?sig=${idx}`} alt={i.name} className="w-full h-full object-cover"/>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-coffee-900">{i.name}</h3>
                  <span className="text-coffee-800/70">{i.price}</span>
                </div>
                <p className="text-sm text-coffee-800/70 mt-1">{i.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GallerySection() {
  const images = Array.from({ length: 8 }).map((_, i) => `https://source.unsplash.com/collection/9585181/600x600?coffee&sig=${i}`)
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-coffee-900 text-center">Gallery</h2>
        <p className="mt-2 text-center text-coffee-800/70">A peek into our cozy corners</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div key={i} initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="aspect-square rounded-xl overflow-hidden">
              <img src={src} alt="cafe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-coffee-900">Get in touch</h2>
          <p className="mt-3 text-coffee-800/80">Questions, bookings, or collabs? We’d love to hear from you.</p>
          <div className="mt-6 rounded-2xl overflow-hidden border border-brown/20 h-72">
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
            <textarea rows={4} className="mt-1 w-full rounded-xl border border-brown/20 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coffee-400" placeholder="Tell us more..."></textarea>
          </div>
          <button type="button" className="w-full rounded-xl bg-coffee-800 text-ivory py-3 font-semibold hover:bg-coffee-700">Send</button>
        </form>
      </div>
    </section>
  )
}
