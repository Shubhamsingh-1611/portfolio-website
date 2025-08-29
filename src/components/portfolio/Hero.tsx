import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-[#050414]"
    >
      {/* Animated background with grid overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30"></div>

        {/* Animated purple blob */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-400 font-light"
            >
              Hi, I am
            </motion.p>

            {/* Main name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              Shubham Kumar Singh
            </motion.h1>

            {/* Typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-[#8245EC] font-medium"
            >
              I am a{" "}
              <span className="relative">
                Full Stack Developer
                <motion.span
                  className="absolute -right-1 top-0 w-0.5 h-full bg-[#8245EC]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              I am a full-stack developer with expertise in React, Node.js, and
              modern web technologies. Passionate about building innovative
              applications and solving complex problems with clean, efficient
              code.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-[#8245EC] hover:bg-[#A855F7] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-0"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <a href="https://drive.google.com/file/d/1WpmvxNbQ0rtxq1x1kALW9udRQJxni7Fa/view?usp=sharing">
              <Button

                variant="outline"
                size="lg"
                className="bg-transparent border-[#8245EC] text-[#8245EC] hover:bg-[#8245EC] hover:text-white transition-all duration-300 transform hover:scale-105 px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex space-x-4 pt-4"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-[#8245EC] hover:bg-[#8245EC]/10 transition-all duration-300 transform hover:scale-110"
                onClick={() =>
                  window.open("https://github.com/Shubhamsingh-1611", "_blank")
                }
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-[#8245EC] hover:bg-[#8245EC]/10 transition-all duration-300 transform hover:scale-110"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/Shubham-singh1611",
                    "_blank",
                  )
                }
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-[#8245EC] hover:bg-[#8245EC]/10 transition-all duration-300 transform hover:scale-110"
                onClick={() =>
                  window.open(
                    "https://leetcode.com/u/singhofficial1611",
                    "_blank",
                  )
                }
              >
                <ExternalLink className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8245EC] to-[#A855F7] rounded-full blur-2xl opacity-30 scale-110"></div>

              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#8245EC]/30 shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdae70b6c992b4906970bc89d8ac5e42d%2F2bdd57294f7a4defb28dbde240458315?format=webp&width=800"
                  alt="Shubham Kumar Singh"
                  className="w-full h-full object-cover scale-110 hover:scale-115 transition-transform duration-500"
                />
              </div>

              {/* Floating elements around the image */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#8245EC] rounded-full opacity-60"
              ></motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#A855F7] rounded-full opacity-40"
              ></motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full opacity-50"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 hover:text-[#8245EC] transition-colors flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
