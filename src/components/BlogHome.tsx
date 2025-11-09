import { Calendar, ArrowRight, Clock, Tag, Search, ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface BlogHomeProps {
  onBack: () => void;
  onReadPost?: (postId: string) => void;
}

const blogPosts = [
  {
    id: "assessoria-sucesso-2025",
    title: "Como estruturar uma assessoria esportiva de sucesso em 2025",
    excerpt: "Descubra as estratégias essenciais para criar e gerenciar uma assessoria esportiva lucrativa e escalável.",
    category: "Gestão de Assessoria",
    date: "28 de outubro, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1570189046794-606e8291541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwY29hY2glMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIxMzc2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: "beneficios-corrida",
    title: "10 benefícios da corrida comprovados pela ciência",
    excerpt: "Conheça os impactos positivos da corrida na saúde física, mental e qualidade de vida dos seus alunos.",
    category: "Benefícios da Corrida",
    date: "25 de outubro, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1662651800883-b784f138e9dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwYmVuZWZpdHMlMjBmaXRuZXNzfGVufDF8fHx8MTc2MjIxODAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: "corrida-como-negocio",
    title: "Corrida como negócio: guia completo para educadores físicos",
    excerpt: "Transforme sua paixão por corrida em um negócio rentável. Aprenda a precificar, divulgar e crescer.",
    category: "Negócios",
    date: "22 de outubro, 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1744725845508-054bf3b6d80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBidXNpbmVzcyUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NjIyMTgwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: "retencao-alunos",
    title: "5 estratégias de retenção de alunos em assessorias esportivas",
    excerpt: "Mantenha seus alunos motivados e engajados por mais tempo com técnicas comprovadas de fidelização.",
    category: "Gestão de Assessoria",
    date: "18 de outubro, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1758875568756-37a9c5c1a4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjIxMTgxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: "treinar-diferentes-perfis",
    title: "Como treinar diferentes perfis de corredores na mesma assessoria",
    excerpt: "Aprenda a personalizar treinos para iniciantes, intermediários e avançados de forma eficiente.",
    category: "Treinamento",
    date: "15 de outubro, 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1727849027217-fa9acf71553d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwZ3JvdXAlMjBhdGhsZXRlc3xlbnwxfHx8fDE3NjIyMTgwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: "tecnologia-treinamento",
    title: "Tecnologia no treinamento: como apps transformam a assessoria esportiva",
    excerpt: "Descubra como a tecnologia pode aumentar a eficiência e resultados da sua assessoria esportiva.",
    category: "Tecnologia",
    date: "10 de outubro, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: "nutricao-corredor",
    title: "Nutrição para corredores: o que comer antes e depois do treino",
    excerpt: "Guia completo de alimentação para melhorar o desempenho e recuperação dos seus alunos.",
    category: "Nutrição",
    date: "5 de outubro, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHNwb3J0c3xlbnwxfHx8fDE3NjI0OTI2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: "prevencao-lesoes",
    title: "Prevenção de lesões: guia essencial para assessores esportivos",
    excerpt: "Aprenda a identificar sinais de overtraining e prevenir lesões comuns em corredores.",
    category: "Treinamento",
    date: "1 de outubro, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjBwcmV2ZW50aW9ufGVufDF8fHx8MTc2MjQ5MjY0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: "marketing-digital-assessoria",
    title: "Marketing digital para assessorias: como atrair mais alunos",
    excerpt: "Estratégias práticas de marketing digital para aumentar a visibilidade da sua assessoria.",
    category: "Negócios",
    date: "28 de setembro, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzYyNDkyNjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
];

const categories = [
  { name: "Todos", count: blogPosts.length },
  { name: "Gestão de Assessoria", count: 2 },
  { name: "Benefícios da Corrida", count: 1 },
  { name: "Negócios", count: 2 },
  { name: "Treinamento", count: 2 },
  { name: "Tecnologia", count: 1 },
  { name: "Nutrição", count: 1 },
];

export function BlogHome({ onBack, onReadPost }: BlogHomeProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-700 hover:text-[#1C548B] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </button>
            <img src={logoImage} alt="TreinoGo" className="h-8" />
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1C548B] to-[#0f3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              Blog TreinoGo
            </div>
            <h1 className="text-white mb-6">
              Conteúdos para transformar sua assessoria esportiva
            </h1>
            <p className="text-white/90 mb-8">
              Dicas práticas, estratégias comprovadas e tendências do mercado de corrida e assessoria esportiva.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg border-0 focus-visible:ring-2 focus-visible:ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-gray-900 mb-4">Categorias</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-left ${
                        selectedCategory === category.name
                          ? "bg-[#1C548B] text-white"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        selectedCategory === category.name
                          ? "bg-white/20"
                          : "bg-gray-200"
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-[#1C548B]" />
                  <h3 className="text-gray-900">Mais populares</h3>
                </div>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <button
                      key={post.id}
                      onClick={() => onReadPost?.(post.id)}
                      className="w-full text-left group"
                    >
                      <div className="flex gap-3">
                        <span className="text-[#1C548B] flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h4 className="text-gray-900 group-hover:text-[#1C548B] transition-colors mb-1">
                            {post.title}
                          </h4>
                          <p className="text-gray-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8 bg-gradient-to-br from-[#1C548B] to-[#0f3a5f] rounded-2xl p-6 text-white">
                <h3 className="text-white mb-2">Newsletter</h3>
                <p className="text-white/90 mb-4">
                  Receba nossos melhores conteúdos semanalmente.
                </p>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="mb-3 border-white/20 bg-white/10 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-white text-[#1C548B] hover:bg-gray-100">
                  Inscrever-se
                </Button>
              </div>
            </aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <p className="text-gray-600">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
                  {selectedCategory !== "Todos" && ` em "${selectedCategory}"`}
                </p>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">
                    Nenhum artigo encontrado. Tente outra busca ou categoria.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <article
                      key={index}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#1C548B] text-white rounded-full">
                              Destaque
                            </span>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-gray-600">
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
                          Ler artigo completo
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Pagination (mock) */}
              {filteredPosts.length > 0 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <Button variant="outline" disabled className="border-gray-200">
                    Anterior
                  </Button>
                  <Button className="bg-[#1C548B] text-white hover:bg-[#153d68]">
                    1
                  </Button>
                  <Button variant="outline" className="border-gray-200 hover:border-[#1C548B] hover:text-[#1C548B]">
                    2
                  </Button>
                  <Button variant="outline" className="border-gray-200 hover:border-[#1C548B] hover:text-[#1C548B]">
                    3
                  </Button>
                  <Button variant="outline" className="border-gray-200 hover:border-[#1C548B] hover:text-[#1C548B]">
                    Próximo
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
