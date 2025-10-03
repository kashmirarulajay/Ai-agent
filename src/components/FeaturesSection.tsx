import { Check } from "lucide-react";

const features = [
  "Autonomous decision-making and planning",
  "Real-time workflow automation",
  "Cross-platform API orchestration",
  "Intelligent personal assistance",
  "Adaptive learning systems",
  "Enterprise-grade scalability",
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build Intelligent Systems That
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Work Autonomously</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our AI agents don't just execute tasks—they understand context, make decisions, 
              and continuously learn from interactions to deliver exceptional results.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm shadow-card-custom">
              {/* Gradient orbs */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary rounded-full blur-3xl opacity-50 animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-accent rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "4s" }} />
              </div>
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
