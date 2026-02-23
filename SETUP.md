# Chick-fil-A Foothill Ranch Website - Setup Guide

This guide will help you customize the website template with your restaurant's information.

## Quick Start

1. Add your restaurant photos to the `images/` directory (see `images/README.md` for required files)
2. Update placeholder text in `index.html` (see below)
3. Test locally using Live Server in VS Code
4. Deploy to Netlify

## Required Updates in index.html

Search for these placeholders in `index.html` and replace them with your actual information:

### Restaurant Information
- **`[YEAR]`** - Year the restaurant opened (appears in About section, line 63)
- **`[OPERATOR NAME]`** - Restaurant operator's name (line 64)
- **`[RESTAURANT ADDRESS]`** - Full street address (line 255)
- **`[ZIP]`** - Zip code (line 255)
- **`[HOURS]`** - Operating hours, e.g., "6:30AM - 10PM" (line 259)
- **`(XXX) XXX-XXXX`** - Phone number (line 263)

### Team Member Testimonials
Replace these placeholders with actual team member names (lines 103, 114, 125):
- **`[Team Member Name]`** - Front of House (line 103)
- **`[Team Member Name]`** - Kitchen Team (line 114)
- **`[Team Member Name]`** - Community Relations (line 125)

### Rising Above Video
- **`REPLACE_WITH_VIDEO_ID`** - YouTube video ID for your Rising Above story (line 177)
  - Example: If your YouTube URL is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is `dQw4w9WgXcQ`

### Google Maps Embed
Replace the map placeholder (lines 268-272) with an actual Google Maps iframe:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your restaurant address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the entire `<div class="map-placeholder">...</div>` section with the iframe

Example iframe:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

## Images Setup

See `images/README.md` for the complete list of required images. All images should be:
- High quality and web-optimized
- JPG format for photos, PNG for logos
- Properly sized (see recommended dimensions)

## Application Links

The job application links throughout the site point to:
`https://app.higherme.com/companies/6005ff81ba136`

Update these URLs if you use a different application system:
- Line 196 - Front of House
- Line 205 - Kitchen Team
- Line 214 - Delivery Driver
- Line 223 - Community Relations
- Line 229 - View All Openings button
- Line 285 - Footer CTA

## Testing Locally

### Using VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Site opens at `http://127.0.0.1:5500`

### Using Python
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Deployment to Netlify

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Chick-fil-A Foothill Ranch website"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

3. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import from Git"
   - Select your GitHub repository
   - Build settings:
     - Build command: *(leave empty)*
     - Publish directory: `.` (root)
   - Click "Deploy site"

4. **Connect Custom Domain** (optional):
   - In Netlify → Site settings → Domain management
   - Add custom domain: `cfafoothill.com`
   - Follow Netlify's DNS configuration instructions
   - Update DNS records in Squarespace Domains

## Customization Tips

### Colors
Edit CSS variables in `css/style.css` (lines 7-20) to match your branding:
- `--red`: Primary red color
- `--cream`: Background cream color
- `--brown`: Dark brown accent

### Fonts
Current fonts (Google Fonts):
- Display: Playfair Display
- Body: Source Sans 3

To change fonts, update line 10 in `index.html` and variables in `css/style.css`

### Benefits Section
Update the benefits section (lines 134-156 in `index.html`) to highlight your specific perks and culture.

## Support

For technical issues or questions:
- Check the main README.md for project structure
- Review `js/main.js` for interactive features
- All styling is in `css/style.css`

## Checklist

- [ ] Add all required images to `images/` directory
- [ ] Update [YEAR] with restaurant opening year
- [ ] Update [OPERATOR NAME] with operator's name
- [ ] Update [RESTAURANT ADDRESS] and [ZIP]
- [ ] Update [HOURS] with operating hours
- [ ] Update phone number
- [ ] Update team member names in testimonials
- [ ] Add YouTube video ID for Rising Above section
- [ ] Embed Google Maps iframe
- [ ] Update job application URLs (if needed)
- [ ] Test website locally
- [ ] Deploy to Netlify
- [ ] Configure custom domain (if applicable)
