"use client";

import { useTranslation } from 'react-i18next';
import Link from "next/link";
// Import React icons for social media
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {contactLink, aboutUsLink, twitterLink, facebookLink, instagramLink, linkedInLink, gitHubLink} from '../../app/navLinks/navLinks'

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function FooterSection() {
  const { t } = useTranslation('common');

  // Add fallback empty arrays in case the translation returns non-array values
  const companyLinks = (t('footer.company.links', { returnObjects: true }) || []) as FooterLink[];
  const productLinks = (t('footer.product.links', { returnObjects: true }) || []) as FooterLink[];
  const legalLinks = (t('footer.legal.links', { returnObjects: true }) || []) as FooterLink[];

  // Make sure links are actually arrays before trying to map over them
  const isArray = (value: any): boolean => Array.isArray(value);

  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    { icon: <FaTwitter size={20} />, href: twitterLink, label: "Twitter" },
    { icon: <FaFacebook size={20} />, href: facebookLink, label: "Facebook" },
    { icon: <FaInstagram size={20} />, href: instagramLink, label: "Instagram" },
    { icon: <FaLinkedin size={20} />, href: linkedInLink, label: "LinkedIn" },
    { icon: <FaGithub size={20} />, href: gitHubLink, label: "GitHub" },
  ];

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">PricingFlows</h3>
            <p className="text-gray-400">
              Optimize your pricing strategy with AI-powered insights and analytics.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h4>
            <ul className="space-y-2">
              {isArray(companyLinks) && companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.product.title')}</h4>
            <ul className="space-y-2">
              {isArray(productLinks) && productLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal.title')}</h4>
            <ul className="space-y-2">
              {isArray(legalLinks) && legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} { t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}