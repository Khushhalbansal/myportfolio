const config = {
  title: "Khushhal Bansal | Engineering the Future with Code",
description: {
  long: "Explore the portfolio of Khushhal Kumar Bansal, a computer science undergraduate and creative web developer focused on building interactive and visually engaging web experiences. With a strong interest in frontend development, animations, and modern JavaScript frameworks, this portfolio showcases learning projects, experiments, and hands-on work that reflect curiosity, creativity, and continuous growth. Let’s build something meaningful together.",
  short:
    "Discover the portfolio of Khushhal Kumar Bansal, a creative web developer and computer science student building interactive frontend experiences.",
},

  keywords: [
    "Khushhal Kumar Bansal",
    "portfolio",
    "web developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "computer science student",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "JavaScript",
    "Framer Motion",
  ],
  author: "Khushhal Kumar Bansal",
  email: "khushhal12196@gmail.com",
  site: "https://khushhalkumarbansal.site",

  // for github stars button
  githubUsername: "Khushhalbansal",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/khushhal-kumar-bansal-8b1756392/",
    instagram: "https://www.instagram.com/khushhalbansal_/",
    github: "https://github.com/Khushhalbansal",
  },
};
export { config };
