import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useCognitiveBiases } from '@/hooks/useCognitiveBiases';
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
import { PageViewCounter } from '@/components/PageViewCounter';

export default function CognitiveBiases() {
  const { t, language, isLoading: translationsLoading } = useLanguage();
  const { biases, getTranslatedBias, loading } = useCognitiveBiases(language);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Wait for both translations and biases to load
  const isLoading = translationsLoading || loading;

  // Generate categories dynamically from the data
  const uniqueCategories = [...new Set(biases.map(bias => bias.category))];
  const categories = [
    { value: 'all', label: t('filter.all') },
    ...uniqueCategories.map(category => ({
      value: category,
      label: t(`category.${category}` as any) || category
    }))
  ];

  const filteredBiases = biases.filter(bias => {
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
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10">
        <PageViewCounter />
        <ChallengeNavigation />
        
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto border border-primary/20 shadow-2xl">
              <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('biases.title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('biases.description')}
              </p>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="glass-card p-8 max-w-md mx-auto">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading cognitive biases...</p>
              </div>
            </div>
          )}

          {/* Search and Filter Controls - Only show when not loading */}
          {!isLoading && (
            <div className="glass-card p-6 mb-8 max-w-4xl mx-auto border border-primary/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder={t('search.placeholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                {t('showing_results')
                  .replace('{count}', filteredBiases.length.toString())
                  .replace('{total}', biases.length.toString())
                }
              </div>
            </div>
          )}

          {/* Biases Grid - Only show when not loading */}
          {!isLoading && (
            <>
              {filteredBiases.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBiases.map((bias) => {
                    const translatedBias = getTranslatedBias(bias);
                    return (
                      <Card key={bias.id} className="glass-card transition-transform hover:scale-105 border border-primary/10">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg text-foreground pr-4">
                              {translatedBias.name}
                            </CardTitle>
                            <Badge variant="secondary" className={getCategoryColor(bias.category)}>
                              {t(`category.${bias.category}` as any) || bias.category}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                            {translatedBias.definition}
                          </CardDescription>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="text-sm text-muted-foreground italic">
                              <strong>Example:</strong> {translatedBias.example}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="glass-card p-8 max-w-md mx-auto">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t('no_results')}</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your search or category filter</p>
                    <Button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      variant="outline"
                    >
                      {t('clear_filters')}
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}