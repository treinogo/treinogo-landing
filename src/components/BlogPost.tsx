import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Mail, Tag, User, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/d059ada69412c7772cd20303e3b8bc32944a7030.png";

interface BlogPostProps {
  postId: string;
  onBack: () => void;
  onReadPost: (id: string) => void;
}

// Dados completos dos artigos
const blogPostsData: Record<string, any> = {
  "assessoria-sucesso-2025": {
    title: "Como estruturar uma assessoria esportiva de sucesso em 2025",
    category: "Gestão de Assessoria",
    date: "28 de outubro, 2025",
    readTime: "8 min",
    author: {
      name: "Ricardo Santos",
      role: "Especialista em Gestão Esportiva",
      avatar: "https://ui-avatars.com/api/?name=Ricardo+Santos&background=3B82F6&color=fff&size=200",
    },
    image: "https://images.unsplash.com/photo-1570189046794-606e8291541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwY29hY2glMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIxMzc2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "Descubra as estratégias essenciais para criar e gerenciar uma assessoria esportiva lucrativa e escalável.",
    content: [
      {
        type: "paragraph",
        text: "O mercado de assessoria esportiva cresceu exponencialmente nos últimos anos, especialmente após a pandemia, quando as pessoas descobriram na corrida uma forma de cuidar da saúde física e mental. Para educadores físicos e profissionais do esporte, esse é o momento ideal para estruturar ou expandir uma assessoria esportiva de sucesso."
      },
      {
        type: "heading",
        text: "1. Defina seu nicho e público-alvo"
      },
      {
        type: "paragraph",
        text: "Antes de tudo, é fundamental definir qual será o foco da sua assessoria. Você vai trabalhar com corredores iniciantes? Com atletas que buscam melhorar performance? Com grupos corporativos? Definir seu nicho permite criar uma identidade forte e atrair os alunos certos."
      },
      {
        type: "list",
        items: [
          "Iniciantes: pessoas que nunca correram ou estão começando agora",
          "Intermediários: corredores que já têm experiência e querem evoluir",
          "Avançados/Elite: atletas que buscam performance e resultados em competições",
          "Corporativo: empresas que querem oferecer bem-estar para colaboradores"
        ]
      },
      {
        type: "heading",
        text: "2. Invista em tecnologia e ferramentas de gestão"
      },
      {
        type: "paragraph",
        text: "Gerenciar dezenas ou centenas de alunos sem as ferramentas adequadas é praticamente impossível. Plataformas como o TreinoGo permitem que você centralize toda a gestão em um só lugar: criação de treinos, comunicação com alunos, relatórios de desempenho e muito mais."
      },
      {
        type: "quote",
        text: "Uma assessoria bem estruturada tecnologicamente consegue atender 3x mais alunos com a mesma qualidade de acompanhamento."
      },
      {
        type: "paragraph",
        text: "Além disso, a tecnologia libera seu tempo para focar no que realmente importa: estratégia de treino, relacionamento com alunos e crescimento do negócio."
      },
      {
        type: "heading",
        text: "3. Precifique seus serviços corretamente"
      },
      {
        type: "paragraph",
        text: "Um dos maiores erros de profissionais iniciantes é subprecificar seus serviços. Para calcular o preço ideal, considere:"
      },
      {
        type: "list",
        items: [
          "Seus custos fixos e variáveis (plataforma, materiais, deslocamento)",
          "O valor da sua experiência e formação",
          "O tempo dedicado a cada aluno",
          "Os resultados que você entrega",
          "O mercado local e concorrência"
        ]
      },
      {
        type: "paragraph",
        text: "Lembre-se: preço baixo não garante mais alunos. Muitas vezes, transmite falta de qualidade. Posicione-se como um profissional de valor e cobre adequadamente pelo seu trabalho."
      },
      {
        type: "heading",
        text: "4. Crie processos e sistemas escaláveis"
      },
      {
        type: "paragraph",
        text: "Para crescer de forma sustentável, você precisa de processos bem definidos. Isso inclui:"
      },
      {
        type: "list",
        items: [
          "Processo de onboarding de novos alunos",
          "Sistema de criação e entrega de treinos",
          "Protocolo de acompanhamento e feedback",
          "Método de cobrança e gestão financeira",
          "Estratégia de comunicação e marketing"
        ]
      },
      {
        type: "paragraph",
        text: "Com processos bem estabelecidos, você consegue delegar tarefas, contratar assistentes e escalar seu negócio sem perder qualidade."
      },
      {
        type: "heading",
        text: "5. Construa uma comunidade, não apenas uma lista de alunos"
      },
      {
        type: "paragraph",
        text: "Assessorias de sucesso criam um senso de pertencimento entre os alunos. Organize treinos em grupo, crie grupos de WhatsApp ou em plataformas digitais, promova desafios mensais e incentive a interação entre os participantes."
      },
      {
        type: "paragraph",
        text: "Quando seus alunos se sentem parte de uma comunidade, a taxa de retenção aumenta significativamente e a indicação orgânica acontece naturalmente."
      },
      {
        type: "heading",
        text: "Conclusão"
      },
      {
        type: "paragraph",
        text: "Estruturar uma assessoria esportiva de sucesso em 2025 exige mais do que apenas conhecimento técnico sobre corrida. É necessário ter visão de negócio, usar a tecnologia a seu favor, criar processos eficientes e construir uma marca que inspire confiança e resultados."
      },
      {
        type: "paragraph",
        text: "Com dedicação, planejamento estratégico e as ferramentas certas, você pode transformar sua paixão pela corrida em um negócio próspero e escalável."
      }
    ],
    tags: ["Gestão", "Assessoria Esportiva", "Empreendedorismo", "Corrida"]
  },
  "beneficios-corrida": {
    title: "10 benefícios da corrida comprovados pela ciência",
    category: "Benefícios da Corrida",
    date: "25 de outubro, 2025",
    readTime: "6 min",
    author: {
      name: "Dra. Ana Paula Costa",
      role: "Médica do Esporte",
      avatar: "https://ui-avatars.com/api/?name=Ana+Costa&background=10B981&color=fff&size=200",
    },
    image: "https://images.unsplash.com/photo-1662651800883-b784f138e9dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwYmVuZWZpdHMlMjBmaXRuZXNzfGVufDF8fHx8MTc2MjIxODAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "Conheça os impactos positivos da corrida na saúde física, mental e qualidade de vida dos seus alunos.",
    content: [
      {
        type: "paragraph",
        text: "A corrida é uma das atividades físicas mais completas e acessíveis que existem. Além de não exigir equipamentos caros ou locais específicos, seus benefícios para a saúde são amplamente comprovados pela ciência. Vamos explorar 10 dos principais benefícios que a corrida proporciona."
      },
      {
        type: "heading",
        text: "1. Melhora a saúde cardiovascular"
      },
      {
        type: "paragraph",
        text: "Estudos demonstram que correr regularmente fortalece o coração, melhora a circulação sanguínea e reduz significativamente o risco de doenças cardiovasculares. A prática regular pode diminuir em até 45% o risco de morte por problemas cardíacos."
      },
      {
        type: "heading",
        text: "2. Fortalece ossos e articulações"
      },
      {
        type: "paragraph",
        text: "Contrariando o mito de que correr prejudica os joelhos, pesquisas mostram que a corrida, quando praticada corretamente, fortalece ossos e articulações, prevenindo osteoporose e melhorando a densidade óssea."
      },
      {
        type: "heading",
        text: "3. Auxilia no controle de peso"
      },
      {
        type: "paragraph",
        text: "A corrida é uma das atividades que mais queimam calorias. Dependendo da intensidade, é possível queimar entre 400-600 calorias em apenas 30 minutos, tornando-a excelente para quem busca emagrecimento ou manutenção do peso."
      },
      {
        type: "heading",
        text: "4. Reduz estresse e ansiedade"
      },
      {
        type: "paragraph",
        text: "Durante a corrida, o corpo libera endorfina, conhecida como 'hormônio da felicidade'. Essa liberação reduz níveis de estresse, ansiedade e pode até combater sintomas de depressão leve a moderada."
      },
      {
        type: "heading",
        text: "5. Melhora a qualidade do sono"
      },
      {
        type: "paragraph",
        text: "Corredores regulares relatam sono mais profundo e reparador. Estudos mostram que praticar corrida melhora tanto a duração quanto a qualidade do sono, especialmente quando praticada no período da manhã ou tarde."
      },
      {
        type: "heading",
        text: "6. Aumenta a capacidade cognitiva"
      },
      {
        type: "paragraph",
        text: "A corrida melhora o fluxo sanguíneo para o cérebro, estimulando o crescimento de novas células nervosas e melhorando funções cognitivas como memória, concentração e capacidade de aprendizado."
      },
      {
        type: "heading",
        text: "7. Fortalece o sistema imunológico"
      },
      {
        type: "paragraph",
        text: "Exercícios aeróbicos moderados como a corrida fortalecem o sistema imunológico, tornando o corpo mais resistente a infecções e doenças. Corredores regulares ficam doentes com menos frequência."
      },
      {
        type: "heading",
        text: "8. Aumenta a longevidade"
      },
      {
        type: "paragraph",
        text: "Pesquisas indicam que corredores vivem, em média, 3 anos a mais que pessoas sedentárias. Mesmo corridas curtas de 5-10 minutos por dia já mostram impacto positivo na expectativa de vida."
      },
      {
        type: "heading",
        text: "9. Melhora a autoestima e confiança"
      },
      {
        type: "paragraph",
        text: "Alcançar metas na corrida, seja completar uma distância ou melhorar o tempo, aumenta significativamente a autoestima e a confiança pessoal, efeitos que se estendem para outras áreas da vida."
      },
      {
        type: "heading",
        text: "10. Proporciona conexão social"
      },
      {
        type: "paragraph",
        text: "Participar de assessorias, grupos de corrida e eventos esportivos cria conexões sociais importantes, combatendo o isolamento e criando uma rede de apoio positiva."
      },
      {
        type: "quote",
        text: "A corrida não é apenas exercício físico, é um investimento completo em saúde, bem-estar e qualidade de vida."
      },
      {
        type: "paragraph",
        text: "Comece devagar, respeite seus limites e, preferencialmente, busque orientação profissional. Os benefícios virão naturalmente com a consistência."
      }
    ],
    tags: ["Saúde", "Benefícios", "Corrida", "Bem-estar"]
  },
  "corrida-como-negocio": {
    title: "Corrida como negócio: guia completo para educadores físicos",
    category: "Negócios",
    date: "22 de outubro, 2025",
    readTime: "10 min",
    author: {
      name: "Carlos Mendonça",
      role: "Consultor de Negócios Esportivos",
      avatar: "https://ui-avatars.com/api/?name=Carlos+Mendonca&background=8B5CF6&color=fff&size=200",
    },
    image: "https://images.unsplash.com/photo-1744725845508-054bf3b6d80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBidXNpbmVzcyUyMGVudHJlcHJlbmV1cnxlbnwxfHx8fDE3NjIyMTgwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "Transforme sua paixão por corrida em um negócio rentável. Aprenda a precificar, divulgar e crescer.",
    content: [
      {
        type: "paragraph",
        text: "Para muitos educadores físicos, transformar a paixão pela corrida em um negócio rentável ainda parece um sonho distante. Mas com planejamento estratégico, conhecimento de mercado e as ferramentas certas, é totalmente possível viver bem trabalhando com o que você ama."
      },
      {
        type: "heading",
        text: "Entendendo o mercado de assessoria esportiva"
      },
      {
        type: "paragraph",
        text: "O mercado de corrida no Brasil movimenta bilhões anualmente e está em constante crescimento. O número de praticantes aumentou 300% na última década, e a tendência é de mais expansão. Isso significa oportunidades reais para profissionais qualificados."
      },
      {
        type: "heading",
        text: "Modelos de negócio para educadores físicos"
      },
      {
        type: "paragraph",
        text: "Existem diversos modelos que você pode adotar:"
      },
      {
        type: "list",
        items: [
          "Assessoria presencial em grupo",
          "Assessoria online personalizada",
          "Modelo híbrido (presencial + online)",
          "Consultoria individualizada premium",
          "Planos corporativos para empresas",
          "Preparação específica para provas"
        ]
      },
      {
        type: "heading",
        text: "Como precificar seus serviços"
      },
      {
        type: "paragraph",
        text: "A precificação é um dos aspectos mais desafiadores para iniciantes. Aqui está uma fórmula simples:"
      },
      {
        type: "paragraph",
        text: "**Preço = (Custos + Lucro Desejado) / Número de Clientes**"
      },
      {
        type: "paragraph",
        text: "Considere todos os custos: plataforma digital, deslocamento, materiais, impostos, tempo de planejamento. Depois adicione a margem de lucro que deseja ter. Divida pelo número de alunos que você consegue atender com qualidade."
      },
      {
        type: "quote",
        text: "Não tenha medo de cobrar o valor justo pelo seu trabalho. Clientes que valorizam qualidade estão dispostos a pagar por ela."
      },
      {
        type: "heading",
        text: "Estratégias de divulgação e marketing"
      },
      {
        type: "paragraph",
        text: "Mesmo sendo um excelente profissional, você precisa ser encontrado. Invista em:"
      },
      {
        type: "list",
        items: [
          "Presença ativa nas redes sociais (Instagram, Facebook)",
          "Conteúdo de valor (dicas, vídeos, posts educativos)",
          "Depoimentos e resultados de alunos",
          "Parcerias com lojas de esporte",
          "Participação em eventos e corridas locais",
          "Google Meu Negócio otimizado"
        ]
      },
      {
        type: "heading",
        text: "Fidelização e retenção de clientes"
      },
      {
        type: "paragraph",
        text: "Conquistar um novo cliente custa de 5 a 7 vezes mais do que manter um existente. Invista em:"
      },
      {
        type: "list",
        items: [
          "Atendimento personalizado e próximo",
          "Acompanhamento constante de resultados",
          "Criação de comunidade entre alunos",
          "Eventos exclusivos e desafios",
          "Programas de fidelidade e benefícios"
        ]
      },
      {
        type: "heading",
        text: "Ferramentas essenciais para gestão"
      },
      {
        type: "paragraph",
        text: "Não tente fazer tudo manualmente. Utilize tecnologia para otimizar processos:"
      },
      {
        type: "list",
        items: [
          "Plataforma de gestão de treinos (como TreinoGo)",
          "Sistema de pagamentos recorrentes",
          "Ferramentas de comunicação com alunos",
          "Software de gestão financeira",
          "Aplicativo de monitoramento de desempenho"
        ]
      },
      {
        type: "heading",
        text: "Aspectos legais e formalização"
      },
      {
        type: "paragraph",
        text: "Para operar legalmente e ter credibilidade, formalize seu negócio:"
      },
      {
        type: "list",
        items: [
          "Registro no CREF ativo",
          "Abertura de MEI ou empresa",
          "Seguro de responsabilidade civil",
          "Contrato de prestação de serviços",
          "Termo de anamnese e responsabilidade"
        ]
      },
      {
        type: "heading",
        text: "Escalando o negócio"
      },
      {
        type: "paragraph",
        text: "Quando sua assessoria estiver consolidada, pense em escalar:"
      },
      {
        type: "list",
        items: [
          "Contrate assistentes ou professores parceiros",
          "Crie produtos digitais (e-books, cursos online)",
          "Desenvolva programas de treinamento online em massa",
          "Ofereça franquias ou licenciamento da sua metodologia",
          "Expanda para outras modalidades esportivas"
        ]
      },
      {
        type: "heading",
        text: "Conclusão"
      },
      {
        type: "paragraph",
        text: "Transformar a corrida em um negócio lucrativo é totalmente viável, mas requer profissionalismo, planejamento e execução consistente. Trate sua assessoria como uma empresa, invista em conhecimento e ferramentas, e os resultados virão."
      },
      {
        type: "paragraph",
        text: "O mercado está aquecido e há espaço para profissionais sérios e comprometidos. Comece hoje mesmo a estruturar seu negócio dos sonhos!"
      }
    ],
    tags: ["Negócios", "Empreendedorismo", "Assessoria", "Marketing"]
  }
};

// Artigos relacionados sugeridos
const relatedPosts = [
  {
    id: "retencao-alunos",
    title: "5 estratégias de retenção de alunos em assessorias esportivas",
    image: "https://images.unsplash.com/photo-1758875568756-37a9c5c1a4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjIxMTgxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Gestão de Assessoria",
    readTime: "7 min"
  },
  {
    id: "treinar-diferentes-perfis",
    title: "Como treinar diferentes perfis de corredores na mesma assessoria",
    image: "https://images.unsplash.com/photo-1727849027217-fa9acf71553d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwZ3JvdXAlMjBhdGhsZXRlc3xlbnwxfHx8fDE3NjIyMTgwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Treinamento",
    readTime: "9 min"
  },
  {
    id: "tecnologia-treinamento",
    title: "Tecnologia no treinamento: como apps transformam a assessoria esportiva",
    image: "https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neSUyMGFwcHxlbnwxfHx8fDE3NjIxOTI3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tecnologia",
    readTime: "5 min"
  }
];

export function BlogPost({ postId, onBack, onReadPost }: BlogPostProps) {
  const post = blogPostsData[postId];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Artigo não encontrado</h2>
          <Button onClick={onBack}>Voltar ao blog</Button>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    console.log(`Compartilhar no ${platform}`);
  };

  const renderContent = (block: any, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {block.text}
          </p>
        );
      case "heading":
        return (
          <h2 key={index} className="text-gray-900 mt-8 mb-4">
            {block.text}
          </h2>
        );
      case "list":
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            {block.items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case "quote":
        return (
          <blockquote key={index} className="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-blue-50 rounded-r-lg">
            <p className="text-gray-800 italic">{block.text}</p>
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </button>
            <img src={logoImage} alt="TreinoGo" className="h-8" />
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-900">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        {/* Article Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
          <h1 className="text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-100">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-gray-900">{post.author.name}</div>
              <div className="text-gray-600">{post.author.role}</div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pt-8">
            <span className="text-gray-700">Compartilhar:</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleShare("Facebook")}
                className="w-10 h-10 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleShare("Twitter")}
                className="w-10 h-10 bg-sky-100 hover:bg-sky-500 text-sky-500 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleShare("LinkedIn")}
                className="w-10 h-10 bg-blue-100 hover:bg-blue-700 text-blue-700 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleShare("Email")}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-700 text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {post.content.map((block: any, index: number) => renderContent(block, index))}
              </div>

              {/* Tags */}
              <Separator className="my-8" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center gap-1"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-white mb-3">
                  Gostou do conteúdo?
                </h3>
                <p className="text-blue-100 mb-4">
                  Experimente o TreinoGo e leve sua assessoria para o próximo nível.
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Criar conta grátis
                </Button>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-900 mb-4">
                  Artigos relacionados
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <button
                      key={related.id}
                      onClick={() => onReadPost(related.id)}
                      className="group w-full text-left"
                    >
                      <div className="flex gap-3">
                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                            {related.title}
                          </p>
                          <p className="text-gray-500">
                            {related.readTime}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-white mb-4">
            Não perca nenhum conteúdo
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Receba artigos exclusivos, dicas práticas e estratégias de negócios para assessorias esportivas direto no seu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Inscrever-se
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
