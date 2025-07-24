import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cognitiveBiases } from '@/data/cognitiveBiases';
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

export default function CognitiveBiases() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'too_much_information', label: t('category.too_much_information') },
    { value: 'not_enough_meaning', label: t('category.not_enough_meaning') },
    { value: 'need_to_act_fast', label: t('category.need_to_act_fast') },
    { value: 'what_should_we_remember', label: t('category.what_should_we_remember') },
  ];

  const filteredBiases = cognitiveBiases.filter(bias => {
    const matchesSearch = bias.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bias.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || bias.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'too_much_information': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'not_enough_meaning': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'need_to_act_fast': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'what_should_we_remember': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
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
              placeholder="Search cognitive biases..."
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
            Showing {filteredBiases.length} of {cognitiveBiases.length} cognitive biases
          </p>
        </div>

        {/* Biases Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBiases.map((bias, index) => (
            <Card key={index} className="h-full glass-card float-card hover:glow-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg leading-tight">
                    {bias.name}
                  </CardTitle>
                  <Badge className={getCategoryColor(bias.category)}>
                    {t(`category.${bias.category}`)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {bias.definition}
                </CardDescription>
                <div>
                  <h4 className="font-medium text-sm text-foreground mb-2">Example:</h4>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {bias.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredBiases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No cognitive biases found matching your search criteria.
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