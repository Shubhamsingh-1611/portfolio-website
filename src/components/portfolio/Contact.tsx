import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = "service_k9itc45"; // Replace with your EmailJS service ID
      const templateId = "template_88v5rff"; // Replace with your EmailJS template ID
      const publicKey = "1Cf8lQROIWteZu6eF"; // Replace with your EmailJS public key

      // Template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: "Shubham Kumar Singh",
        to_email: "singh16112004@gmail.com",
        subject: data.subject,
        message: data.message,
        reply_to: data.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      console.error("Email sending failed:", error);

      // Fallback: Open default email client
      const mailtoLink = `mailto:singh16112004@gmail.com?subject=${encodeURIComponent(
        data.subject,
      )}&body=${encodeURIComponent(
        `From: ${data.name} (${data.email})\n\n${data.message}`,
      )}`;

      window.open(mailtoLink);

      toast({
        title: "Email client opened",
        description:
          "Your default email client has been opened with the message pre-filled.",
      });

      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "singh16112004@gmail.com",
      link: "mailto:singh16112004@gmail.com",
      color: "from-[#EF4444] to-[#DC2626]",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8789030726",
      link: "tel:+918789030726",
      color: "from-[#10B981] to-[#059669]",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, India",
      link: "#",
      color: "from-[#3B82F6] to-[#1D4ED8]",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Shubhamsingh-1611",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/Shubham-singh1611",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      link: "https://leetcode.com/u/singhofficial1611",
      color: "hover:text-[#FFA116]",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#111827] relative">
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
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8245EC] to-[#A855F7] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities,
                innovative projects, and collaborating with fellow developers.
                Whether you have a project in mind or just want to connect, I'd
                love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="bg-[#050414]/60 backdrop-blur-sm border-gray-800 hover:border-[#8245EC]/50 transition-all duration-300 cursor-pointer group">
                    <CardContent className="flex items-center p-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <a
                          href={info.link}
                          className="font-medium text-white hover:text-[#8245EC] transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow me on
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="bg-[#050414]/60 border-gray-800 text-gray-400 hover:border-[#8245EC] hover:text-[#8245EC] hover:bg-[#8245EC]/10 transition-all duration-300 transform hover:scale-110"
                    onClick={() => window.open(social.link, "_blank")}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-[#050414]/60 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Send a Message
                </CardTitle>
                <p className="text-sm text-gray-400">
                  Fill out this form and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="bg-[#111827] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#8245EC] focus:ring-[#8245EC]"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-300">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="bg-[#111827] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#8245EC] focus:ring-[#8245EC]"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      className="bg-[#111827] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#8245EC] focus:ring-[#8245EC]"
                      placeholder="Let's work together"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      className="bg-[#111827] border-gray-700 text-white placeholder:text-gray-500 focus:border-[#8245EC] focus:ring-[#8245EC] resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8245EC] hover:bg-[#A855F7] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none disabled:opacity-70 border-0"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>

                {/* Setup Instructions */}
                <div className="mt-6 p-4 bg-[#111827]/30 rounded-lg border border-gray-800">
                  <h4 className="text-sm font-semibold text-[#8245EC] mb-2">
                    📧 Email Setup Instructions
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    To enable direct email delivery, you need to set up EmailJS:
                    <br />
                    1. Create a free account at{" "}
                    <a
                      href="https://emailjs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8245EC] hover:underline"
                    >
                      emailjs.com
                    </a>
                    <br />
                    2. Replace the service ID, template ID, and public key in
                    the code
                    <br />
                    Currently, the form opens your default email client as a
                    fallback.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500">
            © 2024 Shubham Kumar Singh. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
