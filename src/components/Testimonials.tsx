import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Treinador de Corrida",
    content: "O TreinoGo revolucionou minha assessoria. Consigo gerenciar 80 alunos com facilidade e o engajamento aumentou 40%.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=3B82F6&color=fff&size=200",
  },
  {
    name: "Ana Paula Silva",
    role: "Personal Trainer",
    content: "A plataforma é intuitiva e meus alunos adoram acompanhar os treinos pelo app. Economizo horas toda semana!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Ana+Paula+Silva&background=8B5CF6&color=fff&size=200",
  },
  {
    name: "Roberto Alves",
    role: "Assessoria Esportiva Run Elite",
    content: "Migramos toda nossa assessoria para o TreinoGo. Os relatórios detalhados nos ajudam a tomar decisões estratégicas.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Roberto+Alves&background=10B981&color=fff&size=200",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-4">
            Quem já usa recomenda TreinoGo
          </h2>
          <p className="text-gray-600">
            Treinadores de todo o Brasil confiam no TreinoGo para gerenciar suas assessorias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="h-10 w-10 text-blue-200 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
