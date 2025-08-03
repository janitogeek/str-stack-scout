import { ProviderData } from '@/utils/dataImport';

// Comprehensive STR Provider Database extracted from industry landscape analysis
export const strProviders: ProviderData[] = [
  // PMS + CM (STR) - Property Management Systems with Channel Management
  { name: "Hostfully", category: "Property Management System (PMS)", description: "All-in-one property management solution for vacation rentals", website: "https://hostfully.com", tags: ["PMS", "STR-only", "Channel Management"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "Guesty", category: "Property Management System (PMS)", description: "Professional property management platform for vacation rental managers", website: "https://guesty.com", tags: ["PMS", "Enterprise", "Multi-channel"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "Lodgify", category: "Property Management System (PMS)", description: "Website builder and booking management for vacation rentals", website: "https://lodgify.com", tags: ["PMS", "Website Builder", "STR-only"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "OwnerRez", category: "Property Management System (PMS)", description: "Comprehensive vacation rental management software", website: "https://ownerrez.com", tags: ["PMS", "STR-only", "Comprehensive"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "Hostaway", category: "Property Management System (PMS)", description: "All-in-one vacation rental management platform", website: "https://hostaway.com", tags: ["PMS", "STR-only", "All-in-one"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "beds24", category: "Property Management System (PMS)", description: "Online booking system and channel manager", website: "https://beds24.com", tags: ["PMS", "Channel Manager", "Cross-over"], targetMarket: "Cross-over", companySize: "All Sizes" },
  { name: "Bookipro", category: "Property Management System (PMS)", description: "Hotel and vacation rental management system", website: "https://bookipro.com", tags: ["PMS", "Cross-over", "Hotel"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "BookingStudio", category: "Property Management System (PMS)", description: "Comprehensive booking and property management", website: "https://bookingstudio.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "egluu", category: "Property Management System (PMS)", description: "Property management and guest communication platform", website: "https://egluu.com", tags: ["PMS", "Guest Communication"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Rentivo", category: "Property Management System (PMS)", description: "Vacation rental management software", website: "https://rentivo.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Hostify", category: "Property Management System (PMS)", description: "Vacation rental management platform", website: "https://hostify.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "smoobu", category: "Property Management System (PMS)", description: "All-in-one vacation rental management", website: "https://smoobu.com", tags: ["PMS", "STR-only", "European"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "hometime", category: "Property Management System (PMS)", description: "Full-service vacation rental management", website: "https://hometime.io", tags: ["PMS", "Full-service"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "hospitable", category: "Property Management System (PMS)", description: "Airbnb and vacation rental management", website: "https://hospitable.com", tags: ["PMS", "Airbnb", "STR-only"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Rentals United", category: "Channel Manager", description: "Global vacation rental distribution platform", website: "https://rentalsunited.com", tags: ["Channel Manager", "Global", "Distribution"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "LODGIFY", category: "Property Management System (PMS)", description: "Website builder and vacation rental software", website: "https://lodgify.com", tags: ["PMS", "Website Builder"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "FantasticStay", category: "Property Management System (PMS)", description: "Vacation rental management platform", website: "https://fantasticstay.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "myRent", category: "Property Management System (PMS)", description: "Property management software", website: "https://myrent.co.nz", tags: ["PMS", "New Zealand"], region: "Oceania", targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Net2rent", category: "Property Management System (PMS)", description: "Rental property management system", website: "https://net2rent.com", tags: ["PMS", "Cross-over"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Talkguest", category: "Guest Communication", description: "Guest communication and automation platform", website: "https://talkguest.com", tags: ["Guest Communication", "Automation"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "supercontrol", category: "Property Management System (PMS)", description: "Holiday rental booking software", website: "https://supercontrol.co.uk", tags: ["PMS", "UK", "Holiday Rentals"], region: "Europe", targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "SUPERHOST", category: "Service Optimization", description: "Vacation rental management services", website: "https://superhost.com", tags: ["Full-service", "Management"], targetMarket: "STR-only", companySize: "Enterprise" },

  // Revenue Management Solutions
  { name: "PriceLabs", category: "Revenue Management", description: "Dynamic pricing and revenue management for vacation rentals", website: "https://pricelabs.co", tags: ["Revenue Management", "Dynamic Pricing", "STR-only"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "Beyond Pricing", category: "Revenue Management", description: "Automated pricing for vacation rentals", website: "https://beyondpricing.com", tags: ["Revenue Management", "Automated Pricing"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "Wheelhouse", category: "Revenue Management", description: "Revenue management and dynamic pricing", website: "https://usewheelhouse.com", tags: ["Revenue Management", "Dynamic Pricing"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "DPGO", category: "Revenue Management", description: "Dynamic pricing and revenue optimization", website: "https://dpgo.io", tags: ["Revenue Management", "Pricing"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Tokeet", category: "Revenue Management", description: "Vacation rental management with revenue tools", website: "https://tokeet.com", tags: ["PMS", "Revenue Management"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "RateGain", category: "Revenue Management", description: "Revenue management and distribution solutions", website: "https://rategain.com", tags: ["Revenue Management", "Cross-over"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Transparent Intelligence", category: "Revenue Management", description: "Market intelligence and pricing", website: "https://transparent.com", tags: ["Market Intelligence", "Pricing"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Buoy", category: "Revenue Management", description: "Revenue management platform", website: "https://buoy.com", tags: ["Revenue Management"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "quibble", category: "Revenue Management", description: "Pricing optimization platform", website: "https://quibble.com", tags: ["Pricing", "Optimization"], targetMarket: "STR-only", companySize: "Small Team" },

  // Channel Managers
  { name: "SiteMinder", category: "Channel Manager", description: "Hotel and vacation rental distribution", website: "https://siteminder.com", tags: ["Channel Manager", "Cross-over", "Global"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "BookingSync", category: "Channel Manager", description: "Vacation rental channel management", website: "https://bookingsync.com", tags: ["Channel Manager", "STR-only"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Bluetent", category: "Channel Manager", description: "Multi-channel distribution platform", website: "https://bluetent.com", tags: ["Channel Manager", "Distribution"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Bookerator", category: "Channel Manager", description: "Channel management solution", website: "https://bookerator.com", tags: ["Channel Manager"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "BookeHQ", category: "Channel Manager", description: "Vacation rental distribution", website: "https://bookehq.com", tags: ["Channel Manager", "Distribution"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Guestline", category: "Channel Manager", description: "Hotel and property management system", website: "https://guestline.com", tags: ["PMS", "Channel Manager", "Cross-over"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Nexus", category: "Channel Manager", description: "Channel management platform", website: "https://nexus.com", tags: ["Channel Manager"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "RMS", category: "Channel Manager", description: "Revenue and channel management", website: "https://rmscloud.com", tags: ["Channel Manager", "Revenue Management"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Sirvoy", category: "Channel Manager", description: "Online booking system and channel manager", website: "https://sirvoy.com", tags: ["Channel Manager", "Booking System"], targetMarket: "Cross-over", companySize: "Small Team" },
  { name: "TravelNET", category: "Channel Manager", description: "Channel management and distribution", website: "https://travelnet.com", tags: ["Channel Manager", "Distribution"], targetMarket: "Cross-over", companySize: "Mid-size" },

  // Guest Communication & Experience
  { name: "Smartbnb", category: "Guest Communication", description: "Automated messaging for Airbnb hosts", website: "https://smartbnb.io", tags: ["Guest Communication", "Automation", "Airbnb"], targetMarket: "STR-only", companySize: "Solo Host" },
  { name: "TouchStay", category: "Guest Communication", description: "Digital guest experience platform", website: "https://touchstay.com", tags: ["Guest Experience", "Digital Guidebook"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "YourPorter", category: "Guest Communication", description: "Guest communication and concierge", website: "https://yourporter.com", tags: ["Guest Communication", "Concierge"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "AKIA", category: "Guest Communication", description: "Guest engagement platform", website: "https://akia.com", tags: ["Guest Communication", "Engagement"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Civitatis", category: "Guest Experience", description: "Tours and activities platform", website: "https://civitatis.com", tags: ["Guest Experience", "Tours", "Activities"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Guest-Hug", category: "Guest Communication", description: "Guest communication platform", website: "https://guest-hug.com", tags: ["Guest Communication"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Hello Here", category: "Guest Experience", description: "Local experience platform", website: "https://hellohere.com", tags: ["Guest Experience", "Local"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "LiktnHero", category: "Guest Experience", description: "Guest experience optimization", website: "https://liktnhero.com", tags: ["Guest Experience"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Localbird", category: "Guest Experience", description: "Local recommendations platform", website: "https://localbird.com", tags: ["Guest Experience", "Local Recommendations"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Bookboost", category: "Guest Communication", description: "Guest engagement and upselling", website: "https://bookboost.io", tags: ["Guest Communication", "Upselling"], targetMarket: "Cross-over", companySize: "Mid-size" },

  // Service Optimization & Operations
  { name: "Cleanster.com", category: "Cleaning & Maintenance", description: "Professional cleaning marketplace", website: "https://cleanster.com", tags: ["Cleaning", "Marketplace"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "TurnoverBnB", category: "Cleaning & Maintenance", description: "Cleaning coordination for vacation rentals", website: "https://turnoverbnb.com", tags: ["Cleaning", "Coordination", "STR-only"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Turno", category: "Cleaning & Maintenance", description: "Cleaning and maintenance platform", website: "https://turno.com", tags: ["Cleaning", "Maintenance"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Breezeway", category: "Cleaning & Maintenance", description: "Operations management platform", website: "https://breezeway.io", tags: ["Operations", "Cleaning", "Maintenance"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "PropertyBrother", category: "Service Optimization", description: "Property services optimization", website: "https://propertybrother.com", tags: ["Property Services"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Swept", category: "Cleaning & Maintenance", description: "Cleaning workflow management", website: "https://swept.com", tags: ["Cleaning", "Workflow"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "washbnb", category: "Cleaning & Maintenance", description: "Laundry and cleaning services", website: "https://washbnb.com", tags: ["Cleaning", "Laundry"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Yaago", category: "Service Optimization", description: "Property management services", website: "https://yaago.com", tags: ["Property Management", "Services"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "TIDY", category: "Cleaning & Maintenance", description: "On-demand cleaning and maintenance", website: "https://tidy.com", tags: ["Cleaning", "On-demand"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Keybee", category: "Service Optimization", description: "Key management and operations", website: "https://keybee.com", tags: ["Key Management", "Operations"], targetMarket: "STR-only", companySize: "Small Team" },

  // Access Control & Automation
  { name: "RemoteLock", category: "Smart Home & IoT", description: "Smart lock and access control", website: "https://remotelock.com", tags: ["Smart Locks", "Access Control"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "August", category: "Smart Home & IoT", description: "Smart home access control", website: "https://august.com", tags: ["Smart Home", "Access Control"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Kwikset", category: "Smart Home & IoT", description: "Smart lock solutions", website: "https://kwikset.com", tags: ["Smart Locks"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "KeyNest", category: "Smart Home & IoT", description: "Key exchange network", website: "https://keynest.com", tags: ["Key Exchange", "Network"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Operto", category: "Smart Home & IoT", description: "Guest access and property automation", website: "https://operto.com", tags: ["Access Control", "Automation"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Lynx", category: "Smart Home & IoT", description: "Property technology platform", website: "https://lynx.com", tags: ["Property Technology"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Rently", category: "Smart Home & IoT", description: "Self-showing technology", website: "https://rently.com", tags: ["Self-showing", "Access"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "PointCentral", category: "Smart Home & IoT", description: "Smart home platform", website: "https://pointcentral.com", tags: ["Smart Home", "Platform"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Seam", category: "Smart Home & IoT", description: "Device connectivity platform", website: "https://seam.co", tags: ["Device Connectivity", "IoT"], targetMarket: "Cross-over", companySize: "Mid-size" },

  // Data & Analytics
  { name: "AirDNA", category: "Analytics & Reporting", description: "Short-term rental data and analytics", website: "https://airdna.co", tags: ["Analytics", "Market Data", "STR-only"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "AllTheRooms", category: "Analytics & Reporting", description: "Accommodation data intelligence", website: "https://alltherooms.com", tags: ["Data Intelligence", "Analytics"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Key Data", category: "Analytics & Reporting", description: "Vacation rental market intelligence", website: "https://keydata.com", tags: ["Market Intelligence", "Analytics"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Lighthouse", category: "Analytics & Reporting", description: "Business intelligence for hospitality", website: "https://lighthouse.com", tags: ["Business Intelligence", "Cross-over"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "STR", category: "Analytics & Reporting", description: "Short-term rental analytics", website: "https://str.com", tags: ["STR Analytics"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "Transparent", category: "Analytics & Reporting", description: "Market intelligence platform", website: "https://transparent.com", tags: ["Market Intelligence"], targetMarket: "STR-only", companySize: "Mid-size" },

  // Insurance & Risk Management
  { name: "Proper Insurance", category: "Insurance", description: "Short-term rental insurance", website: "https://properinsurance.com", tags: ["Insurance", "STR-only"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "CBIZ", category: "Insurance", description: "Business insurance and risk management", website: "https://cbiz.com", tags: ["Insurance", "Risk Management"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Safely", category: "Insurance", description: "Guest and property protection", website: "https://safely.com", tags: ["Insurance", "Protection"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Slice", category: "Insurance", description: "On-demand insurance platform", website: "https://slice.com", tags: ["Insurance", "On-demand"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "RENTAL GUARDIAN", category: "Insurance", description: "Rental property protection", website: "https://rentalguardian.com", tags: ["Property Protection"], targetMarket: "Cross-over", companySize: "Mid-size" },

  // Payments & Accounting
  { name: "Uplift", category: "Accounting & Finance", description: "Payment and financing solutions", website: "https://uplift.com", tags: ["Payments", "Financing"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Smily", category: "Accounting & Finance", description: "Financial management platform", website: "https://smily.com", tags: ["Financial Management"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "HostPlanet", category: "Accounting & Finance", description: "Accounting for vacation rentals", website: "https://hostplanet.com", tags: ["Accounting", "STR-only"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Clearing", category: "Accounting & Finance", description: "Automated bookkeeping", website: "https://clearing.com", tags: ["Bookkeeping", "Automation"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Lynnbrook Group", category: "Accounting & Finance", description: "Financial services for vacation rentals", website: "https://lynnbrookgroup.com", tags: ["Financial Services"], targetMarket: "STR-only", companySize: "Mid-size" },

  // Marketing & SEO
  { name: "BringFido", category: "Marketing & SEO", description: "Pet-friendly travel marketing", website: "https://bringfido.com", tags: ["Marketing", "Pet-friendly"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Bluetent", category: "Marketing & SEO", description: "Digital marketing for vacation rentals", website: "https://bluetent.com", tags: ["Digital Marketing", "SEO"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "RedAwning", category: "Marketing & SEO", description: "Vacation rental marketing platform", website: "https://redawning.com", tags: ["Marketing Platform"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Listify", category: "Marketing & SEO", description: "SEO and marketing automation", website: "https://listify.com", tags: ["SEO", "Marketing Automation"], targetMarket: "Cross-over", companySize: "Small Team" },

  // OTAs (Online Travel Agencies)
  { name: "Airbnb", category: "Channel Manager", description: "Leading vacation rental marketplace", website: "https://airbnb.com", tags: ["OTA", "Marketplace", "Global"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "VRBO", category: "Channel Manager", description: "Vacation rental by owner platform", website: "https://vrbo.com", tags: ["OTA", "Vacation Rentals"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "Booking.com", category: "Channel Manager", description: "Global accommodation booking platform", website: "https://booking.com", tags: ["OTA", "Global", "Cross-over"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Expedia", category: "Channel Manager", description: "Online travel booking platform", website: "https://expedia.com", tags: ["OTA", "Travel", "Global"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "RedDoorz", category: "Channel Manager", description: "Budget accommodation platform", website: "https://reddoorz.com", tags: ["OTA", "Budget", "Asia"], region: "Asia", targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Trip.com", category: "Channel Manager", description: "Chinese travel booking platform", website: "https://trip.com", tags: ["OTA", "China", "Travel"], region: "Asia", targetMarket: "Cross-over", companySize: "Enterprise" },

  // Website Builders & Tech Solutions
  { name: "Lodgea", category: "Marketing & SEO", description: "Website builder for vacation rentals", website: "https://lodgea.com", tags: ["Website Builder", "STR-only"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "WebReady", category: "Marketing & SEO", description: "Vacation rental websites", website: "https://webready.com", tags: ["Website Builder"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Boostly", category: "Marketing & SEO", description: "Direct booking platform", website: "https://boostly.co.uk", tags: ["Direct Booking", "Marketing"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Duda", category: "Marketing & SEO", description: "Website builder platform", website: "https://duda.co", tags: ["Website Builder", "Cross-over"], targetMarket: "Cross-over", companySize: "Enterprise" },

  // KYC / Guest Verification
  { name: "Autohost", category: "Guest Communication", description: "Guest screening and verification", website: "https://autohost.ai", tags: ["Guest Screening", "Verification"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Superhog", category: "Guest Communication", description: "Guest verification and damage protection", website: "https://superhog.com", tags: ["Guest Verification", "Damage Protection"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Chekin", category: "Guest Communication", description: "Online check-in and guest verification", website: "https://chekin.com", tags: ["Check-in", "Guest Verification"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Virtual Front Desk", category: "Guest Communication", description: "Virtual check-in solutions", website: "https://virtualfrontdesk.com", tags: ["Virtual Check-in"], targetMarket: "Cross-over", companySize: "Mid-size" },

  // Property Acquisition & Investment
  { name: "Rabbu", category: "Analytics & Reporting", description: "Real estate investment analytics", website: "https://rabbu.com", tags: ["Real Estate", "Investment Analytics"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Awning", category: "Analytics & Reporting", description: "Airbnb investment analysis", website: "https://awning.com", tags: ["Investment Analysis", "Airbnb"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "BiggerPockets", category: "Analytics & Reporting", description: "Real estate investment community", website: "https://biggerpockets.com", tags: ["Real Estate", "Investment", "Community"], targetMarket: "Cross-over", companySize: "Enterprise" },

  // Listing Sites & Distribution
  { name: "HomeToGo", category: "Channel Manager", description: "Vacation rental search engine", website: "https://hometogo.com", tags: ["Search Engine", "Vacation Rentals"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "Trivago", category: "Channel Manager", description: "Hotel and accommodation comparison", website: "https://trivago.com", tags: ["Comparison", "Cross-over"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "VacationRenter", category: "Channel Manager", description: "Vacation rental marketplace", website: "https://vacationrenter.com", tags: ["Marketplace"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "ZEUS", category: "Channel Manager", description: "Living-as-a-service platform", website: "https://zeus.com", tags: ["Living-as-a-service"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Stay365", category: "Channel Manager", description: "Extended stay platform", website: "https://stay365.com", tags: ["Extended Stay"], targetMarket: "STR-only", companySize: "Mid-size" },

  // Additional PMS + CM Systems
  { name: "365Villas", category: "Property Management System (PMS)", description: "Property management system for vacation rentals", website: "https://365villas.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Avantio", category: "Property Management System (PMS)", description: "Comprehensive vacation rental management platform", website: "https://avantio.com", tags: ["PMS", "Channel Management", "Website Builder"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "Bookster", category: "Property Management System (PMS)", description: "Property management and booking system", website: "https://bookster.com", tags: ["PMS", "Booking System"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Ciirus", category: "Property Management System (PMS)", description: "Cloud-based vacation rental management", website: "https://ciirus.com", tags: ["PMS", "Cloud-based"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "Escapia", category: "Property Management System (PMS)", description: "Vacation rental management software", website: "https://escapia.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "Icnea", category: "Property Management System (PMS)", description: "Property management and channel management", website: "https://icnea.com", tags: ["PMS", "Channel Management"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "iGMS", category: "Property Management System (PMS)", description: "Vacation rental management platform", website: "https://igms.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "Janis", category: "Property Management System (PMS)", description: "All-in-one vacation rental platform", website: "https://janis.com", tags: ["PMS", "All-in-one"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "LMPM", category: "Property Management System (PMS)", description: "Property management solution", website: "https://lmpm.com", tags: ["PMS"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Maxton", category: "Property Management System (PMS)", description: "Vacation rental management system", website: "https://maxton.com", tags: ["PMS"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "MyVR", category: "Property Management System (PMS)", description: "Vacation rental management software", website: "https://myvr.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "RentalReady", category: "Property Management System (PMS)", description: "Property management platform", website: "https://rentalready.com", tags: ["PMS"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Rentlio", category: "Property Management System (PMS)", description: "Hotel and vacation rental management", website: "https://rentlio.com", tags: ["PMS", "Cross-over"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "RNS", category: "Property Management System (PMS)", description: "Reservation and property management", website: "https://rns.com", tags: ["PMS", "Reservations"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Sibo", category: "Property Management System (PMS)", description: "Property management solution", website: "https://sibo.com", tags: ["PMS"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Spatzo", category: "Property Management System (PMS)", description: "Vacation rental management platform", website: "https://spatzo.com", tags: ["PMS"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "SuperControl", category: "Property Management System (PMS)", description: "Holiday rental booking software", website: "https://supercontrol.co.uk", tags: ["PMS", "Holiday Rentals"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Track", category: "Property Management System (PMS)", description: "Property management and tracking", website: "https://track.com", tags: ["PMS", "Tracking"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Uplisting", category: "Property Management System (PMS)", description: "Vacation rental management and automation", website: "https://uplisting.io", tags: ["PMS", "Automation"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "Vreasy", category: "Property Management System (PMS)", description: "Vacation rental management system", website: "https://vreasy.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "vOffice", category: "Property Management System (PMS)", description: "Property management solution", website: "https://voffice.com", tags: ["PMS"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "XSigns", category: "Property Management System (PMS)", description: "Property management and signage", website: "https://xsigns.com", tags: ["PMS", "Signage"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Zeevou", category: "Property Management System (PMS)", description: "Property management platform", website: "https://zeevou.com", tags: ["PMS"], targetMarket: "STR-only", companySize: "Mid-size" },

  // Cross-over PMS Systems
  { name: "Apaleo", category: "Property Management System (PMS)", description: "Cloud-native hotel and property management", website: "https://apaleo.com", tags: ["PMS", "Cloud-native", "Cross-over"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Avroa", category: "Property Management System (PMS)", description: "Hotel and property management system", website: "https://avroa.com", tags: ["PMS", "Cross-over"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "BookingFactory", category: "Property Management System (PMS)", description: "Booking and property management platform", website: "https://bookingfactory.com", tags: ["PMS", "Booking"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Clock", category: "Property Management System (PMS)", description: "Hotel and property management software", website: "https://clock.com", tags: ["PMS", "Cross-over"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Elina", category: "Property Management System (PMS)", description: "Property management system", website: "https://elina.com", tags: ["PMS"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Hoteliga", category: "Property Management System (PMS)", description: "Hotel and vacation rental management", website: "https://hoteliga.com", tags: ["PMS", "Cross-over"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Mews", category: "Property Management System (PMS)", description: "Cloud-based hotel and property management", website: "https://mews.com", tags: ["PMS", "Cloud-based", "Cross-over"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "ResNexus", category: "Property Management System (PMS)", description: "Reservation and property management", website: "https://resnexus.com", tags: ["PMS", "Reservations"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "RoomRaccoon", category: "Property Management System (PMS)", description: "All-in-one hotel and property management", website: "https://roomraccoon.com", tags: ["PMS", "All-in-one"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Tokeet", category: "Property Management System (PMS)", description: "Vacation rental management platform", website: "https://tokeet.com", tags: ["PMS", "STR-only"], targetMarket: "STR-only", companySize: "All Sizes" },
  { name: "Ascent", category: "Property Management System (PMS)", description: "Property management solution", website: "https://ascent.com", tags: ["PMS"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "InnRoad", category: "Property Management System (PMS)", description: "Hotel and property management system", website: "https://innroad.com", tags: ["PMS", "Cross-over"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Preno", category: "Property Management System (PMS)", description: "Property management platform", website: "https://preno.com", tags: ["PMS"], targetMarket: "Cross-over", companySize: "Small Team" },
  { name: "Redforts", category: "Property Management System (PMS)", description: "Property management solution", website: "https://redforts.com", tags: ["PMS"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Stayflexi", category: "Property Management System (PMS)", description: "Flexible property management", website: "https://stayflexi.com", tags: ["PMS", "Flexible"], targetMarket: "Cross-over", companySize: "Mid-size" },

  // Enhanced Revenue Management
  { name: "DPGO", category: "Revenue Management", description: "Dynamic pricing and revenue optimization", website: "https://dpgo.com", tags: ["Dynamic Pricing", "Revenue Management"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Outperform", category: "Revenue Management", description: "Revenue management and optimization", website: "https://outperform.com", tags: ["Revenue Management", "Optimization"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Rategenie", category: "Revenue Management", description: "Automated pricing for vacation rentals", website: "https://rategenie.com", tags: ["Dynamic Pricing", "Automation"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Rented", category: "Revenue Management", description: "Revenue management platform", website: "https://rented.com", tags: ["Revenue Management"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "RevControl", category: "Revenue Management", description: "Revenue management and control", website: "https://revcontrol.com", tags: ["Revenue Management", "Control"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Revenue Insight", category: "Revenue Management", description: "Revenue analytics and insights", website: "https://revenueinsight.com", tags: ["Revenue Analytics", "Insights"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Revvy", category: "Revenue Management", description: "Revenue optimization platform", website: "https://revvy.com", tags: ["Revenue Optimization"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Switch", category: "Revenue Management", description: "Dynamic pricing switcher", website: "https://switch.com", tags: ["Dynamic Pricing", "Switch"], targetMarket: "STR-only", companySize: "Small Team" },

  // Enhanced Analytics & Data
  { name: "Key Data Dashboard", category: "Analytics & Reporting", description: "Vacation rental market data dashboard", website: "https://keydatadashboard.com", tags: ["Market Data", "Dashboard"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "LSI", category: "Analytics & Reporting", description: "Location analytics and insights", website: "https://lsi.com", tags: ["Location Analytics", "Insights"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Mashvisor", category: "Analytics & Reporting", description: "Real estate investment analytics", website: "https://mashvisor.com", tags: ["Real Estate Analytics", "Investment"], targetMarket: "STR-only", companySize: "Mid-size" },

  // Guest Verification & Security
  { name: "KnowYourGuest", category: "Guest Communication", description: "Guest verification and screening", website: "https://knowyourguest.com", tags: ["Guest Verification", "Screening"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Veriff", category: "Guest Communication", description: "Identity verification platform", website: "https://veriff.com", tags: ["Identity Verification", "Security"], targetMarket: "Cross-over", companySize: "Enterprise" },

  // Access Control & Automation
  { name: "Brivo", category: "Smart Home & IoT", description: "Cloud-based access control", website: "https://brivo.com", tags: ["Access Control", "Cloud-based"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "EveryDoor", category: "Smart Home & IoT", description: "Smart door access control", website: "https://everydoor.com", tags: ["Smart Doors", "Access Control"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "HomeIt", category: "Smart Home & IoT", description: "Smart home automation platform", website: "https://homeit.com", tags: ["Smart Home", "Automation"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Igloohome", category: "Smart Home & IoT", description: "Smart lock and access solutions", website: "https://igloohome.com", tags: ["Smart Locks", "Access Solutions"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Klevio", category: "Smart Home & IoT", description: "Smart access control system", website: "https://klevio.com", tags: ["Access Control", "Smart"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Level", category: "Smart Home & IoT", description: "Smart lock technology", website: "https://level.co", tags: ["Smart Locks", "Technology"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Nuki", category: "Smart Home & IoT", description: "Smart lock solutions", website: "https://nuki.io", tags: ["Smart Locks", "Solutions"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "SmartEntry", category: "Smart Home & IoT", description: "Smart entry systems", website: "https://smartentry.com", tags: ["Smart Entry", "Systems"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Tapkey", category: "Smart Home & IoT", description: "Digital key management", website: "https://tapkey.com", tags: ["Digital Keys", "Management"], targetMarket: "Cross-over", companySize: "Mid-size" },

  // Access Control Hardware
  { name: "Akiles", category: "Smart Home & IoT", description: "Access control hardware", website: "https://akiles.com", tags: ["Access Control", "Hardware"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Assa Abloy", category: "Smart Home & IoT", description: "Lock and security solutions", website: "https://assaabloy.com", tags: ["Locks", "Security"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Danalock", category: "Smart Home & IoT", description: "Smart lock manufacturer", website: "https://danalock.com", tags: ["Smart Locks", "Manufacturer"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Dormakaba", category: "Smart Home & IoT", description: "Access control and security", website: "https://dormakaba.com", tags: ["Access Control", "Security"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Keycafe", category: "Smart Home & IoT", description: "Key management network", website: "https://keycafe.com", tags: ["Key Management", "Network"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "SALTO", category: "Smart Home & IoT", description: "Electronic locking solutions", website: "https://saltosystems.com", tags: ["Electronic Locks", "Solutions"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "TLLock", category: "Smart Home & IoT", description: "Smart lock technology", website: "https://ttlock.com", tags: ["Smart Locks", "Technology"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Yale", category: "Smart Home & IoT", description: "Smart home security", website: "https://yalehome.com", tags: ["Smart Home", "Security"], targetMarket: "Cross-over", companySize: "Enterprise" },

  // Property Automation & Monitoring
  { name: "Alertify", category: "Smart Home & IoT", description: "Property monitoring and alerts", website: "https://alertify.com", tags: ["Property Monitoring", "Alerts"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Alfred", category: "Smart Home & IoT", description: "Smart property automation", website: "https://alfred.com", tags: ["Property Automation", "Smart"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Minut", category: "Smart Home & IoT", description: "Property monitoring sensor", website: "https://minut.com", tags: ["Property Monitoring", "Sensors"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Roomonitor", category: "Smart Home & IoT", description: "Room monitoring solutions", website: "https://roomonitor.com", tags: ["Room Monitoring", "Solutions"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "StayFi", category: "Smart Home & IoT", description: "WiFi and guest experience platform", website: "https://stayfi.com", tags: ["WiFi", "Guest Experience"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "WYND", category: "Smart Home & IoT", description: "Air quality monitoring", website: "https://hellowynd.com", tags: ["Air Quality", "Monitoring"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "YoLink", category: "Smart Home & IoT", description: "IoT monitoring platform", website: "https://yolink.com", tags: ["IoT", "Monitoring"], targetMarket: "STR-only", companySize: "Mid-size" },

  // Enhanced Service Optimization
  { name: "AngelHost", category: "Cleaning & Maintenance", description: "Service optimization platform", website: "https://angelhost.com", tags: ["Service Optimization", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "EZCare", category: "Cleaning & Maintenance", description: "Property care and maintenance", website: "https://ezcare.com", tags: ["Property Care", "Maintenance"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Gustaf", category: "Cleaning & Maintenance", description: "Cleaning and maintenance coordination", website: "https://gustafapp.com", tags: ["Cleaning", "Maintenance"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Host", category: "Cleaning & Maintenance", description: "Property hosting services", website: "https://host.com", tags: ["Property Hosting", "Services"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Jana", category: "Cleaning & Maintenance", description: "Property management services", website: "https://jana.com", tags: ["Property Management", "Services"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Keybee", category: "Cleaning & Maintenance", description: "Key management and services", website: "https://keybee.com", tags: ["Key Management", "Services"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Operto Teams", category: "Cleaning & Maintenance", description: "Team management for STR operations", website: "https://operto.com/teams", tags: ["Team Management", "Operations"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Polarao", category: "Cleaning & Maintenance", description: "Property care platform", website: "https://polarao.com", tags: ["Property Care", "Platform"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Properly", category: "Cleaning & Maintenance", description: "Property management and maintenance", website: "https://properly.ca", tags: ["Property Management", "Maintenance"], targetMarket: "STR-only", companySize: "Enterprise" },
  { name: "Sajo", category: "Cleaning & Maintenance", description: "Service optimization", website: "https://sajo.com", tags: ["Service Optimization"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "Spruce", category: "Cleaning & Maintenance", description: "Property maintenance platform", website: "https://spruce.com", tags: ["Property Maintenance", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Turnify", category: "Cleaning & Maintenance", description: "Turnover automation", website: "https://turnify.com", tags: ["Turnover", "Automation"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "VRScheduler", category: "Cleaning & Maintenance", description: "Vacation rental scheduling", website: "https://vrscheduler.com", tags: ["Scheduling", "Vacation Rental"], targetMarket: "STR-only", companySize: "Small Team" },

  // Enhanced Insurance Solutions
  { name: "InsuraGuest", category: "Insurance", description: "Guest insurance platform", website: "https://insuraguest.com", tags: ["Guest Insurance", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Jacobs & Turner", category: "Insurance", description: "Vacation rental insurance", website: "https://jacobsandturner.com", tags: ["Vacation Rental Insurance"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Pikl", category: "Insurance", description: "Property protection insurance", website: "https://pikl.com", tags: ["Property Protection", "Insurance"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Rental Guardian", category: "Insurance", description: "Rental property protection", website: "https://rentalguardian.com", tags: ["Rental Protection", "Property"], targetMarket: "Cross-over", companySize: "Mid-size" },

  // Enhanced Payments & Accounting
  { name: "Checkin", category: "Accounting & Finance", description: "Payment and check-in platform", website: "https://checkin.com", tags: ["Payments", "Check-in"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Clearbank", category: "Accounting & Finance", description: "Banking and payment solutions", website: "https://clearbank.com", tags: ["Banking", "Payments"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Goki", category: "Accounting & Finance", description: "Financial management platform", website: "https://goki.com", tags: ["Financial Management", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Mavericks", category: "Accounting & Finance", description: "Payment processing solutions", website: "https://mavericks.com", tags: ["Payment Processing", "Solutions"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Nexio", category: "Accounting & Finance", description: "Payment orchestration platform", website: "https://nexio.com", tags: ["Payment Orchestration", "Platform"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "Ximplifi", category: "Accounting & Finance", description: "Financial simplification platform", website: "https://ximplifi.com", tags: ["Financial Simplification", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },

  // Enhanced Marketing & SEO
  { name: "Bizcor", category: "Marketing & SEO", description: "Business marketing platform", website: "https://bizcor.com", tags: ["Business Marketing", "Platform"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Blent", category: "Marketing & SEO", description: "Digital marketing for vacation rentals", website: "https://blent.com", tags: ["Digital Marketing", "Vacation Rentals"], targetMarket: "STR-only", companySize: "Small Team" },
  { name: "GuestHook", category: "Marketing & SEO", description: "Guest marketing and engagement", website: "https://guesthook.com", tags: ["Guest Marketing", "Engagement"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Rentals United Boost", category: "Marketing & SEO", description: "Marketing boost for vacation rentals", website: "https://rentalsunited.com/boost", tags: ["Marketing Boost", "Vacation Rentals"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Rentl.io", category: "Marketing & SEO", description: "Rental marketing platform", website: "https://rentl.io", tags: ["Rental Marketing", "Platform"], targetMarket: "STR-only", companySize: "Small Team" },

  // Property Acquisition Tools
  { name: "Nectar", category: "Analytics & Reporting", description: "Real estate investment platform", website: "https://nectar.com", tags: ["Real Estate Investment", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Revenate", category: "Analytics & Reporting", description: "Revenue and investment analytics", website: "https://revenate.com", tags: ["Revenue Analytics", "Investment"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Sparrow", category: "Analytics & Reporting", description: "Property acquisition analytics", website: "https://sparrow.com", tags: ["Property Acquisition", "Analytics"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Vintory", category: "Analytics & Reporting", description: "Property investment platform", website: "https://vintory.com", tags: ["Property Investment", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },

  // STR-Specific Website Builders
  { name: "CabinKey", category: "Marketing & SEO", description: "Website builder for vacation rentals", website: "https://cabinkey.com", tags: ["Website Builder", "Vacation Rentals"], targetMarket: "STR-only", companySize: "Small Team" },

  // Enhanced Communication & Guidebook
  { name: "Duve", category: "Guest Communication", description: "Guest experience automation", website: "https://duve.com", tags: ["Guest Experience", "Automation"], targetMarket: "Cross-over", companySize: "Enterprise" },
  { name: "EDGAR", category: "Guest Communication", description: "Guest communication platform", website: "https://edgar.com", tags: ["Guest Communication", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "RealVoice", category: "Guest Communication", description: "Voice communication platform", website: "https://realvoice.com", tags: ["Voice Communication", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Xplorie", category: "Guest Communication", description: "Guest experience platform", website: "https://xplorie.com", tags: ["Guest Experience", "Platform"], targetMarket: "STR-only", companySize: "Mid-size" },

  // Ancillary Services
  { name: "BabyQuip", category: "Guest Experience", description: "Baby equipment rental service", website: "https://babyquip.com", tags: ["Baby Equipment", "Rental"], targetMarket: "STR-only", companySize: "Mid-size" },
  { name: "Bounce", category: "Guest Experience", description: "Luggage storage and services", website: "https://bounce.com", tags: ["Luggage Storage", "Services"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "LuggageHero", category: "Guest Experience", description: "Luggage storage network", website: "https://luggage-hero.com", tags: ["Luggage Storage", "Network"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "NannyBag", category: "Guest Experience", description: "Luggage storage service", website: "https://nannybag.com", tags: ["Luggage Storage", "Service"], targetMarket: "Cross-over", companySize: "Mid-size" },
  { name: "Stasher", category: "Guest Experience", description: "Luggage storage network", website: "https://stasher.com", tags: ["Luggage Storage"], targetMarket: "Cross-over", companySize: "Mid-size" },
];

// Group providers by category for easy access
export const providersByCategory = strProviders.reduce((acc, provider) => {
  const category = provider.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(provider);
  return acc;
}, {} as Record<string, ProviderData[]>);

// Get provider counts by category
export const providerCounts = Object.keys(providersByCategory).reduce((acc, category) => {
  acc[category] = providersByCategory[category].length;
  return acc;
}, {} as Record<string, number>);

export default strProviders;