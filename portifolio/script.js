const translations = {
    uz: {
      logo: "YusufDev",
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
      greeting: "Salom! Men Yusuf",
      intro: "Men frontend developer va bot yaratuvchiman.",
      rights: "© 2025 Muhammad Yusuf. Barcha huquqlar himoyalangan.",
      aboutText: "Ismim Muhammad Yusuf. Namanganda yashayman. Frontend dasturlash, Telegram botlar, Web3, va video montaj bilan shug‘ullanaman.",
      namePlaceholder: "Ismingiz",
      emailPlaceholder: "Email manzil",
      messagePlaceholder: "Xabar...",
      submitButton: "Yuborish",
    },
    en: {
      logo: "YusufDev",
      home: "Home",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      greeting: "Hello! I'm Yusuf",
      intro: "I'm a frontend developer and bot creator.",
      rights: "© 2025 Muhammad Yusuf. All rights reserved.",
      aboutText: "My name is Muhammad Yusuf. I'm from Namangan. I work on frontend development, Telegram bots, Web3, and video editing.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Email address",
      messagePlaceholder: "Message...",
      submitButton: "Send",
    }
  };
  
  function setLang(lang) {
    // Text content tarjimalar
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang]?.[key]) {
        el.textContent = translations[lang][key];
      }
    });
  
    // Placeholder tarjimalar
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang]?.[key]) {
        el.setAttribute("placeholder", translations[lang][key]);
      }
    });
  
    // Buttonlar uchun value tarjimasi
    document.querySelectorAll("[data-i18n-value]").forEach((el) => {
      const key = el.getAttribute("data-i18n-value");
      if (translations[lang]?.[key]) {
        el.value = translations[lang][key];
      }
    });
  
    localStorage.setItem("lang", lang);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "uz";
    setLang(savedLang);
  });
  