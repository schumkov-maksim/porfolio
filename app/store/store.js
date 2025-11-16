import { defineStore } from "pinia";

export const useStore = defineStore("icons", () => {
  const list = [
    {
      name: "bxl:facebook",

      url: "https://www.facebook.com/1111",
    },
    {
      name: "bxl:instagram",

      url: "https://www.facebook.com/",
    },
    {
      name: "bxl:xing",

      url: "https://www.facebook.com/",
    },
    {
      name: "bxl:github",

      url: "https://github.com/schumkov-maksim/",
    },
  ];

  const info = {
    age: () => new Date().getFullYear() - 1988,
    location: "Germany",
    job: "Frontend Developer",
    email: "test@gmail.com",
  };

  const language = {
    Russisch: "100",
    Deutsch: "80",
    English: "50",
  };

  const sliders = [
    {
      id: 1,
      title: "Slider",
      description: "This is a slider component",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/slider",
    },
    {
      id: 2,
      title: "Another Slider",
      description: "This is another slider component",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/another-slider",
    },
    {
      id: 3,
      title: "Third Slider",
      description: "This is the third slider component",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/third-slider",
    },
  ];
  const skills = [
    {
      id: 1,
      url: "logos:html-5",
    },
    {
      id: 2,
      url: "logos:css-3",
    },
    {
      id: 3,
      url: "logos:javascript",
    },
    {
      id: 4,
      url: "logos:vue",
    },
    {
      id: 5,
      url: "logos:typescript-icon",
    },
    {
      id: 6,
      url: "logos:sass",
    },
    {
      id: 7,
      url: "logos:tailwindcss-icon",
    },
    {
      id: 8,
      url: "logos:bootstrap",
    },
    {
      id: 9,
      url: "logos:git-icon",
    },
    {
      id: 13,
      url: "logos:docker-icon",
    },
    {
      id: 14,
      url: "logos:nodejs-icon",
    },
    {
      id: 15,
      url: "logos:typo3-icon",
    },
    {
      id: 16,
      url: "logos:nuxt-icon",
    },
    {
      id: 18,
      url: "logos:react",
    },
    {
      id: 19,
      url: "skill-icons:wordpress",
    },
    {
      id: 19,
      url: "skill-icons:figma",
    },
  ];

  const portfolio = [
    {
      id: 1,
      title: "Quiz App",
      description: "React, SASS, JS",
      image: "img/quiz.png",
      url: "https://schumkov-maksim.github.io/quiz/",
    },
    {
      id: 2,
      title: "Template Cars",
      description: "HTML 5 SCSS. JS",
      image: "img/car.png",
      url: "https://schumkov-maksim.github.io/cars/",
    },
    {
      id: 3,
      title: "Web site Template",
      description: "HTML 5, SCSS, JS, TYPO3",
      image: "img/iskam.png",
      url: "https://www.iskam.de/",
    },
    {
      id: 4,
      title: "Web site Template",
      description: "HTML 5, SCSS, JS, TYPO3",
      image: "img/gesundheitscampus.png",
      url: "https://www.gesundheitscampus-monheim.de/",
    },
    {
      id: 5,
      title: "Web site Template",
      description: "HTML 5, SCSS, JS, WP, Sage",
      image: "img/pflege.png",
      url: "https://www.werpflegtbewegt.de/",
    },
    {
      id: 6,
      title: "Web site Template",
      description: "HTML 5, SCSS, JS, Typo3",
      image: "img/monamare.png",
      url: "https://monamare.monheim.de/",
    },
  ];

  const menu = [
    {
      id: 1,
      title: "Home",
      url: "/",
      img: "material-symbols:home-rounded",
    },

    {
      id: 2,
      title: "Job",
      url: "/job",
      img: "material-symbols:work",
    },
    {
      id: 3,
      title: "Study",
      url: "/study",
      img: "material-symbols:school",
    },
  ];

  return { list, info, language, sliders, skills, portfolio, menu };
});
