import logo from "../../assets/images/logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="GradeVision Logo"
            width="40"
            height="40"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tight">GradeVision</span>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-400 text-center sm:text-right">
          <p>Contact us:</p>
          <a
            href="mailto:gradevision.contact@gmail.com"
            className="text-white hover:underline"
            aria-label="Email GradeVision"
          >
            gradevision.contact@gmail.com
          </a>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} GradeVision. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
