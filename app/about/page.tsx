"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Target, Award, Globe, Lightbulb, TrendingUp, Heart, CheckCircle, ArrowRight, Mail } from "lucide-react";

// Generate avatar URLs for team members using local avatar files
const getAvatarUrl = (name: string, index: number) => {
  const avatarFiles = [
    '/avatars/dai-rongrong.svg',
    '/avatars/lin-zhihua.svg',
    '/avatars/wang-yaqi.svg',
    '/avatars/zhang-wenbo.svg',
    '/avatars/li-siyi.svg',
    '/avatars/chen-jiayin.svg'
  ];

  return avatarFiles[index] || '/avatars/dai-rongrong.svg';
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6"
            >
              Strategic Financial Advisory for Corporate Success
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed"
            >
              We are a trusted corporate finance consulting firm dedicated to helping businesses optimize their financial strategies, manage risks, and achieve sustainable growth through expert advisory services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#case-studies"
                className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                To empower businesses with strategic financial insights and advisory services that drive informed decision-making, optimize capital structure, and ensure regulatory compliance—enabling our clients to achieve sustainable growth and maximize shareholder value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                      Strategic Focus
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Data-driven financial analysis for optimal outcomes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                      Client-Centric Approach
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
              className="relative h-96 rounded-2xl overflow-hidden"
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
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
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
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm"
              >
                <value.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Our diverse team combines deep financial expertise with industry knowledge
              to deliver comprehensive corporate finance advisory services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "廖治华 (Zhihua Liao)",
                role: "Founder & CEO",
                expertise: "Corporate Finance Strategy & Capital Markets",
                bio: "15+ years leading corporate finance advisory and M&A transactions across diverse industries",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
                email: "zhihua.liao@obamconsulting.com"
              },
              {
                name: "林志华 (Lin Zhihua)",
                role: "Chief Financial Officer",
                expertise: "Financial Planning & Analysis",
                bio: "Former CFO at multinational corporation with expertise in financial modeling and strategic planning",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
                email: "zhihua.lin@obamconsulting.com"
              },
              {
                name: "王雅琪 (Wang Yaqi)",
                role: "Risk Management Director",
                expertise: "Enterprise Risk & Compliance Advisory",
                bio: "Risk management specialist with 12+ years experience in regulatory compliance and internal controls",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format",
                email: "yaqi.wang@obamconsulting.com"
              },
              {
                name: "张文博 (Zhang Wenbo)",
                role: "Investment Strategy Lead",
                expertise: "Portfolio Analysis & Investment Advisory",
                bio: "MBA from prestigious business school, specializing in investment strategy and portfolio optimization",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
                email: "wenbo.zhang@obamconsulting.com"
              },
              {
                name: "李思怡 (Li Siyi)",
                role: "Compliance Manager",
                expertise: "Regulatory Compliance & Internal Audit",
                bio: "Former compliance officer at financial institution with expertise in regulatory frameworks and audit processes",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format",
                email: "siyi.li@obamconsulting.com"
              },
              {
                name: "陈佳音 (Chen Jiayin)",
                role: "Market Analysis Lead",
                expertise: "Financial Market Research & Due Diligence",
                bio: "Former analyst at leading investment bank specializing in market research and valuation analysis",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&auto=format",
                email: "jiayin.chen@obamconsulting.com"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-xl overflow-hidden"
              >
                <div className="relative h-56 flex items-center justify-center bg-gray-50 dark:bg-gray-800 p-4">
                  <div className="relative w-40 h-40">
                    <Image
                      src={getAvatarUrl(member.name, index)}
                      alt={`${member.name} avatar`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {member.expertise}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
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
                <stat.icon className="h-8 w-8 text-blue-200 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Recognition & Certifications
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
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
                className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl text-center"
              >
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 text-sm">
                  {certification}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 dark:bg-neutral-800">
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
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
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
