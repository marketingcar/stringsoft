import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';

// Lazy load all pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'));
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'));
const FullFeatureSetPage = lazy(() => import('@/pages/FullFeatureSetPage'));
const PracticeTypesPage = lazy(() => import('@/pages/PracticeTypesPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const SupportPage = lazy(() => import('@/pages/SupportPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const RequestDemoPage = lazy(() => import('@/pages/RequestDemoPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));
const CookiePolicyPage = lazy(() => import('@/pages/CookiePolicyPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const StyleGuidePage = lazy(() => import('@/pages/StyleGuidePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Loading component with consistent background
const LoadingSpinner = () => (
  <div className="min-h-screen bg-charcoal-black flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal mx-auto mb-4"></div>
      <p className="text-white/70 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="features/complete" element={<FullFeatureSetPage />} />
            <Route path="practice-types" element={<PracticeTypesPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="request-demo" element={<RequestDemoPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="thank-you" element={<ThankYouPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-service" element={<TermsOfServicePage />} />
            <Route path="cookie-policy" element={<CookiePolicyPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="styleguide" element={<StyleGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;