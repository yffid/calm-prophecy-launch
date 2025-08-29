"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Countdown } from '@/components/sections/countdown';
import { Vision } from '@/components/sections/vision';
import { SubscribeForm } from '@/components/sections/subscribe-form';
import { Footer } from '@/components/sections/footer';

const Index = () => {
  const [isSubscribeFormOpen, setIsSubscribeFormOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsSubscribeFormOpen(true);
  };

  const handleCloseSubscribeForm = () => {
    setIsSubscribeFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-momta-night text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navbar onJoinWaitlist={handleJoinWaitlist} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onJoinWaitlist={handleJoinWaitlist} />

        {/* Countdown Section */}
        <Countdown />

        {/* Vision Section */}
        <Vision />

        {/* Spacer for Visual Breathing Room */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-momta-blue/30 to-transparent"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Subscribe Form Modal */}
      <SubscribeForm 
        isOpen={isSubscribeFormOpen} 
        onClose={handleCloseSubscribeForm} 
      />

      {/* SEO and Meta Content */}
      <div className="sr-only">
        <h1>Momta 2028 - The Dawn of Serene Intelligence</h1>
        <p>Join the waitlist for exclusive early access to Momta 2028, where artificial intelligence meets tranquility. Secure your 20% launch discount today.</p>
        <div itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Momta Technology</span>
          <span itemProp="url">https://momta.org</span>
          <span itemProp="email">support@momta.org</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
