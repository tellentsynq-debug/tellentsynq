"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import {
  Database,
  Map,
  Users,
  Search,
  Shield,
  UserCheck,
  RefreshCw,
  Settings,
  Monitor,
  Cog,
  GraduationCap,
  HardHat,
  Zap,
  Heart,
  BarChart2,
  Truck,
  DollarSign,
  Pill,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

// LinkedIn SVG icon (custom, no extra dependency)
const LinkedInIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Scroll Reveal Wrapper ────────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About Us", "Services", "Insights", "Contact Us"];

const STATS = [
  { value: "100", suffix: "+", label: "Clients Globally" },
  { value: "10", suffix: "+", label: "Years of Experience" },
  { value: "1000", suffix: "+", label: "Professionals" },
  { value: "93", suffix: "%", label: "NPS Score" },
];

const SERVICES = [
  {
    icon: Database,
    title: "DATABASE MANAGEMENT",
    desc: "Get the database refreshed, updated, and restored, ensuring your data aligns with business goals and driving better decision-making and outcomes.",
  },
  {
    icon: Map,
    title: "MARKET MAPPING",
    desc: "Gain actionable insights and guide your marketing efforts with competitor analysis, target market research, and organisational analysis.",
  },
  {
    icon: Users,
    title: "LEAD GENERATION",
    desc: "Utilise targeted lead-generation strategies to identify and attract potential candidates, thereby connecting you with the right talent to drive success.",
  },
  {
    icon: Search,
    title: "SOURCING",
    desc: "Access professional sourcing and screening of candidates suitable to your specific search criteria, delivering quality candidates to strengthen your workforce.",
  },
  {
    icon: Shield,
    title: "CREDENTIAL & COMPLIANCE",
    desc: "Experience streamlined processes of verifying, validating, monitoring, renewing, and maintaining the necessary credentials for your healthcare professionals.",
  },
  {
    icon: UserCheck,
    title: "ONBOARDING & CONSULTANT CARE",
    desc: "Receive comprehensive coverage of every aspect of the employee onboarding process, ensuring that all recruitment process steps are executed seamlessly.",
  },
  {
    icon: RefreshCw,
    title: "FULL-CYCLE RECRUITMENT",
    desc: "Access a comprehensive hiring process from receiving a job requirement to onboarding your perfect candidate.",
  },
  {
    icon: Settings,
    title: "ADMINISTRATIVE SUPPORT",
    desc: "Get support with your back-end operations, allowing focus on your core business, saving time, and streamlining processes.",
  },
];

const CLIENTELE_TABS = [
  { label: "IT", icon: Monitor },
  { label: "Engineering", icon: Cog },
  { label: "Education", icon: GraduationCap },
  { label: "Construction", icon: HardHat },
  { label: "Oil, Gas & Energy", icon: Zap },
  { label: "Healthcare", icon: Heart },
  { label: "Manufacturing", icon: BarChart2 },
  { label: "Supply Chain", icon: Truck },
  { label: "Finance", icon: DollarSign },
  { label: "Pharmaceutical & Lifesciences", icon: Pill },
];

const CLIENTELE_CONTENT: Record<string, { title: string; desc: string }> = {
  IT: {
    title: "IT Solutions",
    desc: "We provide specialized recruitment solutions tailored to the unique needs of the IT industry, leveraging our deep understanding of sector-specific requirements and talent landscapes.",
  },
  Engineering: {
    title: "Engineering Solutions",
    desc: "We connect businesses with top engineering talent across disciplines, from mechanical and civil to software engineering, ensuring every placement drives innovation.",
  },
  Education: {
    title: "Education Solutions",
    desc: "From K-12 to higher education institutions, we source qualified educators, administrators, and support staff who are passionate about shaping future generations.",
  },
  Construction: {
    title: "Construction Solutions",
    desc: "We recruit skilled construction professionals — project managers, site engineers, and tradespeople — helping you build efficiently and safely.",
  },
  "Oil, Gas & Energy": {
    title: "Oil, Gas & Energy Solutions",
    desc: "We supply experienced professionals for upstream, midstream, and downstream energy operations with a strong focus on safety compliance and technical expertise.",
  },
  Healthcare: {
    title: "Healthcare Solutions",
    desc: "Our healthcare division places nurses, physicians, allied health professionals, and administrators with a rigorous credential and compliance management process.",
  },
  Manufacturing: {
    title: "Manufacturing Solutions",
    desc: "From production line operators to plant managers, we source manufacturing talent that drives operational excellence and productivity.",
  },
  "Supply Chain": {
    title: "Supply Chain Solutions",
    desc: "We find procurement specialists, logistics coordinators, and supply chain analysts who help organizations optimize their end-to-end operations.",
  },
  Finance: {
    title: "Finance Solutions",
    desc: "We place finance and accounting professionals across banking, investment, insurance, and corporate sectors with precision and confidentiality.",
  },
  "Pharmaceutical & Lifesciences": {
    title: "Pharmaceutical & Lifesciences Solutions",
    desc: "We recruit regulatory, R&D, clinical, and manufacturing professionals for pharmaceutical and biotech companies navigating complex compliance environments.",
  },
};

const INSIGHTS = [
  {
    category: "Workplace Culture",
    title: "The Future of Remote Work: Building Culture in a Digital World",
    desc: "Explore how companies are adapting their culture and management practices for the remote work era.",
    author: "Jignesh Bharwad",
    date: "January 15, 2025",
    readTime: "5 min read",
    highlight: false,
  },
  {
    category: "Technology",
    title: "AI in Recruitment: Transforming Talent Acquisition",
    desc: "Discover how artificial intelligence is revolutionizing the way companies find and hire top talent.",
    author: "Jignesh Bharwad",
    date: "January 10, 2025",
    readTime: "6 min read",
    highlight: true,
  },
  {
    category: "Hiring Strategy",
    title: "Skills-Based Hiring: The New Standard for Talent Acquisition",
    desc: "Why forward-thinking companies are moving beyond traditional credentials to focus on demonstrated skills.",
    author: "Jignesh Bharwad",
    date: "January 5, 2025",
    readTime: "4 min read",
    highlight: false,
  },
];

const SUCCESS_STORIES = [
  {
    tag: "Technology",
    metrics: "300% faster hiring, 45% cost reduction",
    title: "Global Tech Company: 300% Faster Hiring",
    challenge: "Scaling from 50 to 500 employees across 10 countries",
    solution: "AI-powered global talent acquisition with cultural fit assessment",
    author: "Jignesh Bharwad",
  },
  {
    tag: "Financial Services",
    metrics: "40% increase in diverse hires, improved retention",
    title: "Financial Services: Diversity & Inclusion Success",
    challenge: "Achieving 40% increase in diverse hires while maintaining quality standards",
    solution: "Bias-free screening algorithms and inclusive sourcing strategies",
    author: "Jignesh Bharwad",
  },
];

const WHY_PARTNER = [
  "10+ years of global experience",
  "Expert trained recruiters",
  "Key Account Managers",
  "Interview and select your own team",
  "24/7 operations",
  "GDPR, HIPAA, and ISOs compliant",
  "Robust IT infrastructure",
  "Customisation at your request",
];

const FOOTER_SOLUTIONS = ["For Businesses", "For Candidates", "AI Edge", "RPO Services", "Workforce Analytics"];
const FOOTER_COMPANY = ["About Us", "Case Studies", "Careers", "Press", "Partners"];
const FOOTER_RESOURCES = ["Insights", "Documentation", "API", "Support", "Status"];
const FOOTER_LEGAL = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"];

// ─── Button Components ────────────────────────────────────────────────────────

function PrimaryButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(220,38,38,0.35)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.button>
  );
}

function OutlineButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(220,38,38,0.15)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`flex items-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold px-8 py-3 rounded-xl transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState("IT");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <div className="flex items-center border-2 border-gray-900 px-2 py-1 rounded-md">
              <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Tellent</span>
              <span className="text-2xl font-extrabold text-red-600 tracking-tight">Synq</span>
            </div>
            <span className="text-[10px] text-gray-400 mt-1 pl-0.5 tracking-wide">
              AI Offshore Recruitment &amp; Automation
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: "#dc2626" }}
                transition={{ duration: 0.2 }}
                className="text-gray-600 hover:text-red-600 font-medium text-sm relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.15, color: "#dc2626" }}
              transition={{ duration: 0.2 }}
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <Search size={18} />
            </motion.button>
          </div>

          <button
            className="md:hidden text-gray-700 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-gray-100 px-6 overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a key={link} href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-white py-32 px-6 text-center overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-red-50 via-transparent to-transparent opacity-60 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-20 left-8 w-40 h-40 bg-rose-50 rounded-full blur-2xl opacity-50" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            AI-Powered Offshore Recruitment
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900 tracking-tight"
          >
            Redefining{" "}
            <span className="text-red-600">People &amp; Culture</span>
            <br />
            for the Future of Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            AI-powered talent orchestration that synchronizes exceptional people with thriving cultures. Transform your workforce with intelligence-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <PrimaryButton>
              Hire Talent <ArrowRight size={16} />
            </PrimaryButton>
            <OutlineButton>
              Find a Role <ArrowRight size={16} />
            </OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {STATS.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-left">
                <div className="text-5xl font-extrabold text-red-600 leading-none tabular-nums">
                  {s.value}
                  <span className="text-3xl">{s.suffix}</span>
                </div>
                <div className="text-gray-500 mt-2 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section className="bg-gray-50/70 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 uppercase mb-4">OUR SERVICES</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              By identifying, attracting, and engaging exceptional talent, we make every connection count.
            </p>
          </Reveal>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-default"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-red-50 rounded-xl mb-4">
                  <s.icon className="text-red-600" size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-extrabold text-gray-900 text-xs tracking-widest mb-3 leading-tight">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CLIENTELE ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 uppercase mb-4">OUR CLIENTELE</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Having affiliated with brands across a multitude of industries, we offer tailored solutions based on industry inputs.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {CLIENTELE_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.label;
                return (
                  <motion.button
                    key={tab.label}
                    onClick={() => setActiveTab(tab.label)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border transition-all duration-250 text-xs font-semibold ${
                      isActive
                        ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-200"
                        : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-600"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.5} className={isActive ? "text-white" : "text-red-600"} />
                    <span>{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={2}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-10 text-center max-w-4xl mx-auto"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {CLIENTELE_CONTENT[activeTab]?.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
                  {CLIENTELE_CONTENT[activeTab]?.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      {/* ── INSIGHTS ───────────────────────────────────────────────────────── */}
      <section className="bg-gray-50/70 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Stay ahead with our expert perspectives on talent acquisition and workforce trends.
            </p>
          </Reveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {INSIGHTS.map((ins) => (
              <motion.div
                key={ins.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3 cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                    {ins.category}
                  </span>
                  <span className="text-xs text-gray-400">{ins.readTime}</span>
                </div>
                <h3 className={`font-bold text-base leading-snug ${ins.highlight ? "text-red-600" : "text-gray-900"}`}>
                  {ins.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{ins.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400 mt-auto">
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {ins.author}
                  </span>
                  <span>{ins.date}</span>
                </div>
              </motion.div>
            ))}
          </StaggerReveal>

          <Reveal className="text-center">
            <PrimaryButton className="mx-auto">
              View All Insights <ArrowRight size={16} />
            </PrimaryButton>
          </Reveal>
        </div>
      </section>

      {/* ── SUCCESS STORIES ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Real results from real partnerships. See how we&apos;ve helped organizations transform their talent strategies.
            </p>
          </Reveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {SUCCESS_STORIES.map((story) => (
              <motion.div
                key={story.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-4 cursor-default"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
                    {story.tag}
                  </span>
                  <span className="text-red-600 text-xs font-semibold">{story.metrics}</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 leading-snug">{story.title}</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-gray-800">Challenge: </span>{story.challenge}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-gray-800">Solution: </span>{story.solution}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Users size={12} /> {story.author}
                  </span>
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="text-red-600 text-sm font-semibold flex items-center gap-1 hover:underline"
                  >
                    View Study <ArrowRight size={14} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </StaggerReveal>

          <Reveal className="text-center">
            <PrimaryButton className="mx-auto">
              View All Case Studies <ArrowRight size={16} />
            </PrimaryButton>
          </Reveal>
        </div>
      </section>

      {/* ── WHY PARTNER ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50/70 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 leading-tight">
              Why Partner<br />With Us?
            </h2>
            <StaggerReveal className="flex flex-col gap-4">
              {WHY_PARTNER.map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-center gap-3 text-gray-700 text-sm list-none"
                >
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="text-red-600 flex-shrink-0" size={20} strokeWidth={2} />
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </StaggerReveal>
          </Reveal>

          <Reveal delay={2}>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <Users size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/80 font-semibold text-sm tracking-wide">TellentSynq Workspace</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md">
                TellentSynq Workspace
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6" id="contact">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Ready to transform your talent strategy? Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <Reveal>
              <h3 className="text-xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="flex flex-col gap-7">
                {[
                  { icon: Mail, label: "Email Us", value: "contact@tellentsynq.com", sub: "Send us an email anytime!" },
                  { icon: Phone, label: "Call Us", value: "+91 9512331119", sub: "Mon-Fri from 8am to 5pm." },
                  { icon: MapPin, label: "Visit Us", value: "A-105 Titanium Business Park B/H Divya Bhaskar Press", sub: "Come say hello!" },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-11 h-11 rounded-xl border border-red-100 bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{label}</p>
                      <p className="text-gray-700 text-sm">{value}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Name", placeholder: "Your full name", type: "text", required: true },
                    { label: "Email", placeholder: "your.email@company.com", type: "email", required: true },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        {f.label} {f.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Company", placeholder: "Your company name" },
                    { label: "Role", placeholder: "Your job title" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{f.label}</label>
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Service Interest</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 bg-white transition-all duration-200">
                    <option value="">Select a service you&apos;re interested in</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 resize-y transition-all duration-200"
                  />
                </div>
                <PrimaryButton className="w-fit">Send Message</PrimaryButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center border-2 border-white px-2 py-1 rounded-md w-fit mb-4">
                <span className="text-lg font-extrabold text-white tracking-tight">Tellent</span>
                <span className="text-lg font-extrabold text-red-500 tracking-tight">Synq</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Redefining people &amp; culture for the future of work. AI-powered talent orchestration that synchronizes exceptional people with thriving cultures.
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Mail size={13} className="text-red-500 flex-shrink-0" /> contact@tellentsynq.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={13} className="text-red-500 flex-shrink-0" /> +91 9512331119
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-red-500 flex-shrink-0" /> A-105 Titanium Business Park
                </span>
              </div>
              {/* LinkedIn icon – custom SVG, matches Lucide style */}
              <motion.a
                href="#"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, color: "#0a66c2" }}
                transition={{ duration: 0.2 }}
                className="mt-5 inline-flex text-gray-500 hover:text-blue-500 transition-colors"
              >
                <LinkedInIcon size={20} />
              </motion.a>
            </div>

            {/* Footer link columns */}
            {[
              { heading: "Solutions", items: FOOTER_SOLUTIONS },
              { heading: "Company", items: FOOTER_COMPANY },
              { heading: "Resources", items: FOOTER_RESOURCES },
              { heading: "Legal", items: FOOTER_LEGAL },
            ].map(({ heading, items }) => (
              <div key={heading}>
                <h4 className="text-white font-bold mb-4 text-sm tracking-wide">{heading}</h4>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 3, color: "#ffffff" }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-500 text-sm transition-colors inline-block"
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">Stay Updated</p>
              <p className="text-gray-500 text-xs mt-0.5">Get the latest insights on talent and culture.</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-900 w-56 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 4px 20px rgba(220,38,38,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pb-6">
            <p className="text-gray-700 text-xs">© 2025 TellentSynq. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}