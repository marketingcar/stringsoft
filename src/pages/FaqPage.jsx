import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  const faqs = [
    {
      question: "Is StringSoft cloud-based or on-premise?",
      answer: "Both! StringSoft offers flexible deployment. Our primary offering is a powerful cloud-based platform, accessible from anywhere. We also provide on-premise and hybrid solutions to meet the specific security and infrastructure needs of any practice, from small clinics to large universities."
    },
    {
      question: "What types of veterinary practices do you support?",
      answer: "StringSoft is built for virtually every type of veterinary practice. This includes small animal, large animal, mixed, equine, specialty, emergency, and university teaching hospitals. Our software is highly configurable to match your unique workflow."
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We pride ourselves on offering dedicated, expert human support. When you contact us, you'll speak with a real person who understands veterinary workflows. We offer phone, email, and live chat support to ensure you get the help you need quickly."
    },
    {
      question: "Can StringSoft integrate with my existing lab and imaging equipment?",
      answer: "Absolutely. We have a vast library of existing integrations with major diagnostic labs and imaging providers (like IDEXX, Antech, and more). If you use a provider we don't currently support, we can often build a custom integration for you."
    },
    {
      question: "Is my practice and client data secure?",
      answer: "Data security is our top priority. We use industry-standard encryption for data in transit and at rest. Our platform includes role-based permissions to ensure team members only have access to the information they need. Our cloud infrastructure is hosted on secure, compliant servers."
    },
    {
      question: "How much does it cost?",
      answer: (
        <>
          We tailor each solution to your practice!{" "}
          <Link to="/request-demo" className="text-brand-teal hover:underline font-semibold">
            Let's chat
          </Link>{" "}
          and we'd be happy to present you with a few pricing options.
        </>
      )
    },
    {
      question: "What are the core features of StringSoft?",
      answer: "StringSoft is a comprehensive Practice Information Management System (PIMS). Core features include an advanced electronic medical record (EMR) system, integrated appointment scheduling, digital imaging and PACS, robust inventory management, client communication tools, and extensive reporting capabilities."
    },
    {
      question: "Is there a mobile app?",
      answer: "A dedicated mobile app is coming soon! In the meantime, our cloud-based solution is fully responsive and accessible on any device with a web browser, including iPads and Android tablets."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | StringSoft</title>
        <meta name="description" content="Find answers to frequently asked questions about StringSoft's veterinary practice management software, including features, pricing, security, and support." />
      </Helmet>
      <div className="pt-32 pb-20 text-white overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Frequently Asked Questions</span>
              </h1>
              <p className="text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.img
                src="/images/faq-cat-question.png"
                alt="An illustration of a cat looking at a question mark"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg"
                loading="lazy"
                animate={{
                  y: ["-10px", "10px", "-10px"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-effect rounded-xl border-none overflow-hidden">
                  <AccordionTrigger className="p-6 text-lg font-bold text-left hover:no-underline text-white">
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
      </div>
    </>
  );
};

export default FaqPage;