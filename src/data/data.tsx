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
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/browfique.png';
import porfolioImage2 from '../images/portfolio/face2une_2.jpg';
import porfolioImage3 from '../images/portfolio/hl-back.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.png';
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
  title: 'Raiden0456 Resume',
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

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Vrezh Babakekhian.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Barcelona/Yerevan based <strong className="text-stone-100">Full Stack Software Engineer</strong>,
        currently working at{' '}
        <strong className="text-stone-100">
          <a href="https://www.face2une.com/">Face2Une</a>
        </strong>{' '}
        as a lead CRM developer.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can find me in <strong className="text-stone-100">Barcelona</strong>, exploring city
        on my <strong className="text-stone-100">OneWheel</strong>, or sitting at home chilling and playing videogames.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Resume_V2.pdf',
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
  description: `A passionate Full Stack developer from Armenia/Russia. 
  Committed to utilizing my skills to further the mission of a company. 
  Have a great passion towards programming and possess an ability to work under stress.
  Friendly, easily work myself into the mix.`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona, BCN', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Armenian / Russian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motocross, snowboard, EV boards, videogames, bass guitar', Icon: SparklesIcon},
    {
      label: 'Study',
      text: 'Higher School of Economics(HSE Moscow), London School of Economics(LSE London)',
      Icon: AcademicCapIcon,
    },
    {label: 'Employment', text: 'Face2Une™ remote', Icon: OfficeBuildingIcon},
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
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'SAAS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'mySQL & PostgreSQL',
        level: 7,
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
    title: 'Face2Une',
    description: 'Developing Face2Une CRM.',
    url: 'https://www.face2une.com/',
    image: porfolioImage2,
  },
  {
    title: 'Highway logistic group',
    description: 'Devepoled CRM system for an international logistics company.',
    url: 'https://hl-group.ru/',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2008 - June 2019',
    location: 'Vladivostok',
    title: 'School 13 with deep learning English course',
    content: <p>Learned fluent English</p>,
  },
  {
    date: 'September 2019 - July 2023',
    location: 'Moscow - remote',
    title: 'Higher School of Economics',
    content: (
      <p>Currently studying on double degree Data Scientist program, together with London School of Economics(LSE).</p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2020 - September 2020',
    location: 'ООО "Kinoprokat", "Moscow" cinema',
    title: 'System administrator assistant',
    content: <p>Assisted System administrator with maintaining Cinema's Database.</p>,
  },
  {
    date: 'January 2022 - August 2022',
    location: 'Highway logistic group',
    title: 'PhP back end developer',
    content: (
      <ul>
        <li>Maintained MySQL Database.</li>
        <li>Modified/Created new, sections in relational database.</li>
        <li>Implemented new features, complex classes and controllers for the company's own CRM system.</li>
        <li>Was responsible for code debugging.</li>
        <li>Managed migration from PhP version 5 to 7.4</li>
        <li>
          Closely cooperated with front end developers wherever there was a need to create from ground up a new section
          in the system.
        </li>
        <li>Worked on urgent front/back end features.</li>
      </ul>
    ),
  },
  {
    date: 'November 2022 - Present',
    location: 'Face2Une™',
    title: 'Lead Customer Relationship System developer',
    content: <p>Currently developing a complex CRM system (Node.js + React) for a beauty saloon.</p>,
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
      text: 'raidenwork@gmail.com',
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
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/raiden-babakekhian/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/raiden0456/'},
];
