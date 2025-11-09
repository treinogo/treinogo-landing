import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface HeaderProps {
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
  onBlogClick?: () => void;
}

export function Header({ onLoginClick, onSignUpClick, onAboutClick, onContactClick, onBlogClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Recursos", href: "#beneficios" },
    { label: "Preços", href: "#precos" },
    { label: "Blog", onClick: onBlogClick },
    { label: "Sobre", onClick: onAboutClick },
    { label: "Contato", onClick: onContactClick },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logoImage} alt="TreinoGo" className="h-8 md:h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.onClick ? (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-gray-700 hover:text-[#1C548B] transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#1C548B] transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700"
              onClick={onLoginClick}
            >
              Entrar
            </Button>
            <Button
              className="bg-[#1C548B] hover:bg-[#153d68] text-white"
              onClick={onSignUpClick}
            >
              Criar conta grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              item.onClick ? (
                <button
                  key={item.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    item.onClick?.();
                  }}
                  className="block py-2 text-gray-700 hover:text-[#1C548B] transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-[#1C548B] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLoginClick?.();
                }}
              >
                Entrar
              </Button>
              <Button
                className="w-full bg-[#1C548B] hover:bg-[#153d68] text-white"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onSignUpClick?.();
                }}
              >
                Criar conta grátis
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
