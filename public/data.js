import {
  IconCode, 
  IconPalette, 
  IconPhone, 
  IconSearch, 
  IconShield, 
  IconWavesElectricity,
  IconMessages,
  IconUserCheck,
  IconWorldCode,
  IconShoppingCart
} from "@tabler/icons-react";

export const brands = [
  { id: 1, name: "TechCorp", logo: "/images/brands.png" },
  { id: 2, name: "InnovateLab", logo: "/images/brands1.png" },
  { id: 3, name: "StartupX", logo: "/images/brands2.png" },
  { id: 4, name: "DigitalFlow", logo: "/images/brands3.png" },
  { id: 5, name: "CloudSync", logo: "/images/brands4.png" },
  { id: 6, name: "DataVision", logo: "/images/brands5.png" },
  { id: 7, name: "WebForce", logo: "/images/brands4.png" },
  { id: 8, name: "AppMaster", logo: "/images/brands3.png" },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/images/project.jpg",
    tech: ["Next.js", "Shopify"],
    description: "Modern e-commerce solution with advanced features",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    image: "/images/project1.png",
    tech: ["React", "Node.js"],
    description: "Comprehensive analytics dashboard for businesses",
  },
  {
    id: 3,
    title: "Mobile App",
    image: "/images/project2.jpg",
    tech: ["React Native", "Firebase"],
    description: "Cross-platform mobile application",
  },
  {
    id: 4,
    title: "Corporate Website",
    image: "/images/project3.jpg",
    tech: ["Next.js", "Tailwind"],
    description: "Professional corporate website with CMS",
  },
]

export const technologies = ["React", "Node.js", "TypeScript", "CSS", "Next.js"];

export const whyChooseUs = [
  {
    icon: <IconWavesElectricity className="h-8 w-8" />,
    title: "Speed Optimization",
    description: "Lightning-fast websites that load in under 2 seconds",
  },
  {
    icon: <IconSearch className="h-8 w-8" />,
    title: "SEO Optimization",
    description: "Built-in SEO best practices for maximum visibility",
  },
  {
    icon: <IconShield className="h-8 w-8" />,
    title: "Security First",
    description: "Enterprise-grade security measures implemented",
  },
  {
    icon: <IconPhone className="h-8 w-8" />,
    title: "Mobile Responsive",
    description: "Perfect experience across all devices and screen sizes",
  },
  {
    icon: <IconPalette className="h-8 w-8" />,
    title: "Custom Design",
    description: "Unique designs tailored to your brand identity",
  },
  {
    icon: <IconCode className="h-8 w-8" />,
    title: "Clean Code",
    description: "Maintainable, scalable, and well-documented code",
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    rating: 5,
    quote:
      "techwithinnovation transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
    avatar: "/images/avatar.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "StartupX",
    rating: 5,
    quote:
      "Working with this team was a game-changer for our startup. They delivered a scalable solution that grew with our business.",
    avatar: "/images/avatar1.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "DigitalFlow",
    rating: 5,
    quote:
      "The level of professionalism and technical expertise is unmatched. Our e-commerce platform performs flawlessly.",
    avatar: "/images/avatar2.png",
  },
  {
    id: 4,
    name: "David Thompson",
    company: "CloudSync",
    rating: 5,
    quote:
      "From concept to deployment, the entire process was smooth and transparent. Highly recommend their services.",
    avatar: "/images/avatar5.png",
  },
  {
    id: 5,
    name: "Lisa Wang",
    company: "DataVision",
    rating: 5,
    quote:
      "They didn't just build our app, they understood our vision and brought it to life with incredible precision.",
    avatar: "/images/avatar1.png",
  },
]
export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including Next.js, React, Node.js, TypeScript, and various CMS platforms like Shopify and WordPress.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, but most websites are completed within 2-4 weeks, while more complex applications may take 6-12 weeks.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, and content updates.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "We implement SEO best practices during development and can connect you with our marketing partners for ongoing campaigns.",
  },
  {
    question: "What's your pricing structure?",
    answer:
      "Our pricing is project-based and depends on scope and complexity. We provide detailed quotes after understanding your specific requirements.",
  },
]

export const ourServices = [
  {
    icon: <IconWorldCode className="h-8 w-8" />,
    title: "Web Design & Development",
    description: "Modern, high-performance websites tailored to your business needs",
  },
  {
    icon: <IconPalette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "User-centric interfaces that are both functional and beautiful",
  },
  {
    icon: <IconUserCheck className="h-8 w-8" />,
    title: "Virtual Coaching",
    description: "Expert guidance to help you grow your digital presence effectively",
  },
  {
    icon: <IconMessages className="h-8 w-8" />,
    title: "Bulk SMS Integration",
    description: "Seamless B2B & B2C messaging solutions for real-time engagement",
  },
  {
    icon: <IconShoppingCart className="h-8 w-8" />,
    title: "E-commerce Solutions",
    description: "Custom online store development with secure payment and order management",
  },
];
