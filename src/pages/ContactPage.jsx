import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const ContactPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    toast({
      title: "✅ Message Sent!",
      description: "Thanks for reaching out! We'll get back to you as soon as possible."
    });
  };
  return <>
      <Helmet>
        <title>Contact Us | StringSoft</title>
        <meta name="description" content="Get in touch with the StringSoft team. Contact us for sales, support, or any questions about our veterinary practice management software." />
      </Helmet>
      <div className="pt-32 pb-20 text-white">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <motion.div className="flex justify-center mb-8">
              <motion.img src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/a6266b50d1986f3d35fcc6eeeb4cc5d6.png" alt="An illustration of a cat with a contact envelope" className="max-w-md md:max-w-lg lg:max-w-xl" loading="lazy" animate={{
              y: ["-10px", "10px", "-10px"]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're here to help. Whether you're a current customer or just curious, we'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">US and Canada Sales</h2>
                  <a href="tel:8004812693" className="text-xl text-white/80 hover:text-brand-teal transition-colors">800.481.2693</a>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-deep-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">International Sales</h2>
                  <a href="tel:8573218527" className="text-xl text-white/80 hover:text-brand-teal transition-colors">857-321-8527</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-light-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Headquarters</h2>
                  <p className="text-xl text-white/80">StringSoft, Inc.</p>
                  <p className="text-white/60">373 South Willow St. #294</p>
                  <p className="text-white/60">Manchester, NH 03103</p>
                </div>
              </div>
              <motion.div className="flex justify-center pt-8" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }}>
                <img alt="A cat popping out of a mailbox" className="max-w-xs" loading="lazy" src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/solid-0-74QR0.png" />
              </motion.div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              <form onSubmit={handleSubmit} className="feature-card glass-effect rounded-2xl p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input id="contact-name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-company">Company Name</Label>
                  <Input id="contact-company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" placeholder="How can we help you?" required />
                </div>
                <Button type="submit" variant="gradient" size="lg" className="w-full px-8 py-3 rounded-full text-lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>;
};
export default ContactPage;