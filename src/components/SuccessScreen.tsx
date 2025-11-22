import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface SuccessScreenProps {
  onBackToLogin: () => void;
}

export function SuccessScreen({ onBackToLogin }: SuccessScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={logoImage}
              alt="TreinoGo"
              className="h-12 mx-auto"
            />
          </div>

          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <div className="w-16 h-16 bg-green-50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-ping"></div>
          </div>

          {/* Content */}
          <h1 className="text-gray-900 mb-4">
            Conta criada com sucesso!
          </h1>

          <p className="text-gray-600 mb-8">
            Enviamos um email de confirmação para o endereço cadastrado. Por favor, verifique sua caixa de entrada e clique no link de validação para ativar sua conta.
          </p>

          {/* Email Icon */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <p className="text-gray-700">
              Não recebeu o email?
            </p>
            <button className="text-blue-600 hover:text-blue-700 transition-colors mt-2">
              Reenviar email de confirmação
            </button>
          </div>

          {/* Action Button */}
          <Button
            onClick={onBackToLogin}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white group"
          >
            Ir para o login
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-gray-500">
              Dica: Verifique também a pasta de spam ou lixo eletrônico
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
