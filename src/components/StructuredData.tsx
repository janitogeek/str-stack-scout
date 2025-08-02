'use client';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "STR Stack Scout",
    "url": "https://str-stack-scout.vercel.app",
    "logo": "https://str-stack-scout.vercel.app/logo.png",
    "description": "The ultimate directory of short-term rental technology tools and services",
    "foundingDate": "2024",
    "industry": "Technology",
    "knowsAbout": [
      "Short-term rental technology",
      "Property management systems", 
      "Revenue management",
      "Channel management",
      "Guest communication",
      "STR automation tools",
      "Vacation rental software",
      "Airbnb management tools"
    ],
    "areaServed": "Worldwide",
    "serviceType": "Technology Directory",
    "sameAs": [
      "https://twitter.com/STRStackScout",
      "https://linkedin.com/company/str-stack-scout"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "STR Stack Scout",
    "url": "https://str-stack-scout.vercel.app",
    "description": "Discover 150+ vetted STR technology tools and services",
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "author": {
      "@type": "Organization",
      "name": "STR Stack Scout"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://str-stack-scout.vercel.app/tools?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const directorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "STR Technology Tools Directory",
    "description": "Comprehensive directory of short-term rental technology tools and services",
    "url": "https://str-stack-scout.vercel.app/tools",
    "numberOfItems": 150,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "about": {
      "@type": "Thing",
      "name": "Short-term rental technology",
      "description": "Technology tools and software for managing short-term rental properties"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://str-stack-scout.vercel.app"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Tools Directory",
        "item": "https://str-stack-scout.vercel.app/tools"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is STR Stack Scout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "STR Stack Scout is the ultimate directory of short-term rental technology tools and services, featuring 150+ vetted solutions across categories like property management, revenue optimization, guest communication, and more."
        }
      },
      {
        "@type": "Question",
        "name": "How many STR tools are listed in the directory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our directory features over 150 carefully curated STR technology tools and services, covering everything from property management systems to smart home automation."
        }
      },
      {
        "@type": "Question",
        "name": "What categories of STR tools are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover 12+ major categories including Property Management Systems (PMS), Revenue Management, Channel Management, Guest Communication, Cleaning & Maintenance, Smart Home & IoT, Analytics & Reporting, Insurance, Marketing & SEO, and more."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(directorySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}