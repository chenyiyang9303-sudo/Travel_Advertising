"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Award, Globe, Lightbulb, TrendingUp, Heart, CheckCircle, ArrowRight, Mail } from "lucide-react";

// Generate avatar URLs for team members using local avatar files
const getAvatarUrl = (image: string | undefined, index: number) => {
  const avatarFiles = [
    "/avatars/liao-zhihua.svg",
    "/avatars/lin-zhihua.svg",
    "/avatars/chen-jiayin.svg",
  ];

  if (image) {
    return image;
  }

  return avatarFiles[index] || "/avatars/dai-rongrong.svg";
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black py-24 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Expert Corporate Finance Advisory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 mb-8 leading-relaxed"
            >
              Radiant Soaring Fund Management LLC is a corporate financial advisory firm specializing in mergers and acquisitions, divestiture consulting, financial restructuring, fundraising and valuation, as well as tax and compliance optimization. We provide advisory and strategic consulting services only and do not manage or handle client funds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-3 font-medium text-black shadow-lg transition-colors hover:bg-primary-400"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-950 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                To empower businesses with strategic financial advisory services across mergers and acquisitions, restructuring, fundraising, and compliance—enabling our clients to make informed decisions, optimize capital structure, and achieve sustainable growth while maintaining full control of their financial operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <Target className="h-6 w-6 text-primary-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Strategic Focus
                    </h3>
                    <p className="text-sm text-white/70">
                      Data-driven financial analysis for optimal outcomes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <Globe className="h-6 w-6 text-primary-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Client-Centric Approach
                    </h3>
                    <p className="text-sm text-white/70">
                      Tailored solutions for diverse business needs
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format"
                alt="Corporate finance consulting mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-900/60 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Leveraging cutting-edge financial tools and methodologies to deliver superior advisory services."
              },
              {
                icon: CheckCircle,
                title: "Integrity",
                description: "Providing honest, transparent, and independent advice based on rigorous financial analysis."
              },
              {
                icon: TrendingUp,
                title: "Excellence",
                description: "Delivering exceptional quality in every engagement and exceeding client expectations."
              },
              {
                icon: Heart,
                title: "Partnership",
                description: "Building long-term relationships through trust, collaboration, and shared success."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-white/10 bg-neutral-900/70 p-6 shadow-lg backdrop-blur"
              >
                <value.icon className="h-8 w-8 text-primary-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-white/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our diverse team combines deep financial expertise with industry knowledge
              to deliver comprehensive corporate finance advisory services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "田俊 (Jun Tian)",
                role: "Founder & CEO",
                expertise: "Strategic Finance, Capital Markets & Corporate Development",
                bio: "Founder of RSFM with 15+ years guiding board-level finance transformations, cross-border M&A, and capital market readiness.",
                image: "/avatars/liao-zhihua.svg",
                email: "jun.tian@radiantsoaringfm.com"
              },
              {
                name: "韩思远 (Siyuan Han)",
                role: "Chief Financial Architect",
                expertise: "Treasury Modernisation & Risk Governance",
                bio: "Former global treasurer who designs liquidity control towers, stress testing frameworks, and funding diversification playbooks for multinational clients.",
                image: "/avatars/lin-zhihua.svg",
                email: "siyuan.han@radiantsoaringfm.com"
              },
              {
                name: "黎语彤 (Yutong Li)",
                role: "Capital Markets & Insights Director",
                expertise: "Capital Raise Readiness & Investor Communications",
                bio: "Capital markets strategist specialising in investor-grade storytelling, diligence readiness, and research programs that translate data into decisive action.",
                image: "/avatars/chen-jiayin.svg",
                email: "yutong.li@radiantsoaringfm.com"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden backdrop-blur"
              >
                <div className="relative h-56 flex items-center justify-center bg-neutral-900/40 p-4">
                  <div className="relative w-40 h-40">
                    <Image
                      src={getAvatarUrl(member.image, index)}
                      alt={`${member.name} avatar`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-medium text-primary-300 mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-white/70 mb-3">
                    {member.expertise}
                  </p>
                  <p className="text-sm text-white/60 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-primary-300"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-600 to-amber-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-primary-100/80 text-lg max-w-2xl mx-auto">
              Delivering measurable results for clients across industries and sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "120+", label: "Advisory Projects Completed", icon: CheckCircle },
              { number: "$5B+", label: "Transaction Value Advised", icon: TrendingUp },
              { number: "98%", label: "Client Satisfaction Rate", icon: Award },
              { number: "15+", label: "Years of Experience", icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-primary-200 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Recognition & Certifications
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our expertise and commitment to excellence have been recognized by leading industry organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "ISO 9001 Quality Management",
              "CFA Institute Partner",
              "GARP Member Institution",
              "Certified Financial Planners",
              "Top Finance Consultant 2024",
              "Business Excellence Award",
              "Innovation in Finance Award",
              "Client Choice Award 2023"
            ].map((certification, index) => (
              <motion.div
                key={certification}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-white/10 bg-neutral-900/60 p-6 text-center shadow-lg backdrop-blur"
              >
                <Award className="h-8 w-8 text-primary-300 mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-white">
                  {certification}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Corporate Finance Strategy?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-lg">
            Partner with our expert team to navigate complex financial decisions
            and unlock new opportunities for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-3 font-medium text-black shadow-lg transition-colors hover:bg-primary-400"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white/80 transition-colors hover:bg-white/10"
            >
              Explore Our Research
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
