import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-300 via-blue-200 to-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-teal-600">About MarathonClub</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              MarathonClub brings together running enthusiasts from all over the world. Our platform supports organizing and promoting marathons for fitness, community, and charity. Join us and make a positive impact today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-teal-600">Quick Links</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li>Home</li>
              <li>Upcoming Marathons</li>
              <li>Register for a Marathon</li>
              <li>Marathon Tips</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-teal-600">Support</h2>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help Center</li>
              <li>Donation Guidelines</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-4 text-teal-600">Get In Touch</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Have questions about marathons or our platform? Feel free to reach out to us.
            </p>
            <ul className="mt-4 text-sm md:text-base space-y-2 text-gray-600">
              <li>
                <span className="font-bold text-teal-700">Email:</span> support@marathonclub.com
              </li>
              <li>
                <span className="font-bold text-teal-700">Phone:</span> +1 987 654 321
              </li>
              <li>
                <span className="font-bold text-teal-700">Address:</span> 456 Running Lane, MarathonCity, MC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="https://www.facebook.com/" target="blank">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-xl text-teal-600 hover:text-teal-800 cursor-pointer"
              />
            </a>
            <a href="https://twitter.com/" target="blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-xl text-teal-600 hover:text-teal-800 cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-xl text-teal-600 hover:text-teal-800 cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/" target="blank">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-xl text-teal-600 hover:text-teal-800 cursor-pointer"
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} MarathonClub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
