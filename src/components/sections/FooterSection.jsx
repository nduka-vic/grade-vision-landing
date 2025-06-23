// import logo from "../../assets/images/logo.png";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/textLogo.png"
            alt="GradeVision Logo"
            width="40"
            height="40"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tight">GradeVision</span>
        </div>

        {/* Contact + Socials */}
        <div className="text-sm text-gray-400 text-center sm:text-right space-y-2">
          <p>Contact us:</p>
          <a
            href="mailto:gradevision.contact@gmail.com"
            className="text-white hover:underline block"
          >
            gradevision.contact@gmail.com
          </a>

          {/* Social Media */}
          <div className="flex justify-center sm:justify-end space-x-4 pt-2">
            <a
              href="https://x.com/GradeVision"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GradeVision on X (Twitter)"
              className="hover:text-pink-400 transition"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577377853088"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GradeVision on Facebook"
              className="hover:text-pink-400 transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/gradevisionapp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GradeVision on Instagram"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} GradeVision. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
