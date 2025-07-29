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

  return { list };
});
