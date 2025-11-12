import { 
  Wind, Zap, Shield, Users, BookOpen, Award, 
  Sun, Droplet, Building2, GraduationCap, Briefcase,
  Factory, Wrench, Lightbulb, Eye, Heart, Handshake, Target,
  Flame, Gem
} from 'lucide-react';

// Company Information
export const COMPANY_INFO = {
  name: "Kenstane Energy Ltd",
  tagline: "ENERGY LIMITED",
  phone: "+254 793 041 411",
  email: "info@kenstaneltd.com",
  website: "kenstaneenergyltd.co.ke",
  location: "Kiambu, Kenya"
};

// Navigation Items
export const NAV_ITEMS = [
  'Home', 'About', 'Training', 'Risk Engineering', 
  'Sectors', 'Resources', 'Case Studies', 'Blog', 'Contact'
];

// Hero Stats
export const HERO_STATS = [
  { num: "500+", label: "Professionals Trained", icon: Users },
  { num: "50+", label: "Corporate Clients", icon: Building2 },
  { num: "2+", label: "Years Experience", icon: Award },
  { num: "100%", label: "Industry Certified", icon: Shield }
];

// Core Values
export const CORE_VALUES = [
  { 
    icon: Shield, 
    title: "Integrity", 
    desc: "Ethical standards in all operations", 
    color: "from-blue-500 to-indigo-500" 
  },
  { 
    icon: Lightbulb, 
    title: "Innovation", 
    desc: "Pioneering energy solutions", 
    color: "from-amber-500 to-orange-500" 
  },
  { 
    icon: Handshake, 
    title: "Collaboration", 
    desc: "Strategic partnerships", 
    color: "from-emerald-500 to-teal-500" 
  },
  { 
    icon: Award, 
    title: "Excellence", 
    desc: "World-class service delivery", 
    color: "from-purple-500 to-pink-500" 
  },
  { 
    icon: Heart, 
    title: "Sustainability", 
    desc: "Environmental stewardship", 
    color: "from-green-500 to-emerald-500" 
  },
  { 
    icon: Target, 
    title: "Professionalism", 
    desc: "Highest industry standards", 
    color: "from-cyan-500 to-blue-500" 
  }
];

// Services
export const SERVICES = [
  { 
    icon: BookOpen, 
    title: "Training", 
    desc: "Specialized programs for graduates, 2-5 year professionals, and managers in CCGT, Solar, Wind, HSE, and CEng pathways",
    color: "from-emerald-500 to-teal-500",
    link: "/training"
  },
  { 
    icon: Shield, 
    title: "Risk Engineering", 
    desc: "Comprehensive site surveys, QRA, PML/EML assessment, and thermal drone inspections",
    color: "from-blue-500 to-indigo-500",
    link: "/risk-engineering"
  },
  { 
    icon: Flame, 
    title: "Fire Protection & Detection", 
    desc: "Design, installation, and maintenance of fire suppression and detection systems",
    color: "from-red-500 to-orange-500",
    link: "/contact"
  },
  {
    icon: Wrench,
    title: "Technical Support",
    desc: "Technical support for thermal imaging, solar power plants, wind, and electrical systems",
    color: "from-cyan-500 to-blue-500",
    link: "/contact"
  }
];

// Energy Types
export const ENERGY_TYPES = [
  { icon: Sun, name: "Solar Power", color: "from-yellow-400 to-orange-500" },
  { icon: Wind, name: "Wind Energy", color: "from-blue-400 to-cyan-500" },
  { icon: Droplet, name: "Hydropower", color: "from-blue-600 to-indigo-600" },
  { icon: Zap, name: "Geothermal", color: "from-red-500 to-orange-600" }
];

// Training Programs
export const TRAINING_PROGRAMS = [
  {
    title: "CCGT Power Plant Training",
    audience: "Insurers, Operators, Engineers",
    duration: "4-6 Weeks",
    level: "Professional",
    color: "emerald"
  },
  {
    title: "Solar & Wind Power Plant Risk Training",
    audience: "Risk Engineers, Project Managers",
    duration: "4 Weeks",
    level: "Advanced",
    color: "blue"
  },
  {
    title: "Graduate Pathway to CEng",
    audience: "Fresh Graduates",
    duration: "6-12 Months",
    level: "Entry Level",
    color: "amber"
  },
  {
    title: "HSE & Process Safety",
    audience: "Safety Officers, Engineers",
    duration: "2-4 Weeks",
    level: "Professional",
    color: "purple"
  }
];

// Risk Engineering Services
export const RISK_SERVICES = [
  "On-site risk survey of power plants",
  "On-site mining assessment",
  "On-site commercial property inspection",
  "On-site oil & gas facility evaluation"
];

// Sectors We Serve
export const SECTORS = [
  { 
    icon: Factory, 
    name: "Power Generation", 
    desc: "CCGT, Hydro, Solar, Wind",
    color: "from-emerald-500 to-teal-500"
  },
  { 
    icon: Building2, 
    name: "Insurance & Reinsurance", 
    desc: "Risk Assessment & Advisory",
    color: "from-blue-500 to-indigo-500"
  },
  { 
    icon: Wrench, 
    name: "Engineering Consultancies", 
    desc: "Technical Support Services",
    color: "from-amber-500 to-orange-500"
  },
  { 
    icon: GraduationCap, 
    name: "Universities", 
    desc: "Academic Partnerships",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Gem,
    name: "Mining",
    desc: "Risk engineering, safety management, and asset integrity for mining sites",
    color: "from-amber-600 to-orange-600"
  },
  {
    icon: Flame,
    name: "Oil & Gas",
    desc: "Risk assessments and training across upstream, midstream, and downstream operations",
    color: "from-red-600 to-orange-600"
  }
];

// Case Studies
export const CASE_STUDIES = [
  {
    title: "CCGT Plant Risk Survey",
    client: "London Reinsurer",
    description: "Comprehensive risk assessment of a 500MW combined cycle gas turbine facility",
    outcome: "Identified critical vulnerabilities, resulting in 30% premium reduction",
    image: "🏭",
    tags: ["Risk Assessment", "CCGT", "Insurance"]
  },
  {
    title: "Graduate CEng Program",
    client: "Kenyan Utility Company",
    description: "Developed customized pathway program for 25 engineering graduates",
    outcome: "100% employment rate within 6 months of program completion",
    image: "🎓",
    tags: ["Training", "CEng", "Graduate Program"]
  },
  {
    title: "Solar Farm Risk Analysis",
    client: "East African Developer",
    description: "Pre-construction risk assessment for 50MW solar installation",
    outcome: "Risk mitigation strategies saved $2M in potential losses",
    image: "☀️",
    tags: ["Solar", "Risk Analysis", "Renewable Energy"]
  }
];

// Blog Topics
export const BLOG_POSTS = [
  {
    title: "What Makes a Power Plant Insurable?",
    excerpt: "Understanding the key factors insurers consider when evaluating power generation facilities...",
    date: "2025-09-15",
    category: "Risk Engineering",
    readTime: "5 min read"
  },
  {
    title: "Qualitative vs Quantitative Risk in Engineering",
    excerpt: "Exploring the methodologies and applications of different risk assessment approaches...",
    date: "2025-09-10",
    category: "Technical",
    readTime: "7 min read"
  },
  {
    title: "Training Engineers for the Future Energy Mix",
    excerpt: "How modern training programs prepare professionals for renewable energy transition...",
    date: "2025-09-05",
    category: "Training",
    readTime: "6 min read"
  },
  {
    title: "Kenya's Vision 2030 and Renewable Energy",
    excerpt: "Aligning workforce development with national sustainable energy goals...",
    date: "2025-08-28",
    category: "Industry Insights",
    readTime: "8 min read"
  }
];

// Resources
export const RESOURCES = [
  {
    title: "QRA Methodology Guide",
    type: "PDF",
    size: "2.5 MB",
    description: "Comprehensive guide to Quantitative Risk Assessment"
  },
  {
    title: "Risk Rating Tables",
    type: "Excel",
    size: "850 KB",
    description: "Standardized risk scoring templates"
  },
  {
    title: "HSE Inspection Checklist",
    type: "PDF",
    size: "1.2 MB",
    description: "Complete health, safety, and environment checklist"
  },
  {
    title: "CEng Pathway Roadmap",
    type: "PDF",
    size: "3.1 MB",
    description: "Step-by-step guide to Chartered Engineer status"
  }
];