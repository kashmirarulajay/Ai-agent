import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
}

const CategoryCard = ({ title, description, icon: Icon, gradient, delay = 0 }: CategoryCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 cursor-pointer animate-scale-in shadow-card-custom hover:shadow-glow"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient background on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: gradient }}
      />
      
      <div className="relative p-8">
        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{ background: gradient }}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Hover indicator */}
        <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">Explore</span>
          <div className="w-8 h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>
      </div>
      
      {/* Corner accent */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: gradient }}
      />
    </Card>
  );
};

export default CategoryCard;
