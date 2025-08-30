"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Countdown } from '@/components/sections/countdown';
import { Vision } from '@/components/sections/vision';
import { Timeline } from '@/components/sections/timeline';
import { Updates } from '@/components/sections/updates';
import { SubscribeForm } from '@/components/sections/subscribe-form';
import { Footer } from '@/components/sections/footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { RobotAnimation } from '@/components/ui/robot-animation';
import { organizationStructuredData, productStructuredData, websiteStructuredData } from '@/utils/structured-data';

const Index = () => {
  const [isSubscribeFormOpen, setIsSubscribeFormOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsSubscribeFormOpen(true);
  };

  const handleCloseSubscribeForm = () => {
    setIsSubscribeFormOpen(false);
  };

  // Combine structured data for the homepage
  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationStructuredData,
      productStructuredData,
      websiteStructuredData
    ]
  };

  return (
    <>
      <SEOHead
        title="Momta 2028 - AI Robots & Future Robotics | Friendly Robot Technology"
        description="Momta 2028: Leading AI robots and friendly robotics technology. Best robots for home automation, cheap robots with advanced AI. Join the future of robotics - launching 2028."
        canonical="https://momta.org"
        keywords="AI robots, friendly robots, cheap robots, best robots, future of robotics, Momta robotics, artificial intelligence robots, home automation robots, robot technology 2028"
        structuredData={combinedStructuredData}
      />
      
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

          {/* Timeline Section */}
          <Timeline />

          {/* Updates Section */}
          <Updates />

          {/* Spacer for Visual Breathing Room */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              {/* Robot Animation Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <RobotAnimation size="lg" className="mx-auto mb-4" />
                <p className="text-momta-slate-dark text-sm italic">
                  A glimpse of our friendly robot companions
                </p>
              </motion.div>
              
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
    </>
  );
};

export default Index;