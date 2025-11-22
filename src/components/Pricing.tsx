import { Check, ArrowRight, Sparkles, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface PricingProps {
  onContactClick?: () => void;
  onSignUpClick?: () => void;
}

const plans = [
  {
    name: "Starter",
    priceMonthly: 59.90,
    priceYearly: 47.92,
    description: "Ideal para pequenas equipes.",
    features: [
      "Até 30 alunos",
      "Criação ilimitada de treinos",
      "Relatórios básicos",
      "Chat com alunos",
      "Suporte prioritário",
    ],
    cta: "Começar agora",
    highlighted: false,
    popular: false,
  },
  {
    name: "Assessoria",
    priceMonthly: 189.90,
    priceYearly: 151.92,
    description: "Mais controle e escalabilidade.",
    features: [
      "Até 100 alunos",
      "Todos os recursos do Starter",
      "Relatórios avançados",
      "API de integração",
      "Personalização de marca",
      "Suporte dedicado",
    ],
    cta: "Começar agora",
    highlighted: true,
    popular: true,
  },
  {
    name: "Assessoria Full",
    priceMonthly: 289.00,
    priceYearly: 231.20,
    description: "Gestão completa para grandes grupos.",
    features: [
      "Até 300 alunos",
      "Todos os recursos da Assessoria",
      "Dashboard executivo",
      "Múltiplos treinadores",
      "Análise preditiva",
      "Suporte 24/7",
    ],
    cta: "Começar agora",
    highlighted: false,
    popular: false,
  },
];

export function Pricing({ onContactClick, onSignUpClick }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <section id="precos" className="py-16 md:py-24 bg-[rgb(255,255,255)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-[32px] font-bold text-[#14439D] mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-gray-600 mb-8">
            Comece agora e escale conforme sua assessoria cresce. Sem taxas escondidas.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="inline-flex items-center gap-3 p-1 bg-white rounded-full border-2 border-gray-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isYearly
                  ? "bg-[#1C548B] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isYearly
                  ? "bg-[#1C548B] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Anual
              <span className="ml-2 px-2 py-0.5 bg-green-500 text-white rounded-full text-xs">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Grid de planos principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const yearlyTotal = plan.priceYearly * 12;
            
            return (
              <div
                key={index}
                className={`relative rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-[#1C548B] bg-[#1C548B]/5 shadow-lg"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#1C548B] text-white px-4 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      <span>Mais popular</span>
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <h3 className="text-gray-900">{plan.name}</h3>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-900">{formatPrice(price)}</span>
                    <span className="text-gray-600">/mês</span>
                  </div>

                  {isYearly && (
                    <p className="text-green-600">
                      {formatPrice(yearlyTotal)}/ano (economize {formatPrice(plan.priceMonthly * 12 - yearlyTotal)})
                    </p>
                  )}

                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <Button
                  className={`w-full mb-6 group ${
                    plan.highlighted
                      ? "bg-[#1C548B] hover:bg-[#153d68] text-white"
                      : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.highlighted ? "bg-[#1C548B]" : "bg-gray-200"
                      }`}>
                        <Check className={`h-3 w-3 ${
                          plan.highlighted ? "text-white" : "text-gray-600"
                        }`} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Plano Enterprise separado */}
        <div className="w-full">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                  width: "100%",
                }}
              ></div>
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="w-full">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full mb-4 text-[rgb(0,0,0)] bg-[rgb(255,255,255)] px-[16px] py-[6px]">
                  Mais de 300 alunos?
                </div>
                <h3 className="text-white mb-4 text-[20px] font-bold">
                  Plano Enterprise
                </h3>
                <p className="text-gray-300 mb-6">
                  Solução customizada para grandes assessorias com recursos exclusivos, infraestrutura dedicada e suporte premium.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-200">Alunos ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-200">Infraestrutura dedicada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-200">SLA garantido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-white/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-200">Gerente de conta dedicado</span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-4">
                  <p className="text-gray-300 mb-2">A partir de</p>
                  <p className="text-white mb-4">Sob consulta</p>
                  <Button
                    onClick={onContactClick}
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 group"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Entrar em contato
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <p className="text-gray-400">
                  Resposta em até 24h úteis
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-[20px] font-bold font-[Poppins]">
            Teste gratuitamente com até 9 alunos.
          </p>
           <Button
              className="bg-[rgb(236,99,39)] hover:bg-[#153d68] text-white mx-[0px] my-[16px]"
              onClick={onSignUpClick}
            >
              Criar conta grátis
            </Button>
        </div>
      </div>
    </section>
  );
}