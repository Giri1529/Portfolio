import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - Click anywhere to close */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                        style={{ zIndex: 9998, cursor: 'default' }}
                    />

                    {/* Modal Container */}
                    <div
                        className="fixed inset-0 flex items-center justify-center p-4"
                        style={{ zIndex: 9999, cursor: 'default' }}
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-gray-800"
                            onClick={(e) => e.stopPropagation()}
                            style={{ cursor: 'auto' }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg cursor-pointer"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header with Gradient Accent */}
                            <div className="relative p-6 pb-4 clear-both">
                                <div
                                    className="absolute top-0 left-0 right-0 h-1"
                                    style={{
                                        background: `linear-gradient(90deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                                    }}
                                />
                                <h2 className="text-2xl font-bold text-white pr-10 mb-2">
                                    {project.name}
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    {project.description}
                                </p>
                            </div>

                            {/* Content - Compact Layout */}
                            <div className="px-6 pb-6 space-y-4">
                                {/* About */}
                                <div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {project.fullDescription}
                                    </p>
                                </div>

                                {/* Features & Achievements in 2 columns */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Features */}
                                    {project.features && project.features.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-semibold text-white mb-2 flex items-center">
                                                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 mr-2 rounded-full"></span>
                                                Key Features
                                            </h3>
                                            <ul className="space-y-1.5">
                                                {project.features.slice(0, 4).map((feature, index) => (
                                                    <li key={index} className="flex items-start text-gray-400 text-xs">
                                                        <svg className="w-3.5 h-3.5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Achievements */}
                                    {project.achievements && project.achievements.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-semibold text-white mb-2 flex items-center">
                                                <span className="w-1 h-4 bg-gradient-to-b from-yellow-500 to-orange-500 mr-2 rounded-full"></span>
                                                Achievements
                                            </h3>
                                            <ul className="space-y-1.5">
                                                {project.achievements.map((achievement, index) => (
                                                    <li key={index} className="flex items-start text-gray-400 text-xs">
                                                        <svg className="w-3.5 h-3.5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                        </svg>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Tech Stack - Compact Pills */}
                                {project.tech && project.tech.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-semibold text-white mb-2 flex items-center">
                                            <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 mr-2 rounded-full"></span>
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2.5 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs font-medium border border-gray-700/50 hover:border-gray-600 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer with Links */}
                            {(project.url || project.repo) && (
                                <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800 flex gap-3">
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-purple-500 hover:to-pink-500 transition-all"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                    {project.repo && (
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-lg text-sm font-medium border border-gray-700 hover:bg-gray-700 transition-all"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            View Code
                                        </a>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );

    // Render modal using portal to document.body
    return typeof document !== "undefined"
        ? createPortal(modalContent, document.body)
        : null;
};

export default ProjectModal;
