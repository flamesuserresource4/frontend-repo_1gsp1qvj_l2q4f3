import { useEffect } from 'react'
import { motion } from 'framer-motion'
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
    <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-rose-500/20 blur-3xl" />
  </div>
)

function Hero() {
  useEffect(() => {
    // Smooth scrolling for in-page anchors
    document.body.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="relative min-h-[92vh] pt-24" id="home">
      <Gradient />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Visual stories crafted with light, motion, and design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 text-lg leading-8 text-white/70"
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
              href="#photo"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-gray-900 shadow-lg transition hover:shadow-xl"
            >
              View Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-white shadow ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
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
    <Section id="services" className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
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
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:shadow-xl"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${s.color} text-white shadow-lg`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <a href="#photo" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90">
                See examples <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function ProjectGrid({ label, icon: Icon, anchor }) {
  const items = new Array(6).fill(0).map((_, i) => i + 1)
  return (
    <div id={anchor} className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-2xl font-semibold text-white">{label}</h3>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow hover:shadow-lg">
          Inquire <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <motion.div
            key={`${anchor}-${i}`}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5" />
            <div className="absolute inset-0 flex items-end">
              <div className="w-full translate-y-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{label} Project {i}</p>
                    <p className="text-xs text-white/80">2025</p>
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
  )
}

function Work() {
  return (
    <Section id="work" className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
          <div className="flex gap-2">
            <a href="#photo" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">Photo</a>
            <a href="#video" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">Video</a>
            <a href="#design" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">Design</a>
          </div>
        </motion.div>

        <ProjectGrid label="Photography" icon={Camera} anchor="photo" />
        <ProjectGrid label="Videography" icon={Film} anchor="video" />
        <ProjectGrid label="Graphic Design" icon={PenTool} anchor="design" />
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about" className="">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg text-white/70"
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
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur"
            >
              <p className="text-3xl font-extrabold text-white">{s.value}</p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" className="">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Let’s create
        </motion.h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          <a href="mailto:hello@example.com" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:bg-white/10">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-900"><Mail className="h-5 w-5"/></div>
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-sm text-white/70">hello@example.com</p>
            </div>
          </a>
          <a href="tel:+100000000" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:bg-white/10">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-900"><Phone className="h-5 w-5"/></div>
            <div>
              <p className="font-semibold text-white">Phone</p>
              <p className="text-sm text-white/70">+1 (000) 000-0000</p>
            </div>
          </a>
          <a href="#" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:bg-white/10">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-900"><Instagram className="h-5 w-5"/></div>
            <div>
              <p className="font-semibold text-white">Instagram</p>
              <p className="text-sm text-white/70">@yourhandle</p>
            </div>
          </a>
          <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-900"><MapPin className="h-5 w-5"/></div>
            <div>
              <p className="font-semibold text-white">Based in</p>
              <p className="text-sm text-white/70">Your City, Worldwide</p>
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
    { href: '#photo', label: 'Photo' },
    { href: '#video', label: 'Video' },
    { href: '#design', label: 'Design' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/10 sm:px-6">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 p-[2px]">
              <span className="flex h-full w-full items-center justify-center rounded-md bg-gray-950 text-sm font-bold text-white">FB</span>
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold tracking-wide text-white group-hover:text-white">Flames.Blue</p>
              <p className="-mt-1 text-xs text-white/60">Creative Portfolio</p>
            </div>
          </a>

          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow md:inline-block">Hire me</a>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">© {new Date().getFullYear()} Flames.Blue — All rights reserved.</footer>
    </div>
  )
}
