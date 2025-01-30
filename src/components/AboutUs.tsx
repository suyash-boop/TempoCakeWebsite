import React from "react";
import { Instagram, Twitter, MessageCircle, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface AboutUsProps {
  socialLinks?: SocialLinkProps[];
}

const defaultSocialLinks: SocialLinkProps[] = [
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "@sweetbakery",
    href: "https://instagram.com/sweetbakery",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "@sweetbakery",
    href: "https://twitter.com/sweetbakery",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: "Join Discord",
    href: "https://discord.gg/sweetbakery",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "hello@sweetbakery.com",
    href: "mailto:hello@sweetbakery.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
];

const AboutUs = ({ socialLinks = defaultSocialLinks }: AboutUsProps) => {
  return (
    <div className="w-full bg-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-pink-800 mb-4">
            Connect With Us
          </h2>
          <p className="text-gray-600">
            Follow us on social media or reach out directly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-pink-800 hover:text-pink-600"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
