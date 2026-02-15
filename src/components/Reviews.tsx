"use client";

import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "Automatic feedback after 7 days.",
    product: "jason123",
    date: "Feb 14, 2026",
  },
  {
    id: 2,
    rating: 5,
    text: "Automatic feedback after 7 days.",
    product: "mike123",
    date: "Feb 14, 2026",
  },
  {
    id: 3,
    rating: 5,
    text: "Automatic feedback after 7 days.",
    product: "ronald123",
    date: "Feb 14, 2026",
  },
  {
    id: 4,
    rating: 5,
    text: "Automatic feedback after 7 days.",
    product: "cleany67",
    date: "Feb 14, 2026",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-green-500 text-green-500" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-16">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 green-glow opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <Quote className="w-8 h-8 text-green-500 rotate-180" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Reviews</h2>
          <Quote className="w-8 h-8 text-green-500" />
        </div>

        <p className="text-center text-gray-400 mb-4 max-w-xl mx-auto">
          See what our customers have to say about us and our products!
        </p>

        <p className="text-center mb-8">
          <span className="text-gray-400">Average rating: </span>
          <span className="text-green-500 font-semibold">0.00</span>
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 rounded-xl bg-[#111] border border-white/5"
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={review.rating} />
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-300 mb-4">{review.text}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">R</span>
                </div>
                <span className="text-sm text-gray-400 truncate">{review.product}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-green-500/30 text-green-500 hover:bg-green-500/10"
          >
            
          </Button>
        </div>
      </div>
    </section>
  );
}
