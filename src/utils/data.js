import React from "react";
import { FaFolderOpen, FaBriefcase } from "react-icons/fa";
import { BsFillPeopleFill, BsPersonFill } from "react-icons/bs";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";

export const lists = [
  {
    id: 1,
    url: "#about",
    text: "About",
    icon: <BsPersonFill />,
  },
  {
    id: 2,
    url: "#experience",
    text: "Experience",
    icon: <FaBriefcase />,
  },
  {
    id: 3,
    url: "#projects",
    text: "Projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "#recommendations",
    text: "Recommendations",
    icon: <BsFillPeopleFill />,
  },
];

export const skills = [
  { name: "Javascript", icon: <MdPlayArrow /> },
  { name: "React.js", icon: <MdPlayArrow /> },
  { name: "Node.js", icon: <MdPlayArrow /> },
  { name: "MongoDB", icon: <MdPlayArrow /> },
];

export const learningSkills = [
  { name: "Typescript", icon: <MdPlayArrow /> },
  { name: "GatsbyJs", icon: <MdPlayArrow /> },
];

export const recommendations = [
  {
    id: "Miruna",
    img: "/images/miruna2.png",
    name: "Miruna Tataru",
    title: "Product Owner",
    company: "Deloitte Digital",
    text: "I had the opportunity to work with Ryan in our Chingu Voyage. Ryan takes challenges proactively, and he is a very ambitious person eager to learn new technologies and improve his knowledge.  While working with him, he constantly improved the code base and the project, having demonstrated technical skills such as responsive UX design and front-end development.  Ryan knows how to make the best out of opportunities and the has the ability to motivate himself to deliver clean, efficient code based on specifications in a timely manner.  Having a positive attitude and excellent communication skills, Ryan showed that he can be a valuable team player, always ready to help colleagues around him.  I would gladly recommend Ryan for any software developer job as he would be an asset in any company.",
  },
  {
    id: "Morgan",
    img: "/images/morgan2.png",
    name: "Morgan Bare",
    title: "Front-End Developer",
    company: "Chingu Voyage",
    text: "Ryan and I worked together on a Chingu Voyage and I could not have asked for a better teammate. Ryan is an excellent developer and was a joy to work with. Not only was he easy to communicate with but he was always willing to help out and listen to any ideas or issues the rest of the team had. Our Wiki Trips website would not have been as successful without Ryan's enthusiasm and knowledge. I would highly recommend Ryan for any future endeavors.",
  },
  {
    id: "Jim",
    img: "/images/jim2.png",
    name: "Jim Medlock",
    title: "Co-Founger of Chingu",
    company: "Chingu",
    text: "Ryan has been a valued member of Chingu, Inc. where he as participated in several of our 6-week long remote team projects. During this time he's proven himself to not only be a motivated Software Developer, but also a leader. In his team projects he not only took part in designing and developing applications, but even more importantly, helping organize and coordinate the project. He has shown himself to understand how to be both an effective team member and leader within the team.",
  },
];

export const experiences = [
  {
    id: "chingu-voyage32",
    order: 3,
    title: "Product Owner",
    dates: "Jul 2021 - Aug 2021",
    duties: [
      "Worked Remotely with four developers in the states",
      "Plan Agile Scrum sprints and open weekly meetings twice a week",
      "Create gitwork-flow videos for the team",
      "Did pair-programmings to help a Co-worker resolve git workflow issues",
    ],
    duties2: [
      {
        icon: <MdPlayArrow />,
        text: [
          "Worked Remotely with four developers in the states",
          "Plan Agile Scrum sprints and open weekly meetings twice a week",
          "Create gitwork-flow videos for the team",
          "Did pair-programmings to help a Co-worker resolve git workflow issues",
        ],
      },
    ],
    company: "Chingu Voyage",
    companyFull: "@Chingu Voyage v32",
  },
  {
    id: "chingu-voyage29",
    order: 2,
    title: "FrontEnd Developer",
    dates: "Apr 2021 - May 2021",
    duties: [
      "Released 'WIKI TRIPS' All-In-One Travel Destination Info Provision Website",
      "Worked Remotely with two developers in Central Europe and one product owner in East Europe",
      "Participate in Agile Scrum sprint and release planning",
      "Worked with a variety of different APIs such as Googlemaps API, Unsplash API, Mediawiki API",
      "Designed the website both Mobile and Desktop version using google slides",
      "Did pair-programmings to help a Co-worker understand Git-workflow",
    ],
    duties2: [
      {
        icon: <MdPlayArrow />,
        text: [
          "Released 'WIKI TRIPS' All-In-One Travel Destination Info Provision Website",
          "Worked Remotely with two developers in Central Europe and one product owner in East Europe",
          "Participate in Agile Scrum sprint and release planning",
          "Worked with a variety of different APIs such as Googlemaps API, Unsplash API, Mediawiki API",
          "Designed the website both Mobile and Desktop version using google slides",
          "Did pair-programmings to help a Co-worker understand Git-workflow",
        ],
      },
    ],
    company: "Wiki Trips",
    companyFull: "@Chingu Voyage V29",
  },
  {
    id: "NYPL TechConnect",
    order: 1,
    title: "Web Designer",
    dates: "Jan 2019 - May 2019",
    duties: [
      "Create A Personal and Teamwork Websites using HTML and CSS",
      "Build collaboration skills working with the diverse people",
      "Learn Github usage",
    ],
    duties2: [
      {
        icon: <MdPlayArrow />,
        text: [
          "Create A Personal and Teamwork Websites using HTML and CSS",
          "Build collaboration skills working with the diverse people",
          "Learn Github usage",
        ],
      },
    ],
    company: "NYPL",
    companyFull: "@New York Public Library Tech Connect",
  },
];

export const projects = [
  {
    id: 0,
    img: "/images/userauth3.jpg",
    number: "Featured Project",
    title: "User Auth Boilerplate",
    description:
      "Wikitrip is an all-in-one travel website that provides not only destination's weather info but also COVID travel restrictions, recommended hotels, restaurants and attractions. By clicking a search button with the destination, users are able to get all the necessary information without further searching.",
    techstack: ["React.js", "Node.js", "Mongo DB", "Express"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/ryanbest99/user-auth-forquestion",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://user-auth-1.herokuapp.com/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
  {
    id: 1,
    img: "/images/userauth3.jpg",
    number: "Featured Project",
    title: "MeTube",
    description:
      "Wikitrip is an all-in-one travel website that provides not only destination's weather info but also COVID travel restrictions, recommended hotels, restaurants and attractions. By clicking a search button with the destination, users are able to get all the necessary information without further searching.",
    techstack: ["React.js", "Node.js", "Express", "Youtube API"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/ryanbest99/MeTube-Upgraded",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://metube-version1.herokuapp.com/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
  {
    id: 2,
    img: "/images/wiki4.jpg",
    number: "Featured Project",
    title: "Wiki Trips",
    description:
      "Wikitrip is an all-in-one travel website that provides not only destination's weather info but also COVID travel restrictions, recommended hotels, restaurants and attractions. By clicking a search button with the destination, users are able to get all the necessary information without further searching.",
    techstack: ["Javascript", "Bootstrap", "CSS", "HTML"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/chingu-voyages/v29-toucans-team-02",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://wikitrip-v29-toucans02.netlify.app/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
];

export const projects2 = [
  {
    id: 0,
    img: "/images/randomquote.jpg",
    number: "Project",
    title: "Randome-Quote",
    description:
      "Generates dynamic random quotes with various background and font colors. Built with React.js, Css for component styling and functions. To generate quotes, it fetches them from 'Random Quote API'",
    techstack: ["React.js", "Css", "Html", "Quote API"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/ryanbest99/RANDOM-QUOTE-MACHINE",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://random-quote-machine-ryan.netlify.app/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
  {
    id: 1,
    img: "/images/matcha.jpg",
    number: "Project",
    title: "Matcha World",
    description:
      "A single page that introduces Matcha World company and its products. It has been built with HTML, CSS flex for design and javascript for smooth scroll and Navbar search",
    techstack: ["Javascript", "Css", "Html"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/ryanbest99/matcha_world",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://matcha-world.netlify.app/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
  {
    id: 2,
    img: "/images/palindrome.jpg",
    number: "Project",
    title: "Palindrome Checker",
    description:
      "The Palindrome Checker shows whether a given number or word is a Palindrome or not. If the number or word is a palindrome it shows True, otherwise it shows False. Built with Html and Css for styling and Javascript for function",
    techstack: ["Javascript", "Css", "Html"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/ryanbest99/JS_PALINDROME_CHECKER",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://ryan-palindrome-checker.netlify.app/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
  {
    id: 3,
    img: "/images/megabillion.jpg",
    number: "Project",
    title: "Mega Billions",
    description:
      " Mega Billions is a copy cat of Mega millions. It generates five random numbers in a row, and a bonus number at the end. Fisher Yates Algorithm was used to shuffle numbers. For styling, bootstrap was used. ",
    techstack: ["Javascript", "Bootstrap", "Css", "Html"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/ryanbest99/ryanbest99.github.io/tree/master/mega-billions",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://ryanbest99.github.io/mega-billions/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
  {
    id: 4,
    img: "/images/mondrian.jpg",
    number: "Project",
    title: "Mondrian Painting",
    description:
      "A Mondrian Painting drawn by Css grid. For date indication, Javascript was used",
    techstack: ["Javascript", "Css", "Html"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/ryanbest99/mondrian-painting",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://mondrian-css-grid.netlify.app/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
  {
    id: 5,
    img: "/images/whitehouse.jpg",
    number: "Project",
    title: "The White House Tour",
    description: "First personal project in NYPL using CSS and HTML ",
    techstack: ["Css", "Html"],
    icons: [
      {
        icon: <FaGithub />,
        url: "https://github.com/ryanbest99/ryanbest99.github.io/tree/master/Minsu%20Park%20Personal%20Project",
      },
      {
        icon: <FaExternalLinkAlt />,
        url: "https://ryanbest99.github.io/Minsu%20Park%20Personal%20Project/",
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com",
      },
    ],
  },
];

export const socialIcons = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/ryan-park-720aa420b",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/ryanbest99",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.linkedin.com/in/ryan-park-720aa420b",
  },
];
