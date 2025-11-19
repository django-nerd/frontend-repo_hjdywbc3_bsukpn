import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
        <div className="absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-beige to-coffee-200 blur-3xl opacity-60"/>
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brown-200 to-beige blur-3xl opacity-50"/>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-coffee-900"
          >
            Sip. Savor. Smile.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-lg text-coffee-800/80 max-w-xl"
          >
            Welcome to Caffeine Cove — your cozy corner for artisan coffee, baked treats, and warm conversations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="/menu" className="px-6 py-3 rounded-full bg-coffee-800 text-ivory hover:bg-coffee-700 transition-colors font-semibold">Explore Menu</a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-coffee-100 text-coffee-900 hover:bg-coffee-200 transition-colors font-semibold">Book a Table</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative h-[420px] rounded-2xl overflow-hidden border border-brown/20 shadow-xl bg-gradient-to-br from-beige to-coffee-50"
        >
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/Ks-3d-demo/scene.splinecode" />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-beige/40 to-transparent"/>
        </motion.div>
      </div>
    </section>
  )
}
