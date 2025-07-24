import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cognitiveBiases } from '@/data/cognitiveBiases';
import { cognitiveBiasesTranslations } from '@/data/cognitiveBiases.de';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function CognitiveBiases() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Helper function to get translated content
  const getTranslatedBias = (bias: any) => {
    if (language === 'de' && cognitiveBiasesTranslations.de[bias.name]) {
      const translation = cognitiveBiasesTranslations.de[bias.name];
      return {
        name: translation.name,
        definition: translation.definition,
        example: translation.example,
        category: bias.category
      };
    }
    return bias;
  };

  // Generate categories dynamically from the data
  const uniqueCategories = [...new Set(cognitiveBiases.map(bias => bias.category))];
  const categories = [
    { value: 'all', label: t('filter.all') },
    ...uniqueCategories.map(category => ({ 
      value: category, 
      label: t(`category.${category}`)
    }))
  ];

  const filteredBiases = cognitiveBiases.filter(bias => {
    const translatedBias = getTranslatedBias(bias);
    const matchesSearch = translatedBias.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         translatedBias.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || bias.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'too_much_information': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'not_enough_meaning': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'need_to_act_fast': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'what_to_remember': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen py-8 pr-20">
      <ChallengeNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              {t('biases.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              {t('biases.description')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder={t('filter.by_category')} />
            </SelectTrigger>
            <SelectContent className="z-[9999]">
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {t('showing_results').replace('{count}', filteredBiases.length.toString()).replace('{total}', cognitiveBiases.length.toString())}
          </p>
        </div>

        {/* Biases Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBiases.map((bias, index) => {
            const translatedBias = getTranslatedBias(bias);
            return (
              <Card key={index} className="h-full glass-card float-card hover:glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight">
                      {translatedBias.name}
                    </CardTitle>
                    <Badge className={getCategoryColor(bias.category)}>
                      {t(`category.${bias.category}`)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {translatedBias.definition}
                  </CardDescription>
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-2">{t('example')}:</h4>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      {translatedBias.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredBiases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {t('no_results')}
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              {t('clear_filters')}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}