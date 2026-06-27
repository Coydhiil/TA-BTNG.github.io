// Inisialisasi menu
const menuToggle = document.getElementById("menu-toggle"); // button
const mobileMenu = document.getElementById("mobile-menu"); // menu dari home-contact
const iconMenu = menuToggle.querySelector(".fa-bars, .fa-xmark"); // icon button
const linkMenu = document.querySelectorAll(".link-menu"); // link dari menu

// Mobile menu toggling
menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");

  if (iconMenu) {
    if (iconMenu.classList.contains("fa-bars")) {
      iconMenu.classList.replace("fa-bars", "fa-xmark");
    } else {
      iconMenu.classList.replace("fa-xmark", "fa-bars");
    }
  }
});

// Mobile menu setelah diklik menu toggle menutup
linkMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");


    if (iconMenu) {
      iconMenu.classList.replace("fa-xmark", "fa-bars");
    }
  });
});

// --- TRANSLATION LOGIC ---
const translations = {
  id: {
    nav_home: "Home",
    nav_portfolio: "Portofolio",
    nav_contact: "Contact",
    hero_greeting: "Hi Para Sepuh👋, saya",
    hero_title_left: "Ilmu Komputer",
    hero_title_right: "TI",
    hero_description: "Saya adalah seorang Web Developer yang berfokus pada menciptakan visual yang komunikatif, estetik, dan responsif. Dengan latar belakang di bidang Desain Grafis dan ketertarikan mendalam terhadap seni digital, saya menggabungkan kreativitas dan logika untuk menghasilkan website yang tidak hanya menarik, tetapi juga fungsional.",
    portfolio_subtitle: "Proyek Saya",
    portfolio_description: "Berikut adalah beberapa karya desain grafis yang telah saya kerjakan. Setiap poster dirancang dengan perhatian terhadap detail, estetika, dan fungsi. Saya percaya bahwa visual yang kuat dapat menyampaikan pesan dengan lebih efektif dan membangun kesan yang mendalam.",
    contact_subtitle: "Hubungi Saya",
    contact_description: "Punya ide menarik, proyek seru, atau sekadar ingin ngobrol soal desain dan coding? Kirim pesan lewat formulir ini, saya dengan senang hati mendengar dan berbagi. Kolaborasi selalu jadi hal yang menyenangkan!",
    form_name: "Nama",
    form_email: "E-mail",
    form_message: "Pesan",
    form_name_placeholder: "Fadhiil Fiannata",
    form_email_placeholder: "fadhiilcihuy@example.com",
    form_message_placeholder: "Pesan anda...",
    form_submit: "Kirim",
    footer_back: "Kembali"
  },
  en: {
    nav_home: "Home",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    hero_greeting: "Hi Experts👋, I am",
    hero_title_left: "Computer Science",
    hero_title_right: "IT",
    hero_description: "I am a Web Developer focused on creating communicative, aesthetic, and responsive visuals. With a background in Graphic Design and a deep interest in digital art, I combine creativity and logic to produce websites that are not only attractive but also functional.",
    portfolio_subtitle: "My Projects",
    portfolio_description: "Here are some of the graphic design works I have worked on. Each poster is designed with attention to detail, aesthetics, and function. I believe that strong visuals can convey messages more effectively and build a deep impression.",
    contact_subtitle: "Contact Me",
    contact_description: "Have an interesting idea, an exciting project, or just want to chat about design and coding? Send a message through this form, I would be happy to hear and share. Collaboration is always a fun thing!",
    form_name: "Name",
    form_email: "E-mail",
    form_message: "Message",
    form_name_placeholder: "Fadhiil Fiannata",
    form_email_placeholder: "fadhiilcihuy@example.com",
    form_message_placeholder: "Your message...",
    form_submit: "Send",
    footer_back: "Back to Top"
  }
};

let currentLang = localStorage.getItem("lang") || "id";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Update text content for elements with data-translate
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholder for elements with data-translate-placeholder
  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update labels on switcher buttons
  const labelDesktop = document.getElementById("lang-label");
  const labelMobile = document.getElementById("lang-label-mobile");
  if (labelDesktop) labelDesktop.textContent = lang.toUpperCase();
  if (labelMobile) labelMobile.textContent = lang.toUpperCase();
}

// Toggle language event listeners
function toggleLanguage() {
  const nextLang = currentLang === "id" ? "en" : "id";
  setLanguage(nextLang);
}

document.getElementById("lang-toggle").addEventListener("click", toggleLanguage);
document.getElementById("lang-toggle-mobile").addEventListener("click", toggleLanguage);


// --- DARK MODE LOGIC ---
let currentTheme = localStorage.getItem("theme") || "light";

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("theme", theme);
  const htmlEl = document.documentElement;

  if (theme === "dark") {
    htmlEl.classList.add("dark");
  } else {
    htmlEl.classList.remove("dark");
  }

  // Update theme icons
  const iconDesktop = document.getElementById("dark-icon");
  const iconMobile = document.getElementById("dark-icon-mobile");

  if (theme === "dark") {
    if (iconDesktop) iconDesktop.className = "fa-solid fa-sun animate-pulse";
    if (iconMobile) iconMobile.className = "fa-solid fa-sun";
  } else {
    if (iconDesktop) iconDesktop.className = "fa-solid fa-moon";
    if (iconMobile) iconMobile.className = "fa-solid fa-moon";
  }
}

function toggleTheme() {
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(nextTheme);
}

document.getElementById("dark-toggle").addEventListener("click", toggleTheme);
document.getElementById("dark-toggle-mobile").addEventListener("click", toggleTheme);


// --- INITIALIZATION ---
function init() {
  setLanguage(currentLang);
  setTheme(currentTheme);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
