import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

export function Footer() {
  const navigation = {
    produto: [
      { name: "Recursos", href: "#beneficios" },
      { name: "Preços", href: "#precos" },
      { name: "Demonstração", href: "#demo" },
      { name: "Segurança", href: "#seguranca" },
    ],
    empresa: [
      { name: "Sobre", href: "#sobre" },
      { name: "Blog", href: "#blog" },
      { name: "Carreiras", href: "#carreiras" },
      { name: "Imprensa", href: "#imprensa" },
    ],
    suporte: [
      { name: "Central de Ajuda", href: "#ajuda" },
      { name: "Contato", href: "#contato" },
      { name: "Status", href: "#status" },
      { name: "API", href: "#api" },
    ],
    legal: [
      { name: "Privacidade", href: "#privacidade" },
      { name: "Termos", href: "#termos" },
      { name: "LGPD", href: "#lgpd" },
      { name: "Cookies", href: "#cookies" },
    ],
  };

  const social = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2">
            <img src={logoImage} alt="TreinoGo" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-gray-400 mb-6 max-w-sm">
              A plataforma completa para treinadores gerenciarem suas assessorias esportivas com eficiência e inovação.
            </p>
            <div className="flex gap-4">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white mb-4">Produto</h3>
            <ul className="space-y-3">
              {navigation.produto.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Suporte</h3>
            <ul className="space-y-3">
              {navigation.suporte.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TreinoGo. Todos os direitos reservados.
          </p>
          <p className="text-gray-400">
            Feito com ❤️ para treinadores do Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
