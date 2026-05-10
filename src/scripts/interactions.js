// interactions.js
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Helper for easing (easeOutExpo)
  const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  // 1. Counter Animation Observer
  const counters = document.querySelectorAll('[data-counter="true"]');
  if (counters.length > 0) {
    if (prefersReducedMotion) {
      // If reduced motion, let the server-side text remain (it's already the final value)
    } else {
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const endValue = parseFloat(target.getAttribute('data-counter-value') || '0');
            const format = target.getAttribute('data-counter-format') || 'integer';
            const decimals = parseInt(target.getAttribute('data-counter-decimals') || '0', 10);
            const prefix = target.getAttribute('data-counter-prefix') || '';
            const suffix = target.getAttribute('data-counter-suffix') || '';
            
            const duration = 2000; // 2 seconds
            let startTime = null;
            
            const step = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const easedProgress = easeOutExpo(progress);
              const currentValue = easedProgress * endValue;
              
              let displayValue = '';
              if (format === 'thousand-dot') {
                displayValue = Math.floor(currentValue).toLocaleString('de-DE');
              } else if (format === 'decimal') {
                displayValue = currentValue.toFixed(decimals);
              } else {
                displayValue = Math.floor(currentValue).toString();
              }
              
              target.textContent = `${prefix}${displayValue}${suffix}`;
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                // Ensure final value is exact
                let finalDisplay = '';
                if (format === 'thousand-dot') {
                  finalDisplay = endValue.toLocaleString('de-DE');
                } else if (format === 'decimal') {
                  finalDisplay = endValue.toFixed(decimals);
                } else {
                  finalDisplay = endValue.toString();
                }
                target.textContent = `${prefix}${finalDisplay}${suffix}`;
              }
            };
            
            window.requestAnimationFrame(step);
            counterObserver.unobserve(target);
          }
        });
      }, { threshold: 0.1 });
      counters.forEach(counter => counterObserver.observe(counter));
    }
  }

  // 2. SVG Chart Observer
  const charts = document.querySelectorAll('[data-animate="chart"]');
  if (charts.length > 0) {
    if (prefersReducedMotion) {
      charts.forEach(chart => chart.classList.add('animated'));
    } else {
      const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            chartObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      charts.forEach(chart => chartObserver.observe(chart));
    }
  }

  // 3. Growth Bars Observer
  const bars = document.querySelectorAll('[data-animate="bar"]');
  if (bars.length > 0) {
    if (prefersReducedMotion) {
      bars.forEach(bar => bar.classList.add('fill-active'));
    } else {
      const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fill-active');
            barObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      bars.forEach(bar => barObserver.observe(bar));
    }
  }

  // 4. Workflow Scrollytelling Observer
  const workflowContainer = document.querySelector('[data-workflow]');
  if (workflowContainer && window.innerWidth >= 900 && !prefersReducedMotion) {
    const steps = workflowContainer.querySelectorAll('[data-workflow-step]');
    const navItems = workflowContainer.querySelectorAll('.workflow-nav-item');
    
    if (steps.length > 0 && navItems.length > 0) {
      const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navItems.forEach(nav => nav.classList.remove('active'));
            steps.forEach(step => step.classList.remove('active-card'));
            
            const targetId = entry.target.getAttribute('data-workflow-step');
            const activeNav = workflowContainer.querySelector(`.workflow-nav-item[data-target="${targetId}"]`);
            if (activeNav) activeNav.classList.add('active');
            entry.target.classList.add('active-card');
          }
        });
      }, { 
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0 
      });

      steps.forEach(step => stepObserver.observe(step));
    }
  }
  // 5. Image Lightbox
  const lightboxTriggers = document.querySelectorAll('[data-lightbox-trigger]');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightboxTriggers.length > 0 && lightbox) {
    lightboxTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const src = trigger.getAttribute('data-lightbox-src');
        const alt = trigger.getAttribute('data-lightbox-alt');
        const title = trigger.getAttribute('data-lightbox-title');
        
        if (src && lightboxImage) {
          lightboxImage.src = src;
          lightboxImage.alt = alt || '';
          if (lightboxTitle) lightboxTitle.textContent = title || '';
          lightbox.showModal();
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.close();
      });
    }

    // Close on backdrop click safely
    lightbox.addEventListener('click', (e) => {
      const dialogDimensions = lightbox.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        lightbox.close();
      }
    });

    // Optional: clear src on close to avoid showing previous image briefly on next open
    lightbox.addEventListener('close', () => {
      setTimeout(() => {
        if (!lightbox.open && lightboxImage) lightboxImage.src = '';
      }, 300); // Wait for potential close animation
    });
  }
});
