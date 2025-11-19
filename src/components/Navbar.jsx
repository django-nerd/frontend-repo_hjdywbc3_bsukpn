import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Coffee, Instagram, Facebook, Phone } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-colors text-sm font-medium ${
      isActive
        ? 'bg-coffee-600 text-ivory shadow'
        : 'text-coffee-800/80 hover:bg-coffee-100 hover:text-coffee-900'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-beige/60 bg-beige/80 border border-brown/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-coffee-600 to-brown-700 text-ivory flex items-center justify-center shadow">
                <Coffee className="h-6 w-6" />
              </div>
              <div className="leading-tight">
                <p className="text-lg font-extrabold tracking-tight text-coffee-900">Caffeine Cove</p>
                <p className="text-xs text-coffee-700/70">Brewed with love</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              ))}
              <a href="tel:+1234567890" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coffee-800 text-ivory hover:bg-coffee-700 transition-colors">
                <Phone className="h-4 w-4" /> Call
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-coffee-900 hover:bg-coffee-100"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `w-full px-4 py-3 rounded-xl ${
                      isActive ? 'bg-coffee-600 text-ivory' : 'bg-coffee-50 text-coffee-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="p-2 rounded-lg bg-coffee-50 text-coffee-900 hover:bg-coffee-100">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-coffee-50 text-coffee-900 hover:bg-coffee-100">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
