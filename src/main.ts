import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { i18n, type SupportedLocales } from './i18n'

gsap.registerPlugin(ScrollTrigger)

// --- Lenis Setup for Premium Smooth Scrolling ---
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
} as any)

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// --- Text Mask Stagger Splitter Helper ---
// Splits text nodes into DOM elements for mask reveals
function splitTextForMasking(element: HTMLElement) {
  const text = element.innerText;
  element.innerHTML = '';
  // simple split by spaces for words, or we can just split lines naively
  const words = text.split(' ');

  words.forEach((word, index) => {
    const wrapper = document.createElement('span');
    wrapper.style.overflow = 'hidden';
    wrapper.style.display = 'inline-block';
    wrapper.style.verticalAlign = 'top';

    const inner = document.createElement('span');
    inner.style.display = 'inline-block';
    inner.innerText = word;
    inner.classList.add('mask-inner');

    wrapper.appendChild(inner);
    element.appendChild(wrapper);
    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(' '));
    }
  });

  return element.querySelectorAll('.mask-inner');
}

// --- i18n Localization Engine ---
function getCurrentLanguageFromUrl(): SupportedLocales {
  const path = window.location.pathname;
  if (path.includes('/en/')) return 'en';
  if (path.includes('/zh-TW/')) return 'zh-TW';
  if (path.includes('/vi/')) return 'vi';
  return 'vi'; // Default fallback
}

function setLanguage(lang: SupportedLocales) {
  const dictionary = i18n[lang];
  if (!dictionary) return;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dictionary[key as keyof typeof dictionary]) {
      const translation = dictionary[key as keyof typeof dictionary];

      // If it's a mask text, we need to rebuild the mask spans
      if (el.classList.contains('mask-text')) {
        const htmlEl = el as HTMLElement;
        htmlEl.innerText = translation;
        splitTextForMasking(htmlEl);
      } else {
        (el as HTMLElement).innerText = translation;
      }
    }
  });

  // Specifically handle the hero title spanning since it's nested
  const title1 = document.querySelector('[data-i18n="hero.title1"]') as HTMLElement;
  const title2 = document.querySelector('[data-i18n="hero.title2"]') as HTMLElement;
  if (title1 && title2) {
    title1.innerText = dictionary['hero.title1'];
    title2.innerText = dictionary['hero.title2'];
  }

  // Handle active class toggles on the language pills in Modules section
  document.querySelectorAll('.lang-pill').forEach(pill => {
    pill.classList.remove('active');
    if (pill.textContent === lang || (lang === 'zh-TW' && pill.textContent === 'zh-TW')) {
      pill.classList.add('active');
    }
  });

  localStorage.setItem('ai-coach-lang', lang);
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Language Switcher
  const savedLang = getCurrentLanguageFromUrl();
  const langSwitcher = document.getElementById('lang-switcher') as HTMLSelectElement;

  if (langSwitcher) {
    langSwitcher.value = savedLang;
    langSwitcher.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      const newLang = target.value as SupportedLocales;

      // Navigate to the correct URL based on language selection
      let newPath = '/promotional-site/';
      if (newLang === 'en') newPath = '/promotional-site/en/';
      if (newLang === 'zh-TW') newPath = '/promotional-site/zh-TW/';

      window.location.href = newPath;
    });
  }

  // Set initial language immediately
  setLanguage(savedLang);

  // Initialize Language Pills
  const langPills = document.querySelectorAll('.lang-pill');
  langPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const newLang = target.getAttribute('data-lang') as SupportedLocales;
      if (newLang) {
        let newPath = '/promotional-site/vi/';
        if (newLang === 'en') newPath = '/promotional-site/en/';
        if (newLang === 'zh-TW') newPath = '/promotional-site/zh-TW/';
        window.location.href = newPath;
      }
    });
  });

  // 1. Text Masking Instantiations
  // Hero section specifically (Need a small timeout because setLanguage triggers immediately before)
  const heroSubtitleElements = splitTextForMasking(document.querySelector('.hero-subtitle') as HTMLElement);

  setTimeout(() => {
    const heroWords = gsap.utils.toArray<HTMLElement>('.hero-word')

    const tl = gsap.timeline()

    // Stagger title
    tl.to(heroWords, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: "power4.out"
    })
      // Mask reveal for subtitle
      .from(heroSubtitleElements, {
        y: "100%",
        duration: 0.8,
        stagger: 0.03,
        ease: "power4.out"
      }, "-=0.6")
      // Fade Description
      .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      // Fade Actions
      .to('.hero-actions', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      // Float mockup
      .to('.hero-visual', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out"
      }, "-=0.6")
  }, 50);



  // 2. Magnetic Buttons Effect
  const magneticEls = document.querySelectorAll('.magnetic-btn');

  magneticEls.forEach((el) => {
    const htmlEl = el as HTMLElement;

    // Create a GSAP quickTo for x and y for performance
    const xTo = gsap.quickTo(htmlEl, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
    const yTo = gsap.quickTo(htmlEl, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

    htmlEl.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = htmlEl.getBoundingClientRect();
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x * 0.4); // multiplier determines magnetic strength
      yTo(y * 0.4);
    })

    htmlEl.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    })
  });

  // Lenis Parallax subtle effect on hero visual
  gsap.to('.device-mockup', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: "top top",
      end: "bottom top",
      scrub: true // tied smoothly to lenis
    },
    y: 150,
    rotateX: -5
  })

  // 4. Section Headers Fade Up with Mask Text
  const sectionsWithHeaders = document.querySelectorAll('.section');
  sectionsWithHeaders.forEach((section) => {
    const headerObj = section.querySelector('.section-header');
    if (!headerObj) return;

    const title = headerObj.querySelector('.section-title');
    const desc = headerObj.querySelector('.section-desc');

    let titleInners, descInners;
    if (title && title.classList.contains('mask-text')) titleInners = splitTextForMasking(title as HTMLElement);
    if (desc && desc.classList.contains('mask-text')) descInners = splitTextForMasking(desc as HTMLElement);

    const stl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      }
    });

    gsap.set(headerObj, { opacity: 1, y: 0 }); // ensure wrapper is visible

    if (titleInners) {
      stl.from(titleInners, { y: "110%", duration: 0.8, stagger: 0.05, ease: "power4.out" });
    } else {
      stl.from(title, { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" });
    }

    if (descInners) {
      stl.from(descInners, { y: "110%", duration: 0.8, stagger: 0.02, ease: "power4.out" }, "-=0.6");
    } else {
      stl.from(desc, { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6");
    }
  });

  // 4b. Ultra-Premium Teardown Sequence (Responsive MatchMedia)
  const teardownSection = document.querySelector('.teardown-section');
  if (teardownSection) {
    const tMm = gsap.matchMedia();

    // Reusable core animation setup mapped for responsiveness
    tMm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      let { isDesktop } = context.conditions as { isDesktop: boolean; isMobile: boolean; };

      const tTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".teardown-section",
          start: isDesktop ? "center center" : "top top", // Pin earlier on mobile so cards fit below
          end: isDesktop ? "+=800" : "+=600",
          scrub: 1,
          pin: true,
        }
      });

      // Initial state setup
      gsap.set('.device-layer', { z: 0, scale: isDesktop ? 0.85 : 0.65, rotateX: 0, rotateY: 0, xPercent: -50, yPercent: -50 });
      gsap.set('.layer-ui', { opacity: 0 });
      gsap.set('.layer-ai', { opacity: 0 });
      gsap.set('.layer-body', { opacity: 1 });

      // Step 1: All layers tilt back together to prevent Z-fighting
      // Reinstated the aggressive 3D tilt on mobile per user request
      tTl.to('.device-layer', {
        rotateX: isDesktop ? 45 : 45, // Full tilt on mobile
        rotateY: isDesktop ? -15 : -15, // Full angle on mobile
        scale: isDesktop ? 0.75 : 0.6,
        duration: 1
      }, 0);

      // Step 2: Layers separate in 3D space
      // Chat UI springs UP
      tTl.to('.layer-ui', {
        opacity: 1,
        yPercent: isDesktop ? -60 : -55,
        xPercent: isDesktop ? -60 : -55,
        z: isDesktop ? 120 : 100, // Increased Z to clear the rotation intersection
        rotateX: isDesktop ? 10 : 10, // Restored original "fan out" rotation
        duration: 1.5,
        ease: "power2.out"
      }, 0.5);

      // Dim the cover page slightly but KEEP IT VISIBLE
      tTl.to('.layer-body', {
        opacity: 0.6,
        duration: 1
      }, 0.5);

      // AI Core emerges DOWN
      tTl.to('.layer-ai', {
        opacity: 1,
        yPercent: isDesktop ? -40 : -45,
        xPercent: isDesktop ? -40 : -45,
        z: isDesktop ? -120 : -100, // Increased Z to clear the rotation intersection
        rotateX: isDesktop ? -10 : -10, // Restored original "fan out" rotation
        duration: 1.5,
        ease: "power2.out"
      }, 0.5);

      // Step 3: Final glorious spread out (adjusting spread to keep in view)
      // Restored rotation consistency on mobile
      tTl.to('.device-layer', { rotateX: isDesktop ? 30 : 30, rotateY: isDesktop ? -10 : -10, scale: isDesktop ? 0.65 : 0.55, duration: 2 }, 1.5);

      // Spread them further but keep inside screen relative to the -50% center
      tTl.to('.layer-ui', { z: isDesktop ? 200 : 150, yPercent: isDesktop ? -65 : -60, xPercent: isDesktop ? -65 : -60, duration: 2 }, 1.5);
      tTl.to('.layer-body', { z: 0, duration: 2 }, 1.5);
      tTl.to('.layer-ai', { z: isDesktop ? -200 : -150, yPercent: isDesktop ? -35 : -40, xPercent: isDesktop ? -35 : -40, duration: 2 }, 1.5);

      tTl.to('.teardown-label', { opacity: 1, duration: 1, stagger: 0.2 }, 2);

      // Step 4: Graceful fade out to prevent visual bleed during natural scroll
      tTl.to('.teardown-container', { opacity: 0, scale: 0.55, yPercent: -20, duration: 1.5 }, 3.5);
    });
  }

  // 5. Features & Roles Horizontal Scroll (with Lenis and dynamic resizing)
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    const featureTracks = gsap.utils.toArray<HTMLElement>('.features-track')

    featureTracks.forEach((track) => {

      // Calculate dynamic scroll amount.
      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        let containerWidth = track.parentElement!.offsetWidth;
        // The max distance the track needs to scroll is its width minus its container's width, plus a small padding
        return Math.max(0, trackWidth - containerWidth + 40);
      };

      // We explicitly create the trigger unconditionally, but pass it functional 
      // values so that if the screen resizes to 'fit' everything, the math 
      // returns 0, and the animation gracefully skips.
      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: track.closest('.section'),
          start: "center center",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true // Re-calculate these functional values on resize!
        }
      });
    });
  });

  // 6. Roles Bento Grid Staggered Reveal
  const roleItems = gsap.utils.toArray<HTMLElement>('.role-grid-item')
  gsap.fromTo(roleItems, {
    opacity: 0,
    y: 50
  }, {
    scrollTrigger: {
      trigger: '.roles-grid',
      start: "top 80%"
    },
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power3.out"
  })

  // 7. Modules Grid Bento Staggered Reveal
  const moduleItems = gsap.utils.toArray<HTMLElement>('.module-card')
  gsap.fromTo(moduleItems, {
    opacity: 0,
    y: 50,
    scale: 0.95
  }, {
    scrollTrigger: {
      trigger: '.modules-section',
      start: "top 75%"
    },
    opacity: 1,
    y: 0,
    scale: 1,
    stagger: 0.1,
    duration: 1.2,
    ease: "power4.out"
  })
})
