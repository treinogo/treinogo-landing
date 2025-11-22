import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import backgroundImage from "figma:asset/d1611b9d124f41b85210b99345ff94882fce3d58.png";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface LoginProps {
  onSignUpClick: () => void;
  onBack?: () => void;
}

export function Login({ onSignUpClick, onBack }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login attempt:", { email, password });
    }, 1500);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Background Image */}
      <div
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80"></div>
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div>
            <img
              src={logoImage}
              alt="TreinoGo"
              className="h-12 brightness-0 invert"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-[#14439D]">
              Gerencie sua assessoria esportiva com inovação e facilidade
            </h2>
            <p className="text-blue-100 max-w-md">
              Junte-se a centenas de treinadores que transformaram a gestão de suas assessorias com o TreinoGo.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-white">500+</div>
                <div className="text-blue-100">Treinadores</div>
              </div>
              <div>
                <div className="text-white">10k+</div>
                <div className="text-blue-100">Alunos ativos</div>
              </div>
              <div>
                <div className="text-white">98%</div>
                <div className="text-blue-100">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Back Button */}
          {onBack && (
            <div className="text-left">
              <Button
                type="button"
                variant="ghost"
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900 p-0 h-auto"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para home
              </Button>
            </div>
          )}

          {/* Mobile Logo */}
          <div className="lg:hidden text-center">
            <img
              src={logoImage}
              alt="TreinoGo"
              className="h-10 mx-auto mb-8 cursor-pointer"
              onClick={onBack}
            />
          </div>

          {/* Header */}
          <div className="text-center lg:text-left">
            <h1 className="text-gray-900 mb-2">
              Bem-vindo de volta!
            </h1>
            <p className="text-gray-600">
              Entre na sua conta para continuar
            </p>
          </div>

          {/* Google Login Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 h-12"
            onClick={handleGoogleLogin}
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continuar com Google
          </Button>

          {/* Divider */}
          <div className="relative">
            <Separator className="bg-gray-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-gray-500">
                ou
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-600"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700">
                  Senha
                </Label>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-600"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white group"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Entrando...
                </div>
              ) : (
                <>
                  Entrar
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center pt-4">
            <p className="text-gray-600">
              Ainda não tem uma conta?{" "}
              <button
                onClick={onSignUpClick}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Criar conta grátis
              </button>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 pt-8">
            Ao entrar, você concorda com nossos{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}