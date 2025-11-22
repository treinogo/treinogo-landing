import { Target, Heart, Zap, Users, Award, TrendingUp, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface AboutProps {
  onBack: () => void;
  onContactClick?: () => void;
}

export function About({ onBack, onContactClick }: AboutProps) {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6">
              Transformando a gestão de assessorias esportivas
            </h1>
            <p className="text-white/90">
              O TreinoGo nasceu da paixão por corrida e da vontade de empoderar educadores físicos a construírem negócios sustentáveis e escaláveis.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#1C548B]/10 text-[#1C548B] rounded-full mb-4">
                Nossa História
              </div>
              <h2 className="text-[32px] font-bold text-[#14439D] mb-6">
                Como tudo começou
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Em 2020, durante a pandemia, vimos milhares de educadores físicos perdendo seus alunos e lutando para adaptar seus negócios ao mundo digital. Muitos estavam usando planilhas, WhatsApp e ferramentas improvisadas para gerenciar suas assessorias.
                </p>
                <p>
                  Foi assim que nasceu o TreinoGo: uma plataforma pensada especificamente para assessorias esportivas, combinando tecnologia de ponta com simplicidade de uso.
                </p>
                <p>
                  Hoje, já ajudamos mais de 5.000 profissionais a gerenciarem mais de 100.000 alunos em todo o Brasil, transformando vidas através do esporte.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759476532444-fa17a7131941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uZXIlMjB0cmFpbmluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMTgxMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nossa história"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[#1C548B] rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900">+5.000</p>
                    <p className="text-gray-600">Profissionais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#14439D] mb-4">
              Nossos pilares
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada linha de código que escrevemos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#1C548B] transition-colors">
              <div className="w-14 h-14 bg-[#1C548B] rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600">
                Empoderar educadores físicos e assessorias esportivas com tecnologia simples e eficiente, permitindo que foquem no que realmente importa: transformar vidas através do esporte.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#1C548B] transition-colors">
              <div className="w-14 h-14 bg-[#1C548B] rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser a plataforma número 1 de gestão para assessorias esportivas na América Latina, reconhecida pela excelência, inovação e compromisso com o sucesso dos nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#1C548B] transition-colors">
              <div className="w-14 h-14 bg-[#1C548B] rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">Valores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#1C548B] flex-shrink-0 mt-0.5" />
                  <span>Excelência em tudo que fazemos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#1C548B] flex-shrink-0 mt-0.5" />
                  <span>Inovação constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#1C548B] flex-shrink-0 mt-0.5" />
                  <span>Foco no cliente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores em Ação */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#14439D] mb-4">
              O que nos move
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Valores que praticamos diariamente para entregar a melhor experiência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#1C548B]" />
              </div>
              <h3 className="text-gray-900 mb-2">Simplicidade</h3>
              <p className="text-gray-600">
                Tecnologia poderosa não precisa ser complicada. Criamos soluções intuitivas que qualquer um pode usar.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Crescimento</h3>
              <p className="text-gray-600">
                Crescemos junto com nossos clientes, oferecendo ferramentas que escalam conforme o negócio cresce.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Comunidade</h3>
              <p className="text-gray-600">
                Somos mais que uma ferramenta, somos uma comunidade de profissionais apaixonados por esporte.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Paixão</h3>
              <p className="text-gray-600">
                Amamos o que fazemos e isso se reflete em cada detalhe do TreinoGo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1C548B] to-[#0f3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#14439D] mb-4">
              TreinoGo em números
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              O impacto real que geramos no mercado de assessoria esportiva
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-2">+5.000</div>
              <p className="text-white/80">Profissionais cadastrados</p>
            </div>
            <div className="text-center">
              <div className="mb-2">+100.000</div>
              <p className="text-white/80">Alunos gerenciados</p>
            </div>
            <div className="text-center">
              <div className="mb-2">+1M</div>
              <p className="text-white/80">Treinos criados</p>
            </div>
            <div className="text-center">
              <div className="mb-2">98%</div>
              <p className="text-white/80">Satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-gray-100">
              <div className="text-center">
                <h2 className="text-[32px] font-bold text-[#14439D] mb-4">
                  Nosso compromisso com você
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  No TreinoGo, não vendemos apenas um software. Oferecemos uma parceria de longo prazo para o sucesso do seu negócio.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="w-10 h-10 bg-[#1C548B] rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2">Suporte dedicado</h3>
                    <p className="text-gray-600">
                      Nossa equipe está sempre disponível para ajudar você a ter sucesso.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6">
                    <div className="w-10 h-10 bg-[#1C548B] rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2">Atualizações constantes</h3>
                    <p className="text-gray-600">
                      Novos recursos e melhorias toda semana, sempre ouvindo nossos clientes.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6">
                    <div className="w-10 h-10 bg-[#1C548B] rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2">Transparência total</h3>
                    <p className="text-gray-600">
                      Sem letras miúdas. Preços claros e comunicação honesta sempre.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={onContactClick}
                  className="bg-[#1C548B] hover:bg-[#153d68] text-white"
                >
                  Fale com nossa equipe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}