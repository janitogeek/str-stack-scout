import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit a Tool',
  description: 'Submit your STR technology tool to be featured in our comprehensive directory. Reach thousands of short-term rental professionals.',
};

export default function SubmitToolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Submit Your STR Tool
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 300+ tools in our directory and reach thousands of STR professionals 
              looking for the perfect technology solutions.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High Visibility</h3>
              <p className="text-gray-600">Reach thousands of STR professionals actively searching for solutions</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualified Leads</h3>
              <p className="text-gray-600">Connect with property managers actively seeking new tools</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Recognition</h3>
              <p className="text-gray-600">Join a curated directory of vetted STR technology solutions</p>
            </div>
          </div>

          {/* Submission Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tool Submission Form</h2>
            
            <form className="space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="toolName" className="block text-sm font-medium text-gray-700 mb-2">
                      Tool Name *
                    </label>
                    <input
                      type="text"
                      id="toolName"
                      name="toolName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., AwesomeSTR Pro"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://awesomestr.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe what your tool does and how it helps STR professionals..."
                  ></textarea>
                </div>
              </div>

              {/* Categorization */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorization</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      <option value="pms">Property Management System (PMS)</option>
                      <option value="channel-manager">Channel Manager</option>
                      <option value="revenue-management">Revenue Management</option>
                      <option value="guest-communication">Guest Communication</option>
                      <option value="cleaning-maintenance">Cleaning & Maintenance</option>
                      <option value="smart-home">Smart Home & IoT</option>
                      <option value="analytics">Analytics & Reporting</option>
                      <option value="guest-experience">Guest Experience</option>
                      <option value="accounting">Accounting & Finance</option>
                      <option value="marketing">Marketing & SEO</option>
                      <option value="insurance">Insurance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="targetMarket" className="block text-sm font-medium text-gray-700 mb-2">
                      Target Market *
                    </label>
                    <select
                      id="targetMarket"
                      name="targetMarket"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select target market</option>
                      <option value="str-only">STR-only</option>
                      <option value="cross-over">Cross-over (Hotels + STR)</option>
                      <option value="multi-industry">Multi-industry</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select size</option>
                      <option value="solo-host">Solo Host</option>
                      <option value="small-team">Small Team</option>
                      <option value="mid-size">Mid-size</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="all-sizes">All Sizes</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="foundedYear" className="block text-sm font-medium text-gray-700 mb-2">
                      Founded Year
                    </label>
                    <input
                      type="number"
                      id="foundedYear"
                      name="foundedYear"
                      min="1990"
                      max="2025"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="2020"
                    />
                  </div>

                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Region
                    </label>
                    <select
                      id="region"
                      name="region"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="global">Global</option>
                      <option value="north-america">North America</option>
                      <option value="europe">Europe</option>
                      <option value="asia-pacific">Asia Pacific</option>
                      <option value="latin-america">Latin America</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@awesomestr.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="founder">Founder/CEO</option>
                    <option value="marketing">Marketing Manager</option>
                    <option value="product">Product Manager</option>
                    <option value="sales">Sales Representative</option>
                    <option value="partner">Partner/Reseller</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any additional information you'd like to share about your tool..."
                ></textarea>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>.
                  I understand that my submission will be reviewed and may take up to 5 business days for approval.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Tool for Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}