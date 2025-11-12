import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Film, PenTool, ArrowRight, Instagram, Mail, Phone, MapPin, Play } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
    {children}
  </section>
)

const Gradient = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-rose-500/30 blur-3xl" />
  </div>
)

function Hero() {
  useEffect(() => {
    // Prevent body scroll jump when 3D loads
    document.body.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="relative min-h-[90vh] pt-24" id="home">
      <Gradient />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
          >
            Visual stories crafted with light, motion, and design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 text-lg leading-8 text-gray-700"
          >
            I create immersive photography, cinematic video, and bold graphic design for brands and humans who care about presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:shadow-xl"
            >
              View Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-6 py-3 text-gray-900 shadow ring-1 ring-gray-200 backdrop-blur transition hover:bg-white"
            >
              Book a Project
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const serviceItems = [
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Editorial, product, lifestyle, and events with a cinematic edge.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Film,
    title: 'Videography',
    desc: 'Story-driven films, ads, and social cuts with crisp color and sound.',
    color: 'from-fuchsia-500 to-rose-500',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Brand systems, posters, album art, and digital assets that pop.',
    color: 'from-emerald-500 to-teal-500',
  },
]

function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Services
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm transition hover:shadow-xl"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${s.color} text-white shadow-lg`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <a href="#work" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900">
                See examples <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Work() {
  const items = new Array(9).fill(0).map((_, i) => i + 1)
  return (
    <Section id="work" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Selected Work</h2>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:shadow-lg">
            Get a quote <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200" />
              <div className="absolute inset-0 flex items-end">
                <div className="w-full translate-y-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Project {i}</p>
                      <p className="text-xs text-white/80">Category • 2025</p>
                    </div>
                    <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30">
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700"
        >
          I’m a multi-disciplinary creative focused on crafting striking visuals that feel alive. From stills to motion to type, I blend technology with taste to help brands stand out.
        </motion.p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[{label:'Years Creating',value:'7+'},{label:'Projects',value:'120+'},{label:'Clients',value:'60+'}].map((s,i)=>(
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i*0.05, duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
              <p className="mt-2 text-sm text-gray-600">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Let’s create
        </motion.h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          <a href="mailto:hello@example.com" className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white"><Mail className="h-5 w-5"/></div>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-sm text-gray-600">hello@example.com</p>
            </div>
          </a>
          <a href="tel:+100000000" className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white"><Phone className="h-5 w-5"/></div>
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-sm text-gray-600">+1 (000) 000-0000</p>
            </div>
          </a>
          <a href="#" className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white"><Instagram className="h-5 w-5"/></div>
            <div>
              <p className="font-semibold text-gray-900">Instagram</p>
              <p className="text-sm text-gray-600">@yourhandle</p>
            </div>
          </a>
          <div className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white"><MapPin className="h-5 w-5"/></div>
            <div>
              <p className="font-semibold text-gray-900">Based in</p>
              <p className="text-sm text-gray-600">Your City, Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/40 px-4 py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/40 sm:px-6">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 p-[2px]">
              <span className="flex h-full w-full items-center justify-center rounded-md bg-white text-sm font-bold text-gray-800">FB</span>
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold tracking-wide text-gray-800 group-hover:text-gray-900">Flames.Blue</p>
              <p className="-mt-1 text-xs text-gray-600">Creative Portfolio</p>
            </div>
          </a>

          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow md:inline-block">Hire me</a>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Flames.Blue — All rights reserved.</footer>
    </div>
  )
}
