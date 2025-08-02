'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function TrustIndicators() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "STR Stack Scout helped us find the perfect PMS solution. We increased our efficiency by 40% and revenue by 25% in just 3 months.",
      author: "Sarah Chen",
      role: "Property Manager",
      company: "Mountain View Rentals",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b417?w=64&h=64&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "The comprehensive tool comparison saved us weeks of research. We built our entire tech stack using their recommendations.",
      author: "Mike Rodriguez",
      role: "STR Investor", 
      company: "Coastal Properties LLC",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "From solo host to managing 50+ properties, STR Stack Scout guided our technology decisions every step of the way.",
      author: "Emma Thompson",
      role: "STR Entrepreneur",
      company: "Urban Escapes",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format",
      rating: 5
    }
  ];

  const trustLogos = [
    { name: "Hostfully", logo: "🏢" },
    { name: "PriceLabs", logo: "💰" },
    { name: "Guesty", logo: "🌟" },
    { name: "AirDNA", logo: "📊" },
    { name: "Smartbnb", logo: "🤖" },
    { name: "RemoteLock", logo: "🔐" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Trusted By Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-600 mb-8">
            Trusted by Industry Leaders
          </h2>
          <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
            {trustLogos.map((logo, index) => (
              <div
                key={index}
                className="text-4xl md:text-5xl hover:scale-110 transition-transform duration-200 cursor-pointer"
                title={logo.name}
              >
                {logo.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Monthly Visitors</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
            <div className="text-gray-600">STR Professionals</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">User Satisfaction</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Updated Daily</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What STR Professionals Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real users who transformed their STR business
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    fill
                    className="rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/64x64?text=${testimonials[currentTestimonial].author.charAt(0)}`;
                    }}
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified & Trusted</h3>
              <p className="text-gray-600">All tools are thoroughly vetted by our expert team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Updated</h3>
              <p className="text-gray-600">Real-time updates ensure accurate information</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">Built by STR professionals, for STR professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}