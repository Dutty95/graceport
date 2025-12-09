import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Video, 
  Calendar, 
  FolderOpen, 
  FileText, 
  Layout, 
  Briefcase,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Grace Kazeem",
  role: "Social Media Manager & Virtual Assistant",
  email: "kazeemgrace413@gmail.com",
  phone: "+234 902 964 5062",
  phoneDisplay: "+234 902 964 5062",
  location: "Ilorin, Nigeria (Open to Remote Work)",
  whatsappLink: "https://wa.me/2349029645062",
  cvLink: "https://docs.google.com/document/d/1vWdNO6AzCCr1YmbYA2oYlMBh5zFS53aV0zkGcjhyRyM/edit?usp=drivesdk",
  tagline: "Bridging the gap between businesses and their target audiences with creative, data-driven strategies."
};

export const SOCIALS = [
  { name: "WhatsApp", icon: Phone, link: PERSONAL_INFO.whatsappLink },
  { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/gracie_the_special/?hl=en" }, // Placeholder as requested
  { name: "X (Twitter)", icon: Twitter, link: "#" }, // Placeholder as requested
  // TikTok icon usually requires custom SVG or FontAwesome, using Video icon as placeholder or omitting if strictly Lucide
];

export const CORE_SKILLS = [
  "Social Media Strategy",
  "Short-Form Video Editing",
  "Content Calendar Planning",
  "Brand Voice Adaptation",
  "Community Management",
  "Trendspotting",
  "Social Media Analytics",
  "Multi-Account Management"
];

export const TOOLS = [
  "Canva",
  "Microsoft Office Suite",
  "CapCut",
  "ChatGPT",
  "Asana",
  "Buffer",
  "Notion",
  "Slack",
  "Google Workspace"
];

export const EXPERIENCE = [
  {
    role: "Content & Social Media Manager",
    company: "Keyspace Investment Ltd",
    period: "June 2024 - Sept 2025",
    description: "Managed social media communication, produced high-engagement short-form content, and improved engagement across platforms by 45–60% through video-led strategies."
  },
  {
    role: "Social Media Manager / Content Creator",
    company: "Freelance",
    period: "2023 - Present",
    description: "Managed accounts for small businesses, created reels-style cuts using CapCut/Canva, and developed weekly content schedules to boost audience engagement."
  },
  {
    role: "Virtual Assistant",
    company: "TechCrush Africa",
    period: "July 2025 - Nov 2025",
    description: "Performed administrative tasks, managed emails and schedules, and supported backend content workflows using AI tools for efficiency."
  },
  {
    role: "Personal Assistant & Stage Manager",
    company: "Kwara Talent Harvest 5.0",
    period: "2023 - 2025",
    description: "Coordinated logistics, creative teams, and production flow for major creative events."
  }
];

export const PORTFOLIO_ITEMS = [
  {
    title: "Edited Videos Sample",
    description: "A collection of short-form videos featuring transitions, subtitles, and engaging cuts created with CapCut and Canva.",
    link: "https://drive.google.com/drive/folders/1OuRh9XRYrcFWlZ9LR5Pz-j5LhUThIDK3?usp=drive_link",
    icon: Video,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Social Media Content",
    description: "Samples of graphics, captions, and carousel posts designed to maintain brand consistency and drive engagement.",
    link: "https://drive.google.com/drive/folders/1TwTru17UiPdvUDx97_TJWKKVTfvPyVLu?usp=drive_link",
    icon: Layout,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Content Calendar Strategy",
    description: "A structured content calendar demonstrating planning, scheduling, and multi-platform organization in Canva.",
    link: "https://www.canva.com/design/DAG0dVgVtqc/yc2nOfvBQDCw323tgZnbDQ/edit?utm_content=DAG0dVgVtqc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    icon: Calendar,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Virtual Assistant Projects",
    description: "Documents and workflows showcasing administrative support, email management, and digital organization.",
    link: "https://drive.google.com/drive/folders/1b8ooIg75av1Ht9ta-B01WTR2cqDOYkVl?usp=drive_link",
    icon: FolderOpen,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Client Onboarding Form",
    description: "A streamlined Google Form designed to support efficient client intake and project workflow processes.",
    link: "https://forms.gle/c6FuB1S96xkuf1KD8",
    icon: FileText,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Full Portfolio Folder",
    description: "Access my complete curated collection of work including scripts, graphics, and more on Google Drive.",
    link: "https://drive.google.com/drive/folders/1YWa9sb8-hEd1o_SEyTRymWGG9KjxlEGB",
    icon: Briefcase,
    color: "bg-gray-100 text-gray-700"
  }
];