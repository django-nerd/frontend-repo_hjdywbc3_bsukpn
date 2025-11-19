import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Coffee Classics',
    items: [
      { name: 'Espresso', price: 3.5, desc: 'Rich and bold' },
      { name: 'Americano', price: 3.0, desc: 'Smooth and balanced' },
      { name: 'Cappuccino', price: 4.5, desc: 'Velvety foam' },
      { name: 'Latte', price: 4.5, desc: 'Creamy and comforting' },
    ],
  },
  {
    title: 'Cold & Seasonal',
    items: [
      { name: 'Cold Brew', price: 4.0, desc: 'Slow-steeped' },
      { name: 'Iced Latte', price: 4.5, desc: 'Chilled and smooth' },
      { name: 'Affogato', price: 5.0, desc: 'Espresso over gelato' },
    ],
  },
  {
    title: 'Bakes & Bites',
    items: [
      { name: 'Croissant', price: 3.0, desc: 'Buttery layers' },
      { name: 'Almond Croissant', price: 3.75, desc: 'Almond cream' },
      { name: 'Banana Bread', price: 3.25, desc: 'House favorite' },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-coffee-900">Menu</h1>
          <p className="mt-2 text-coffee-800/80">Freshly brewed, baked, and served daily.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <motion.div key={cat.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="rounded-2xl border border-brown/20 bg-gradient-to-br from-beige to-coffee-50 p-6 shadow">
                <h2 className="text-xl font-bold text-coffee-900">{cat.title}</h2>
                <div className="mt-4 space-y-4">
                  {cat.items.map((i) => (
                    <div key={i.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-coffee-900">{i.name}</p>
                        <p className="text-sm text-coffee-800/70">{i.desc}</p>
                      </div>
                      <span className="font-semibold text-coffee-900">${i.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
