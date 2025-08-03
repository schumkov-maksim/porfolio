import { defineStore } from "pinia";

export const useStore = defineStore("beruf", () => {
  const beruf = [
    {
      id: 1,
      firma: "Einmahl WebSolutions",
      date: "2023 - Jetzt",
      stelle: "Frontend Developer",
      beschreibung:
        "Entwicklung von Webanwendungen mit Vue.js und Nuxt.js. Typo 3 Integration.",
    },
    {
      id: 2,
      firma: "Sysberry GmbH",
      date: "2021 - 2022",
      stelle: "Praktikant",
      beschreibung:
        "Optimierung und Gestaltung der Sysberrry-Homepage.Anpassung der Website-Datenschutzerklärung an die DSVGO.Anbindung des Feebbacksformulars an drittes Systems (Agile Point).Suchmachinenoptiemierung (Indexierung, Keywords, Ladezeiten, usw.)Dokumentation.",
    },
    {
      id: 3,
      firma: "Digital Agency Totschka.ru",
      date: "2015 - 2017",
      stelle: "Spezialist für die Webseitenpromotion SEO",
      beschreibung:
        "Tätigkeitsbereich: SEO,Keywordanalyse, SEO Audit,Formulierung und die Kontrolle der Ausführung der technischen Aufgabe, Analyse der Website-Besucherzahlen und des Benutzerverhaltens, Conversion-Tracking,Verfolgung der Wachstumsdynamik von Standortpositionen, Linkaufbau,Erstellung und Erklärung von SEO-Reports",
    },
    {
      id: 4,
      firma: "Digital Agency „Aweb Systems“ - ",
      date: "2013 - 2015",
      stelle: "Fachmann für die interne Optimierung",
      beschreibung:
        "Durchführung von technischen Änderungen auf der Website Optimierung von Websiten",
    },
  ];

  const study = [
    {
      id: 1,
      institution:
        "BBQ – Baumann Bildung und Qualifizierung GmbH,Anwendungsentwicklung - Köln",
      stelle: "Fachinformatiker für Anwendungsentwicklung",
      date: "2020 - 2022",
      description: "Umschulung.",
    },
    {
      id: 2,
      institution:
        "Staatlichen Universität Wladimir, Informationssysteme und Technologien (Fachinformatiker) - Wladimir (Russland)",
      stelle: "Ingenieur für Informationstechnogien",
      date: "2005 - 2010",
      description: "Studium.",
    },
  ];
  return { beruf, study };
});
