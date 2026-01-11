"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FolderOpen,
  MousePointerClick,
  Shield,
  Settings2,
  ArrowRight,
  Download,
  Github,
  Mail,
  Lock,
  CheckCircle2,
  Zap,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";

// Download URL for the DMG
const DOWNLOAD_URL = "/The_Digital_Janitor_Installer.dmg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Feature cards data
const features = [
  {
    icon: MousePointerClick,
    title: "One-Click Cleanup",
    description: "Select any folder and watch it transform into organized bliss with a single click.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Sparkles,
    title: "Smart Sorting",
    description: "Intelligent categorization recognizes 50+ file types and sorts them automatically.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Runs 100% offline. Your files never leave your computer. Zero data collection.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Settings2,
    title: "Custom Rules",
    description: "Create your own sorting rules for complete control over your organization.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];

// How it works steps
const steps = [
  {
    step: "01",
    title: "Select Folder",
    description: "Choose any messy folder on your Mac — Downloads, Desktop, or anywhere else.",
    icon: FolderOpen,
  },
  {
    step: "02",
    title: "Click Clean",
    description: "Hit the magic button and watch as files sort themselves automatically.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Enjoy Zen",
    description: "Breathe easy with a perfectly organized folder. Every file in its place.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/50"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="Digital Janitor"
              width={40}
              height={40}
              className="rounded-xl shadow-lg shadow-cyan-500/25"
            />
            <span className="text-lg font-semibold text-white">Digital Janitor</span>
          </div>
          <a
            href={DOWNLOAD_URL}
            download
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300"
          >
            Download
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Now available for macOS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">Your Downloads Folder,</span>
            <br />
            <span className="gradient-text-cyan">Finally Tamed.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Automatically organize messy files into smart categories in seconds.
            <br className="hidden md:block" />
            Privacy-first, runs 100% offline.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} id="download">
            <a
              href={DOWNLOAD_URL}
              download
              className="glow-button inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-black font-semibold text-lg group"
            >
              <Download className="w-5 h-5" />
              Download for Mac
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-sm text-white/30">macOS 12+ • Free Download • 28MB</p>
          </motion.div>
        </motion.div>

        {/* App Screenshot - Main */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 w-full max-w-4xl mx-auto px-6"
        >
          <div className="glass-card p-2 md:p-3">
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              <Image
                src="/screenshot-2.png"
                alt="The Digital Janitor - Main Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </section>

      {/* App Screenshots Showcase */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-cyan-400 font-medium mb-4">
              Beautiful Interface
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold gradient-text">
              Designed for your Mac
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 mt-4 max-w-xl mx-auto">
              A native macOS experience with both dark and light themes that blend seamlessly with your system.
            </motion.p>
          </motion.div>

          {/* Screenshot Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Dark Mode - Activity Log */}
            <motion.div variants={scaleIn} className="group">
              <div className="glass-card p-2 transition-all duration-500 group-hover:border-cyan-500/30">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/screenshot-1.png"
                    alt="Activity Log - Dark Mode"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-white/50">
                <Moon className="w-4 h-4" />
                <span className="text-sm">Activity Log • Dark Mode</span>
              </div>
            </motion.div>

            {/* Light Mode with Preferences */}
            <motion.div variants={scaleIn} className="group">
              <div className="glass-card p-2 transition-all duration-500 group-hover:border-cyan-500/30">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/screenshot-3.png"
                    alt="Preferences - Light Mode"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-white/50">
                <Sun className="w-4 h-4" />
                <span className="text-sm">Preferences • Light Mode</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-cyan-400 font-medium mb-4">
              Powerful Features
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold gradient-text">
              Everything you need to stay organized
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                className={`glass-card p-8 relative group hover:border-white/15 transition-all duration-500 ${
                  index === 0 ? "md:row-span-2" : ""
                }`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed">{feature.description}</p>
                  
                  {index === 0 && (
                    <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="text-sm text-white/60">Recent cleanup</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/40">Images</span>
                          <span className="text-cyan-400">47 files</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/40">Documents</span>
                          <span className="text-cyan-400">23 files</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/40">Videos</span>
                          <span className="text-cyan-400">12 files</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.p variants={fadeInUp} className="text-cyan-400 font-medium mb-4">
              Simple Process
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold gradient-text">
              Three steps to digital zen
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Vertical timeline line */}
            <div className="absolute left-[39px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />

            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step number circle */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-black border-2 border-cyan-500/50 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/20">
                  <step.icon className="w-8 h-8 text-cyan-400" />
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 glass-card p-6 md:p-8 ${
                    index % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <span className="text-cyan-400/60 text-sm font-mono mb-2 block">
                    Step {step.step}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
            
            <motion.div variants={fadeInUp} className="relative z-10">
              <Image
                src="/icon.png"
                alt="Digital Janitor"
                width={80}
                height={80}
                className="mx-auto mb-8 rounded-3xl shadow-2xl shadow-cyan-500/30"
              />
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
                Ready for a cleaner Mac?
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Join thousands of users who have taken back control of their Downloads folder.
                It&apos;s free, fast, and private.
              </p>
              <a
                href={DOWNLOAD_URL}
                download
                className="glow-button inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-black font-semibold text-lg group"
              >
                <Download className="w-6 h-6" />
                Download Now — It&apos;s Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Digital Janitor"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-sm font-medium text-white/60">The Digital Janitor</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <a
                href="mailto:contact@digitaljanitor.app"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Lock className="w-4 h-4" />
                Privacy Policy
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} Digital Janitor
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
