export const personalInfo = {
  name: 'Bobby Goldsmith',
  title: 'Technical Architect & Automation Engineer',
  tagline: 'Building intelligent automation at the intersection of QA, DevOps, and AI.',
  email: 'bobby@bobbygoldsmith.dev',
  github: 'https://github.com/bobbyrgoldsmith',
  linkedin: 'https://www.linkedin.com/in/bobby-r-goldsmith/',
  location: 'Los Angeles, CA',
}

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Bash', 'SQL'],
  },
  {
    category: 'Test Automation',
    items: ['Playwright', 'Selenium', 'pytest', 'JMeter', 'MCPs'],
  },
  {
    category: 'DevOps & Infra',
    items: ['Docker', 'K8s', 'CI/CD', 'Jenkins', 'CircleCI', 'RHEL', 'Ansible'],
  },
  {
    category: 'AI & Automation',
    items: ['MCP Tools', 'n8n', 'LLM Integration', 'Agentic Testing'],
  },
  {
    category: 'Web & Data',
    items: ['Next.js', 'React', 'FastAPI', 'Snowflake', 'Azure Data Bricks'],
  },
  {
    category: 'Process',
    items: ['Scrum Master', 'Agile', 'JIRA', 'Confluence', 'Release Management'],
  },
]

export const projects = [
  {
    title: 'TestScout MCP Suite',
    description: 'QA intelligence MCP tools that give AI agents the power to diagnose errors, analyze performance, and generate test strategies via the Model Context Protocol.',
    accent: '#06b6d4',
    status: 'In Development',
    url: 'https://testscout.dev',
  },
  {
    title: 'LightScout',
    description: 'Chrome extension for real-time Core Web Vitals monitoring with actionable performance insights and historical tracking.',
    accent: '#10b981',
    status: 'Chrome Web Store',
    url: 'https://testscout.dev/lightscout',
  },
  {
    title: 'BugSnap',
    description: 'Browser extension that automatically captures comprehensive bug context — screenshots, console logs, network requests, and DOM state — when errors occur.',
    accent: '#3b82f6',
    status: 'In Development',
  },
  {
    title: 'LLM Web Scraper',
    description: 'CLI tool that uses LLMs to intelligently extract structured data from web pages using natural language instructions.',
    accent: '#8b5cf6',
    status: 'Complete',
    url: 'https://github.com/bobbyrgoldsmith',
  },
  {
    title: 'Autonomous Agent System',
    description: 'Self-hosted agent orchestration platform built on n8n and Docker, running on a dedicated home server for automated workflows.',
    accent: '#f97316',
    status: 'Production',
  },
  {
    title: 'NodeBridge Automation',
    description: 'Newsletter and consulting practice focused on QA automation, DevOps, and AI-powered testing for engineering teams.',
    accent: '#14b8a6',
    status: 'Active',
    url: 'https://nodebridge.dev',
  },
  {
    title: 'PDF Reactor',
    description: 'PDF intelligence platform for extracting, transforming, and analyzing document data using AI-powered processing pipelines.',
    accent: '#ef4444',
    status: 'Complete',
  },
  {
    title: 'Bashmatica Scripts',
    description: 'Collection of production-hardened Bash scripts for DevOps automation, QA workflows, and system administration tasks.',
    accent: '#22c55e',
    status: 'Open Source',
    url: 'https://github.com/bobbyrgoldsmith',
  },
]

export const experience = [
  {
    role: 'Principal Consultant',
    company: 'NodeBridge Automation Solutions',
    period: '2024 - Present',
    highlights: [
      'Founded automation consultancy delivering QA, DevOps, and AI integration solutions to engineering teams',
      'Building MCP-based QA intelligence tools (TestScout) for AI agent ecosystems',
      'Developing autonomous agent orchestration systems with n8n, Docker, and self-hosted infrastructure',
      'Publishing technical newsletter on automation engineering and AI-powered testing strategies',
    ],
  },
  {
    role: 'QA Lead',
    company: '4 Wheel Parts',
    period: '2020 - 2024',
    highlights: [
      'Led QA team overseeing quality for e-commerce platform serving millions of annual visitors',
      'Architected end-to-end test automation framework with Playwright, reducing regression cycle time by 60%',
      'Managed release processes across web, mobile, and API platforms with zero critical production incidents',
      'Drove adoption of Agile/Scrum practices as certified Scrum Master, improving sprint velocity by 35%',
    ],
  },
  {
    role: 'Senior QA Analyst',
    company: '4 Wheel Parts',
    period: '2017 - 2020',
    highlights: [
      'Built Selenium-based automation suite covering critical e-commerce workflows and checkout flows',
      'Implemented performance testing with JMeter, identifying and resolving bottlenecks before peak seasons',
      'Integrated QA processes into CI/CD pipelines with Jenkins, enabling continuous testing on every deploy',
    ],
  },
  {
    role: 'QA Analyst',
    company: '4 Wheel Parts',
    period: '2014 - 2017',
    highlights: [
      'Established structured QA processes for web application testing across desktop and mobile browsers',
      'Created comprehensive test plans and regression suites for platform migrations and feature releases',
      'Collaborated with development teams to implement defect tracking workflows in JIRA',
    ],
  },
  {
    role: 'Internet Operations Specialist',
    company: '4 Wheel Parts',
    period: '2012 - 2013',
    highlights: [
      'Managed day-to-day operations for e-commerce platform including content updates and catalog management',
      'Monitored site performance and availability, escalating issues and coordinating incident response',
      'Transitioned into QA role by identifying systematic testing gaps in the release process',
    ],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
