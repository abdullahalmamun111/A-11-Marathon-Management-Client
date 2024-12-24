import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4">About FundSpourt</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              FundSpourt is a platform that empowers individuals, creators, and
              startups to achieve their goals through crowdfunding. Join us in
              making a difference, one campaign at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Home</li>
              <li>Explore Campaigns</li>
              <li>Start a Campaign</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4">Support</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help Center</li>
              <li>Donation Policy</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4">Get In Touch</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Have questions or need assistance? Reach out to us.
            </p>
            <ul className="mt-4 text-sm md:text-base space-y-2">
              <li>
                <span className="font-bold">Email:</span> support@fundspourt.com
              </li>
              <li>
                <span className="font-bold">Phone:</span> +1 234 567 89
              </li>
              <li>
                <span className="font-bold">Address:</span> 123 Crowdfunding
                Street, FundCity, FC 56789
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="https://www.facebook.com/" target="blank">
            <span>
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-xl hover:text-blue-300 cursor-pointer"
              />
            </span>
            </a>
            <a href="https://twitter.com/" target="blank">
            <span>
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-xl hover:text-blue-300 cursor-pointer"
              />
            </span>
            </a>
            
            <a href="https://www.instagram.com/" target="blank">
            <span>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-xl hover:text-blue-300 cursor-pointer"
              />
            </span>
            </a>
            
            <a href="https://www.linkedin.com/" target="blank">
            <span>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-xl hover:text-blue-300 cursor-pointer"
              />
            </span>
            </a>
            
          </div>

          {/* Copyright */}
          <p className="text-xl text-gray-200 text-center">
            © {new Date().getFullYear()} FundSpourt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
