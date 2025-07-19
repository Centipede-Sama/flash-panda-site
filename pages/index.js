import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const flyInVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const services = [
  {
    title: "⚡ Paid Media That Pays Off",
    description:
      "Meta, TikTok, YouTube & Google Ads built to convert, not just get clicks. We obsess over ROAS.",
  },
  {
    title: "📲 Social Media That Actually Sells",
    description:
      "We create, post, and manage content that builds connection and drives action.",
  },
  {
    title: "🤝 Influencer Marketing With Real Influence",
    description:
      "We don’t chase clout. We connect brands with authentic creators that move products and build trust.",
  },
  {
    title: "🧠 Strategy That Doesn't Sleep",
    description:
      "From high-converting funnels to scroll-stopping content strategy, we architect full-funnel systems that scale with precision.",
  },
];

const steps = [
  {
    step: "Step 1: Find the Fastest Path to Profit",
    text: "We dissect your business, identify your most profitable customer journeys, and prioritize what gets results now — not months from now.",
  },
  {
    step: "Step 2: Execute Relentlessly",
    text: "From campaign builds to content drops, we create and launch with precision. Every asset is ROI-focused, nothing is filler.",
  },
  {
    step: "Step 3: Optimize & Scale",
    text: "Once it’s working, we scale it without burning budget. We refine what converts, cut what doesn’t, and keep your revenue curve climbing.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-16 p-6 md:p-12 bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        variants={flyInVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto pt-20 md:pt-32"
      >
        <motion.h1 className="text-5xl md:text-7xl leading-tight font-extrabold bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Flash Panda Agency
        </motion.h1>
        <motion.p className="mt-6 text-lg md:text-xl text-gray-300">
          We don’t just run ads. We engineer growth. From scroll-stopping content to ROI-driven campaigns, we help bold brands dominate their niche — with integrity, empathy, and real results.
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
          <Button className="text-lg px-8 py-4 rounded-2xl shadow-lg bg-pink-600 text-white hover:bg-pink-700">
            Let’s Scale →
          </Button>
        </motion.div>
      </motion.section>

      {/* Services Snapshot */}
      <section className="text-center max-w-6xl mx-auto">
        <motion.h2
          variants={flyInVariants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-bold mb-10 text-yellow-400"
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={flyInVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-800"
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Growth Philosophy */}
      <motion.section
        variants={flyInVariants}
        initial="hidden"
        whileInView="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-pink-300 mb-4">Your Growth Is Our Gameplan</h2>
        <p className="text-gray-400">
          Marketing isn’t about doing more. It’s about doing what works — and doing it better than everyone else. We bring together data-driven strategy, world-class content, and human-first messaging to turn attention into revenue.
        </p>
      </motion.section>

      {/* How We Work */}
      <section className="text-center max-w-5xl mx-auto">
        <motion.h2
          variants={flyInVariants}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-bold text-pink-400 mb-6"
        >
          How We Work
        </motion.h2>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={flyInVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700 shadow-md"
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">{step.step}</h3>
              <p className="text-gray-400">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who We Work With */}
      <motion.section
        variants={flyInVariants}
        initial="hidden"
        whileInView="visible"
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-pink-300 mb-4">Who We Work With</h2>
        <p className="text-gray-400">
          We partner with ambitious brands that are ready to grow fast and smart. If you’re tired of basic marketing and bloated agencies that move slow — we should talk.
        </p>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={flyInVariants}
        initial="hidden"
        whileInView="visible"
        className="text-center max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Why Choose Us</h2>
        <ul className="text-left text-gray-400 list-disc list-inside space-y-2">
          <li><strong>📈 Performance Obsessed:</strong> Every dollar must return with friends.</li>
          <li><strong>🎯 Full-Funnel Thinking:</strong> We design every step of the journey with intent.</li>
          <li><strong>💡 Creative Meets Data:</strong> Viral-ready content + deep strategic insight.</li>
        </ul>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        variants={flyInVariants}
        initial="hidden"
        whileInView="visible"
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-pink-400">Let’s Build Your Revenue Machine</h2>
        <p className="text-gray-400 mt-4 mb-6">
          This isn’t a campaign. It’s a system. And when it’s built right, it keeps working — even when you're not.
        </p>
        <Button className="text-lg px-8 py-3 rounded-full bg-white text-black hover:bg-gray-100">
          Get In Touch →
        </Button>
      </motion.section>
    </main>
  );
}
