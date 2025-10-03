import CategoryCard from "./CategoryCard";
import { 
  Brain, 
  Code2, 
  Leaf, 
  Heart, 
  Blocks, 
  Gamepad2, 
  GraduationCap, 
  TrendingUp, 
  Shield, 
  Sparkles 
} from "lucide-react";

const categories = [
  {
    title: "Agentic AI Systems",
    description: "Autonomous agents that think, plan, and act independently. Revolutionizing workflow automation, personal assistants, and API orchestration.",
    icon: Brain,
    gradient: "linear-gradient(135deg, hsl(263 70% 60%), hsl(280 80% 65%))",
  },
  {
    title: "Developer Tools",
    description: "Intelligent coding assistants, AI-driven testing, debugging tools, and productivity enhancers for modern software development.",
    icon: Code2,
    gradient: "linear-gradient(135deg, hsl(217 91% 60%), hsl(193 82% 55%))",
  },
  {
    title: "Sustainability & Earth",
    description: "AI solutions for environmental monitoring, climate action, resource optimization, and building a sustainable future.",
    icon: Leaf,
    gradient: "linear-gradient(135deg, hsl(142 76% 46%), hsl(160 60% 50%))",
  },
  {
    title: "Human Wellness",
    description: "AI-powered health monitoring, mental wellness apps, personalized fitness, and healthcare accessibility innovations.",
    icon: Heart,
    gradient: "linear-gradient(135deg, hsl(330 80% 65%), hsl(0 84% 60%))",
  },
  {
    title: "Web3 AI Integration",
    description: "Decentralized AI applications, smart contracts with AI, blockchain interoperability, and secure Web3 user experiences.",
    icon: Blocks,
    gradient: "linear-gradient(135deg, hsl(280 80% 65%), hsl(263 70% 60%))",
  },
  {
    title: "Gaming",
    description: "AI-driven game development, intelligent NPCs, procedural content generation, and immersive gaming experiences.",
    icon: Gamepad2,
    gradient: "linear-gradient(135deg, hsl(45 93% 58%), hsl(30 100% 60%))",
  },
  {
    title: "Education & Learning",
    description: "Personalized learning platforms, AI tutors, adaptive assessment systems, and tools advancing education equity.",
    icon: GraduationCap,
    gradient: "linear-gradient(135deg, hsl(193 82% 55%), hsl(217 91% 60%))",
  },
  {
    title: "Fintech",
    description: "Financial analysis, fraud detection, algorithmic trading, risk assessment, and next-gen banking solutions.",
    icon: TrendingUp,
    gradient: "linear-gradient(135deg, hsl(160 60% 50%), hsl(142 76% 46%))",
  },
  {
    title: "AI Cybersecurity",
    description: "Anomaly detection, threat intelligence, privacy-preserving AI, and advanced security defense systems.",
    icon: Shield,
    gradient: "linear-gradient(135deg, hsl(0 84% 60%), hsl(330 80% 65%))",
  },
  {
    title: "Open Innovation",
    description: "Boundary-pushing AI projects: robotics, AR/VR, enterprise automation, and any groundbreaking AI concept.",
    icon: Sparkles,
    gradient: "linear-gradient(135deg, hsl(280 100% 70%), hsl(217 91% 60%))",
  },
];

const CategoriesGrid = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            AI Innovation Domains
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover autonomous AI solutions transforming industries and solving real-world challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              {...category}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
