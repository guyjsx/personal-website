import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  stagger?: number;
  animationClass?: string;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  stagger = 200,
  animationClass = 'animate-fade-in-up'
}: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class to the main element
            entry.target.classList.add(animationClass);
            
            // Find all child elements with scroll-animate class
            const animateElements = entry.target.querySelectorAll('.scroll-animate');
            
            animateElements.forEach((element, index) => {
              const delay = index * stagger;
              
              // Set animation delay
              (element as HTMLElement).style.animationDelay = `${delay}ms`;
              
              // Add the animation class
              setTimeout(() => {
                element.classList.add(animationClass);
              }, delay);
            });

            // If triggerOnce is true, stop observing after first trigger
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, stagger, animationClass]);

  return elementRef;
};

export const useStaggeredAnimation = (
  selector: string = '.stagger-animate',
  options: ScrollAnimationOptions = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(selector);
            
            elements.forEach((element, index) => {
              const delay = index * (options.stagger || 150);
              
              setTimeout(() => {
                element.classList.add(options.animationClass || 'animate-fade-in-up');
              }, delay);
            });

            if (options.triggerOnce !== false) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [selector, options]);

  return containerRef;
};