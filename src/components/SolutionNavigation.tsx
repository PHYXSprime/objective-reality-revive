import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, HelpCircle, Microscope, Lightbulb, Smile, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const solutions = [
  {
    icon: MessageSquare,
    title: "Street Epistemology",
    path: "/street-epistemology",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: HelpCircle,
    title: "Socratic Questioning",
    path: "/socratic-questioning",
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: Microscope,
    title: "Scientific Method",
    path: "/scientific-method",
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: Lightbulb,
    title: "Critical Thinking",
    path: "/critical-thinking",
    color: "text-orange-600 dark:text-orange-400"
  },
  {
    icon: Smile,
    title: "Comedians",
    path: "/comedians",
    color: "text-pink-600 dark:text-pink-400"
  }
];

export function SolutionNavigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div 
      className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300",
        "glass-nav rounded-xl border border-border/50 shadow-lg",
        isExpanded ? "w-64" : "w-14"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-2">
        {/* Header */}
        <div className="flex items-center mb-3 px-2">
          {isExpanded ? (
            <div className="flex items-center justify-between w-full">
              <span className="text-sm font-medium text-muted-foreground">Solutions</span>
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            </div>
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground mx-auto" />
          )}
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {solutions.map((solution) => {
            const isActive = isActivePath(solution.path);
            return (
              <Link
                key={solution.path}
                to={solution.path}
                className={cn(
                  "flex items-center gap-3 px-2 py-2.5 rounded-lg transition-all duration-200",
                  "hover:bg-muted/50",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <solution.icon 
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive ? "text-primary-foreground" : solution.color
                  )} 
                />
                {isExpanded && (
                  <span className="text-sm font-medium truncate">
                    {solution.title}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Back to Solutions */}
        <div className="mt-4 pt-3 border-t border-border/50">
          <Link
            to="/solutions"
            className={cn(
              "flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-200",
              "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            <div className="h-5 w-5 flex-shrink-0 rounded bg-muted flex items-center justify-center">
              <span className="text-xs font-bold">◄</span>
            </div>
            {isExpanded && (
              <span className="text-sm font-medium">All Solutions</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}