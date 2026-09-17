import {
  Search,
  TrendingUp,
  Link2,
  FileText,
  BarChart3,
  Globe,
  Check,
  ArrowUpRight,
  Users,
  Target,
  Zap,
  LineChart,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export type Stat = {
  value: string;
  label: string;
  sub: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CaseStudy = {
  client: string;
  industry: string;
  image: string;
  challenge: string;
  result: string;
  metrics: { label: string; value: string }[];
  tags: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type WorkExperience = {
  avatar: string;
  company: string;
  role: string;
  date: string;
  image: string;
  description: string;
  metrics: { value: string; label: string }[];
};

export type CaseStudyCard = {
  avatar: string;
  company: string;
  role: string;
  description: string;
  metrics: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    icon: Search,
    title: 'Technical SEO Audits',
    description:
      'Deep-dive crawls that surface every indexation, schema, and Core Web Vitals issue blocking your rankings.',
    features: ['Full-site crawl & indexation map', 'Core Web Vitals remediation', 'Schema markup strategy'],
  },
  {
    icon: TrendingUp,
    title: 'Keyword Research & Strategy',
    description:
      'Intent-driven keyword maps that align content to every stage of the buyer journey and search demand.',
    features: ['Search intent mapping', 'Competitor gap analysis', 'Topic cluster architecture'],
  },
  {
    icon: FileText,
    title: 'Content & On-Page SEO',
    description:
      'Editorial briefs and on-page optimization that satisfy both algorithms and the humans reading your pages.',
    features: ['SERP-optimized content briefs', 'Internal linking strategy', 'Title & meta optimization'],
  },
  {
    icon: Link2,
    title: 'Link Building & Digital PR',
    description:
      'White-hat link acquisition through digital PR, broken link building, and HARO outreach that moves the needle.',
    features: ['Authority link outreach', 'Digital PR campaigns', 'Backlink gap analysis'],
  },
  {
    icon: Globe,
    title: 'Local & International SEO',
    description:
      'Multi-region strategies that win the map pack locally and scale across international search landscapes.',
    features: ['Google Business Profile optimization', 'Multi-region hreflang setup', 'Local citation management'],
  },
  {
    icon: BarChart3,
    title: 'SEO Analytics & Reporting',
    description:
      'Dashboards that connect organic search to revenue, so every decision is backed by data leadership trusts.',
    features: ['GA4 & Search Console setup', 'Custom Looker Studio dashboards', 'Rank tracking & alerts'],
  },
];

export const stats: Stat[] = [
  { value: '340%', label: 'Average organic traffic growth', sub: 'across 12-month engagements' },
  { value: '1,200+', label: 'Page-1 keyword rankings', sub: 'delivered for clients' },
  { value: '47M', label: 'Organic sessions driven', sub: 'in the last 24 months' },
  { value: '8 yrs', label: 'Hands-on SEO experience', sub: 'agency + in-house roles' },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'I start with a full technical crawl, competitor analysis, and keyword landscape map to understand where you stand and where the opportunities are.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'Together we define priorities — which pages to optimize, what content to create, and which technical fixes will deliver the fastest ROI.',
    icon: LineChart,
  },
  {
    number: '03',
    title: 'Execution & Optimization',
    description:
      'I work hands-on with your team — fixing technical issues, producing content briefs, building links, and refining on-page elements week by week.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'Measure & Scale',
    description:
      'Custom dashboards track rankings, traffic, and revenue. We double down on what works and pivot fast when the SERP landscape shifts.',
    icon: TrendingUp,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    client: 'Nordic Skincare Co.',
    industry: 'DTC E-commerce',
    image:
      'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    challenge:
      'A new DTC skincare brand with zero organic presence competing against established retailers on competitive product terms.',
    result:
      'Built a topic-cluster strategy and executed a 6-month content + link building program that established topical authority.',
    metrics: [
      { label: 'Organic traffic', value: '+520%' },
      { label: 'Revenue from organic', value: '$1.8M' },
      { label: 'Page-1 keywords', value: '340' },
    ],
    tags: ['Content Strategy', 'Link Building', 'Technical SEO'],
  },
  {
    client: 'FinTech B2B SaaS',
    industry: 'B2B SaaS',
    image:
      'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    challenge:
      'A B2B SaaS platform ranking for only a handful of bottom-funnel terms with high competition and long sales cycles.',
    result:
      'Re-architected the site into BOFU/MOFU/TOFU funnels, optimized product pages, and launched a comparison content engine.',
    metrics: [
      { label: 'Qualified leads', value: '+280%' },
      { label: 'Demo bookings', value: '+190%' },
      { label: 'Domain rating', value: '72' },
    ],
    tags: ['B2B SEO', 'Content Engine', 'Conversion Rate'],
  },
  {
    client: 'Urban Bites Chain',
    industry: 'Local / Multi-location',
    image:
      'https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    challenge:
      'A 24-location restaurant group with inconsistent local rankings and unoptimized Google Business Profiles.',
    result:
      'Standardized all 24 GBP listings, built location landing pages, and implemented a review generation system.',
    metrics: [
      { label: 'Map pack visibility', value: '+410%' },
      { label: 'Store visits (organic)', value: '+35%' },
      { label: 'Reviews generated', value: '2,400' },
    ],
    tags: ['Local SEO', 'GBP Optimization', 'Reputation Management'],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Lindqvist',
    role: 'VP Marketing',
    company: 'Nordic Skincare Co.',
    quote:
      "Walid didn't just improve our rankings — he built an organic growth engine that became our largest revenue channel. The dashboards alone paid for his retainer ten times over.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder & CEO',
    company: 'FinTech B2B SaaS',
    quote:
      "We went from barely ranking to dominating our category comparison pages. Walid's content briefs are so detailed our writers actually enjoy working from them.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'David Okafor',
    role: 'Operations Director',
    company: 'Urban Bites Chain',
    quote:
      "Our franchisees saw foot traffic increase within weeks of the local SEO work. Walid's systematic approach made scaling across 24 locations feel effortless.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/32844866/pexels-photo-32844866.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export const workExperiences: WorkExperience[] = [
  {
    avatar: 'C',
    company: 'Coding Studio',
    role: 'SEO Specialist',
    date: 'Jul 2023 – Present · Full-time · Remote',
    image: 'https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'SEO setup and maintenance for Brand Hotto, Cyberstudio, Digivoz, and Coding Studio. Achieved top 3 rankings for competitive terms including "Kursus Excel" and related keywords.',
    metrics: [
      { value: '+312%', label: 'Organic Traffic' },
      { value: '40+', label: 'Keywords Top 3' },
      { value: '4', label: 'Brands Managed' },
    ],
  },
  {
    avatar: 'E',
    company: 'PT Eannovate Creative Technology',
    role: 'SEO Specialist',
    date: 'Feb 2022 – Mar 2023 · Contract · Remote',
    image: 'https://images.pexels.com/photos/6476256/pexels-photo-6476256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Website SEO maintenance including technical audits, article audits, toxic backlink removal, and error fixes. Also managed WordPress client website maintenance.',
    metrics: [
      { value: '+180%', label: 'Traffic Growth' },
      { value: '1,240', label: 'Keywords Ranked' },
      { value: '0.9M', label: 'Impressions' },
    ],
  },
  {
    avatar: 'T',
    company: 'TurnkeyID',
    role: 'SEO Specialist',
    date: 'Oct 2020 – Sep 2021 · Contract · Remote',
    image: 'https://images.pexels.com/photos/6248959/pexels-photo-6248959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'SEO strategy and execution for client projects. Developed and implemented comprehensive SEO campaigns that drove significant organic growth.',
    metrics: [
      { value: '+243%', label: 'Traffic' },
      { value: '8,600', label: 'Keywords' },
      { value: '4.1M', label: 'Impressions' },
    ],
  },
  {
    avatar: 'J',
    company: 'JT Digitally',
    role: 'SEO Specialist',
    date: 'Apr 2020 – Oct 2020 · Contract · Remote',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Early career SEO optimization, focusing on building strong foundations for organic growth across client websites.',
    metrics: [
      { value: '+162%', label: 'Traffic' },
      { value: '18,900', label: 'Keywords' },
      { value: '7.4M', label: 'Impressions' },
    ],
  },
];

export const caseStudyCards: CaseStudyCard[] = [
  {
    avatar: 'C',
    company: 'Coding Studio',
    role: 'SEO Specialist',
    description:
      'Multi-brand SEO management achieving top 3 rankings for competitive Indonesian keywords across 4 brand websites.',
    metrics: [
      { label: 'Organic Traffic', value: '+312%' },
      { label: 'Keywords Top 3', value: '40+' },
      { label: 'Brands Managed', value: '4' },
    ],
  },
  {
    avatar: 'E',
    company: 'Eannovate',
    role: 'SEO Specialist',
    description:
      'Comprehensive technical SEO overhaul including audit remediation, toxic backlink cleanup, and content optimization.',
    metrics: [
      { label: 'Traffic Growth', value: '+180%' },
      { label: 'Keywords Ranked', value: '1,240' },
      { label: 'Impressions', value: '0.9M' },
    ],
  },
  {
    avatar: 'T',
    company: 'TurnkeyID',
    role: 'SEO Specialist',
    description:
      'Full SEO strategy and execution for client projects, delivering substantial organic growth through data-driven approach.',
    metrics: [
      { label: 'Traffic Growth', value: '+243%' },
      { label: 'Keywords', value: '8,600' },
      { label: 'Impressions', value: '4.1M' },
    ],
  },
];

export const skills: Skill[] = [
  { name: 'Technical SEO', level: 95 },
  { name: 'Keyword Research', level: 92 },
  { name: 'Content Strategy', level: 88 },
  { name: 'Link Building / Digital PR', level: 90 },
  { name: 'GA4 & Looker Studio', level: 85 },
  { name: 'Local SEO', level: 93 },
];

export const tools = [
  'Ahrefs',
  'Semrush',
  'Google Search Console',
  'GA4',
  'Screaming Frog',
  'Looker Studio',
  'Surfer SEO',
  'Clearscope',
  'Schema.org',
  'Looker',
  'Hotjar',
  'BrightLocal',
];

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const contactInfo = [
  { icon: Linkedin, label: 'LinkedIn', value: 'Walid Syahri Tanzil', href: 'https://www.linkedin.com/in/walid-syahri-tanzil/' },
  { icon: Mail, label: 'Email', value: 'hello@walidseo.com', href: 'mailto:hello@walidseo.com' },
  { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia', href: '#' },
];

export const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/walid-syahri-tanzil/' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export { Check, ArrowUpRight, Users };
