import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Lock, Monitor, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Global Streaming Access",
    description:
      "Unlock Netflix, Hulu, BBC iPlayer, and 200+ streaming services from anywhere in the world. Watch your favorite shows without geo-restrictions.",
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    description:
      "Your online activity is protected with AES-256 encryption. Browse securely on public Wi-Fi and keep your data safe from hackers.",
  },
  {
    icon: Zap,
    title: "Blazing Fast Speeds",
    description:
      "Stream in 4K, game online, and download files without buffering. Our optimized servers deliver the fastest VPN speeds available.",
  },
  {
    icon: Monitor,
    title: "All Your Devices",
    description:
      "Works seamlessly on Windows, Mac, iOS, Android, Smart TVs, gaming consoles, and routers. Protect unlimited devices simultaneously.",
  },
  {
    icon: Shield,
    title: "Zero Logs Policy",
    description:
      "We never track, collect, or share your browsing data. Your privacy is guaranteed with our strict no-logs policy and secure jurisdiction.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Unlocator?
          </h2>
          <p className="text-xl text-muted-foreground">
            The most powerful VPN and Smart DNS solution for streaming, privacy,
            and freedom online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Stream Without Limits?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join millions who trust Unlocator for secure, unrestricted
              internet access. Start your free trial today—no credit card
              required.
            </p>
            <a
              href="https://unlocator.com/account/signup/unv8xPD9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
