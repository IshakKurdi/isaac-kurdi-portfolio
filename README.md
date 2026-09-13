# Isaac Ahmad Kurdi — Creative Portfolio Website

A personal personal portfolio website built for **Isaac Ahmad Kurdi** (Video Editor, AI Video Creator, Digital Marketer, and Founder of Fun Forge Labs).

Built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
# Open http://localhost:3000
```

---

## 📁 How to Customize Your Portfolio

All project information, text, contact details, social links, skills, and certifications are managed inside a single centralized data file:

📍 **`src/data/portfolioData.ts`**

You never need to touch complex React code to update your projects or text!

---

### 1. How to Add a New Video

1. Export your video in **H.264 MP4** format (recommended resolution: 1080p or 4K for landscape, 1080x1920 for short-form Reels/TikTok).
2. Place the `.mp4` file in the **`public/videos/`** folder:
   ```text
   public/videos/my-new-project.mp4
   ```
3. In `src/data/portfolioData.ts`, reference your video path:
   ```ts
   videoUrl: "/videos/my-new-project.mp4"
   ```

---

### 2. How to Add a Thumbnail

1. Save your project poster image as a `.jpg` or `.png`.
2. Place the image in the **`public/images/`** folder:
   ```text
   public/images/my-new-project.jpg
   ```
3. In `src/data/portfolioData.ts`, reference your thumbnail path:
   ```ts
   thumbnailUrl: "/images/my-new-project.jpg"
   ```

---

### 3. How to Add a New Project

Open **`src/data/portfolioData.ts`** and add a new item to the `PROJECTS` array:

```ts
{
  id: "my-new-project-id",
  title: "My Awesome New Video Campaign",
  category: "AI Video", // Options: "AI Video" | "Video Editing" | "Food & Restaurant" | "Social Media" | "Advertising" | "Game Marketing"
  description: "A short summary of what this project accomplished.",
  longDescription: "Full details explaining concept, AI tools used, editing techniques, and results.",
  videoUrl: "/videos/my-new-project.mp4",
  thumbnailUrl: "/images/my-new-project.jpg",
  tools: ["Premiere Pro", "Midjourney", "ElevenLabs", "CapCut"],
  client: "Client or Brand Name",
  year: "2026",
  results: "100k+ Views & 25% Increase in Hook Rate",
  featured: true
}
```

Save the file, and your new project will automatically appear on the website and filter correctly!

---

### 4. How to Change Phone, Email & Contact Details

Open **`src/data/portfolioData.ts`** and locate `PERSONAL_INFO.contact`:

```ts
contact: {
  email: "your.real.email@gmail.com",
  phone: "+961 70 123 456",
  whatsapp: "https://wa.me/96170123456",
  linkedin: "https://linkedin.com/in/yourprofile",
  instagram: "https://instagram.com/yourhandle",
  tiktok: "https://tiktok.com/@yourhandle",
  youtube: "https://youtube.com/@yourchannel",
  github: "https://github.com/yourusername"
}
```

---

### 5. How to Change Your Profile Photo

1. Place your professional portrait image into `public/images/profile-placeholder.jpg` (or name it `profile.jpg`).
2. Update the reference in `src/components/AboutSection.tsx` if needed.

---

### 6. How to Deploy on Vercel

This portfolio is **100% optimized for Vercel deployment**:

1. Push this repository to **GitHub** / **GitLab** / **Bitbucket**.
2. Log into [Vercel](https://vercel.com).
3. Click **"New Project"** and import your repository.
4. Keep all default settings (Framework Preset: **Next.js**).
5. Click **"Deploy"**.

Vercel will build and host your portfolio live with a global CDN and automatic HTTPS SSL certificate!

---

## 🛠️ Tech Stack Overview

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19 & TypeScript
- **Styling**: Tailwind CSS & Glassmorphism
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting**: Ready for Vercel
