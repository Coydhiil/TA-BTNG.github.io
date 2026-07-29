// Mobile menu element initializations
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconMenu = menuToggle ? menuToggle.querySelector(".fa-bars, .fa-xmark") : null;
const linkMenu = document.querySelectorAll(".link-menu");

if (menuToggle && mobileMenu) {
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
}

linkMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    if (mobileMenu) mobileMenu.classList.add("hidden");
    if (iconMenu) {
      iconMenu.classList.replace("fa-xmark", "fa-bars");
    }
  });
});

// --- TRANSLATION LOGIC ---
const translations = {
  id: {
    nav_home: "Home",
    nav_experience: "Pendidikan & Pengalaman",
    nav_skills: "Keterampilan",
    nav_portfolio: "Portofolio",
    nav_contact: "Contact",
    hero_greeting: "Hi Para Sepuh👋, saya",
    hero_title_left: "Ilmu Komputer",
    hero_title_right: "TI",
    hero_description: "Saya adalah seorang mahasiswa Ilmu Komputer di UDINUS yang berfokus pada visual komunikasi yang estetis dan responsive. Berbekal pengalaman organisasi di SMA, saya bertekad terus melahirkan karya digital yang berdampak positif.",
    exp_section_tag: "Pendidikan & Pengalaman",
    exp_section_title: "Latar Belakang",
    exp_section_subtitle: "Jejak pendidikan akademis dan pengalaman organisasi yang telah saya jalani.",
    edu_title: "Pendidikan",
    edu_udinus_desc: "Mempelajari pemrograman, pengembangan web modern, serta penerapan komunikasi visual digital.",
    edu_sman_desc: "Fokus pada ilmu pengetahuan alam dan mengasah keahlian awal di bidang desain grafis & teknologi.",
    org_title: "Pengalaman Organisasi",
    org_sie9_desc: "Bertanggung jawab merancang media publikasi digital, poster event sekolah, dan infografis siswa.",
    org_admin_desc: "Mengelola konten postingan feed, story, twibbon event, serta konsistensi identitas visual akun Instagram OSIS.",
    skills_section_tag: "Keterampilan",
    skills_section_title: "Skills & Tools",
    skills_section_subtitle: "Kombinasi perangkat lunak dan soft skills pendukung dalam proses pembuatan desain dan web.",
    skills_cat1_title: "Software & Tools",
    skills_cat2_title: "Personal & Soft Skills",
    portfolio_subtitle: "Proyek Saya",
    portfolio_description: "Berikut adalah beberapa karya desain grafis yang telah saya kerjakan. Setiap poster dirancang dengan perhatian terhadap detail, estetika, dan fungsi. Saya percaya bahwa visual yang kuat dapat menyampaikan pesan dengan lebih efektif dan membangun kesan yang mendalam.",
    sub_pamflet_title: "Pamflet & Poster",
    sub_twibbon_title: "Twibbon",
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
    nav_experience: "Education & Experience",
    nav_skills: "Skills",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    hero_greeting: "Hi Experts👋, I am",
    hero_title_left: "Computer Science",
    hero_title_right: "IT",
    hero_description: "I am a Computer Science student at UDINUS focused on creating communicative, aesthetic, and responsive visuals. Grounded in high school organization experience, I aim to produce impactful digital works.",
    exp_section_tag: "Education & Experience",
    exp_section_title: "Background",
    exp_section_subtitle: "Academic journey and organizational experience.",
    edu_title: "Education",
    edu_udinus_desc: "Studying programming, modern web development, and digital visual communication implementation.",
    edu_sman_desc: "Focused on natural sciences while developing early skills in graphic design & technology.",
    org_title: "Organizational Experience",
    org_sie9_desc: "Responsible for designing digital publication media, school event posters, and student infographics.",
    org_admin_desc: "Managed feed posts, stories, event twibbons, and maintained visual identity standards of OSIS Instagram account.",
    skills_section_tag: "Skills",
    skills_section_title: "Skills & Tools",
    skills_section_subtitle: "Combination of software applications and soft skills supporting graphic design & web creation.",
    skills_cat1_title: "Software & Tools",
    skills_cat2_title: "Personal & Soft Skills",
    portfolio_subtitle: "My Projects",
    portfolio_description: "Here are some of the graphic design works I have worked on. Each poster is designed with attention to detail, aesthetics, and function. I believe that strong visuals can convey messages more effectively and build a deep impression.",
    sub_pamflet_title: "Pamphlet & Poster",
    sub_twibbon_title: "Twibbon",
    contact_subtitle: "Contact Me",
    contact_description: "Have an interesting idea, an exciting project, or just want to chat about design and coding? Send a message through this form, I would be happy to hear and share. Collaboration is always a fun thing!",
    form_name: "Name",
    form_email: "E-mail",
    form_message: "Message",
    form_name_placeholder: "Fadhiil Fiannata",
    form_email_placeholder: "fadhiilcihuy@example.com",
    form_message_placeholder: "Your message...",
    form_submit: "Send",
    footer_back: "Back"
  }
};

let currentLang = localStorage.getItem("lang") || "id";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  const labelDesktop = document.getElementById("lang-label");
  const labelMobile = document.getElementById("lang-label-mobile");
  if (labelDesktop) labelDesktop.textContent = lang.toUpperCase();
  if (labelMobile) labelMobile.textContent = lang.toUpperCase();
}

function toggleLanguage() {
  const nextLang = currentLang === "id" ? "en" : "id";
  setLanguage(nextLang);
}

const langToggle = document.getElementById("lang-toggle");
const langToggleMobile = document.getElementById("lang-toggle-mobile");
if (langToggle) langToggle.addEventListener("click", toggleLanguage);
if (langToggleMobile) langToggleMobile.addEventListener("click", toggleLanguage);


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

const darkToggle = document.getElementById("dark-toggle");
const darkToggleMobile = document.getElementById("dark-toggle-mobile");
if (darkToggle) darkToggle.addEventListener("click", toggleTheme);
if (darkToggleMobile) darkToggleMobile.addEventListener("click", toggleTheme);


// --- INTERACTIVE CAROUSEL CLASS ---
class SubSectionCarousel {
  constructor(trackId, prevBtnId, nextBtnId, dotsId) {
    this.track = document.getElementById(trackId);
    this.prevBtn = document.getElementById(prevBtnId);
    this.nextBtn = document.getElementById(nextBtnId);
    this.dotsContainer = document.getElementById(dotsId);

    if (!this.track) return;

    this.slides = Array.from(this.track.children);
    this.currentIndex = 0;
    this.startX = 0;
    this.isDragging = false;

    this.init();
  }

  getVisibleCount() {
    const width = window.innerWidth;
    if (width >= 1120) return 4;
    if (width >= 868) return 3;
    if (width >= 520) return 2;
    return 1;
  }

  getMaxIndex() {
    return Math.max(0, this.slides.length - this.getVisibleCount());
  }

  init() {
    this.renderDots();
    this.updatePosition();

    if (this.prevBtn) this.prevBtn.addEventListener("click", () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener("click", () => this.next());

    // Swipe & Drag
    this.track.addEventListener("touchstart", (e) => this.touchStart(e));
    this.track.addEventListener("touchmove", (e) => this.touchMove(e));
    this.track.addEventListener("touchend", () => this.touchEnd());

    this.track.addEventListener("mousedown", (e) => this.touchStart(e));
    this.track.addEventListener("mousemove", (e) => this.touchMove(e));
    this.track.addEventListener("mouseup", () => this.touchEnd());
    this.track.addEventListener("mouseleave", () => {
      if (this.isDragging) this.touchEnd();
    });

    window.addEventListener("resize", () => {
      if (this.currentIndex > this.getMaxIndex()) {
        this.currentIndex = this.getMaxIndex();
      }
      this.renderDots();
      this.updatePosition();
    });
  }

  renderDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = "";
    const maxIndex = this.getMaxIndex();

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("button");
      dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === this.currentIndex ? "bg-emerald-500 w-5" : "bg-slate-400 dark:bg-slate-700 hover:bg-slate-500"
        }`;
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.addEventListener("click", () => this.goTo(i));
      this.dotsContainer.appendChild(dot);
    }
  }

  updatePosition() {
    const slideWidth = this.slides[0] ? this.slides[0].offsetWidth : 0;
    const gap = 16; // 1rem gap
    const moveAmount = (slideWidth + gap) * this.currentIndex;
    this.track.style.transform = `translateX(-${moveAmount}px)`;

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0;
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= this.getMaxIndex();

    if (this.dotsContainer) {
      const dots = Array.from(this.dotsContainer.children);
      dots.forEach((dot, idx) => {
        if (idx === this.currentIndex) {
          dot.className = "w-5 h-2.5 rounded-full bg-emerald-500 transition-all duration-300";
        } else {
          dot.className = "w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-700 hover:bg-slate-500 transition-all duration-300";
        }
      });
    }
  }

  next() {
    if (this.currentIndex < this.getMaxIndex()) {
      this.currentIndex++;
      this.updatePosition();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updatePosition();
    }
  }

  goTo(index) {
    this.currentIndex = index;
    this.updatePosition();
  }

  touchStart(e) {
    this.isDragging = true;
    this.startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  }

  touchMove(e) {
    if (!this.isDragging) return;
    const currentX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const diff = currentX - this.startX;

    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        this.next();
      } else {
        this.prev();
      }
      this.isDragging = false;
    }
  }

  touchEnd() {
    this.isDragging = false;
  }
}

// --- LIGHTBOX MODAL ---
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalClose = document.getElementById("modal-close");
  const triggers = document.querySelectorAll(".lightbox-trigger");

  if (!modal) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const imgSrc = trigger.getAttribute("data-img");
      const title = trigger.getAttribute("data-title");

      if (imgSrc && modalImg) {
        modalImg.src = imgSrc;
        if (modalTitle) modalTitle.textContent = title || "";
        modal.classList.remove("hidden");
      }
    });
  });

  const closeModal = () => modal.classList.add("hidden");

  if (modalClose) modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}


// --- INITIALIZATION ---
function init() {
  setLanguage(currentLang);
  setTheme(currentTheme);

  if (document.getElementById("pamflet-track")) {
    new SubSectionCarousel("pamflet-track", "pamflet-prev", "pamflet-next", "pamflet-dots");
  }
  if (document.getElementById("twibbon-track")) {
    new SubSectionCarousel("twibbon-track", "twibbon-prev", "twibbon-next", "twibbon-dots");
  }
  if (document.getElementById("feed-track")) {
    new SubSectionCarousel("feed-track", "feed-prev", "feed-next", "feed-dots");
  }

  initLightbox();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
