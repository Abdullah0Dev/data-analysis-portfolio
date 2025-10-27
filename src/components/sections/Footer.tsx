"use client";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const Footer = () => {
  return (
    <div className="relative w-full flex items-end justify-center overflow-hidden mt-20">
      {/* Half Circle Container */}
      <div className="relative w-[380px] h-[35px] rounded-t-full overflow-hidden flex items-center justify-center animate-float">
        {/* Animated Background */}
        <BackgroundGradientAnimation containerClassName="absolute inset-0 z-0" />

        {/* Footer Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
          <span className="text-sm font-light">
            Crafted with <span className="text-red-400">❤️</span> by{" "}
            <a
              href="https://www.devmindslab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Dev Minds
            </a>
          </span>
        </div>

        {/* Subtle glowing edge */}
        <div className="absolute inset-0 rounded-t-full border-t border-blue-400/30 blur-[1px]" />
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Footer;
