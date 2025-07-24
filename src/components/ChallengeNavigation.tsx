import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Target, Brain, AlertTriangle, MessageCircle, Shield, FileText, Search, Zap, Eye, User, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const challenges = [
  {
    icon: Users,
    title: "Indoctrination",
    path: "/indoctrination",
    color: "text-red-600 dark:text-red-400"
  },
  {
    icon: Target,
    title: "Scientific Consensus",
    path: "/consensus",
    color: "text-orange-600 dark:text-orange-400"
  },
  {
    icon: Brain,
    title: "Cognitive Biases",
    path: "/cognitive-biases",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: AlertTriangle,
    title: "Logical Fallacies",
    path: "/logical-fallacies",
    color: "text-red-600 dark:text-red-400"
  },
  {
    icon: MessageCircle,
    title: "Propaganda",
    path: "/propaganda",
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: Shield,
    title: "Censorship",
    path: "/censorship",
    color: "text-yellow-600 dark:text-yellow-400"
  },
  {
    icon: FileText,
    title: "Dogmatic Beliefs",
    path: "/dogmas",
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: Search,
    title: "Co-evolution",
    path: "/co-evolution",
    color: "text-indigo-600 dark:text-indigo-400"
  },
  {
    icon: Zap,
    title: "Lazy Thinking",
    path: "/lazy-thinking",
    color: "text-pink-600 dark:text-pink-400"
  },
  {
    icon: Eye,
    title: "Psychological Weakness",
    path: "/psychological-weakness",
    color: "text-cyan-600 dark:text-cyan-400"
  },
  {
    icon: User,
    title: "Ego",
    path: "/ego",
    color: "text-teal-600 dark:text-teal-400"
  }
];

export function ChallengeNavigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div 
      className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300",
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
              <span className="text-sm font-medium text-muted-foreground">Challenges</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          ) : (
            <ChevronLeft className="h-4 w-4 text-muted-foreground mx-auto" />
          )}
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1 max-h-[70vh] overflow-y-auto">
          {challenges.map((challenge) => {
            const isActive = isActivePath(challenge.path);
            return (
              <Link
                key={challenge.path}
                to={challenge.path}
                className={cn(
                  "flex items-center gap-3 px-2 py-2.5 rounded-lg transition-all duration-200",
                  "hover:bg-muted/50",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <challenge.icon 
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive ? "text-primary-foreground" : challenge.color
                  )} 
                />
                {isExpanded && (
                  <span className="text-sm font-medium truncate">
                    {challenge.title}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Back to Challenges */}
        <div className="mt-4 pt-3 border-t border-border/50">
          <Link
            to="/challenges"
            className={cn(
              "flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-200",
              "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            <div className="h-5 w-5 flex-shrink-0 rounded bg-muted flex items-center justify-center">
              <span className="text-xs font-bold">◄</span>
            </div>
            {isExpanded && (
              <span className="text-sm font-medium">All Challenges</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}