const translations = {
  uz: {
    logo: "Isakjanov",
    home: "Bosh sahifa",
    about: "Men haqimda",
    skills: "Ko'nikmalar",
    projects: "Loyihalar",
    contact: "Aloqa",
    greeting: "Salom! Men Isakjanov",
    intro: "Men frontend developer va bot yaratuvchiman.",
    rights: "© 2025 Isakjanov. Barcha huquqlar himoyalangan.",
  },
  en: {
    logo: "Isakjanov",
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    greeting: "Hello! I'm Isakjanov",
    intro: "I'm a frontend developer and bot creator.",
    rights: "© 2025 Isakjanov. All rights reserved.",
  },
};

function setLang(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // Till
  const savedLang = localStorage.getItem("lang") || "uz";
  setLang(savedLang);

  // Dark Mode
  const modeToggle = document.getElementById("mode-toggle");
  const savedMode = localStorage.getItem("mode");

  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    if (modeToggle) modeToggle.textContent = "☀️";
  }

  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      modeToggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("mode", isDark ? "dark" : "light");
    });
  }
});
