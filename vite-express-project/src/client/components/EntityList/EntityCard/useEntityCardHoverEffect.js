import { useState, useCallback } from 'react';

export const useEntityCardHoverEffect = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    const elements = document.getElementsByClassName('entity-card-container');

    Array.from(elements).forEach(element => {
      const isHovering = element.classList.contains('is-hovering');

      if (!isHovering) {
        element.classList.add('fade-out');
      }
    });

    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const elements = document.getElementsByClassName('entity-card-container');

    Array.from(elements).forEach(element => {
      element.classList.remove('fade-out');
    });

    setIsHovering(false);
  }, []);
 
  return {
    isHovering,
    handleMouseEnter,
    handleMouseLeave
  };
};