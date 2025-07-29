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

  return { list, info, language, sliders };
});
