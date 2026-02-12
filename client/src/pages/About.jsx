import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      exit={{ y: -100 }}
      className="min-h-screen bg-white text-black py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.6 }}
              className="text-[56px] font-extrabold leading-[0.95] tracking-tight md:text-[84px]"
            >
              ABOUT <br /> US
            </motion.h1>

            <motion.p
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.6 }}
              className="mt-8 text-xs font-semibold uppercase tracking-wider text-black/60"
            >
              Smart Lab Automation & Energy Control
            </motion.p>

            <motion.p
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-black/80 max-w-lg"
            >
              We are building a simple and practical system to manage computer
              lab appliances efficiently. Using mobile access, AI-assisted
              automation, and manual control, our project helps reduce energy
              wastage and improve off-hours safety in labs and institutions.
            </motion.p>

            {/* bullet points */}
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.6 }}
              className="mt-6 space-y-3 text-sm text-black/80"
            >
              <Bullet text="Control appliances using mobile" />
              <Bullet text="Digital Watchdog for off-hours" />
              <Bullet text="AI + Manual control modes" />
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            <div>
              <motion.h2
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold tracking-tight"
              >
                Our Philosophy
              </motion.h2>

              <motion.p
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.6 }}
                className="mt-3 text-base leading-relaxed text-black/80"
              >
                We believe smart systems should be useful, transparent, and easy
                to control. That’s why our solution supports both AI and manual
                modes—so users can automate tasks confidently while keeping full
                control when needed.
              </motion.p>
            </div>

            {/* cards */}
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.6 }}
              className="grid gap-4"
            >
              <InfoCard
                title="Simple & Practical"
                desc="Designed for real lab usage and easy demonstrations."
              />

              <InfoCard
                title="Control First"
                desc="Manual override available anytime for reliability."
              />

              <InfoCard
                title="Energy Efficient"
                desc="Helps reduce unnecessary power consumption in labs."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Bullet({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-2 h-2 w-2 rounded-full bg-black" />
      <p>{text}</p>
    </div>
  );
}

function InfoCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-black/70">{desc}</p>
    </div>
  );
}
