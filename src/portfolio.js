import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shafay",
  title: "Hi, I'm Muhammad Shafay Zulfiqar",
  subTitle: emoji(
    "A fourth-year CS student at Dalhousie University passionate about Web development & Cybersecurity. I build secure, scalable web applications while analyzing and mitigating security risks. I'm dedicated to creating efficient, high-performance systems and expanding my expertise in the tech industry."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VdmyftOqB-iBNCXJaIG5s4dMDa2j9P3T/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/msz-coder",
  linkedin: "https://www.linkedin.com/in/shafayzulfiqar/",
  gmail: "m.shafayzulfiqar@gmail.com",

  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER PASSIONATE ABOUT SECURE & SCALABLE SYSTEMS",
  skills: [
    emoji("⚡ Develop interactive front-end applications using React.js & Next.js"),
    emoji("⚡ Build secure and scalable backend systems with Node.js, Express & AWS"),
    emoji("⚡ Secure applications by implementing SQL Injection & XSS protection"),
    emoji("⚡ Automate workflows & GUI applications with Python & Selenium"),
    emoji("⚡ Deploy and manage cloud infrastructure using AWS (EC2, S3, VPC, IAM)"),
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5", category: "Frontend" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt", category: "Frontend" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js", category: "Frontend" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react", category: "Frontend" },
    { skillName: "Next.js", fontAwesomeClassname: "fas fa-layer-group", category: "Frontend" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node", category: "Backend" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server", category: "Backend" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database", category: "Database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database", category: "Database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws", category: "Cloud" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python", category: "Tools" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt", category: "Tools" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux", category: "Tools" },
    { skillName: "Cloud Security", fontAwesomeClassname: "fas fa-shield-alt", category: "Security" },
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dalhousie University",
      logo: require("./assets/images/dalLogo.png"),
      subHeader: "Bachelor of Computer Science - Specializing in Cybersecurity",
      duration: "September 2021 - Present",
      desc: "An active member of the Dalhousie CS Society and DalRun Club",
      descBullets: [
        "Dean's List (Sexton Scholar) Fall 2021",
        "Received Faculty of Computer Science Scholarship"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Information Technology Specialist",
      company: "Pratt & Whitney Canada",
      companylogo: require("./assets/images/PWCLogo.webp"),
      desc: "Enfield, NS",
      date: "September 2023 – December 2023",
      descBullets: [
        "Performed a security audit, identifying and patching SQL injection vulnerabilities",
        "Migrated legacy Classic ASP codebase to PHP, improving security and maintainability",
        "Implemented Cross-Site Scripting (XSS) protection, enhancing website security",
        "Collaborated with IT teams to implement secure validation checks and access controls"
      ]
    },
    {
      role: "Software Intern",
      company: "Rayleigh Solar Tech",
      companylogo: require("./assets/images/rayleighLogo.png"),
      desc: "Dartmouth, NS",
      date: "September 2024 – December 2024",
      descBullets: [
        "Redesigned the Electroluminescence (EL) app as a Python-based GUI",
        "Integrated Keithley SourceMeter Unit (SMU) for precise voltage & current control",
        "Developed automated data pipelines, reducing processing time by 30%",
        "Implemented IoT-based Automated Light Control (ALC), reducing manual effort by 70%"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python Developer",
      subtitle:
        "I've successfully finished my online Python training course and achieved a Python Developer with experience in over three major Python libraries",
      image: require("./assets/images/pythonDeveloper.png"),
      imageAlt: "Python Developer Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/16px6kVuuzcgHps-NZC6jsHXetcdwCxoJ/view?usp=sharing"
        }
      ]
    },
    {
      title: "UWaterloo - Canadian Senior Mathematics Contest",
      subtitle:
        "Ranked in the top twenty-five percent of contestants in the year 2020 and achieved a Certificate of Distinction",
      image: require("./assets/images/Uwaterloo.png"),
      imageAlt: "UWaterloo CSMC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Z1669Ech3YTXCyaJm0HjEXuuz_GIFb8Z/view?usp=sharing"
        }
      ]
    },
    {
      title: "Udemy - Web Developer Bootcamp",
      subtitle: "Completed a full-stack bootcamp covering HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and RESTful APIs, with hands-on projects in front-end, back-end, authentication, and databases.",
      image: require("./assets/images/WDbootcamp.jpg"),
      imageAlt: "Udemy - Web Developer Bootcamp Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/12A3H1UGkKjMLGAxnfv4sUJouipEfZIFL/view?usp=sharing"}
      ]
    },
    {
      title: "Google - Technical Support Fundamentals",
      subtitle: "Gained expertise in troubleshooting, system administration, networking, and IT security. Developed hands-on skills in Linux, command-line tools, and cloud computing essentials",
      image: require("./assets/images/google-temp.png"),
      imageAlt: "Google - Technical Support Fundamentals Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1aw8j1wdvgh-ryAfsgReUT87qfPbuyzWy/view?usp=sharing"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
