import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import TelegramIcon from '../components/Icon/TelegramIcon';
import porfolioImage1 from '../images/portfolio/browfique.png';
import portfolioImage6 from '../images/portfolio/classy-english-anna.png';
import porfolioImage5 from '../images/portfolio/crossnetics-landing.png';
import porfolioImage2 from '../images/portfolio/facestellar.png';
import porfolioImage3 from '../images/portfolio/hl-landing.png';
import porfolioImage4 from '../images/portfolio/yaghtprogroup-mobile.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import heroVideo from '../videos/cozy-room.mp4';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Raiden0456',
  description: 'Resume of Vrezh Babakekhian, a Full Stack Software Engineer from Armenia/Russia.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  videoSrc: heroVideo,
  name: `I'm Vrezh Babakekhian.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Barcelona based <strong className="text-stone-100">Full Stack Software Engineer</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me in <strong className="text-stone-100">Barcelona</strong>, exploring city on my{' '}
        <strong className="text-stone-100">OneWheel</strong>, or sitting at home chilling and playing videogames.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Resume_V6.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Passionate Web Developer with expertise across all development stages. 
  Skilled in UI, testing, debugging, and technologies like Docker, Git, TypeScript, NestJS, and React. 
  Effective in both solo and team projects, committed to delivering standout web solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona, BCN', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Armenian / Russian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motocross, snowboard, EV boards, videogames, bass guitar', Icon: SparklesIcon},
    {
      label: 'Study',
      text: 'London School of Economics(LSE London), Higher School of Economics(HSE Moscow)',
      Icon: AcademicCapIcon,
    },
    {label: 'Employment', text: 'CROSSNETICS', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Russian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Armenian',
        level: 7,
      },
      {
        name: 'Spanish',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Astrojs',
        level: 7,
      },
      {
        name: 'Tailwind CSS',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
       {
        name: 'REST API',
        level: 10,
      },
      {
        name: 'Nest.js',
        level: 9,
      },
      {
        name: 'PHP',
        level: 6,
      },
      {
        name: 'Express.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Database management',
    skills: [
      {
        name: 'MySQL & PostgreSQL',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 6,
      },
      {
        name: 'Redis',
        level: 6,
      },
      {
        name: 'ElasticSearch',
        level: 5,
      },   
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'Linux',
        level: 10,
      },
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'AWS',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Browfique',
    description: 'Website for a beauty saloon.',
    url: 'https://www.browfique.com/',
    image: porfolioImage1,
  },
  {
    title: 'Classy English Anna',
    description: 'Information/contact website for an English tutor.',
    url: 'https://anna-home.vercel.app/',
    image: portfolioImage6,
  },
  {
    title: 'FaceStellar',
    description: 'Developed FaceStellar CRM.',
    url: 'https://facestellar.com/',
    image: porfolioImage2,
  },
  {
    title: 'Highway logistic group',
    description: 'Devepoled CRM system for an international logistics company.',
    url: 'https://hl-group.ru/',
    image: porfolioImage3,
  },
  {
    title: 'Yaght Pro Group',
    description: 'Landing website for yaght rental/sales/management agency.',
    url: 'https://www.yachtprogroup.com/',
    image: porfolioImage4,
  },
  {
    title: 'Crossnetics',
    description: 'Fullstack developer at CROSSNETICS.',
    url: 'https://crossnetics.io/',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2019 - July 2023',
    location: 'London/Remote',
    title: 'London School of Economics and Political Science',
    content: (
      <p>
        Double degree Data Scientist Bachelor program. Combines data science, machine learning, statistics and
        mathematics. The programme uses a rigorous approach, has a mathematical focus and involves applying data science
        to the social sciences.
      </p>
    ),
  },
  {
    date: 'September 2019 - July 2023',
    location: 'Moscow/On-site',
    title: 'Higher School of Economics',
    content: (
      <p>
        Double degree Data Scientist Bachelor program. The aim of this programme is to train analysts and data
        scientists who are experienced in modern methods of machine learning, software development, working with big
        data and developing analytical models for business. The programme is based on the successful experience of HSE
        University’s Bachelor’s programme in Applied Mathematics and Informatics and the longstanding work of the London
        School of Economics and Political Science (University of London).
      </p>
    ),
  },
  {
    date: 'September 2008 - June 2019',
    location: 'Vladivostok',
    title: 'School No. 13 with in-depth study of English language',
    content: (
      <p>
        School No. 13 is notable for its specialist program in English language studies, which focuses on a
        comprehensive curriculum that not only improves students' linguistic ability but also broadens their knowledge
        of English literature and cultures. Beyond typical classroom instruction, the school creates a stimulating
        learning environment through literary groups, cultural initiatives, and participation in national and
        international language competitions, with the goal of developing fluent and culturally aware English speakers.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2024 - January 2025',
    location: 'RedNeck Studio',
    title: 'Middle+ Fullstack Developer',
    content: (
      <ul className="list-disc">
        <li>
          Managed and supported numerous high-load Telegram Mini Apps, ensuring stability and scalability for over 3 million users.
        </li>
        <li>
          Developed multiple administrative panels using the Refine framework, enabling game designers to work with data without direct database access.
        </li>
        <li>
          Integrated over 10 advertising systems, supporting both frontend (React, TypeScript) and backend (C#/.NET) implementations.
        </li>
        <li>
          Implemented gRPC Streaming to efficiently handle large file uploads, breaking them into smaller batches for seamless data transfer.
        </li>
        <li>
          Optimized SQL queries and transactions to minimize database locks and enhance performance under high loads.
        </li>
        <li>
          Played a key role in the "DONT" project by utilizing modern frontend technologies to create intuitive and performant interfaces.
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2024 - August 2024',
    location: 'Kodix agency',
    title: 'Middle+ Backend Engineer & Architect',
    content: (
      <ul className="list-disc">
        <li>
          Designed and developed a highly customizable CMS for the AURUS automotive manufacturer, streamlining the configuration management process.
        </li>
        <li>
          Engineered backend architecture using NestJS, TypeScript, and TypeORM, ensuring scalability and maintainability.
        </li>
        <li>
          Optimized PostgreSQL database structure to support complex data operations efficiently.
        </li>
        <li>
          Automated parsing and editing of large JSON configurations (over 5,000 lines), reducing manual workload.
        </li>
        <li>
          Integrated third-party services, including email marketing solutions, enhancing the CMS's capabilities.
        </li>
      </ul>
    ),
  },
  {
    date: 'March 2023 - August 2024',
    location: 'CROSSNETICS',
    title: 'Full-stack Developer',
    content: (
      <ul className="list-disc">
        <li>
          Developed a comprehensive marketing web platform utilizing advanced AI algorithms and web3 technologies.
        </li>
        <li>
          Implemented automated project documentation and typization via tools like swagger for both backend and
          frontend that significantly boosted development process.
        </li>
        <li>
          Developed a RESTful API that handled over 1 million requests per day with response times under 200
          millisecond.
        </li>
        <li>Utilized a diverse tech stack including NestJS, Next.js, TypeScript, MySQL, Redis and ElasticSearch.</li>
        <li>
          Implemented a microservices architecture that improved system modularity and reduced dependencies between
          components.
        </li>
        <li>Optimized database queries to improve application performance and reduce response times by 10-25%.</li>
      </ul>
    ),
  },
  {
    date: 'November 2022 - June 2023',
    location: 'FaceStellar™',
    title: 'Lead Customer Relationship System developer',
    content: (
      <ul className="list-disc">
        <li>
          Developed complex CRM system from the ground up leveraging Node.js + Express and React that improved customer
          service efficiency by 30%.
        </li>
        <li>
          Created a Continuous Integration/Continuous Deployment (CI/CD) pipeline that allowed easy deployment process
        </li>
      </ul>
    ),
  },
  {
    date: 'January 2022 - August 2022',
    location: 'Highway logistic group',
    title: 'PhP back end developer',
    content: (
      <ul className="list-disc">
        <li>
          Oversaw the maintenance and optimization of MySQL databases, ensuring data integrity and performance
          enhancements, contributing to a more robust and reliable data management system.
        </li>
        <li>
          Developed and integrated new sections within the company's relational database architecture, leading to
          enhanced data organization and accessibility.
        </li>
        <li>
          Played a key role in the expansion and enhancement of the company's CRM system by implementing advanced
          features, complex classes, and controllers, resulting in a more dynamic and user-friendly platform.
        </li>
        <li>
          Led the debugging efforts for critical software components, identifying and resolving numerous issues, which
          increased system reliability by 15% and reduced downtime.
        </li>
        <li>
          Managed a migration of the company’s software stack from PHP version 5 to 7.4, ensuring compatibility and
          leveraging new features for a 40% improvement in system performance.
        </li>
        <li>
          Worked closely with front-end developers to architect and build new system sections from scratch, enhancing
          the user experience and interface functionality.
        </li>
        <li>
          Responded to high-priority development needs, efficiently delivering urgent front-end and back-end features
          that improved overall system responsiveness and user satisfaction by 50%.
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2020 - September 2020',
    location: 'ООО "Kinoprokat", "Moscow" cinema',
    title: 'System administrator assistant',
    content: <p>Assisted System administrator with maintaining Cinema's Database.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'SainDev',
      text: 'Had great time with Vrezh. Easy to work with, stubborn in a good way, and a very fun guy in general.',
      image: 'https://avatars.githubusercontent.com/u/1188424?v=4',
    },
    {
      name: 'Nani Babakekhian',
      text: 'Great communication, quick feedback and support for each project was a good surprise.',
      image:
        'http://static1.squarespace.com/static/5e77a8d31f1ca16b984e7d8c/t/5f2315f95dcf3778e4e4eaa6/1598456607711/%3F%3F%3F%3F%3F%3F_%3F%3F%3F%3F%3F%3F%3F%3F+%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+1.jpg?format=1500w',
    },
    {
      name: 'Sterio',
      text: 'Vrezh has great hard & soft skills. It was a pleasure to develop complex applications with him!',
      image: 'https://avatars.githubusercontent.com/u/55721185?v=4',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Hello there, here is my contact information. Feel free to contact me if you have any questions or job offers!',
  items: [
    {
      type: ContactType.Email,
      text: 'workraiden@gmail.com',
      href: 'mailto:workraiden@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Barcelona BCN, Catalonia',
      href: 'https://goo.gl/maps/c8YixQs86qwHe7tu7',
    },
    {
      type: ContactType.Github,
      text: 'Raiden0456',
      href: 'https://github.com/Raiden0456',
    },
    // {
    //   type: ContactType.Telegram,
    //   text: '@Raiden0456',
    //   href: 'https://t.me/Raiden0456',
    // },
    {
      type: ContactType.LinkedIn,
      text: 'Raiden0456',
      href: 'https://www.linkedin.com/in/raiden-babakekhian/',
    },
    {
      type: ContactType.Instagram,
      text: '@raiden0456',
      href: 'https://www.instagram.com/raiden0456/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Raiden0456'},
  //{label: 'Telegram', Icon: TelegramIcon, href: 'https://t.me/Raiden0456'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/raiden-babakekhian/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/raiden0456/'},
];
