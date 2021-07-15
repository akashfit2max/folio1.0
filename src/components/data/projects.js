export const ProjectData = [
  {
    id: 1,
    title: "TruYum Website",
    about:
      "A fullstack Website created by using spring boot and Hibernate (H2 inMemory Database) with spring security having user based authenticaton. security authetication is made so that the portal can recognize which user has logged in doing so, will enable him to add/delete item for his cart (unique cart for each user) this feature is addede by taking username as a condition in jpa repository where in by comparing the name enable to find out which person has logged in the portal.",
    tags: [
      "SprigBoot",
      "Hibernate",
      "Java",
      "Eclipses",
      "JPA",
      "MySql",
      "MVC",
      "Junit",
    ],
    demo: "https://github.com/akashfit2max/spring-security",
    github: "https://github.com/akashfit2max/spring-security",
    image:
      "https://i.pinimg.com/originals/8e/6d/fe/8e6dfec5dd47bedf06ca7f74c77e4b14.png",
  },
  {
    id: 2,
    title: "Creative ReadMe",
    about: "A beautiful and creative ReadMe for Github profile",
    tags: ["Github", "Flaticon", "CSS", "Git", "Vscode"],
    demo: "https://github.com/akashfit2max",
    github: "https://github.com/akashfit2max/akashfit2max",
    image: require("../../assets/projects/pro2.PNG").default,
  },
  {
    id: 3,
    title: "Personal Portfolio",
    about:
      "A personal portfolio website create with an amazing water and silder animation effect",
    tags: ["HTML", "CSS", "JS", "Jquery", "Bootstrap", "ES6"],
    demo: "https://akashfit2max.github.io/personal-cv/",
    github: "https://github.com/akashfit2max/personal-cv",
    image: require("../../assets/projects/pro5.PNG").default,
  },
  {
    id: 4,
    title: "Voice",
    about:
      "A simple Js project made using js speech API which has various language inbuilt",
    tags: ["JS", "SpeechAPI", "HTML", "CSS", "Bootstrap"],
    demo: "https://akashfit2max.github.io/voice/",
    github: "https://github.com/akashfit2max/voice",
    image: require("../../assets/projects/pro3.PNG").default,
  },
  {
    id: 5,
    title: "MineSweeper",
    about: "A simple Minesweeper game project made using JS",
    tags: ["JS", "HTML", "SCSS", "Bootstrap", "CSS"],
    demo: "https://akashfit2max.github.io/MineSweeper/",
    github: "https://github.com/akashfit2max/MineSweeper",
    image: require("../../assets/projects/pro4.PNG").default,
  },
];
