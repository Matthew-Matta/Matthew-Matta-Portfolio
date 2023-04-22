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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    carizon,
    mail,
    first,
    wrdsb,
    tjx,
    python,
    java,
    cplus,
    maskup,
    mywaste,
    tutorialroach,
    linkedin,
    github,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "Product Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cplus,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Software Developer Intern",
      company_name: "Carizon Family and Community Services",
      icon: carizon,
      iconBg: "#E6DEDD",
      date: "August 2021 - December 2021",
      points: [
        "Deployed a scalable production-grade Ticket Distribution system utilizing Java, C++, MongoDB and Node.js,achieving 20% application performance increase.",
        "Researched and implemented mathematical optimization concepts, creating an efficient transportation dataprocessing system leading to a 15% reduction in time","Articulated technical solutions to the front-end client while collaborating with back-end and database teams to handle obstacles in efficient data processing.",
      ],
    },
    {
      title: "Lead Student Programmer and Hardware Engineer",
      company_name: "2702 Rebels Robotics - FIRST Robotics",
      icon: first,
      iconBg: "#E6DEDD",
      date: "September 2019 - March 2022",
      points: [
        "Programmed robot using C++ alongside database to map and store data with 35% faster task completion time and 95% accuracy rate.", 
        "Demonstrated proficiency in Dijkstra’s algorithm by creating an optimized path-finding program, achieving a 10% reduction in both memory utilization and processing time.", 
        "Employed advanced design and fabrication techniques, leveraging SolidWorks for 3D printing, to assemble intricate robotic systems.",
      ],
    },
    {
      title: "Co-Founder and Executive Tutor",
      company_name: "Web Development Club - Laurel Heights Secondary School",
      icon: wrdsb,
      iconBg: "#E6DEDD",
      date: "September 2020 - May 2022",
      points: [
        "Co-led web development club and provided training in HTML/CSS, JavaScript, and React.",
        "Implemented educational programs resulting in 60% increase in club participation.",
        "Empowered 40+ students to build their portfolios by providing project-based learning opportunities.",
      ],
    },
    {
      title: "Sales Associate",
      company_name: "TJX Canada – Winners",
      icon: tjx,
      iconBg: "#E6DEDD",
      date: "August 2021 - February 2022",
      points: [
        "Provided training to 5 new employees on cash, floor, and in the back room.",
        "Assisted customers with their shopping needs while providing customer service and an excellent work ambiance.",
        "Achieved over $2000 in sales per day, through customer engagement and sharing product knowledge.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Matthew is one of the most hardworking individuals I have ever met. His ability technical skills are unmatched, which makes working alongside him a breeze.",
      name: "Hossam Aboueleinin",
      designation: "Student",
      company: "University Of Waterloo",
      image: "https://media.licdn.com/dms/image/D5635AQGNDfo40oD92w/profile-framedphoto-shrink_200_200/0/1671651053026?e=1682622000&v=beta&t=hC3yCJ6DrlkjnMb3FiiIn-O5LD0tEcXI2dwuLXaaZ7k",
    },
    {
      testimonial:
        "Matthew is a great asset to have on any team, extremely hardworking and knowledgeable in his work.",
      name: "Yash Sheth",
      designation: "Student",
      company: "University Of Waterloo",
      image: "https://media.licdn.com/dms/image/D5603AQGuSPjWR5o6FQ/profile-displayphoto-shrink_400_400/0/1676143849526?e=1687392000&v=beta&t=rDt9gdLbwnnLmF8OQdHORevBjE_1HA_I_K3omaGskZY",
    },
    {
      testimonial:
        "Matthew's contributions to any team are invaluable, as he possesses a remarkable work ethic and an impressive depth of knowledge in his field. ",
      name: "Nethara De Silva",
      designation: "Student",
      company: "University Of Waterloo",
      image: "https://media.licdn.com/dms/image/D5603AQEP8VyKxsc_7A/profile-displayphoto-shrink_400_400/0/1673747502124?e=1687392000&v=beta&t=bwj0S3Kf_QgzIpTM2LQKE5q-afq5BWaeYYbLZbmury8",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      image: linkedin,
      source_code_link: "https://www.linkedin.com/in/matthew-matta",

    },
    {
      name: "Github",
      image: github,
      source_code_link: "https://github.com/Matthew-Matta",

    },
  ];

  const projects = [
    {
      name: "MaskUP",
      description:
        "Uses Video Surveillance Camera Footage To Capture Images Of People Who Are Not Wearing Masks.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: maskup,
      source_code_link: "https://github.com/Matthew-Matta/mask-detector",
    },
    {
      name: "Mywaste",
      description:
        "Encourages Citizens To Be Mindful How Much Waste Is Produced In The Neighbourhood To Maintain Eco-Friendly Neighbourhoods.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: mywaste,
      source_code_link: "https://github.com/Matthew-Matta/uOttaHack-project",
    },
    {
      name: "TutorialRoach",
      description:
        "Web App Designed To Encourage Users To Showcase Their Expertise. Uses Ethereum Smart Contracts And CockroachDB Systems.",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tutorialroach,
      source_code_link: "https://github.com/Matthew-Matta/TutorialRoach",
    },
  ];

  const test1 = [
    {
      name: "Github",
      image: github,
      href: "https://github.com/Matthew-Matta",
    },
    {
      name: "LinkedIn",
      image: linkedin,
      href: "https://www.linkedin.com/in/matthew-matta/",
    },
    {
      name: "Mail",
      image: mail,
      href:"mailto:matthewlmatta@gmail.com",
    },
  ];

  const resume = [
    {
      name: "Resume",
      image: github,
      href: "https://drive.google.com/file/d/1Sj5uLDwRwS1B8m1glITCDvZ_tdwZGo1B/view?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, testimonials, socials, projects, test1, resume};