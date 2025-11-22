import { Users, TrendingUp, FileText } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Gestão automatizada dos alunos e treinos",
    description: "Organize todos os seus alunos em um só lugar, crie e atribua treinos personalizados em minutos.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Monitoramento de desempenho em tempo real",
    description: "Acompanhe a evolução de cada aluno com gráficos e métricas atualizadas automaticamente.",
    color: "green",
  },
  {
    icon: FileText,
    title: "Relatórios inteligentes e personalizados",
    description: "Gere relatórios completos sobre desempenho, frequência e resultados para análises estratégicas.",
    color: "orange",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    accent: "bg-blue-600",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    accent: "bg-green-600",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    accent: "bg-orange-600",
  },
};

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-[rgb(20,67,157)] mb-4 font-[Poppins] text-[32px] font-bold">
            Transforme sua assessoria esportiva digitalmente.
          </h2>
          <p className="text-gray-600">
            Todas as ferramentas que você precisa para gerenciar sua assessoria com eficiência e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = colorClasses[benefit.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${colors.icon}`} />
                </div>
                
                <h3 className="text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600">
                  {benefit.description}
                </p>

                <div className={`w-12 h-1 ${colors.accent} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}