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
      name: "bxl:twitter",

      url: "https://www.facebook.com/",
    },
    {
      name: "bxl:tiktok",

      url: "https://www.facebook.com/",
    },
  ];

  const info = {
    age: "35",
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
  ];

  const portfolio = [
    {
      id: 1,
      title: "Mein Portfolio",
      description: "Hier ist eine kurze Beschreibung meines Portfolios.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Mein Portfolio 2",
      description:
        "Hier ist eine weitere kurze Beschreibung meines Portfolios.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Mein Portfolio 3",
      description: "Hier ist eine dritte kurze Beschreibung meines Portfolios.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Mein Portfolio 3",
      description: "Hier ist eine dritte kurze Beschreibung meines Portfolios.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Mein Portfolio 3",
      description: "Hier ist eine dritte kurze Beschreibung meines Portfolios.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Mein Portfolio 3",
      description: "Hier ist eine dritte kurze Beschreibung meines Portfolios.",
      image: "https://via.placeholder.com/150",
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
      title: "Study",
      url: "/study",
      img: "material-symbols:school",
    },
    {
      id: 3,
      title: "Job",
      url: "/job",
      img: "material-symbols:work",
    },
  ];

  return { list, info, language, sliders, skills, portfolio, menu };
});
