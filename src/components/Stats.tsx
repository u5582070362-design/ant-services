"use client";

const stats = [
  {
    value: "0",
    label: "Products Sold",
  },
  {
    value: "0",
    label: "Customers",
  },
  {
    value: "0.00",
    label: "Average Rating",
  },
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          What We've Achieved
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-xl bg-[#111] border border-white/5"
            >
              <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
