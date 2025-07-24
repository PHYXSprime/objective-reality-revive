import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { logicalFallacies } from '@/data/logicalFallacies';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LogicalFallacies() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Generate categories dynamically from the data
  const uniqueCategories = [...new Set(logicalFallacies.map(fallacy => fallacy.category))];
  const categories = [
    { value: 'all', label: 'All Categories' },
    ...uniqueCategories.map(category => ({ 
      value: category, 
      label: t(`category.${category}`) 
    }))
  ];

  const filteredFallacies = logicalFallacies.filter(fallacy => {
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
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              {t('fallacies.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              {t('fallacies.description')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search logical fallacies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                {categories.find(cat => cat.value === selectedCategory)?.label}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border border-border">
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className="cursor-pointer"
                >
                  {category.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredFallacies.length} of {logicalFallacies.length} logical fallacies
          </p>
        </div>

        {/* Fallacies Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredFallacies.map((fallacy, index) => (
            <Card key={index} className="h-full glass-card float-card hover:glow-primary transition-all duration-300">
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
                  <h4 className="font-medium text-sm text-foreground mb-2">Example:</h4>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {fallacy.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredFallacies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No logical fallacies found matching your search criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}