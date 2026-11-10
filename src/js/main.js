/**
 * Kirubel Kidanu - Portfolio Main JavaScript
 * Handles navigation, carousel, case study modals, lightbox, and clipboard interactions.
 */

import { projectsData } from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCarousel();
  initCaseStudyModal();
  initLightbox();
  initClipboard();
  initDynamicYear();
  initScrollAnimations();
});

// -------------------------------------------------------------
// 1. Navigation & Mobile Drawer
// -------------------------------------------------------------
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky nav appearance on scroll
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile drawer toggle
  if (mobileMenuBtn && mobileMenuDrawer) {
    const toggleMenu = () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenuDrawer.classList.toggle('hidden');
      
      const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
      const closeIcon = mobileMenuBtn.querySelector('.close-icon');
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close when clicking nav link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (!mobileMenuDrawer.classList.contains('hidden')) {
          toggleMenu();
        }
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenuDrawer.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  }
}

// -------------------------------------------------------------
// 2. Featured Projects Carousel
// -------------------------------------------------------------
function initCarousel() {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const currentIndicator = document.getElementById('carousel-current-index');
  const totalIndicator = document.getElementById('carousel-total-count');
  const progressDots = document.getElementById('carousel-dots');

  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.carousel-slide'));
  const totalSlides = slides.length;
  let currentIndex = 0;
  let isDown = false;
  let startX;
  let scrollLeft;

  if (totalIndicator) {
    totalIndicator.textContent = String(totalSlides).padStart(2, '0');
  }

  // Generate pagination dots
  if (progressDots) {
    progressDots.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `h-1.5 transition-all duration-300 rounded-full ${
        idx === 0 ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
      }`;
      dot.setAttribute('aria-label', `Go to project ${idx + 1}`);
      dot.addEventListener('click', () => scrollToSlide(idx));
      progressDots.appendChild(dot);
    });
  }

  function updateIndicators(index) {
    currentIndex = index;
    if (currentIndicator) {
      currentIndicator.textContent = String(currentIndex + 1).padStart(2, '0');
    }
    if (progressDots) {
      const dots = progressDots.querySelectorAll('button');
      dots.forEach((d, idx) => {
        if (idx === currentIndex) {
          d.className = 'h-1.5 w-8 bg-emerald-400 transition-all duration-300 rounded-full';
        } else {
          d.className = 'h-1.5 w-2 bg-slate-700 hover:bg-slate-500 transition-all duration-300 rounded-full';
        }
      });
    }

    // Toggle button disabled states
    if (prevBtn) {
      prevBtn.disabled = currentIndex === 0;
      prevBtn.classList.toggle('opacity-40', currentIndex === 0);
      prevBtn.classList.toggle('cursor-not-allowed', currentIndex === 0);
    }
    if (nextBtn) {
      nextBtn.disabled = currentIndex === totalSlides - 1;
      nextBtn.classList.toggle('opacity-40', currentIndex === totalSlides - 1);
      nextBtn.classList.toggle('cursor-not-allowed', currentIndex === totalSlides - 1);
    }
  }

  function scrollToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    const targetSlide = slides[index];
    if (targetSlide) {
      targetSlide.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      updateIndicators(index);
    }
  }

  // Scroll detection via IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const index = slides.indexOf(entry.target);
          if (index !== -1) {
            updateIndicators(index);
          }
        }
      });
    },
    { root: track, threshold: 0.5 }
  );

  slides.forEach(slide => observer.observe(slide));

  // Button navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToSlide(currentIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalSlides - 1) {
        scrollToSlide(currentIndex + 1);
      }
    });
  }

  // Drag to scroll interaction
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('is-dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      track.classList.remove('is-dragging');
    }
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });

  // Keyboard navigation within carousel
  track.setAttribute('tabindex', '0');
  track.setAttribute('aria-label', 'Featured projects carousel. Use arrow keys to navigate.');
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentIndex > 0) scrollToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (currentIndex < totalSlides - 1) scrollToSlide(currentIndex + 1);
    }
  });

  updateIndicators(0);
}

// -------------------------------------------------------------
// 3. Case Study Deep-Dive Modal
// -------------------------------------------------------------
function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('modal-close-btn');
  const triggerBtns = document.querySelectorAll('[data-case-study]');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-case-study');
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        renderCaseStudy(project);
        openModal();
      }
    });
  });

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.setAttribute('aria-hidden', 'false');
    closeBtn?.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modal.setAttribute('aria-hidden', 'true');
  }

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function renderCaseStudy(p) {
  const container = document.getElementById('case-study-content');
  if (!container) return;

  const featuresHtml = p.features
    .map(
      f => `
      <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
        <div class="flex items-center gap-2.5 text-emerald-400 font-semibold mb-2 text-sm">
          <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          ${f.title}
        </div>
        <p class="text-xs md:text-sm text-slate-400 leading-relaxed">${f.desc}</p>
      </div>`
    )
    .join('');

  const stackHtml = p.techStack
    .map(
      tech => `<span class="px-3 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-emerald-300 border border-emerald-500/20">${tech}</span>`
    )
    .join('');

  const galleryHtml = p.gallery
    .map(
      (img, idx) => `
      <div class="group relative rounded-xl overflow-hidden border border-slate-800/90 bg-slate-900 cursor-pointer transition-all duration-300 hover:border-emerald-500/40"
           data-lightbox-trigger="${p.id}" data-lightbox-index="${idx}">
        <div class="browser-header">
          <span class="browser-dot bg-rose-500/80"></span>
          <span class="browser-dot bg-amber-500/80"></span>
          <span class="browser-dot bg-emerald-500/80"></span>
          <span class="text-[11px] font-mono text-slate-400 ml-2 truncate">${img.title}</span>
        </div>
        <div class="overflow-hidden aspect-video bg-slate-950 flex items-center justify-center">
          <img src="${img.src}" alt="${img.title}" loading="lazy" class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div class="p-3 bg-slate-900/90 border-t border-slate-800/60 flex items-center justify-between">
          <span class="text-xs font-medium text-slate-300 truncate">${img.title}</span>
          <span class="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            Enlarge
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </span>
        </div>
      </div>`
    )
    .join('');

  const liveButtonHtml = p.liveUrl
    ? `
    <div class="mt-6 flex flex-wrap items-center gap-4">
      <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 inline-flex items-center gap-2">
        <span>Visit Live Site</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <span class="text-xs font-mono text-slate-400 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Live Production Deployment
      </span>
    </div>`
    : `
    <div class="mt-6 flex items-center gap-2">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-xs font-mono text-slate-400 border border-slate-700/60">
        <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
        ${p.isInternal ? 'Internal Enterprise System' : 'Case Study & Architecture'}
      </span>
    </div>`;

  container.innerHTML = `
    <!-- Modal Header -->
    <div class="border-b border-slate-800/80 pb-6 mb-8">
      <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-emerald-400 mb-3 pr-10">
        <span class="px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">PROJECT ${p.number}</span>
        <span class="text-slate-400">•</span>
        <span class="text-slate-400">${p.category}</span>
        <span class="text-slate-400">•</span>
        <span class="text-slate-400">${p.role}</span>
      </div>
      <h2 class="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4 pr-10">${p.title}</h2>
      <div class="flex flex-wrap gap-2 mb-6">
        ${stackHtml}
      </div>
      <p class="text-base md:text-lg text-slate-300 leading-relaxed">${p.overview}</p>
      ${liveButtonHtml}
    </div>

    <!-- Main Hero Screenshot Preview -->
    <div class="browser-frame mb-10">
      <div class="browser-header">
        <span class="browser-dot bg-rose-500/80"></span>
        <span class="browser-dot bg-amber-500/80"></span>
        <span class="browser-dot bg-emerald-500/80"></span>
        <span class="text-xs font-mono text-slate-400 ml-3 truncate">${p.title} — Primary Interface</span>
      </div>
      <div class="bg-slate-950 cursor-pointer group relative" data-lightbox-trigger="${p.id}" data-lightbox-index="0">
        <img src="${p.previewImage}" alt="${p.title}" class="w-full object-cover transition-opacity duration-300 group-hover:opacity-95" />
        <div class="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span class="px-4 py-2 rounded-lg bg-slate-900/90 text-white text-xs font-medium border border-emerald-500/30 flex items-center gap-2 shadow-2xl">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Click to expand full resolution
          </span>
        </div>
      </div>
    </div>

    <!-- Problem & Solution Grid -->
    <div class="grid md:grid-cols-2 gap-6 mb-10">
      <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
        <div class="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2">The Challenge</div>
        <h3 class="text-lg font-bold text-white mb-3">Problem & Context</h3>
        <p class="text-sm text-slate-300 leading-relaxed">${p.problem}</p>
      </div>
      <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
        <div class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">Engineering Delivery</div>
        <h3 class="text-lg font-bold text-white mb-3">My Contribution & Solution</h3>
        <p class="text-sm text-slate-300 leading-relaxed">${p.solution}</p>
      </div>
    </div>

    <!-- Key Features Section -->
    <div class="mb-10">
      <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        Core Capabilities & Implemented Workflows
      </h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${featuresHtml}
      </div>
    </div>

    <!-- Verified Full-Resolution Gallery -->
    <div class="mb-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h3 class="text-lg font-bold text-white flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          Application Visual Gallery
        </h3>
        <span class="text-xs font-mono text-slate-400">Select any image to enlarge</span>
      </div>
      <div class="grid sm:grid-cols-2 gap-4">
        ${galleryHtml}
      </div>
    </div>
  `;

  // Attach lightbox listeners to freshly rendered elements
  attachLightboxTriggers();
}

// -------------------------------------------------------------
// 4. Accessible Fullscreen Lightbox
// -------------------------------------------------------------
let currentLightboxGallery = [];
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  closeBtn?.addEventListener('click', closeLightbox);

  prevBtn?.addEventListener('click', () => {
    if (currentLightboxIndex > 0) {
      currentLightboxIndex--;
      updateLightboxContent();
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (currentLightboxIndex < currentLightboxGallery.length - 1) {
      currentLightboxIndex++;
      updateLightboxContent();
    }
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && currentLightboxIndex > 0) {
      currentLightboxIndex--;
      updateLightboxContent();
    }
    if (e.key === 'ArrowRight' && currentLightboxIndex < currentLightboxGallery.length - 1) {
      currentLightboxIndex++;
      updateLightboxContent();
    }
  });

  attachLightboxTriggers();
}

function attachLightboxTriggers() {
  const triggers = document.querySelectorAll('[data-lightbox-trigger]');
  triggers.forEach(t => {
    t.addEventListener('click', () => {
      const projectId = t.getAttribute('data-lightbox-trigger');
      const index = parseInt(t.getAttribute('data-lightbox-index') || '0', 10);
      const project = projectsData.find(p => p.id === projectId);
      if (project && project.gallery && project.gallery.length > 0) {
        currentLightboxGallery = project.gallery;
        currentLightboxIndex = index;
        openLightbox();
      }
    });
  });
}

function openLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;
  lightbox.classList.add('active');
  updateLightboxContent();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;
  lightbox.classList.remove('active');
}

function updateLightboxContent() {
  const imgEl = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  const currentItem = currentLightboxGallery[currentLightboxIndex];
  if (!currentItem) return;

  if (imgEl) {
    imgEl.src = currentItem.src;
    imgEl.alt = currentItem.title || 'Project Screenshot';
  }
  if (titleEl) titleEl.textContent = currentItem.title || '';
  if (captionEl) captionEl.textContent = currentItem.caption || '';
  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} / ${currentLightboxGallery.length}`;
  }

  if (prevBtn) {
    prevBtn.disabled = currentLightboxIndex === 0;
    prevBtn.classList.toggle('opacity-30', currentLightboxIndex === 0);
  }
  if (nextBtn) {
    nextBtn.disabled = currentLightboxIndex === currentLightboxGallery.length - 1;
    nextBtn.classList.toggle('opacity-30', currentLightboxIndex === currentLightboxGallery.length - 1);
  }
}

// -------------------------------------------------------------
// 5. Email Clipboard Copy
// -------------------------------------------------------------
function initClipboard() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const email = 'kirubelkidanu25@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        `;
        btn.classList.add('bg-emerald-950/80', 'text-emerald-300', 'border-emerald-500/50');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('bg-emerald-950/80', 'text-emerald-300', 'border-emerald-500/50');
        }, 2200);
      } catch (err) {
        // Fallback to mailto
        window.location.href = `mailto:${email}`;
      }
    });
  });
}

// -------------------------------------------------------------
// 6. Dynamic Copyright Year
// -------------------------------------------------------------
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// -------------------------------------------------------------
// 7. Scroll Reveal Observer
// -------------------------------------------------------------
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
    observer.observe(el);
  });
}
