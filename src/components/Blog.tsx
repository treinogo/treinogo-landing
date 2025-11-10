import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { config } from "../config/env";

interface BlogProps {
  onReadPost?: (postId: string) => void;
  onViewAll?: () => void;
}

const blogPosts = [
  {
    id: "assessoria-sucesso-2025",
    title: "Como estruturar uma assessoria esportiva de sucesso em 2025",
    excerpt: "Descubra as estratégias essenciais para criar e gerenciar uma assessoria esportiva lucrativa e escalável.",
    category: "Gestão de Assessoria",
    date: "28 de outubro, 2025",
    readTime: "8 min",
    image: `${config.services.unsplashBaseUrl}/photo-1570189046794-606e8291541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwY29hY2glMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIxMzc2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080`,
    featured: true,
  },
  {
    id: "beneficios-corrida",
    title: "10 benefícios da corrida comprovados pela ciência",
    excerpt: "Conheça os impactos positivos da corrida na saúde física, mental e qualidade de vida dos seus alunos.",
    category: "Benefícios da Corrida",
    date: "25 de outubro, 2025",
    readTime: "6 min",
    image: `${config.services.unsplashBaseUrl}/photo-1662651800883-b784f138e9dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwYmVuZWZpdHMlMjBmaXRuZXNzfGVufDF8fHx8MTc2MjIxODAwNHww&ixlib=rb-4.1.0&q=80&w=1080`,
    featured: false,
  },
  {
    id: "corrida-como-negocio",
    title: "Corrida como negócio: guia completo para educadores físicos",
    excerpt: "Transforme sua paixão por corrida em um negócio rentável. Aprenda a precificar, divulgar e crescer.",
    category: "Negócios",
    date: "22 de outubro, 2025",
    readTime: "10 min",
    image: `${config.services.unsplashBaseUrl}/photo-1744725845508-054bf3b6d80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBidXNpbmVzcyUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NjIyMTgwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080`,
    featured: false,
  },
  {
    id: "retencao-alunos",
    title: "5 estratégias de retenção de alunos em assessorias esportivas",
    excerpt: "Mantenha seus alunos motivados e engajados por mais tempo com técnicas comprovadas de fidelização.",
    category: "Gestão de Assessoria",
    date: "18 de outubro, 2025",
    readTime: "7 min",
    image: `${config.services.unsplashBaseUrl}/photo-1758875568756-37a9c5c1a4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjIxMTgxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080`,
    featured: false,
  },
];

export function Blog({ onReadPost, onViewAll }: BlogProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-[#1C548B]/10 text-[#1C548B] rounded-full mb-4">
            Blog TreinoGo
          </div>
          <h3 className="text-gray-900 mb-4">
            Pronto para revolucionar sua assessoria esportiva?
          </h3>
          <p className="text-gray-600">
            Conteúdos exclusivos para treinadores que querem crescer, inovar e transformar a corrida em um negócio de sucesso.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post, index) => (
            <div
              key={index}
              className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#1C548B] text-white rounded-full">
                      Destaque
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <Button
                    className="bg-[#1C548B] hover:bg-[#153d68] text-white group w-fit"
                    onClick={() => onReadPost?.(post.id)}
                  >
                    Ler artigo completo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .slice(0, 3)
            .map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-gray-900 mb-3 group-hover:text-[#1C548B] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="text-[#1C548B] hover:text-[#153d68] p-0 h-auto group/btn"
                    onClick={() => onReadPost?.(post.id)}
                  >
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
        </div>

        {/* CTA to view all posts */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-200 hover:border-[#1C548B] hover:text-[#1C548B]"
            onClick={onViewAll}
          >
            Ver todos os artigos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#1C548B] to-[#0f3a5f] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-white mb-4">
              Receba conteúdos exclusivos no seu email
            </h3>
            <p className="text-white/90 mb-6">
              Dicas práticas, estratégias de negócios e tendências do mercado de assessoria esportiva direto na sua caixa de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-[#1C548B] hover:bg-gray-100">
                Inscrever-se
              </Button>
            </div>
            <p className="text-white/90 mt-4">
              🎁 Ganhe nosso e-book "Guia de Precificação para Assessorias" ao se inscrever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
