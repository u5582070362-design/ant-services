"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I receive my product after purchase?",
    answer:
      "You'll receive your product, such as your account details or license key by email instantly after your purchase. Make sure to check your inbox, and don't forget to look in your spam or junk folder just in case. The product information will also be shown on the checkout confirmation page right after payment.",
  },
  {
    question: "Is the delivery instant?",
    answer:
      "Yes, all of our products are delivered to you instantly after purchase.",
  },
  {
    question: "Is Ant Services a verified reseller?",
    answer:
      "Yes, Ant Services is a verified and trusted reseller of all our products. If you're ever unsure, you can also check the official Discord server of the cheat provider, Ant Services is listed there as a verified seller.",
  },
  {
    question: "Are your products safe to use?",
    answer:
      "Yes, all of our products come directly from trusted and verified providers, and we only offer products that are considered low-risk and well-maintained. However, it's important to understand that every product carries some risk of detection or ban, no matter how safe it is. To minimize this risk, stay up to date with safety information by regularly checking the menu's forum or discord announcements. By purchasing this software, you acknowledge and accept that you use it entirely at your own risk.",
  },
  {
    question: "How can I contact support?",
    answer:
      "For quick help and support, join our community on Discord! Our team and members are ready to assist you in real time. You can find a link to our website and other social channels under the Our Socials tab.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Helpful Information
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Here's some essential information about the services we offer and how we can help you.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/5 rounded-xl bg-[#111] px-4 data-[state=open]:border-green-500/30"
            >
              <AccordionTrigger className="text-left text-white hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
