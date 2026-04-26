import { useRef, useEffect } from "react";

const ProgressIndicator = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const update = (progress) => {
      if (!progressRef.current) return;
      progressRef.current.style.transform = `scaleX(${progress})`;
    };

    const onLenisScroll = ({ progress }) => update(progress);

    const onNativeScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled =
        document.body.scrollTop || document.documentElement.scrollTop;
      update(total > 0 ? scrolled / total : 0);
    };

    let attached = false;
    const tryAttachLenis = () => {
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.on("scroll", onLenisScroll);
        attached = true;
        return true;
      }
      return false;
    };

    if (!tryAttachLenis()) {
      window.addEventListener("scroll", onNativeScroll, { passive: true });
      const interval = setInterval(() => {
        if (tryAttachLenis()) {
          window.removeEventListener("scroll", onNativeScroll);
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
        window.removeEventListener("scroll", onNativeScroll);
        if (attached && window.lenis) window.lenis.off("scroll", onLenisScroll);
      };
    }

    return () => {
      if (window.lenis) window.lenis.off("scroll", onLenisScroll);
    };
  }, []);

  return (
    <div className="progress w-full fixed top-0 z-50">
      <div ref={progressRef} className="progress-bar"></div>
    </div>
  );
};

export default ProgressIndicator;
