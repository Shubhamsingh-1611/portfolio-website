import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  MapPin,
  MessageCircle,
  Brain,
  CloudRain,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Wanderlust - Airbnb Clone",
      description:
        "A full-stack rental application featuring user authentication, property listings, and interactive map integration. Built with responsive design and complete CRUD functionality.",
      icon: MapPin,
      technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
      features: [
        "User authentication & authorization",
        "Property listing & management",
        "Interactive map integration",
        "Responsive design",
        "Full CRUD operations",
      ],
      gradient: "from-[#10B981] to-[#059669]",
      deployed: true,
    },
    {
  title: "Decentralize - Voting Application",
  description:
    "A blockchain-based voting platform that ensures secure, transparent, and tamper-proof elections. Allows users to cast votes anonymously while maintaining full integrity of results.",
  icon: Vote, // you can replace with a relevant icon like CheckCircle or a custom voting icon
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "Solidity",
    "Ethereum (Web3.js/ethers.js)",
    "Tailwind CSS",
  ],
  features: [
    "Decentralized and tamper-proof voting system",
    "Secure voter authentication",
    "Anonymous vote casting",
    "Real-time vote tallying",
    "Responsive UI with Tailwind CSS",
  ],
  gradient: "from-[#10B981] to-[#047857]", // you can adjust gradient colors as per your preference
},

    {
      title: "Chatify - Real-time Chat",
      description:
        "A modern chat platform supporting both one-on-one and group conversations using WebSockets. Features real-time notifications and persistent chat history.",
      icon: MessageCircle,
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
      ],
      features: [
        "Real-time messaging with WebSockets",
        "One-on-one & group conversations",
        "Notification system",
        "Chat persistence with MongoDB",
        "Responsive UI with Tailwind CSS",
      ],
      gradient: "from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      title: "Smart Pill Dispenser",
      description:
        "An AI-powered prescription management system that converts handwritten/typed prescriptions into structured pill schedules using OCR and regex-based logic.",
      icon: Brain,
      technologies: ["MERN Stack", "Python", "Flask", "OCR", "AI/ML"],
      features: [
        "AI prescription parser with OCR",
        "React dashboard for patients",
        "Medication schedule management",
        "Real-time browser notifications",
        "Dose tracking & reminders",
      ],
      gradient: "from-[#8245EC] to-[#A855F7]",
    },
    {
      title: "Weather Info App",
      description:
        "A real-time weather application providing accurate forecasts with location-based services. Features clean UI and seamless user experience.",
      icon: CloudRain,
      technologies: ["React.js", "Node.js", "Express.js", "Weather API"],
      features: [
        "Real-time weather data",
        "Location-based forecasts",
        "Weather API integration",
        "Responsive design",
        "Clean, intuitive interface",
      ],
      gradient: "from-[#F59E0B] to-[#D97706]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-24 bg-[#111827] relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8245EC] to-[#A855F7] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of innovative solutions and technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-[#050414]/60 backdrop-blur-sm border-gray-800 hover:border-[#8245EC]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    {project.deployed && (
                      <Badge className="bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30">
                        Live
                      </Badge>
                    )}
                  </div>

                  <CardTitle className="text-2xl font-bold text-white group-hover:text-[#8245EC] transition-colors">
                    {project.title}
                  </CardTitle>

                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#8245EC] mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-[#111827]/50 text-gray-300 border-gray-700 hover:border-[#8245EC]/50 hover:text-[#8245EC] transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#8245EC] mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-sm text-gray-400 flex items-start"
                          >
                            <span className="text-[#8245EC] mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-[#8245EC] text-[#8245EC] hover:bg-[#8245EC] hover:text-white transition-all duration-300"
                      onClick={() =>
                        window.open(
                          "https://github.com/Shubhamsingh-1611",
                          "_blank",
                        )
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {project.deployed && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-gray-400 hover:border-[#8245EC] hover:text-[#8245EC] transition-all duration-300"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-[#8245EC] hover:bg-[#A855F7] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-0"
            onClick={() =>
              window.open("https://github.com/Shubhamsingh-1611", "_blank")
            }
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
