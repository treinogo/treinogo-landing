import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface ContactProps {
  onBack: () => void;
}

export function Contact({ onBack }: ContactProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-700 hover:text-[#1C548B] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </button>
            <img src={logoImage} alt="TreinoGo" className="h-8" />
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1C548B] to-[#0f3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white mb-6">
              Vamos conversar?
            </h1>
            <p className="text-white/90">
              Nossa equipe está pronta para ajudar você a levar sua assessoria esportiva para o próximo nível. Entre em contato e descubra como o TreinoGo pode transformar seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-gray-900 mb-6">
                Informações de contato
              </h2>
              <p className="text-gray-600 mb-8">
                Escolha a forma de contato que preferir. Estamos disponíveis para atender você da melhor maneira possível.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C548B] rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">
                      Resposta em até 24h úteis
                    </p>
                    <a href="mailto:contato@treinogo.com.br" className="text-[#1C548B] hover:underline">
                      contato@treinogo.com.br
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C548B] rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Telefone</h3>
                    <p className="text-gray-600 mb-2">
                      Seg a Sex, 9h às 18h
                    </p>
                    <a href="tel:+551140028922" className="text-[#1C548B] hover:underline">
                      (11) 4002-8922
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C548B] rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">
                      Atendimento rápido e direto
                    </p>
                    <a href="https://wa.me/5511999999999" className="text-[#1C548B] hover:underline">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C548B] rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Paulista, 1578 - 5º andar<br />
                      Bela Vista, São Paulo - SP<br />
                      CEP 01310-200
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C548B] rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Horário de atendimento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 13h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-10">
                <h2 className="text-gray-900 mb-2">
                  Envie uma mensagem
                </h2>
                <p className="text-gray-600 mb-8">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <select
                        id="subject"
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C548B]"
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="plano">Dúvidas sobre planos</option>
                        <option value="enterprise">Plano Enterprise</option>
                        <option value="suporte">Suporte técnico</option>
                        <option value="parceria">Parceria</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos como podemos ajudar..."
                      rows={6}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#1C548B] hover:bg-[#153d68] text-white group"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar mensagem
                  </Button>

                  <p className="text-gray-500 text-center">
                    Ao enviar este formulário, você concorda com nossa{" "}
                    <a href="#" className="text-[#1C548B] hover:underline">
                      política de privacidade
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-gray-600">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 border border-gray-200">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-gray-900">Como funciona o período de teste?</h3>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4">
                Você tem 14 dias para testar todos os recursos do plano escolhido, sem compromisso. Não é necessário cartão de crédito para começar.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-gray-200">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-gray-900">Posso mudar de plano depois?</h3>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-gray-200">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-gray-900">Há taxa de cancelamento?</h3>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4">
                Não cobramos nenhuma taxa de cancelamento. Você pode cancelar sua assinatura a qualquer momento através do painel de controle.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 border border-gray-200">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-gray-900">Meus dados estão seguros?</h3>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-4">
                Sim! Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança. Todos os dados são armazenados em servidores seguros e em conformidade com a LGPD.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
