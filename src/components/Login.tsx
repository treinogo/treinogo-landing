import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { apiService } from "../lib/api";
import { config } from "../config/env";

import { GoogleLogin } from "@react-oauth/google"; // <-- IMPORT CORRETO

import backgroundImage from "figma:asset/d1611b9d124f41b85210b99345ff94882fce3d58.png";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface LoginProps {
  onSignUpClick: () => void;
}

export function Login({ onSignUpClick }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await apiService.login({ email, password });

      if (response.user.role === "COACH") {
        const encodedToken = encodeURIComponent(response.token);
        const encodedUser = encodeURIComponent(JSON.stringify(response.user));
        window.location.href = `${config.urls.coachDashboard}?token=${encodedToken}&user=${encodedUser}`;
      } else {
        alert("Acesso negado. Esta área é exclusiva para professores.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Erro no login. Verifique suas credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80"></div>
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div>
            <img src={logoImage} alt="TreinoGo" className="h-12 brightness-0 invert" />
          </div>
          <div className="space-y-6">
            <h2 className="text-white max-w-lg">
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

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden text-center">
            <img src={logoImage} alt="TreinoGo" className="h-10 mx-auto mb-8" />
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-gray-900 mb-2">Bem-vindo de volta!</h1>
            <p className="text-gray-600">Entre na sua conta para continuar</p>
          </div>

          {/* Google Login (CORRIGIDO) */}
          <div className="w-full flex justify-center">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                const idToken = credentialResponse.credential;

                if (!idToken) {
                  alert("Erro ao obter token do Google.");
                  return;
                }

                const backend = await fetch(`${config.api.baseUrl}/auth/google`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ idToken }),
                });

                const result = await backend.json();
                console.log("Google backend result:", result);

                if (result.error) {
                  alert(result.error);
                  return;
                }

                if (result.user.role !== "COACH") {
                  alert("Acesso negado. Esta área é exclusiva para professores.");
                  return;
                }

                const encodedToken = encodeURIComponent(result.token);
                const encodedUser = encodeURIComponent(JSON.stringify(result.user));

                window.location.href = `${config.urls.coachDashboard}?token=${encodedToken}&user=${encodedUser}`;
              }}
              onError={() => alert("Erro no login com Google")}
            />
          </div>

          {/* Divider */}
          <div className="relative">
            <Separator className="bg-gray-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-gray-500">ou</span>
            </div>
          </div>

          {/* Form */}
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
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
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
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
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

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Ainda não tem uma conta?{" "}
              <button onClick={onSignUpClick} className="text-blue-600 hover:text-blue-700 transition-colors">
                Criar conta grátis
              </button>
            </p>
          </div>

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
