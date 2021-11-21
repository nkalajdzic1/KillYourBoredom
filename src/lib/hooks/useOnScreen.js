import { useState, useEffect } from "react";

/**
 * @param {dom reference} containerRef reference to the dom element of the container
 * @param {dom reference} trackingElementRef reference to the dom element of the element to be observed
 * @returns {boolean} returns true if the given dom element is taking more than 50% from the container's space
 */
export default function useOnScreen(containerRef, trackingElementRef) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) =>
      setIntersecting(
        entry.intersectionRect.height / containerRef.current.clientHeight > 0.5
      ),
    {
      root: containerRef.current,
      threshold: new Array(100).fill(0).map((x, i) => x + i / 100),
    }
  );

  useEffect(() => {
    observer.observe(trackingElementRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  return isIntersecting;
}
