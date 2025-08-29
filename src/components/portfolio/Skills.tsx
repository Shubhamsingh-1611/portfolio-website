import { motion } from "framer-motion";
import { Code, Database, Settings, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
      color: "from-[#8245EC] to-[#A855F7]",
    },
    {
      icon: Database,
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs",
        
      ],
      color: "from-[#A855F7] to-[#EC4899]",
    },
    {
      icon: Globe,
      title: "Languages",
      skills: ["JavaScript", "Python", "Java", "C", "TypeScript", "Solidity"],
      color: "from-[#3B82F6] to-[#8245EC]",
    },
    {
      icon: Settings,
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      color: "from-[#10B981] to-[#3B82F6]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-[#050414] relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8245EC] to-[#A855F7] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my technical skills and expertise in various
            technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-[#111827]/80 backdrop-blur-sm border-gray-800 hover:border-[#8245EC]/50 transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div
                    className={`p-4 rounded-lg bg-gradient-to-r ${category.color} mx-auto mb-6 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-[#8245EC] transition-colors duration-300">
                    {category.title}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                        className="bg-[#050414]/50 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-[#8245EC] hover:bg-[#8245EC]/10 transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-800/50 hover:border-[#8245EC]/30"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-[#111827]/50 rounded-lg border border-gray-800/50">
            <div className="text-4xl font-bold text-[#8245EC] mb-2">300+</div>
            <div className="text-gray-400">DSA Problems Solved</div>
          </div>
          <div className="text-center p-6 bg-[#111827]/50 rounded-lg border border-gray-800/50">
            <div className="text-4xl font-bold text-[#A855F7] mb-2">85%</div>
            <div className="text-gray-400">Aggerate-Till 6th SEM</div>
          </div>
          <div className="text-center p-6 bg-[#111827]/50 rounded-lg border border-gray-800/50">
            <div className="text-4xl font-bold text-[#3B82F6] mb-2">4+</div>
            <div className="text-gray-400">Major Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
