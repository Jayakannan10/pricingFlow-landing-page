"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  twitterLink,
  facebookLink,
  instagramLink,
  linkedInLink,
} from "../../app/navLinks/navLinks";

interface FooterLink {
  text: string;
  href: string;
}

export default function FooterSection() {
  const { t } = useTranslation("common");

  // Get links from i18n
  const informationLinks =
    (t("footer.information.links", { returnObjects: true }) as FooterLink[]) ||
    [];
  const helpLinks =
    (t("footer.help.links", { returnObjects: true }) as FooterLink[]) || [];

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: facebookLink, label: "Facebook" },
    { icon: <FaTwitter size={20} />, href: twitterLink, label: "Twitter" },
    { icon: <FaLinkedin size={20} />, href: linkedInLink, label: "LinkedIn" },
    {
      icon: <FaYoutube size={20} />,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0">
          {/* Left Columns - Info & Help */}
          <div className="flex flex-col sm:flex-row gap-x-12">
            {/* Information Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase text-white">
                {t("footer.information.title")}
              </h4>
              <ul className="space-y-2 text-gray-400">
                {Array.isArray(informationLinks) &&
                  informationLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase text-white">
                {t("footer.help.title")}
              </h4>
              <ul className="space-y-2 text-gray-400">
                {Array.isArray(helpLinks) &&
                  helpLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4 uppercase text-white">
              {t("footer.newsletter.title")}
            </h4>
            <p className="text-gray-400 mb-4 text-sm">
              {t("footer.newsletter.description")}
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-2">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="flex-grow px-4 py-2 border border-[rgb(0,112,100)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-[rgb(0,112,100)] text-white rounded-md  whitespace-nowrap">
                {t("footer.newsletter.buttonText")}
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700"></div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {currentYear}, {t("footer.copyright")}
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="hidden sm:inline">{t("footer.followUs")}</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
