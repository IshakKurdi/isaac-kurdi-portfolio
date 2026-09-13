export interface Project {
  id: string;
  title: string;
  category: "AI Video" | "Video Editing" | "Food & Restaurant" | "Social Media" | "Advertising" | "Game Marketing";
  description: string;
  longDescription?: string;
  videoUrl?: string; // Path relative to /public e.g. "/videos/shawarma-podcast.mp4"
  thumbnailUrl: string; // Path relative to /public e.g. "/images/shawarma-podcast.jpg"
  tools: string[];
  client?: string;
  year: string;
  results?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  focus: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeText: string;
  imagePlaceholder?: string;
  certificateUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Isaac Ahmad Kurdi",
  logoText: "ISAAC KURDI",
  age: 19,
  location: "Lebanon",
  headline: "I Create Videos That Make People Stop Scrolling.",
  roles: ["Video Editor", "AI Video Creator", "Digital Marketer"],
  bioShort:
    "I create engaging short-form videos, AI-powered content, social media creatives and marketing campaigns using Adobe Premiere Pro, After Effects, CapCut, and Photoshop.",
  bioFull: [
    "I am Isaac Ahmad Kurdi, a 19-year-old creative professional and university student based in Lebanon working across video editing, AI content creation, digital marketing, design, and game/app marketing.",
    "I specialize in high-impact video editing and post-production using Adobe Premiere Pro, Adobe After Effects, CapCut Pro, and Adobe Photoshop, crafting videos engineered for high retention and engagement.",
    "Unlike traditional creators who focus solely on theory, I have hands-on experience building and marketing my own projects from scratch. As the founder of independent game studio Fun Forge Labs, I have developed, launched, and marketed mobile games, handling everything from creative direction to ASO and paid advertising campaigns.",
    "I thrive at the intersection of creativity, technology, and performance marketing—helping brands and businesses stand out with thumb-stopping video content and AI-driven growth strategies."
  ],
  availability: "Available for freelance projects",
  studioName: "Fun Forge Labs",
  contact: {
    email: "isaac.elkurdi2@gmail.com",
    phone: "+961 78 786 810",
    whatsapp: "https://wa.me/96178786810",
    linkedin: "https://www.linkedin.com/in/isaac-kurdi-82118b382/",
    instagram: "https://instagram.com/PLACEHOLDER",
    tiktok: "https://tiktok.com/@PLACEHOLDER",
    youtube: "https://youtube.com/@PLACEHOLDER",
    github: "https://github.com/PLACEHOLDER"
  },
  featuredHeroVideo: "/videos/hero-featured.mp4",
  featuredHeroPoster: "/images/hero-poster.jpg"
};

export const SHOW_STATS_SECTION = true; // Set to false to hide credibility statistics

export const STATS = [
  { value: "50+", label: "Videos Produced", icon: "Video" },
  { value: "3+", label: "Mobile Games Launched", icon: "Gamepad2" },
  { value: "6+", label: "Industry Certifications", icon: "Award" },
  { value: "5+", label: "Content Categories", icon: "Layers" }
];

export const PROJECTS: Project[] = [
  {
    id: "shawarma-podcast",
    title: "Shawarma Podcast AI Campaign",
    category: "AI Video",
    description:
      "An AI-powered comedic short-form concept created for a Lebanese restaurant. Concept, visual direction, AI generation, editing, and sound design.",
    longDescription:
      "This project combined advanced Generative AI workflows with hyper-local comedy to craft a viral short-form video campaign for a Lebanese restaurant. From writing prompts and generating character avatars to lip-sync timing, fast-paced editing, and sound design, this piece was engineered to maximize retention and shareability on TikTok and Instagram Reels.",
    videoUrl: "https://www.youtube.com/shorts/rH8IiFPYyOQ",
    thumbnailUrl: "/images/shawarma-podcast.jpg",
    tools: ["AI Video Gen", "Midjourney", "ElevenLabs", "Premiere Pro", "CapCut"],
    client: "Lebanese Restaurant Concept",
    year: "2025",
    results: "High engagement & viral reach on short-form platforms",
    featured: true
  },
  {
    id: "restaurant-food-content",
    title: "Satisfying Culinary Content & Reels",
    category: "Food & Restaurant",
    description:
      "High-energy food videos, satisfying culinary animations, promotional teasers, and social media content for dining establishments.",
    longDescription:
      "A series of high-impact promotional videos crafted specifically for food and beverage brands. Focused on close-up visuals, color grading, sound design (ASMR cooking audio), and quick cuts tailored for modern Instagram Reels and TikTok algorithms.",
    videoUrl: "https://www.youtube.com/shorts/JtVCfL2Xx3Y",
    thumbnailUrl: "/images/restaurant-food.jpg",
    tools: ["CapCut Pro", "Premiere Pro", "After Effects", "Color Grading"],
    client: "Food & Beverage Brands",
    year: "2025",
    results: "Enhanced brand appetite appeal and elevated profile views",
    featured: true
  },
  {
    id: "fun-forge-labs",
    title: "Fun Forge Labs - Mobile Game Showcase",
    category: "Game Marketing",
    description:
      "Independent game studio portfolio featuring Hoop Hero, Park Inc, and Lua Lander with end-to-end game dev, ASO, and promo videos.",
    longDescription:
      "As the founder of Fun Forge Labs, I directed both the game design and the marketing strategies for titles including Hoop Hero, Park Inc, and Lua Lander. This involved creating gameplay trailer videos, store screenshots, App Store Optimization (ASO), and high-converting UA (User Acquisition) video ads.",
    videoUrl: "https://www.youtube.com/shorts/OnvsXosjsv4",
    thumbnailUrl: "/images/funforge-games.jpg",
    tools: ["Unity", "C#", "Blender", "ASO Keywords", "Meta Ads"],
    client: "Fun Forge Labs (Self-Published)",
    year: "2024 - Present",
    results: "Multiple self-published mobile titles with dedicated user acquisition campaigns",
    featured: true
  },
  {
    id: "game-trailer-hh",
    title: "Hoop Hero - Gameplay Trailer & UA Ad",
    category: "Game Marketing",
    description:
      "High-energy mobile gameplay preview and user acquisition ad created for Hoop Hero by Fun Forge Labs.",
    longDescription:
      "Designed to maximize click-through rate (CTR) and app store conversion. Features fast-paced gameplay action, dynamic captions, and sound effects tailored for mobile ad platforms.",
    videoUrl: "https://www.youtube.com/shorts/HHjLqiD4rFI",
    thumbnailUrl: "/images/funforge-games.jpg",
    tools: ["Unity", "CapCut", "ASO", "Meta Ads", "User Acquisition"],
    client: "Fun Forge Labs",
    year: "2025",
    results: "High engagement & conversion on mobile user acquisition campaigns",
    featured: true
  },
  {
    id: "game-trailer-pi",
    title: "Park Inc - Promotional Game Teaser",
    category: "Game Marketing",
    description:
      "Engaging mobile game teaser video showcasing puzzle mechanics and level challenges.",
    longDescription:
      "Promotional short-form ad engineered to drive App Store downloads for Park Inc. Built with attention hooks, satisfying game mechanics highlights, and clear call-to-actions.",
    videoUrl: "https://www.youtube.com/shorts/Nq56uM6cNiw",
    thumbnailUrl: "/images/funforge-games.jpg",
    tools: ["Unity", "Premiere Pro", "ASO", "TikTok Ads"],
    client: "Fun Forge Labs",
    year: "2025",
    results: "Boosted App Store impressions and player installs",
    featured: true
  },
  {
    id: "game-trailer-ll",
    title: "Lua Lander - Mobile Ad Creative",
    category: "Game Marketing",
    description:
      "Physics-based gameplay showcase and marketing creative for Lua Lander.",
    longDescription:
      "Creative promotional video highlighting Lua Lander's retro aesthetic, physics controls, and challenging gameplay elements tailored for social media ad feeds.",
    videoUrl: "https://www.youtube.com/shorts/of7rCngeDaw",
    thumbnailUrl: "/images/funforge-games.jpg",
    tools: ["Unity", "C#", "After Effects", "Google Ads"],
    client: "Fun Forge Labs",
    year: "2025",
    results: "Optimized user acquisition campaign performance",
    featured: true
  },
  {
    id: "social-media-viral-reels",
    title: "Short-Form Attention Ads & Creatives",
    category: "Social Media",
    description:
      "Attention-grabbing short-form video creatives engineered for high hook-rate and audience retention across platforms.",
    longDescription:
      "Designed specifically to overcome scrolling fatigue, these creatives incorporate dynamic captions, fast motion graphics, strategic sound effects, and clear call-to-actions to turn casual scrollers into engaged followers and customers.",
    videoUrl: "https://www.youtube.com/shorts/JtVCfL2Xx3Y",
    thumbnailUrl: "/images/social-creatives.jpg",
    tools: ["Premiere Pro", "After Effects", "Photoshop", "TikTok Ads Manager"],
    client: "Digital Brands & Creators",
    year: "2025",
    results: "Substantial increase in 3-second hook retention rate",
    featured: true
  },
  {
    id: "performance-ad-campaign",
    title: "Meta & Google Direct-Response Ads",
    category: "Advertising",
    description:
      "Performance-oriented video ads designed for Facebook, Instagram, and YouTube conversion campaigns.",
    longDescription:
      "End-to-end performance marketing video assets built around key psychological triggers: Hook, Problem, Solution, Social Proof, and CTA. Backed by Google & Meta advertising certification principles.",
    videoUrl: "https://www.youtube.com/shorts/1wxRBBMkaPA",
    thumbnailUrl: "/images/performance-ads.jpg",
    tools: ["Meta Ads Manager", "Google Ads", "Premiere Pro", "Canva"],
    client: "E-Commerce & Digital Products",
    year: "2025",
    results: "Optimized click-through rate (CTR) and lowered cost per acquisition",
    featured: true
  },
  {
    id: "promo-ad-creative",
    title: "High-Converting Promotional Ad Creative",
    category: "Advertising",
    description:
      "Dynamic short-form video advertisement crafted for digital audience retention and conversion.",
    longDescription:
      "Engaging advertising asset created to showcase product value quickly, drive strong viewer engagement, and deliver high return on ad spend (ROAS).",
    videoUrl: "https://www.youtube.com/shorts/fc8-rbtHqmU",
    thumbnailUrl: "/images/performance-ads.jpg",
    tools: ["CapCut Pro", "Premiere Pro", "Meta Ads", "TikTok Ads"],
    client: "Digital Brands & Products",
    year: "2025",
    results: "Increased conversion rates and audience engagement",
    featured: true
  },
  {
    id: "ai-brand-avatars",
    title: "AI Visual FX & Creative Concepts",
    category: "AI Video",
    description:
      "Next-generation AI visual effects, synthetic voiceovers, and experimental brand storytelling concepts.",
    longDescription:
      "Exploring the frontier of AI in video production by combining Generative AI avatars, custom voice clones, and motion tracking to produce high-budget aesthetic visuals at a fraction of traditional production costs.",
    videoUrl: "https://www.youtube.com/shorts/TfrykkD8Waw",
    thumbnailUrl: "/images/ai-visuals.jpg",
    tools: ["Runway Gen-2", "Midjourney", "Kling AI", "Premiere Pro"],
    client: "Creative Experimentation",
    year: "2025",
    results: "Pioneered cost-effective high-end visual storytelling",
    featured: true
  }
];

export const SERVICES: Service[] = [
  {
    id: "video-editing",
    title: "Video Editing",
    description:
      "Short-form videos, Reels, TikToks, promotional videos, seamless transitions, precise pacing, sound design, and kinetic typography.",
    iconName: "Video",
    tags: ["Reels", "TikTok", "Short-Form", "Pacing", "Sound Design"]
  },
  {
    id: "ai-video",
    title: "AI Video Creation",
    description:
      "AI-generated videos, creative concepts, visual effects, synthetic avatars, dynamic scripting, and AI-powered social media content.",
    iconName: "Sparkles",
    tags: ["Runway", "Midjourney", "ElevenLabs", "AI Concepts", "Generative FX"]
  },
  {
    id: "social-content",
    title: "Social Media Content",
    description:
      "Instagram, TikTok, and YouTube content designed specifically around attention retention, engagement triggers, and brand identity.",
    iconName: "Share2",
    tags: ["Content Strategy", "Hook Writing", "Brand Growth", "Viral Loops"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Meta Ads, Google Ads, keyword research, campaign strategy, audience targeting, and performance-oriented ad creatives.",
    iconName: "TrendingUp",
    tags: ["Meta Ads", "Google Ads", "CRO", "Funnel Optimization"]
  },
  {
    id: "game-marketing",
    title: "Game & App Marketing",
    description:
      "App Store Optimization (ASO), video ad creatives, launch strategies, and organic/paid marketing for mobile games and apps.",
    iconName: "Gamepad2",
    tags: ["ASO", "User Acquisition", "Mobile Game Ads", "App Promotion"]
  },
  {
    id: "creative-design",
    title: "Creative Design",
    description:
      "Social media graphics, promotional banners, Figma UI layouts, thumbnail designs, and visual brand assets.",
    iconName: "Palette",
    tags: ["Figma", "Photoshop", "Social Graphics", "Visual Assets"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Editing & Design Software",
    skills: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut / CapCut Pro", "Adobe Photoshop", "Figma", "Unity Engine"]
  },
  {
    category: "Video Production",
    skills: ["Video Editing", "Reels & Shorts", "TikTok Content", "Short-form Strategy", "Sound Design", "Motion Graphics"]
  },
  {
    category: "AI & Generative Tools",
    skills: ["AI Video Generation", "AI Creative Concepts", "AI Voiceovers & Audio", "Generative AI Workflows", "Prompt Engineering"]
  },
  {
    category: "Digital Marketing",
    skills: ["Meta Ads (FB/IG)", "Google Ads", "ASO (App Store Optimization)", "Keyword Research", "Social Media Strategy", "Ad Creative Direction"]
  },
  {
    category: "Development & Tech",
    skills: ["Unity Engine", "C# Programming", "Game Development", "Mobile Apps", "Web Development"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "freelance-editor-marketer",
    title: "Freelance Video Editor & Digital Marketer",
    company: "Independent Client Work",
    period: "2023 - Present",
    description:
      "Creating high-converting short-form videos, AI content, and performance ad campaigns for brands, restaurants, and digital creators across Lebanon and remotely.",
    focus: [
      "Short-form Video Editing & FX",
      "AI-Powered Content Generation",
      "Social Media Campaign Planning",
      "Meta & Google Ad Creatives"
    ]
  },
  {
    id: "fun-forge-labs",
    title: "Founder / Game Developer / Marketer",
    company: "Fun Forge Labs",
    period: "2023 - Present",
    description:
      "Independent mobile game studio. Created, published, and marketed mobile titles including Hoop Hero, Park Inc, and Lua Lander.",
    focus: [
      "Mobile Game Development (Unity & C#)",
      "App Store Optimization (ASO)",
      "User Acquisition & Gameplay Video Ads",
      "Social Media Marketing & Brand Assets"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-google-digital-marketing",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    year: "2024",
    badgeText: "Google Certified",
    imagePlaceholder: "/images/cert-google-fundamentals.jpg"
  },
  {
    id: "cert-meta-facebook-instagram",
    title: "Get Started with Advertising on Facebook and Instagram",
    issuer: "Meta / Coursera",
    year: "2024",
    badgeText: "Meta Certified",
    imagePlaceholder: "/images/cert-meta-ads.jpg"
  },
  {
    id: "cert-google-ads-display",
    title: "Google Ads Display Certification",
    issuer: "Google Skillshop",
    year: "2024",
    badgeText: "Google Certified",
    imagePlaceholder: "/images/cert-google-display.jpg"
  },
  {
    id: "cert-google-ads-apps",
    title: "Google Ads Apps Certification",
    issuer: "Google Skillshop",
    year: "2025",
    badgeText: "Google Certified",
    imagePlaceholder: "/images/cert-google-apps.jpg"
  },
  {
    id: "cert-mobile-app-marketing",
    title: "Mobile App Marketing 2025 — ASO, Advertising & Monetization",
    issuer: "Professional Certification",
    year: "2025",
    badgeText: "ASO & UA Specialist",
    imagePlaceholder: "/images/cert-mobile-marketing.jpg"
  },
  {
    id: "cert-ai-performance-ads",
    title: "AI-Powered Performance Ads Certification",
    issuer: "Digital Marketing Institute",
    year: "2025",
    badgeText: "AI Ads Certified",
    imagePlaceholder: "/images/cert-ai-ads.jpg"
  }
];
