import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useLogicalFallacies } from '@/hooks/useLogicalFallacies';
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

export default function LogicalFallacies() {
  const { t, language, isLoading: translationsLoading } = useLanguage();
  const { fallacies, loading } = useLogicalFallacies(language);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Wait for both translations and fallacies to load
  const isLoading = translationsLoading || loading;

  // Generate categories dynamically from the data
  const uniqueCategories = [...new Set(fallacies.map(fallacy => fallacy.category))];
  const categories = [
    { value: 'all', label: t('filter.all') },
    ...uniqueCategories.map(category => ({ 
      value: category, 
      label: t(`category.${category}`) || category
    }))
  ];

  const filteredFallacies = fallacies.filter(fallacy => {
    const matchesSearch = fallacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fallacy.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || fallacy.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'relevance': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'presumption': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'weak_inference': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'causal': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'formal': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'conditional': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <PageViewCounter />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 py-8 pr-20">
        <ChallengeNavigation />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto border border-primary/20 shadow-2xl">
              <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('fallacies.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('fallacies.description')}
              </p>
            </div>
          </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="glass-card p-8 max-w-md mx-auto">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading logical fallacies...</p>
            </div>
          </div>
        )}

        {/* Search and Filter Controls - Only show when not loading */}
        {!isLoading && (
          <>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t('search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
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
                {t('showing_results').replace('{count}', filteredFallacies.length.toString()).replace('{total}', fallacies.length.toString())}
              </p>
            </div>

            {/* Fallacies Grid */}
            {filteredFallacies.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredFallacies.map((fallacy) => (
                  <Card key={`${fallacy.id}-${language}`} className="h-full glass-card float-card hover:glow-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg leading-tight">
                          {fallacy.name}
                        </CardTitle>
                        <Badge className={getCategoryColor(fallacy.category)}>
                          {t(`category.${fallacy.category}`)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-relaxed">
                        {fallacy.definition}
                      </CardDescription>
                      <div>
                        <h4 className="font-medium text-sm text-foreground mb-2">{t('example')}:</h4>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                          {fallacy.example}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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