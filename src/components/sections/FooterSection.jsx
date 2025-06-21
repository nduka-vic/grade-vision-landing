import logo from "../../assets/images/logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="GradeVision Logo"
            width="40"
            height="40"
            className="w-10 h-10 object-contain"
          />

          <span className="text-xl font-bold">GradeVision</span>
        </div>

        {/* Contact */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>Contact us at:</p>
          <a
            href="mailto:gradevision.contact@gmail.com"
            className="text-white hover:underline"
          >
            gradevision.contact@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-600 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} GradeVision. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
