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

  return { list, info, language };
});
