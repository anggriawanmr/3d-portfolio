import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  wordpress,
  keywords,
  wahana,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Wordpress Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  {
    name: 'wordpress',
    icon: wordpress,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Wahana Wira Persada',
    icon: wahana,
    iconBg: '#E6DEDD',
    date: 'January 2022 - February 2023',
    points: [
      'Utilized my skills in WordPress, HTML, CSS, and Elementor to deliver effective and efficient websites for clients. ',
      'Developing and maintaining websites, ensuring the highest level of functionality and usability.',
      'Learned to work effectively in a fast-paced environment. With a strong work ethic and a passion for technology.',
    ],
  },
  {
    title: 'Customer Service Representative',
    company_name: 'Keywords Studios',
    icon: keywords,
    iconBg: '#E6DEDD',
    date: 'July 2016 - Feb 2023',
    points: [
      'Honed my skills in problem-solving, communication, and conflict resolution.',
      'Responsible for providing exceptional customer service to clients and handling a wide range of inquiries and issues.',
      'Developed a strong understanding of the company`s products and services and worked to continuously improve my knowledge and understanding of the industry. ',
      'With a passion for helping others and a commitment to providing the best possible customer experience, I have a proven track record of success and am eager to bring my skills to a new challenge.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Refine Dashboard',
    description:
      'Full-stack MERN dashboard application with complete CRUD functionality on properties, authentication using Google Login, pagination, sorting, filtering on properties.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'materialui',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/anggriawanmr/refine_dashboard_client',
  },
  {
    name: 'Crowdfunding App',
    description:
      'A Web3 Blockchain Crowdfunding Platform with a stunning design, connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum through the blockchain network, writing solidity code, and, most importantly, the ability to create create, view, and donate to crowdfunding campaigns directly through the blockchain.',
    tags: [
      {
        name: 'thirdweb',
        color: 'blue-text-gradient',
      },
      {
        name: 'hardhat',
        color: 'green-text-gradient',
      },
      {
        name: 'ethers',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/anggriawanmr/crowdfunding',
  },
  {
    name: 'A Spotify Clone',
    description:
      'A fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'rapidapi',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/anggriawanmr/lyriks',
  },
];

export { services, technologies, experiences, testimonials, projects };
