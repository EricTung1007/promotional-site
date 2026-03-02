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

  words.forEach((word) => {
    const wrapper = document.createElement('span');
    wrapper.style.overflow = 'hidden';
    wrapper.style.display = 'inline-block';
    wrapper.style.verticalAlign = 'top';
    // Add a space after the word wrapper for natural flowing
    wrapper.style.marginRight = '0.25em';

    const inner = document.createElement('span');
    inner.style.display = 'inline-block';
    inner.innerText = word;
    inner.classList.add('mask-inner');

    wrapper.appendChild(inner);
    element.appendChild(wrapper);
  });

  return element.querySelectorAll('.mask-inner');
}

// --- i18n Localization Engine ---
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
    if (pill.getAttribute('data-lang') === lang) {
      pill.classList.add('active');
    }
  });

  localStorage.setItem('aicoach-lang-v2', lang);
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Language Switcher
  const savedLang = (localStorage.getItem('aicoach-lang-v2') || 'vi') as SupportedLocales;
  const langSwitcher = document.getElementById('lang-switcher') as HTMLSelectElement;

  if (langSwitcher) {
    langSwitcher.value = savedLang;
    langSwitcher.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      setLanguage(target.value as SupportedLocales);

      // Re-trigger scrolltrigger calculations in case text height changed significantly
      setTimeout(() => ScrollTrigger.refresh(), 100);
    });
  }

  // Language Pill Click Listeners
  document.querySelectorAll('.lang-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const targetLang = (e.currentTarget as HTMLElement).getAttribute('data-lang') as SupportedLocales;
      if (targetLang) {
        if (langSwitcher) langSwitcher.value = targetLang;
        setLanguage(targetLang);
        setTimeout(() => ScrollTrigger.refresh(), 100);
      }
    });
  });

  // Set initial language immediately
  setLanguage(savedLang);

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
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out"
    })
      // Mask reveal for subtitle
      .from(heroSubtitleElements, {
        y: "100%",
        duration: 1,
        stagger: 0.05,
        ease: "power4.out"
      }, "-=0.8")
      // Fade Actions
      .to('.hero-actions', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      // Float mockup
      .to('.hero-visual', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
      }, "-=0.8")
  }, 50);

  // 1b. Background Subtle Logo Rotation
  gsap.to('.bg-logo-shape', {
    scrollTrigger: {
      trigger: 'body',
      start: "top top",
      endTrigger: ".teardown-section",
      end: "bottom bottom",
      scrub: 1
    },
    rotationY: 720, // Spin like a coin (diffrent axis) so words stay upright
    ease: "none"
  });

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

  // 4b. Ultra-Premium Teardown Sequence
  const teardownSection = document.querySelector('.teardown-section');
  if (teardownSection) {
    const tTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".teardown-section",
        start: "center center",
        end: "+=1200",
        scrub: 1, // smooth dragging tied to lenis
        pin: true,
      }
    });

    // Initial state setup
    // Center them all with neutral rotation, keeping the -50% translation offset!
    // Shifted yPercent to -42 (from -50 and -35) to find the perfect middle ground
    gsap.set('.device-layer', { z: 0, scale: 0.85, rotateX: 0, rotateY: 0, xPercent: -50, yPercent: -42 });
    gsap.set('.layer-ui', { opacity: 0 });
    gsap.set('.layer-ai', { opacity: 0 });
    gsap.set('.layer-body', { opacity: 1 });

    // Step 1: All layers tilt back together to prevent Z-fighting
    tTl.to('.device-layer', {
      rotateX: 45,
      rotateY: -15,
      scale: 0.75,
      duration: 1
    }, 0);

    // Step 2: Layers separate in 3D space
    // Chat UI springs UP
    tTl.to('.layer-ui', {
      opacity: 1,
      z: 120,
      yPercent: -52, // -42 (base) - 10 (movement)
      xPercent: -60, // -50 (base) - 10 (movement)
      duration: 1
    }, 0.5);

    // Dim the cover page slightly but KEEP IT VISIBLE
    tTl.to('.layer-body', {
      opacity: 0.6,
      duration: 1
    }, 0.5);

    // AI Core emerges DOWN
    tTl.to('.layer-ai', {
      opacity: 1,
      z: -120,
      yPercent: -32, // -42 (base) + 10 (movement)
      xPercent: -40, // -50 (base) + 10 (movement)
      duration: 1
    }, 0.5);

    // Step 3: Final glorious spread out (adjusting spread to keep in view)
    tTl.to('.device-layer', { rotateX: 30, rotateY: -10, scale: 0.65, duration: 2 }, 1.5);

    // Spread them further but keep inside screen relative to the -42% center
    tTl.to('.layer-ui', { z: 200, yPercent: -57, xPercent: -65, duration: 2 }, 1.5);
    tTl.to('.layer-body', { z: 0, duration: 2 }, 1.5);
    tTl.to('.layer-ai', { z: -200, yPercent: -27, xPercent: -35, duration: 2 }, 1.5);

    // Step 4: Graceful fade out to prevent visual bleed during natural scroll
    tTl.to('.teardown-container', { opacity: 0, scale: 0.55, yPercent: -20, duration: 1.5 }, 3.5);
  }

  // 5. Features Horizontal Scroll (with Lenis)
  if (window.innerWidth > 768) {
    const featuresTrack = document.querySelector('.features-track') as HTMLElement
    if (featuresTrack) {
      // Add a fixed padding (200px) so the last card clears the right side of the screen perfectly on all viewports
      const scrollAmount = featuresTrack.scrollWidth - window.innerWidth + 200
      gsap.to(featuresTrack, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: '.features-section',
          start: "center center",
          end: `+=${scrollAmount}`,
          pin: true,
          scrub: true
        }
      })
    }
  }

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

  // 7. Modules Cards Scale Outline Staggered Reveal
  const moduleCards = gsap.utils.toArray<HTMLElement>('.module-card')
  gsap.fromTo(moduleCards, {
    opacity: 0,
    scale: 0.95
  }, {
    scrollTrigger: {
      trigger: '.modules-section',
      start: "top 75%"
    },
    opacity: 1,
    scale: 1,
    stagger: 0.2,
    duration: 1.2,
    ease: "power4.out"
  })
})
