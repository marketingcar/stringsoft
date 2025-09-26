// src/pages/StyleGuidePage.jsx
import React from 'react';
import StyleGuide from '../components/StyleGuide';
import SEOHead from '../components/SEOHead';

export default function StyleGuidePage() {
  return (
    <>
      <SEOHead
        title="Style Guide - StringSoft Design System"
        description="Complete style guide and design system for StringSoft."
        canonical="https://stringsoft.com/styleguide"
        noIndex={true}
      />
      <main className="pt-32 pb-20 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white">
        <div className="container mx-auto px-6">
          <StyleGuide />
        </div>
      </main>
    </>
  );
}
