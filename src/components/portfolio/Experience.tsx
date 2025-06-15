import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const workExperience = {
    company: "Kashyap Technoengicon Pvt Ltd.",
    position: "Web Development Intern",
    duration: "January 2024 - March 2024",
    location: "Mumbai, Maharashtra (Remote)",
    description: [
      "Developed RESTful APIs and integrated them with React frontend for internal applications, improving user interaction responsiveness",
      "Applied modern web technologies to optimize site performance, reducing load time and enhancing overall responsiveness",
      "Collaborated with teams on designing and implementing user-friendly web interfaces using React.js, contributing to improved user experience and engagement",
    ],
  };

  const education = {
    institution: "IMS Engineering College",
    degree: "Bachelor of Technology (Computer Science)",
    duration: "2022 - 2026",
    location: "Ghaziabad, UP",
    cgpa: "9.09",
    activities: [
      "Core Member of the Knack Club",
      "Ex-Core Member of Runtime Hackers",
    ],
  };

  const achievements = [
    {
      title: "Code War & Blind Coding",
      event: "Vibgyor Fest 2024 (IMS Ghaziabad)",
      position: "1st Place",
      icon: Award,
      color: "from-[#F59E0B] to-[#D97706]",
    },
    {
      title: "Ideathon (Inno Pitch)",
      event: "Mélange 2025",
      position: "1st Place",
      icon: Star,
      color: "from-[#8245EC] to-[#A855F7]",
    },
    {
      title: "NAHAVESH 2025",
      event: "AKTU Ideathon",
      position: "Finalist",
      icon: Award,
      color: "from-[#3B82F6] to-[#1D4ED8]",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#050414] relative">
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
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8245EC] to-[#A855F7] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional journey and academic achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-[#111827]/60 backdrop-blur-sm border-gray-800 hover:border-[#8245EC]/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#8245EC] mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-[#8245EC] transition-colors">
                      Professional Experience
                    </CardTitle>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#8245EC]">
                    {workExperience.position}
                  </h3>
                  <p className="text-gray-300 font-medium">
                    {workExperience.company}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {workExperience.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {workExperience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {workExperience.description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="text-gray-400 leading-relaxed flex items-start"
                    >
                      <span className="text-[#8245EC] mr-2 mt-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-[#111827]/60 backdrop-blur-sm border-gray-800 hover:border-[#8245EC]/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[#10B981] to-[#3B82F6] mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-[#8245EC] transition-colors">
                      Education
                    </CardTitle>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#8245EC]">
                    {education.degree}
                  </h3>
                  <p className="text-gray-300 font-medium">
                    {education.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {education.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {education.location}
                    </div>
                  </div>

                  <Badge className="bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30 font-semibold">
                    CGPA: {education.cgpa}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Leadership Activities:
                  </h4>
                  <ul className="space-y-2">
                    {education.activities.map((activity, index) => (
                      <li
                        key={index}
                        className="text-gray-400 flex items-start"
                      >
                        <span className="text-[#8245EC] mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Achievements & Recognition
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="bg-[#111827]/60 backdrop-blur-sm border-gray-800 hover:border-[#8245EC]/50 transition-all duration-300 transform hover:-translate-y-1 group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>

                    <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30 mb-3">
                      {achievement.position}
                    </Badge>

                    <h4 className="font-semibold text-white mb-2 group-hover:text-[#8245EC] transition-colors">
                      {achievement.title}
                    </h4>

                    <p className="text-sm text-gray-400">{achievement.event}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center bg-gradient-to-r from-[#8245EC] to-[#A855F7] rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6">
            Problem Solving Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-purple-100">
                DSA Problems Solved on LeetCode
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-purple-100">
                Competition Wins & Recognition
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
