# STR Stack Scout

A curated directory of Short-Term Rental (STR) technology tools built with Next.js 14, TailwindCSS, and Airtable.

## Features

- 🏠 **Comprehensive Tool Directory** - Browse PMS, revenue management, channel managers, and more
- 🔍 **Smart Search & Filtering** - Find tools by name, category, description, or tags
- 📱 **Mobile-First Design** - Responsive design optimized for all devices
- ⚡ **Fast Performance** - Built with Next.js 14 App Router and optimized for speed
- 🎨 **Modern UI** - Clean, professional interface with TailwindCSS
- 📊 **Airtable Integration** - Dynamic content management through Airtable API

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS
- **Data Source:** Airtable API
- **Language:** TypeScript
- **Deployment:** Vercel-ready

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   AIRTABLE_API_KEY=your_airtable_api_key_here
   AIRTABLE_BASE_ID=your_airtable_base_id_here
   AIRTABLE_TABLE_NAME=Tools
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Airtable Setup

### Required Fields in Airtable

Your Airtable base should have a table with the following fields:

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Single line text | Tool name |
| Subcategory | Single select | Tool category (PMS, Revenue Management, etc.) |
| Description | Long text | Tool description |
| Logo URL | URL | Link to tool logo image |
| Website URL | URL | Tool's website |
| Tags | Multiple select | Tags like "PMS", "STR-only", "Cross-Over" |
| Region | Single line text | Geographic region (optional) |
| Integrations | Multiple select | Integration options (optional) |

### Getting Airtable Credentials

1. **API Key:** Go to [Airtable Account](https://airtable.com/account) and generate a personal access token
2. **Base ID:** Found in your Airtable API documentation URL: `https://airtable.com/{BASE_ID}/api/docs`
3. **Table Name:** The name of your table (usually "Tools")

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page with hero and featured tools
│   ├── layout.tsx        # Root layout with navigation
│   ├── globals.css       # Global styles
│   └── tools/
│       └── page.tsx      # Tools directory page
├── components/
│   ├── Navigation.tsx    # Main navigation component
│   ├── ToolCard.tsx      # Individual tool card
│   ├── ToolFilter.tsx    # Category filter component
│   ├── ToolGrid.tsx      # Tools grid layout
│   └── SearchBar.tsx     # Search functionality
├── lib/
│   └── airtable.ts       # Airtable API integration
└── types/
    └── tool.ts           # TypeScript interfaces
```

## Development Mode

The app includes mock data for development when Airtable credentials are not configured. This allows you to:

- Test the interface without setting up Airtable
- Develop new features quickly
- Onboard new developers easily

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your app

### Other Platforms

The app is a standard Next.js application and can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Future Enhancements

- 🤖 AI-powered "Stack Finder" recommendations
- 🏷️ Sponsorship badges and featured listings
- 📧 Newsletter integration
- 👤 User accounts and saved tools
- 🔗 Tool comparison features
- 📈 Analytics and usage tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support, please open an issue in the GitHub repository.