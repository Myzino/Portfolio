import { useState, useEffect, useRef } from "react";

function FadeOnScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the element is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(true);  // fade in
        } else {
          setIsVisible(false); // fade out
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
        height: "200px",
        margin: "50px 0",
        background: "#ddd",
      }}
    >
      {isVisible ? "I’m visible 😃" : "I’m hidden 👻"}
    </div>
  );
}

export default FadeOnScroll;
