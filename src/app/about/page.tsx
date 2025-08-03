import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About STR Stack Scout',
  description: 'Learn about STR Stack Scout - the definitive directory for short-term rental technology. Our mission to help STR professionals discover the best tools.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About STR Stack Scout
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The definitive directory for short-term rental technology, helping STR professionals 
              discover, compare, and choose the best tools for their business.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The short-term rental industry has exploded in recent years, and with it, 
              the technology landscape has become increasingly complex. STR professionals 
              are faced with hundreds of tools and platforms, each claiming to be the best solution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We created STR Stack Scout to cut through the noise and provide a comprehensive, 
              unbiased directory where STR professionals can discover, compare, and choose 
              the right technology solutions for their specific needs.
            </p>
          </div>

          {/* What We Do */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Comprehensive Discovery</h3>
              <p className="text-gray-600">
                We maintain the most complete directory of STR technology tools, 
                covering everything from property management to guest experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Comparison</h3>
              <p className="text-gray-600">
                Compare tools side-by-side with detailed features, pricing, 
                and compatibility information to make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Insights</h3>
              <p className="text-gray-600">
                Get detailed information about each tool&apos;s strengths, use cases, 
                and ideal customer profiles to find your perfect match.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Always Updated</h3>
              <p className="text-gray-600">
                Our directory is continuously updated with new tools, 
                features, and market changes to keep you current.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">300+</div>
                <div className="text-blue-100">STR Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">12</div>
                <div className="text-blue-100">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.2</div>
                <div className="text-blue-100">Avg Rating</div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rigorous Vetting</h3>
                  <p className="text-gray-600">
                    Every tool in our directory undergoes careful evaluation to ensure 
                    it meets quality standards and serves the STR community effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Unbiased Information</h3>
                  <p className="text-gray-600">
                    We present factual information without bias, letting you make 
                    decisions based on your specific needs and circumstances.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Focus</h3>
                  <p className="text-gray-600">
                    Built by STR professionals, for STR professionals. We understand 
                    the unique challenges and opportunities in this industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discover Your Perfect STR Tech Stack?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of STR professionals who trust STR Stack Scout for their technology decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Tools
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/submit-tool"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Submit Your Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}