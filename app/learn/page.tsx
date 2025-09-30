import { FilterableGrid } from '@/components/learn/FilterableGrid';

interface Content {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  slug: string;
}

const mockContents: Content[] = [
  {
    id: '1',
    title: 'Introdução à Engenharia de Prompt',
    description: 'Aprenda as técnicas fundamentais para criar prompts eficazes e obter os melhores resultados de modelos de IA.',
    imageUrl: '',
    category: 'Engenharia de Prompt',
    slug: 'introducao-engenharia-prompt'
  },
  {
    id: '2',
    title: 'Automação de Processos com IA',
    description: 'Descubra como automatizar tarefas repetitivas usando ferramentas de inteligência artificial e aumentar sua produtividade.',
    imageUrl: '',
    category: 'Automação com IA',
    slug: 'automacao-processos-ia'
  },
  {
    id: '3',
    title: 'LLaMA 2: Guia Completo',
    description: 'Tutorial completo sobre como usar e configurar o modelo LLaMA 2 da Meta em seus projetos.',
    imageUrl: '',
    category: 'Modelos Open Source',
    slug: 'llama-2-guia-completo'
  },
  {
    id: '4',
    title: 'Segurança em Aplicações com IA',
    description: 'Melhores práticas para proteger suas aplicações de IA contra vulnerabilidades e ataques comuns.',
    imageUrl: '',
    category: 'Segurança em IA',
    slug: 'seguranca-aplicacoes-ia'
  },
  {
    id: '5',
    title: 'Prompts Avançados para ChatGPT',
    description: 'Técnicas avançadas de prompt engineering para extrair o máximo potencial do ChatGPT em diferentes contextos.',
    imageUrl: '',
    category: 'Engenharia de Prompt',
    slug: 'prompts-avancados-chatgpt'
  },
  {
    id: '6',
    title: 'Criando Workflows de IA com n8n',
    description: 'Aprenda a criar automações poderosas conectando diferentes ferramentas de IA usando o n8n.',
    imageUrl: '',
    category: 'Automação com IA',
    slug: 'workflows-ia-n8n'
  },
  {
    id: '7',
    title: 'Stable Diffusion: Do Zero ao Avançado',
    description: 'Curso completo sobre geração de imagens com Stable Diffusion, desde a instalação até técnicas avançadas.',
    imageUrl: '',
    category: 'Modelos Open Source',
    slug: 'stable-diffusion-zero-avancado'
  },
  {
    id: '8',
    title: 'Proteção de Dados em Modelos de IA',
    description: 'Como garantir a privacidade e proteção de dados sensíveis ao trabalhar com modelos de linguagem.',
    imageUrl: '',
    category: 'Segurança em IA',
    slug: 'protecao-dados-modelos-ia'
  },
  {
    id: '9',
    title: 'Fine-tuning de Modelos Open Source',
    description: 'Guia prático para fazer fine-tuning de modelos open source para suas necessidades específicas.',
    imageUrl: '',
    category: 'Modelos Open Source',
    slug: 'fine-tuning-modelos-open-source'
  }
];

const categories = [
  'Todos',
  'Engenharia de Prompt',
  'Automação com IA',
  'Modelos Open Source',
  'Segurança em IA'
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Módulo Learn
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Bem-vindo ao centro de conhecimento da plataforma. Aqui você encontra tutoriais completos,
              aulas práticas e conteúdos aprofundados sobre IA, automação e desenvolvimento.
            </p>
          </div>

          <FilterableGrid contents={mockContents} categories={categories} />
        </section>
      </div>
    </div>
  );
}
