import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Building2, Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { apiService } from "../lib/api";
import backgroundImage from "figma:asset/d1611b9d124f41b85210b99345ff94882fce3d58.png";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface SignUpProps {
  onSuccess: () => void;
  onBackToLogin: () => void;
}

const plans = [
  { id: "starter", name: "Starter", price: "R$ 59,90/mês", students: "Até 30 alunos" },
  { id: "assessoria", name: "Assessoria", price: "R$ 189,90/mês", students: "Até 100 alunos", popular: true },
  { id: "assessoria-full", name: "Assessoria Full", price: "R$ 289,00/mês", students: "Até 200 alunos" },
  { id: "enterprise", name: "Enterprise", price: "Customizado", students: "+200 alunos" },
];

export function SignUp({ onSuccess, onBackToLogin }: SignUpProps) {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<"student" | "trainer">("trainer");
  const [selectedPlan, setSelectedPlan] = useState("assessoria");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password validation
  const hasLetter = /[a-zA-Z]/.test(formData.password);
  const hasNumber = /\d/.test(formData.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
  const isPasswordValid = hasLetter && hasNumber && hasSpecialChar && formData.password.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordValid) return;
    
    setIsLoading(true);
    
    try {
      const response = await apiService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'COACH'
      });
      
      // Redirect to coach dashboard
      window.location.href = 'http://localhost:5175'; // URL do coach dashboard
    } catch (error) {
      console.error('Registration error:', error);
      alert('Erro no cadastro. Tente novamente.');
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    }
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
            <h2 className="text-white max-w-lg">
              Comece sua jornada com o TreinoGo hoje
            </h2>
            <p className="text-blue-100 max-w-md">
              Junte-se a centenas de treinadores e milhares de alunos que já transformaram suas rotinas de treino.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-white">14 dias</div>
                <div className="text-blue-100">Grátis</div>
              </div>
              <div>
                <div className="text-white">Sem cartão</div>
                <div className="text-blue-100">Necessário</div>
              </div>
              <div>
                <div className="text-white">Cancele</div>
                <div className="text-blue-100">Quando quiser</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center">
            <img
              src={logoImage}
              alt="TreinoGo"
              className="h-10 mx-auto mb-8"
            />
          </div>

          {/* Header */}
          <div className="text-center lg:text-left">
            <h1 className="text-gray-900 mb-2">
              Criar sua conta
            </h1>
            <p className="text-gray-600">
              {step === 1 ? "Escolha como você vai usar o TreinoGo" : "Complete seus dados para começar"}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            <div className={`h-2 flex-1 rounded-full transition-colors ${step >= 1 ? "bg-blue-600" : "bg-gray-200"}`}></div>
            <div className={`h-2 flex-1 rounded-full transition-colors ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
          </div>

          {/* Step 1: User Type Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <RadioGroup value={userType} onValueChange={(value: any) => setUserType(value)}>
                <div
                  className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                    userType === "student"
                      ? "border-blue-600 bg-blue-50/50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setUserType("student")}
                >
                  <div className="flex items-start gap-4">
                    <RadioGroupItem value="student" id="student" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="h-5 w-5 text-blue-600" />
                        <Label htmlFor="student" className="text-gray-900 cursor-pointer">
                          Sou Aluno
                        </Label>
                      </div>
                      <p className="text-gray-600">
                        Acesso ao app para acompanhar meus treinos e evolução
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                    userType === "trainer"
                      ? "border-blue-600 bg-blue-50/50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setUserType("trainer")}
                >
                  <div className="flex items-start gap-4">
                    <RadioGroupItem value="trainer" id="trainer" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-purple-600" />
                        <Label htmlFor="trainer" className="text-gray-900 cursor-pointer">
                          Sou Professor/Assessoria de Corrida
                        </Label>
                      </div>
                      <p className="text-gray-600">
                        Gerencie alunos, crie treinos e acompanhe resultados
                      </p>
                    </div>
                  </div>
                </div>
              </RadioGroup>

              {/* Plan Selection (only for trainers) */}
              {userType === "trainer" && (
                <div className="space-y-4 pt-4">
                  <Label className="text-gray-900">
                    Escolha seu plano
                  </Label>
                  <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                    <div className="space-y-3">
                      {plans.map((plan) => (
                        <div
                          key={plan.id}
                          className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                            selectedPlan === plan.id
                              ? "border-blue-600 bg-blue-50/50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setSelectedPlan(plan.id)}
                        >
                          {plan.popular && (
                            <div className="absolute -top-2 right-4 px-2 py-0.5 bg-blue-600 text-white rounded-full">
                              Popular
                            </div>
                          )}
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={plan.id} id={plan.id} />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <Label htmlFor={plan.id} className="text-gray-900 cursor-pointer">
                                  {plan.name}
                                </Label>
                                <span className="text-gray-900">{plan.price}</span>
                              </div>
                              <p className="text-gray-600 mt-1">
                                {plan.students}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              <Button
                type="button"
                onClick={handleNext}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Continuar
              </Button>
            </div>
          )}

          {/* Step 2: Account Details */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Nome completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="João Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 h-12 border-gray-200 focus:border-blue-600"
                    required
                  />
                </div>
              </div>

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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 border-gray-200 focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Criar senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

              {/* Password Requirements */}
              {formData.password && (
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <p className="text-gray-700 mb-3">
                    Requisitos de segurança:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                          hasLetter ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        {hasLetter ? (
                          <Check className="h-3 w-3 text-white" />
                        ) : (
                          <X className="h-3 w-3 text-gray-500" />
                        )}
                      </div>
                      <span className={`transition-colors ${hasLetter ? "text-green-600" : "text-gray-600"}`}>
                        Pelo menos 1 letra
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                          hasNumber ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        {hasNumber ? (
                          <Check className="h-3 w-3 text-white" />
                        ) : (
                          <X className="h-3 w-3 text-gray-500" />
                        )}
                      </div>
                      <span className={`transition-colors ${hasNumber ? "text-green-600" : "text-gray-600"}`}>
                        Pelo menos 1 número
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                          hasSpecialChar ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        {hasSpecialChar ? (
                          <Check className="h-3 w-3 text-white" />
                        ) : (
                          <X className="h-3 w-3 text-gray-500" />
                        )}
                      </div>
                      <span className={`transition-colors ${hasSpecialChar ? "text-green-600" : "text-gray-600"}`}>
                        Pelo menos 1 caractere especial (!@#$%...)
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                          formData.password.length >= 8 ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        {formData.password.length >= 8 ? (
                          <Check className="h-3 w-3 text-white" />
                        ) : (
                          <X className="h-3 w-3 text-gray-500" />
                        )}
                      </div>
                      <span className={`transition-colors ${formData.password.length >= 8 ? "text-green-600" : "text-gray-600"}`}>
                        Mínimo de 8 caracteres
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 h-12"
                >
                  Voltar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isLoading || !isPasswordValid}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Criando...
                    </div>
                  ) : (
                    "Criar conta"
                  )}
                </Button>
              </div>
            </form>
          )}

          {/* Sign In Link */}
          <div className="text-center pt-4">
            <p className="text-gray-600">
              Já tem uma conta?{" "}
              <button
                onClick={onBackToLogin}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Entrar
              </button>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 pt-8">
            Ao criar uma conta, você concorda com nossos{" "}
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
