'use client';

import { useState } from 'react';
import { ContentCard } from './ContentCard';
import { Button } from '@/components/ui/button';

interface Content {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  slug: string;
}

interface FilterableGridProps {
  contents: Content[];
  categories: string[];
}

export function FilterableGrid({ contents, categories }: FilterableGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredContents = selectedCategory === 'Todos'
    ? contents
    : contents.filter(content => content.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? 'bg-[#EE4F27] hover:bg-[#EE4F27]/90 text-white'
                : 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white'
            }
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContents.map((content) => (
          <ContentCard
            key={content.id}
            title={content.title}
            description={content.description}
            imageUrl={content.imageUrl}
            category={content.category}
            slug={content.slug}
          />
        ))}
      </div>

      {filteredContents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            Nenhum conteúdo encontrado nesta categoria.
          </p>
        </div>
      )}
    </>
  );
}
