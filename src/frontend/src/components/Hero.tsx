import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

export default function Hero() {
  const affiliateLink = "https://unlocator.com/account/signup/unv8xPD9";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/assets/generated/hero-bg.dim_1920x1080.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Stream Without Limits
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Access Content
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Anywhere
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Unlock global streaming libraries, protect your privacy, and
                browse the internet freely with Unlocator's powerful VPN and
                Smart DNS technology.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                  asChild
                >
                  <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full border-2 hover:bg-accent/10"
                  asChild
                >
                  <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Plans
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>No Logs Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Lightning Fast Speeds</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>7-Day Free Trial</span>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 rounded-full blur-3xl opacity-50 animate-pulse" />

                {/* Unlocator Logo */}
                <img
                  src="/assets/unlocatoricon.jpg"
                  alt="Unlocator VPN - Stream Anywhere"
                  className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
}
