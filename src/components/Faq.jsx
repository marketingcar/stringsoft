import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "Is StringSoft cloud-based?",
      answer: "Yes, StringSoft is primarily a cloud-based platform, allowing you to access your practice data from anywhere with an internet connection. We also offer hybrid and on-site deployment options to fit the specific needs of your clinic or hospital."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We pride ourselves on offering dedicated human support. When you contact us, you'll speak with a real person who understands veterinary workflows. We offer phone, email, and live chat support, with priority service for our Large Practice and Enterprise plans."
    },
    {
      question: "Can StringSoft integrate with my existing lab and imaging equipment?",
      answer: "Absolutely. We have a vast library of existing integrations with major diagnostic labs and imaging providers (like IDEXX, Antech, and more). If you use a provider we don't currently support, we can often build a custom integration for you."
    },
    {
      question: "Is my data secure?",
      answer: "Data security is our top priority. We use industry-standard encryption for data in transit and at rest. Our platform includes role-based permissions to ensure team members only have access to the information they need. Our cloud infrastructure is hosted on secure, compliant servers."
    },
    {
      question: "How does pricing work?",
      answer: "Our pricing is designed to be flexible and scalable. The Small Practice Plan is a great starting point for smaller clinics, while the Large Practice and Enterprise plans offer more advanced features for growing and complex organizations. Contact us for a custom quote based on your practice's size and needs."
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-effect rounded-xl border-none">
                <AccordionTrigger className="p-6 text-lg font-bold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-white/80 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;