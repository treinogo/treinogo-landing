import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-[32px] font-bold text-[#14439D]">
            Pronto para revolucionar sua assessoria esportiva?
          </h2>
          
          <p className="text-blue-100 max-w-2xl mx-auto">
            Junte-se a centenas de treinadores que já transformaram a gestão de suas assessorias com o TreinoGo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 group"
            >
              Criar conta grátis
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Fale com especialistas
            </Button>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-white justify-center">
              <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0" />
              <span>Sem taxas escondidas</span>
            </div>
            <div className="flex items-center gap-2 text-white justify-center">
              <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0" />
              <span>Suporte dedicado</span>
            </div>
            <div className="flex items-center gap-2 text-white justify-center">
              <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0" />
              <span>Tudo online</span>
            </div>
          </div>

          <p className="text-blue-100 pt-4">
            14 dias de teste grátis. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}