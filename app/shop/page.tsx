"use client";

import { useState } from 'react';
import ProductCard, { type Product } from '@/components/shop/ProductCard';
import ProductSaleModal from '@/components/shop/ProductSaleModal';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Masterclass: Automação com IA',
    price: 'R$ 497',
    imageUrl: '',
    shortDescription: 'Automatize processos complexos usando GPT-4 e ferramentas de IA.',
    longDescription: 'Neste curso completo, você aprenderá a criar sistemas de automação inteligentes que economizam horas do seu dia. Desde integração com APIs até criação de agentes autônomos, você dominará as técnicas usadas pelas maiores empresas tech do mundo.',
    benefits: [
      '40+ horas de conteúdo prático em vídeo',
      'Acesso a 15 projetos reais prontos para usar',
      'Certificado de conclusão reconhecido',
      'Suporte direto no Discord',
      'Atualizações vitalícias do conteúdo',
      'Templates e scripts prontos para produção'
    ]
  },
  {
    id: '2',
    name: 'Kit Desenvolvedor Full-Stack Pro',
    price: 'R$ 997',
    imageUrl: '',
    shortDescription: 'Todo o conhecimento para se tornar um desenvolvedor completo em 2025.',
    longDescription: 'O caminho definitivo para dominar desenvolvimento moderno. React, Next.js, Node.js, bancos de dados, DevOps e muito mais. Do básico ao avançado com projetos que impressionam em qualquer portfolio.',
    benefits: [
      '100+ horas de vídeo aulas atualizadas',
      'Stack completa: Frontend + Backend + DevOps',
      '25 projetos do zero ao deploy',
      'Mentoria em grupo mensal',
      'Preparação para entrevistas técnicas',
      'Comunidade exclusiva de desenvolvedores',
      'Material de apoio em PDF',
      'Garantia de empregabilidade'
    ]
  },
  {
    id: '3',
    name: 'Consultoria: Arquitetura de Software',
    price: 'R$ 2.997',
    imageUrl: '',
    shortDescription: '4 semanas de consultoria individual para escalar seu projeto.',
    longDescription: 'Sessões individuais onde analisamos seu projeto, identificamos gargalos e criamos uma arquitetura escalável. Ideal para founders técnicos e desenvolvedores sêniores que querem levar seus projetos ao próximo nível.',
    benefits: [
      '8 sessões de 1h de consultoria ao vivo',
      'Análise completa da arquitetura atual',
      'Documentação técnica profissional',
      'Roadmap de melhorias priorizadas',
      'Code review de componentes críticos',
      'Suporte via WhatsApp por 30 dias',
      'Gravações de todas as sessões'
    ]
  },
  {
    id: '4',
    name: 'Engenharia de Prompt: Do Zero ao Expert',
    price: 'R$ 297',
    imageUrl: '',
    shortDescription: 'Domine a arte de criar prompts que geram resultados extraordinários.',
    longDescription: 'Aprenda as técnicas avançadas de engenharia de prompt usadas por empresas líderes. Desde prompts simples até sistemas complexos de multi-agentes, você entenderá como extrair o máximo potencial dos LLMs.',
    benefits: [
      '20+ horas de conteúdo especializado',
      'Biblioteca com 500+ prompts testados',
      'Acesso ao Prompt Lab (ferramenta exclusiva)',
      'Certificação em Engenharia de Prompt',
      '10 estudos de caso reais',
      'Templates para diferentes casos de uso',
      'Comunidade de praticantes'
    ]
  },
  {
    id: '5',
    name: 'Package: Bootcamp Completo AI & Development',
    price: 'R$ 3.997',
    imageUrl: '',
    shortDescription: 'Todos os cursos + mentorias + acesso vitalício. O pacote definitivo.',
    longDescription: 'A solução completa para quem quer dominar IA e desenvolvimento moderno. Inclui todos os nossos cursos, mentorias exclusivas, certificações e acesso prioritário a novos conteúdos. O investimento mais completo em sua carreira tech.',
    benefits: [
      'TODOS os cursos da plataforma (valor R$ 8.000+)',
      'Mentoria individual mensal (12 sessões/ano)',
      'Acesso prioritário a novos lançamentos',
      'Networking em eventos exclusivos',
      'Certificações profissionais',
      'Job board com vagas exclusivas',
      'Desconto em consultorias adicionais',
      'Grupo VIP no WhatsApp com o Tyaakov',
      'Material bônus e ferramentas premium'
    ]
  },
  {
    id: '6',
    name: 'Workshop: Deploy e DevOps Moderno',
    price: 'R$ 397',
    imageUrl: '',
    shortDescription: 'Aprenda a fazer deploy profissional e gerenciar infraestrutura na nuvem.',
    longDescription: 'Workshop intensivo focado em ensinar as melhores práticas de DevOps e deploy. Docker, Kubernetes, CI/CD, monitoramento e tudo que você precisa para colocar aplicações em produção com confiança.',
    benefits: [
      '15 horas de workshop ao vivo',
      'Deploy de 5 projetos reais',
      'Domínio de Docker e Kubernetes',
      'Pipelines de CI/CD automatizados',
      'Configuração de monitoramento',
      'Scripts e configs prontos para usar',
      'Acesso à gravação por 1 ano'
    ]
  }
];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <header className="sticky top-0 backdrop-blur-sm bg-gray-900/80 border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="font-bold text-xl text-white">Tyaakov.dev</span>
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Main</a>
              <a href="/learn" className="text-gray-300 hover:text-white transition-colors">Learn</a>
              <a href="/shop" className="text-white font-semibold">Skills Shop</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills Shop
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As ferramentas e o conhecimento que você precisa para escalar. Sem ruído, apenas resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </section>

      <ProductSaleModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        product={selectedProduct}
      />
    </div>
  );
}
