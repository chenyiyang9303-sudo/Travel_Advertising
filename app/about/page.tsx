"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Award, Globe, Lightbulb, TrendingUp, Heart, Zap, ArrowRight, Mail, Camera, Users, Sparkles } from "lucide-react";

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
              Global Travel Marketing & AI Content Studio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 mb-8 leading-relaxed"
            >
              One World Global Travel is a creative + data studio for travel brands. We help destinations be seen on the global stage through magazine-grade content, creator alliances, AI tools, and media strategy. We bridge the gap between inspiration and booking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="mailto:hello@iglobaltravel.top"
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
                To redefine destination marketing by combining cinematic storytelling with data-driven precision. We empower travel brands to connect authentically with global travelers, turning passive scrollers into passionate explorers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <Target className="h-6 w-6 text-primary-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Precision Targeting
                    </h3>
                    <p className="text-sm text-white/70">
                      AI-driven audience insights for maximum ROI
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <Globe className="h-6 w-6 text-primary-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Global Reach
                    </h3>
                    <p className="text-sm text-white/70">
                      Connecting brands with travelers worldwide
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
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop&auto=format"
                alt="Travel marketing mission"
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
              These principles guide our creative process and shape how we partner with destinations around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Creativity",
                description: "We believe in the power of visual storytelling to inspire wanderlust and emotion."
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Leveraging AI and data to stay ahead of travel trends and platform algorithms."
              },
              {
                icon: Globe,
                title: "Global Vision",
                description: "Understanding cultural nuances to craft campaigns that resonate across borders."
              },
              {
                icon: Heart,
                title: "Authenticity",
                description: "Showcasing the true soul of every destination, beyond just the tourist hotspots."
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
              A diverse group of travelers, creatives, and data scientists passionate about exploring the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "FUYING YAN",
                role: "Founder & CEO",
                expertise: "Global Marketing Strategy & Destination Branding",
                bio: "15+ years in travel marketing. Former VP at a major OTA, led campaigns for 50+ national tourism boards.",
                image: "/avatars/fuying-yan.svg",
                email: "fuying.yan@iglobaltravel.top"
              },
              {
                name: "Siyuan Han",
                role: "Chief Content Officer",
                expertise: "Creative Direction & Viral Content Production",
                bio: "Award-winning creative director. Expert in crafting viral travel content that captures the imagination of Gen Z.",
                image: "/avatars/lin-zhihua.svg",
                email: "siyuan.han@iglobaltravel.top"
              },
              {
                name: "Yutong Li",
                role: "Head of Global Partnerships",
                expertise: "Creator Networks & Cross-Border Collaboration",
                bio: "Manages our network of 5,000+ travel creators across 20 countries. Specialist in influencer marketing strategy.",
                image: "/avatars/chen-jiayin.svg",
                email: "yutong.li@iglobaltravel.top"
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
              Delivering measurable results for destinations and travel brands worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Destination Campaigns", icon: Globe },
              { number: "500M+", label: "Social Media Reach", icon: TrendingUp },
              { number: "98%", label: "Client Retention Rate", icon: Heart },
              { number: "10+", label: "Years in Travel Marketing", icon: Award }
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
              Industry Recognition
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Recognized by leading platforms and organizations for excellence in travel marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "TikTok Creative Partner",
              "Meta Business Partner",
              "Google Premier Partner",
              "Cannes Lions Shortlist",
              "Skift Design Award",
              "Webby Award Winner",
              "Travel Weekly Magellan Award",
              "Shorty Award for Travel"
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
            Ready to Elevate Your Destination Brand?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-lg">
            Partner with us to tell your story to the world and drive real traveler growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hello@iglobaltravel.top"
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
