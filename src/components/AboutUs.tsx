"use client";

import { Zap, Shield, Headphones, Package } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description:
      "We provide instant delivery for all of our products to ensure the best experience for our customers.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "We use the latest technology to ensure that your payments are secure and your data is safe.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our support team is available 24/7 to help you with any questions or issues you might have.",
  },
  {
    icon: Package,
    title: "Huge Selection",
    description:
      "We offer a huge selection of products to ensure that you can find exactly what you need.",
  },
];

export default function AboutUs() {
  return (
    <section className="py-16 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 green-glow-subtle opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          About Us
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          GorillaModz is your trusted reseller for high-quality products across multiple popular games.
          With deep experience in the gaming community and digital marketplaces, we specialize in providing
          reliable, up-to-date products that give you the edge you need. Whether you're looking to
          dominate your favorite game or explore new options, GorillaModz makes it easy and secure to access
          the best digital gaming enhancements available.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-[#111] border border-white/5 hover:border-green-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
