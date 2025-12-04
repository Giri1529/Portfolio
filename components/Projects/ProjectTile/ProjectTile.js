import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
import { PROJECT_IMAGES } from "../images";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop, onClick }) => {
  const projectCard = useRef(null);

  const { name, imageKey, description, gradient } = project;

  const image = PROJECT_IMAGES[imageKey];

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    VanillaTilt.init(projectCard.current, tiltOptions);
  }, [projectCard]);

  return (
    <div
      onClick={onClick}
      className={`overflow-hidden rounded-3xl snap-start cursor-pointer hover:scale-105 transition-transform duration-300 ${additionalClasses}`}
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative overflow-hidden flex flex-col justify-end`}
        style={{
          background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            placeholder="blur"
            fill
            className="object-contain"
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Gradient Overlay for Text Visibility */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 pb-8">
          <h1
            className="font-bold text-2xl sm:text-3xl text-white mb-2 drop-shadow-lg"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {name}
          </h1>
          <p
            className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-md"
            style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}
          >
            {description}
          </p>
        </div>

        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
