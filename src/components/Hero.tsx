import { ArrowRight, Users, Dumbbell, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "figma:asset/1307048ba5b08fd0139a6bdf6791aadb012918ce.png";

interface HeroProps {
  onSignUpClick?: () => void;
}

export function Hero({ onSignUpClick }: HeroProps) {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-[rgb(20,67,157)] max-w-xl font-[Poppins] font-bold text-[32px]">
                Gerencie sua assessoria esportiva com inovação e facilidade
              </h1>
              <p className="text-gray-600 max-w-xl">
                O app para treinadores: mais eficiência, menos burocracia e criação fácil de treinos para seus alunos, desde o iniciante ao elite.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[rgb(236,99,39)] hover:bg-blue-700 text-white group"
                onClick={onSignUpClick}
              >
                Experimente Grátis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-gray-900">500+</div>
                  <div className="text-gray-600">Treinadores</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-green-600" />
                <div>
                  <div className="text-gray-900">10k+</div>
                  <div className="text-gray-600">Alunos ativos</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="text-gray-900">98%</div>
                  <div className="text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl md:p-12 overflow-hidden p-[0px]">
              {/* Dashboard Tablets Image */}
              <ImageWithFallback
                src={heroImage}
                alt="TreinoGo Dashboard - Plataforma de gestão para assessorias esportivas"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="text-gray-900">+25%</div>
                  <div className="text-gray-500">Desempenho</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 animate-float animation-delay-2000">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900">32</div>
                  <div className="text-gray-500">Alunos ativos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}