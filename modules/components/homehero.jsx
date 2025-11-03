"use client"
import { motion } from "framer-motion";

const stackContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: 'easeInOut' } },
};

const statsContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
};

export default function DigitanotionHeroFB() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center text-stone-950">

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <img
              src="/images/hero-team.png"
              alt="Digitanotion team"
              onError={(e)=>{ console.warn('Hero image failed to load:', e?.target?.src); e.target.style.display='none'; }}
              className="mx-auto m-6 w-full max-w-2xl rounded-xl object-cover shadow-lg md:hidden"
            />

            <h1 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block ">
                Digital products that scale with your business
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg text-stone-600">
              Digitanotion helps companies ship secure, resilient systems — faster. We handle architecture, deployments, and skills training so your team can focus on growth and customers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/services" className="glass rounded-2xl px-5 py-3 text-sm font-semibold  shadow-lg hover:opacity-95 transition">
                Start a Project
              </a>
            </div>

            <motion.div
              variants={stackContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.18 }}
              className="mt-8 grid gap-3 sm:grid-cols-2 max-w-xl s"
            >
              <GlassCard title="Who we are" text="Digitanotion Systems strives to provide the high quality technological solutions with a focus on production, re‑engineering and skill training." />
              <GlassCard title="Our Vision" text="To become the benchmark for IT excellence in Africa—driving progress through innovation and skill development." />
              <GlassCard title="Our Mission" text="Providing clients with innovative and efficient solutions; turning complex problems into simplified tech solutions." />
            </motion.div>
          </div>

          <motion.div className="relative" variants={itemVariant} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.18 }} transition={{ delay: 0.12 }}>
            <DeviceCard />
          </motion.div>
        </div>

        <motion.div
          className="mt-2 mb-2 w-full rounded-2xl bg-transparent glass p-4 sm:p-6"
          variants={statsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.18 }}
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-4 sm:gap-6 text-sm">
            <Stat kpi="99.9%" label="Production uptime" />
            <Divider />
            <Stat kpi="100+" label="Production deployments" />
            <Divider />
            <Stat kpi="40+" label="Engineers trained" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Divider(){
  return <span className="hidden sm:block h-4 w-px bg-stone-200"/>;
}

function Stat({kpi,label}){
  return (
    <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
      <span className="text-xl sm:text-2xl font-bold text-stone-900">{kpi}</span>
      <span className="text-stone-600 text-xs sm:text-sm">{label}</span>
    </motion.div>
  );
}

function GlassCard({title,text}){
  return (
    <motion.div variants={itemVariant} className="glass p-4 rounded-2xl text-slate-950/90">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed opacity-90">{text}</p>
    </motion.div>
  );
}

function DeviceCard(){
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-8 -z-10 rounded-[2rem]" style={{background:'rgba(251,133,7,0.20)'}} />

      <div className="rounded-[2rem] border" style={{borderColor:'rgba(255,255,255,0.12)'}}>
        <div className="rounded-xl border p-4" style={{borderColor:'rgba(255,255,255,0.12)', backgroundColor:'rgba(251,133,7,0.08)'}}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full" style={{background:'#fb8507'}} />
              <div className="size-2 rounded-full bg-white/70" />
              <div className="size-2 rounded-full bg-white/70" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2">
            {Array.from({length:15}).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0.5, opacity: 1 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 2.8, delay: 0.04 * i, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                className="origin-bottom rounded-md"
                style={{ height: `${52 + ((i * 11) % 56)}px`, background: 'linear-gradient(180deg, rgba(251,133,7,0.75), rgba(251,133,7,0.25))' }}
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/95">
            {[
              'Production‑grade deployments',
              'Enterprise‑grade security',
              'Architected for scale',
              'Fast, reliable performance',
            ].map((t) => (
              <div key={t} className="glass px-3 py-2 rounded-lg">{t}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-4 rounded-xl px-3 py-2 text-xs glass">
        Digita • Innovation Hub
      </div>
    </div>
  );
}
