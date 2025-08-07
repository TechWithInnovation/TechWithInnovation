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

export const navItems = [
  {
    label: "Services",
    href: "./#services"
  },
  {
    label: "Projects",
    href: "./projects"
  },
  {
    label: "About Us",
    href: "./#why-choose-us"
  },
  {
    label: "Team",
    href: "./#team"
  }
];
export const otherNavItems = [
  {
    label: "FAQs",
    href: "./#faqs"
  }
];
export const brands = [
  {
    id: 1,
    name: "TechCorp",
    logo: "/images/brands.png"
  },
  {
    id: 2,
    name: "InnovateLab",
    logo: "/images/brands1.png"
  },
  {
    id: 3,
    name: "StartupX",
    logo: "/images/brands2.png"
  },
  {
    id: 4,
    name: "DigitalFlow",
    logo: "/images/brands3.png"
  },
  {
    id: 5,
    name: "CloudSync",
    logo: "/images/brands4.png"
  },
  {
    id: 6,
    name: "DataVision",
    logo: "/images/brands5.png"
  },
  {
    id: 7,
    name: "WebForce",
    logo: "/images/brands4.png"
  },
  {
    id: 8,
    name: "AppMaster",
    logo: "/images/brands3.png"
  }
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/images/project.jpg",
    tech: ["Next.js", "Shopify"],
    metadesc:
      "Scalable, secure e-commerce platform with Shopify integration for seamless shopping.",
    description:
      "A robust and scalable e-commerce platform designed to handle high traffic and provide a seamless shopping experience. Features include secure payment gateways, product management, user authentication, and a responsive design for all devices. Built with Next.js for server-side rendering and optimized performance, integrated with Shopify's powerful backend for product and order management."
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    image: "/images/project1.png",
    tech: ["React", "Node.js"],
    metadesc:
      "Real-time SaaS dashboard offering analytics, customizable reports, and user management.",
    description:
      "An intuitive and comprehensive analytics dashboard for businesses to visualize key performance indicators. This SaaS solution offers real-time data updates, customizable reports, user role management, and a clean, modern UI. Developed using React for a dynamic frontend and Node.js with Express for a fast and efficient backend API."
  },
  {
    id: 3,
    title: "Mobile App",
    image: "/images/project2.jpg",
    tech: ["React Native", "Firebase"],
    metadesc:
      "Cross-platform mobile app connecting users to local services with real-time features.",
    description:
      "A cross-platform mobile application for both iOS and Android, designed to connect users with local services. Features include geolocation, in-app messaging, user profiles, and review systems. Built with React Native for a single codebase and Firebase for real-time database, authentication, and cloud functions, ensuring a smooth and reliable user experience."
  },
  {
    id: 4,
    title: "Corporate Website",
    image: "/images/project3.jpg",
    tech: ["Next.js", "Tailwind"],
    metadesc:
      "Modern corporate website with fast performance and SEO-friendly design.",
    description:
      "A professional and engaging corporate website designed to showcase company services, portfolio, and team. This site features a modern, minimalist aesthetic, fast loading times, and a user-friendly content management system. Developed with Next.js for optimal SEO and performance, and styled with Tailwind CSS for a highly customizable and responsive design."
  },
  {
    id: 5,
    title: "Healthcare Portal",
    image: "/images/project1.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    metadesc:
      "Secure healthcare portal enabling patient management and appointment scheduling.",
    description:
      "A secure and user-friendly healthcare portal for patient management and appointment scheduling. Features include secure data handling, doctor-patient communication, and electronic health records integration. Built with Next.js and TypeScript for robust development, backed by a PostgreSQL database for reliable data storage."
  },
  {
    id: 6,
    title: "Fintech Dashboard",
    image: "/images/project.jpg",
    tech: ["React", "GraphQL", "Node.js"],
    metadesc:
      "Advanced fintech dashboard for real-time financial insights and portfolio management.",
    description:
      "An advanced fintech dashboard providing real-time financial data visualization and portfolio management. Includes features like transaction tracking, investment analysis, and secure user authentication. Developed with React for an interactive UI, GraphQL for efficient data fetching, and Node.js for the backend services."
  },
  {
    id: 7,
    title: "Educational Platform",
    image: "/images/project2.jpg",
    tech: ["Next.js", "Strapi", "MongoDB"],
    metadesc:
      "Interactive educational platform with courses, quizzes, and personalized learning.",
    description:
      "An interactive online educational platform offering courses, quizzes, and progress tracking. Features include content management, user enrollment, and a personalized learning experience. Built with Next.js for a fast frontend, Strapi as a headless CMS, and MongoDB for flexible data storage."
  },
  {
    id: 8,
    title: "Real Estate Marketplace",
    image: "/images/project3.jpg",
    tech: ["React", "Firebase", "Mapbox"],
    metadesc:
      "Dynamic real estate marketplace with interactive maps and secure communication.",
    description:
      "A dynamic real estate marketplace connecting buyers and sellers with property listings. Features include advanced search filters, interactive maps, agent profiles, and secure messaging. Developed with React for a responsive interface, Firebase for backend services, and Mapbox for rich mapping functionalities."
  }
];

export const technologies = [
  "React",
  "Node.js",
  "TypeScript",
  "CSS",
  "Next.js"
];

export const whyChooseUs = [
  {
    icon: <IconWavesElectricity className="h-8 w-8" />,
    title: "Speed Optimization",
    description: "Lightning-fast websites that load in under 2 seconds"
  },
  {
    icon: <IconSearch className="h-8 w-8" />,
    title: "SEO Optimization",
    description: "Built-in SEO best practices for maximum visibility"
  },
  {
    icon: <IconShield className="h-8 w-8" />,
    title: "Security First",
    description: "Enterprise-grade security measures implemented"
  },
  {
    icon: <IconPhone className="h-8 w-8" />,
    title: "Mobile Responsive",
    description: "Perfect experience across all devices and screen sizes"
  },
  {
    icon: <IconPalette className="h-8 w-8" />,
    title: "Custom Design",
    description: "Unique designs tailored to your brand identity"
  },
  {
    icon: <IconCode className="h-8 w-8" />,
    title: "Clean Code",
    description: "Maintainable, scalable, and well-documented code"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Adeola Adebayo",
    company: "TechCorp Inc.",
    rating: 5,
    quote:
      "techwithinnovation transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
    avatar: "/images/avatar.png"
  },
  {
    id: 2,
    name: "Bola Oladipo",
    company: "StartupX",
    rating: 5,
    quote:
      "Working with this team was a game-changer for our startup. They delivered a scalable solution that grew with our business.",
    avatar: "/images/avatar1.png"
  },
  {
    id: 3,
    name: "Funmi Akinwale",
    company: "DigitalFlow",
    rating: 5,
    quote:
      "The level of professionalism and technical expertise is unmatched. Our e-commerce platform performs flawlessly.",
    avatar: "/images/avatar2.png"
  },
  {
    id: 4,
    name: "Tunde Balogun",
    company: "CloudSync",
    rating: 5,
    quote:
      "From concept to deployment, the entire process was smooth and transparent. Highly recommend their services.",
    avatar: "/images/avatar5.png"
  },
  {
    id: 5,
    name: "Kemi Afolabi",
    company: "DataVision",
    rating: 5,
    quote:
      "They didn't just build our app, they understood our vision and brought it to life with incredible precision.",
    avatar: "/images/avatar1.png"
  }
];

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including Next.js, React, Node.js, TypeScript, and various CMS platforms like Shopify and WordPress."
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, but most websites are completed within 2-4 weeks, while more complex applications may take 6-12 weeks."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, and content updates."
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "We implement SEO best practices during development and can connect you with our marketing partners for ongoing campaigns."
  },
  {
    question: "What's your pricing structure?",
    answer:
      "Our pricing is project-based and depends on scope and complexity. We provide detailed quotes after understanding your specific requirements."
  }
];

export const ourServices = [
  {
    icon: <IconWorldCode className="h-8 w-8" />,
    title: "Web Design & Development",
    description:
      "Modern, high-performance websites tailored to your business needs"
  },
  {
    icon: <IconPalette className="h-8 w-8" />,
    title: "UI/UX Design",
    description:
      "User-centric interfaces that are both functional and beautiful"
  },
  {
    icon: <IconMessages className="h-8 w-8" />,
    title: "Bulk SMS Integration",
    description:
      "Seamless B2B & B2C messaging solutions for real-time engagement"
  },
  {
    icon: <IconShoppingCart className="h-8 w-8" />,
    title: "E-commerce Solutions",
    description:
      "Custom online store development with secure payment and order management"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "AbdulFatah Shokunbi",
    role: "Founder & CEO | Lead Software Engineer",
    image: "/images/ceo.jpg",
    bio: "Visionary leader with 10+ years in tech innovation. Passionate about transforming businesses through cutting-edge digital solutions.",
    experience: "5",
    skills: ["Strategic Planning", "Business Development", "Team Leadership"],
    social: {
      linkedin: "https://linkedin.com/in/chineduokafor",
      twitter: "https://twitter.com/chineduokafor",
      github: "https://github.com/chineduokafor"
    }
  },
  {
    id: 2,
    name: "Ayatullah Khalid",
    role: "Lead Frontend Developer",
    image: "/images/avatar1.png",
    bio: "Frontend specialist with expertise in React, Next.js, and modern web technologies. Creates beautiful, performant user experiences.",
    skills: ["React", "Next.js", "TypeScript", "UI/UX Design"],
    experience: "4",
    social: {
      linkedin: "https://linkedin.com/in/ngozieze",
      twitter: "https://twitter.com/ngozieze",
      github: "https://github.com/ngozieze"
    }
  },
  {
    id: 3,
    name: "Rasaq Sulaimon",
    role: "Certified Project Manager",
    image: "/images/rasaq.jpg",
    bio: "Backend architecture expert specializing in scalable systems, APIs, and cloud infrastructure. Ensures robust and secure solutions.",
    skills: ["Node.js", "Python", "AWS", "Database Design"],
    experience: "6",
    social: {
      linkedin: "https://linkedin.com/in/emekanwosu",
      twitter: "https://twitter.com/emekanwosu",
      github: "https://github.com/emekanwosu"
    }
  },
  {
    id: 4,
    name: "Aisha Bello",
    role: "UI/UX Designer",
    image: "/images/avatar5.png",
    bio: "Creative designer focused on user-centered design principles. Transforms complex ideas into intuitive and engaging interfaces.",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    social: {
      linkedin: "https://linkedin.com/in/aishabello",
      twitter: "https://twitter.com/aishabello",
      dribbble: "https://dribbble.com/aishabello"
    }
  }
];

export const NGN_BUDGETS = [
  { min: 500000, max: 1000000 },
  { min: 1000001, max: 5000000 },
  { min: 5000001, max: 10000001 },
  { min: 10000001, max: null }
];
