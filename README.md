# Chick-fil-A Foothill Ranch — Website

Rebuilt version of cfafoothill.com, inspired by thedwarfhouse.com layout.
Built with plain HTML, CSS, and JavaScript — no frameworks required.

## Project Structure

```
cfafoothill/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Nav, mobile menu, scroll animations
├── images/             ← Drop your photos here (see below)
└── README.md
```

## Images Needed

Replace the placeholder `images/` folder with your actual photos:

| File Name           | Used In                      | Recommended Size |
|---------------------|------------------------------|------------------|
| `hero.jpg`          | Hero background              | 1920x1080px      |
| `logo.png`          | Nav + Footer logo            | Any (transparent PNG) |
| `about-1.jpg`       | About gallery (tall)         | 400x500px        |
| `about-2.jpg`       | About gallery                | 400x250px        |
| `about-3.jpg`       | About gallery                | 400x250px        |
| `testimonial-1.jpg` | Team member photo            | 600x400px        |
| `testimonial-2.jpg` | Team member photo            | 600x400px        |
| `testimonial-3.jpg` | Team member photo            | 600x400px        |
| `story.jpg`         | Rising Above section         | 800x600px        |
| `job-foh.jpg`       | Front of House job card      | 800x400px        |
| `job-kitchen.jpg`   | Kitchen job card             | 800x400px        |
| `job-delivery.jpg`  | Delivery job card            | 800x400px        |
| `job-community.jpg` | Community Relations job card | 800x400px        |

## Things to Update in index.html

Search for these placeholders and replace them:

- `[YEAR]` — Year restaurant opened
- `[OPERATOR NAME]` — Operator's name
- `[RESTAURANT ADDRESS]` — Full street address
- `[ZIP]` — Zip code
- `[HOURS]` — Operating hours (e.g., 6:30AM - 10PM)
- `(XXX) XXX-XXXX` — Phone number
- `REPLACE_WITH_VIDEO_ID` — YouTube video ID for the Rising Above story
- Google Maps embed in the Visit section

## Running Locally in VS Code

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Site opens at `http://127.0.0.1:5500`

## Deploying to Netlify (Free)

1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import from Git" → select your repo
4. Build command: *(leave empty)*
5. Publish directory: `.` (root)
6. Click Deploy

Once live, Netlify gives you a URL like `https://yoursite.netlify.app`

## Connecting cfafoothill.com Domain

After deploying to Netlify:
1. In Netlify → Site settings → Domain management → Add custom domain → `cfafoothill.com`
2. Netlify will give you DNS records to add
3. Log into Squarespace Domains (where cfafoothill.com is registered)
4. Go to DNS settings and either:
   - Replace nameservers with Netlify's nameservers (easiest), OR
   - Add the CNAME/A records Netlify specifies
5. DNS propagation takes 15 min – 48 hours
