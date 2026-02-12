import { motion } from "framer-motion";

// replace these with your real images
import step1 from "../assets/details/image1.png";
import step2 from "../assets/details/image2.png";
import step3 from "../assets/details/image3.png";

const steps = [
  {
    no: "1",
    title: "Step 1 — Connect your data",
    sub: "Upload or connect input sources",
    desc: "Integrate cameras, sensors, APIs, or user inputs into the system. Our platform securely collects real-time data without requiring complex setup.",
    bullets: ["Camera feeds", "IoT sensors", "User actions", "System data"],
    img: step1,
  },
  {
    no: "2",
    title: "Step 2 — AI analysis & decision making",
    sub: "Processing happens automatically",
    desc: "The system analyzes incoming data using intelligent models to detect patterns, events, and anomalies. Smart decisions are generated in real time.",
    bullets: ["Pattern recognition", "Event detection", "Optimization logic"],
    img: step2,
  },
  {
    no: "3",
    title: "Step 3 — Act, monitor & improve",
    sub: "Automate actions or control manually",
    desc: "Based on decisions, the system triggers actions such as device control, alerts, or workflow execution. Feedback helps improve accuracy over time.",
    bullets: [
      "Automate operations",
      "Monitor dashboards",
      "Override manually",
      "Scale anytime",
    ],
    img: step3,
  },
];

export default function Details() {
  return (
    <motion.section
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.6 }}
      className="relative w-full overflow-hidden py-8"
    >
      {/* Full background (purple gradient like your reference) */}
      <div className="absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center text-black">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            3 Easy steps to power your smart system
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-black md:text-base">
            Connect, Analyze, Automate: Turn raw data into intelligent actions
            using real-time sensing, AI processing, and automated
            control designed to work seamlessly with your environment.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3"
        >
          {steps.map((s) => (
            <div
              key={s.no}
              className="relative border bg-gray-50 border-black/10  p-5 text-black shadow-xl backdrop-blur-md ring-1 ring-white/20 rounded-xl"
            >
              {/* Step badge */}
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.6 }}
                className="mb-4 flex items-center gap-3"
              >
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/25 text-base font-bold">
                  {s.no}
                </div>
                <div className="text-sm font-semibold opacity-95">
                  {s.title}
                </div>
              </motion.div>

              {/* Image */}
              <div className="overflow-hidden rounded-xl ring-1 ring-white/15">
                <motion.img
                  src={s.img}
                  alt={s.title}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: -100 }}
                  transition={{ duration: 0.6 }}
                  className="h-44 w-full object-cover md:h-40"
                />
              </div>

              {/* Text */}
              <motion.p
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                exit={{ y: -100 }}
                className="mt-4 text-sm font-semibold"
              >
                {s.sub}
              </motion.p>
              <motion.p
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                exit={{ y: -100 }}
                className="mt-2 text-sm leading-relaxed text-black/85"
              >
                {s.desc}
              </motion.p>

              {/* Bullets */}
              <motion.ul
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                exit={{ y: -100 }}
                className="mt-4 space-y-2 text-sm text-black/85"
              >
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-black/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
