import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const RequestDemoPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/xgvnaelv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "✅ Demo Request Sent!",
          description: "Thanks for your interest! We'll be in touch shortly to schedule your demo.",
        });
        e.target.reset();
      } else {
        throw new Error('Failed to send demo request');
      }
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "Failed to send demo request. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Request a Demo | StringSoft</title>
        <meta name="description" content="Schedule a personalized demo of StringSoft to see how our veterinary practice management software can simplify your workflow and improve patient care." />
      </Helmet>
      <div className="pt-32 pb-20 bg-charcoal-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              className="flex justify-center mb-8"
            >
              <motion.img
                src="/images/request-demo-calendar.png"
                alt="An illustration of a person scheduling a demo on a calendar"
                className="max-w-md md:max-w-lg"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">See StringSoft in Action</span>
            </h1>
            <p className="text-xl text-white/80">
              Fill out the form below, and one of our specialists will contact you to schedule a personalized demo for your practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="feature-card glass-effect rounded-2xl p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Dr. Jane Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="jane.doe@vetclinic.com" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="clinicName">Clinic Name</Label>
                  <Input id="clinicName" name="clinicName" placeholder="Happy Paws Veterinary" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What are you looking for in a PIMS?</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your practice and what features are most important to you..." />
              </div>
              <Button 
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full px-8 py-4 rounded-full text-lg"
              >
                Request My Demo
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RequestDemoPage;