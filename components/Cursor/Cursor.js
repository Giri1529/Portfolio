import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ isDesktop }) => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (!isDesktop || document.body.clientWidth <= 767) return;

    follower.current.classList.remove("hidden");
    cursor.current.classList.remove("hidden");

    const cursorX = gsap.quickTo(cursor.current, "x", {
      duration: 0.18,
      ease: "power3.out",
    });
    const cursorY = gsap.quickTo(cursor.current, "y", {
      duration: 0.18,
      ease: "power3.out",
    });
    const followerX = gsap.quickTo(follower.current, "x", {
      duration: 0.45,
      ease: "power3.out",
    });
    const followerY = gsap.quickTo(follower.current, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    let lastX = 0;
    let lastY = 0;
    let queued = false;
    const flush = () => {
      cursorX(lastX);
      cursorY(lastY);
      followerX(lastX);
      followerY(lastY);
      queued = false;
    };
    const moveCircle = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!queued) {
        queued = true;
        requestAnimationFrame(flush);
      }
    };

    const hover = () => {
      gsap.to(cursor.current, { scale: 0.5, duration: 0.3, overwrite: "auto" });
      gsap.to(follower.current, { scale: 3, duration: 0.3, overwrite: "auto" });
    };
    const unHover = () => {
      gsap.to(cursor.current, { scale: 1, duration: 0.3, overwrite: "auto" });
      gsap.to(follower.current, { scale: 1, duration: 0.3, overwrite: "auto" });
    };

    document.addEventListener("mousemove", moveCircle, { passive: true });

    const linkEls = Array.from(document.querySelectorAll(".link"));
    linkEls.forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCircle);
      linkEls.forEach((el) => {
        el.removeEventListener("mouseenter", hover);
        el.removeEventListener("mouseleave", unHover);
      });
    };
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className="bg-white rounded-full mix-blend-difference fixed w-4 h-4 select-none pointer-events-none z-50 hidden"
      />
      <div
        ref={follower}
        className="bg-white/[0.02] border border-white/[0.2] rounded-full fixed -top-3 -left-3 w-10 h-10 select-none pointer-events-none z-50 hidden"
      />
    </>
  );
};

export default Cursor;
