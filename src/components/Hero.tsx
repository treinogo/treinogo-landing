import { ArrowRight, Users, Dumbbell, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

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
              <h1 className="text-gray-900 max-w-xl">
                TreinoGo – Gerencie sua assessoria esportiva com inovação e facilidade.
              </h1>
              <p className="text-gray-600 max-w-xl">
                O app para treinadores: mais eficiência, menos burocracia e criação fácil de treinos para seus alunos, desde o iniciante ao elite.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group"
                onClick={onSignUpClick}
              >
                Experimente Grátis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Ver demonstração
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
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
              {/* Illustration - SVG */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background shapes */}
                <circle cx="250" cy="250" r="200" fill="#EEF2FF" opacity="0.5" />
                
                {/* Coach figure */}
                <circle cx="200" cy="180" r="30" fill="#3B82F6" />
                <rect x="170" y="210" width="60" height="80" rx="8" fill="#3B82F6" />
                <rect x="160" y="240" width="30" height="60" rx="6" fill="#60A5FA" />
                <rect x="210" y="240" width="30" height="60" rx="6" fill="#60A5FA" />
                
                {/* Student figure */}
                <circle cx="320" cy="200" r="25" fill="#8B5CF6" />
                <rect x="295" y="225" width="50" height="70" rx="6" fill="#8B5CF6" />
                <rect x="290" y="250" width="25" height="50" rx="5" fill="#A78BFA" />
                <rect x="320" y="250" width="25" height="50" rx="5" fill="#A78BFA" />
                
                {/* Device/tablet */}
                <rect x="140" y="320" width="220" height="140" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="4" />
                <rect x="160" y="340" width="180" height="100" rx="6" fill="#F3F4F6" />
                
                {/* Workout stats bars */}
                <rect x="180" y="360" width="40" height="60" rx="4" fill="#3B82F6" opacity="0.8" />
                <rect x="230" y="380" width="40" height="40" rx="4" fill="#8B5CF6" opacity="0.8" />
                <rect x="280" y="370" width="40" height="50" rx="4" fill="#10B981" opacity="0.8" />
                
                {/* Connection lines */}
                <path d="M 200 210 Q 180 280 170 320" stroke="#3B82F6" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
                <path d="M 320 225 Q 340 280 350 320" stroke="#8B5CF6" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
                
                {/* Checkmark icons */}
                <circle cx="380" cy="160" r="20" fill="#10B981" />
                <path d="M 372 160 L 378 166 L 388 154" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
