import { Instagram, Facebook, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-b from-beige/60 to-beige/90 border-t border-brown/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-coffee-900">Caffeine Cove</h3>
            <p className="mt-2 text-coffee-800/70">Where every cup tells a story. Crafted brews, cozy vibes, and delightful bites.</p>
          </div>

          <div>
            <h4 className="font-semibold text-coffee-900">Visit Us</h4>
            <p className="mt-2 text-coffee-800/70 flex items-start gap-2"><MapPin className="h-5 w-5 mt-0.5"/> 123 Brew Street, Roastville</p>
            <p className="mt-1 text-coffee-800/70 flex items-start gap-2"><Mail className="h-5 w-5 mt-0.5"/> hello@caffeinecove.com</p>
          </div>

          <div>
            <h4 className="font-semibold text-coffee-900">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-coffee-50 text-coffee-900 hover:bg-coffee-100"><Instagram className="h-5 w-5"/></a>
              <a href="#" className="p-2 rounded-lg bg-coffee-50 text-coffee-900 hover:bg-coffee-100"><Facebook className="h-5 w-5"/></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brown/10 text-sm text-coffee-800/70 text-center">
          © {new Date().getFullYear()} Caffeine Cove. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
