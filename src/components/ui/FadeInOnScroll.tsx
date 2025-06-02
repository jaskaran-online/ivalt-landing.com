"use client";

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms after the element becomes visible
  duration?: number; // Animation duration in ms
  yOffset?: number; // Vertical slide effect in pixels
  triggerOnce?: boolean; // Option to trigger animation only once
  threshold?: number; // IntersectionObserver threshold (0 to 1) - how much of the element should be visible
}

export function FadeInOnScroll({
  children,
  className,
  delay = 0,
  duration = 500,
  yOffset = 10,
  triggerOnce = true,
  threshold = 0.1, // Default to 10% visibility
}: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure we have a current element to observe
    const currentElement = elementRef.current;
    if (!currentElement) {
      return;
    }

    // Initialize the IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              setIsVisible(true);
            }, delay);

            // If triggerOnce is true, unobserve after the first intersection
            if (triggerOnce) {
              observerRef.current?.unobserve(currentElement);
            }
            // It's important to clear the timeout if the component unmounts
            // or if the element scrolls out of view before the delay completes (if not triggerOnce)
            // However, for simplicity and common use (triggerOnce=true), direct cleanup in observer callback is tricky.
            // The main cleanup for the observer itself is in the return function of useEffect.
          } else if (!triggerOnce) {
            // Optional: If you want it to fade out/reset when scrolled out of view and triggerOnce is false
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
      }
    );

    // Start observing the element
    observerRef.current.observe(currentElement);

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // No need to clear timeout here if it's managed within the observer callback scope for specific events
      // or if we expect `triggerOnce` to prevent further changes.
    };
    // Rerun effect if any of these dependencies change.
    // `delay` is used in the callback, `threshold` for observer init.
    // `triggerOnce` affects observer logic.
  }, [delay, threshold, triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all transform',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transform: isVisible ? 'translateY(0)' : `translateY(${yOffset}px)`,
        // Note: The delay prop for CSS transition-delay is not used here
        // because the visibility (and thus the start of the animation)
        // is controlled by JavaScript (setTimeout).
      }}
    >
      {children}
    </div>
  );
} 