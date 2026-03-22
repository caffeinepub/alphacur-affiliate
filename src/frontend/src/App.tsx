import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Lock,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const AFFILIATE_URL =
  "https://www.creditbuilderiq.com/lander/aff-4?offercode=4375029E&plancode=PLANCB4D&transactionid=4bcf4e6a15904846971feafae6ae6788&offer_id=874&aff_id=1331&aff_sub=%7Baffiliate%2Fpublisher_id_here%7D&fname=&lname=&email=&address=&city=&state=&zip=&phone=&source=%7Btraffic_type_here%7D&aff_sub2=%7Badditional_subID_here%7D&aff_sub3=%7Badditional_subID_here%7D&aff_click_id=%7BclickID_here%7D&utm_campaign=%7Baffiliate%2Fpublisher_id_here%7D&utm_source=1331&utm_medium=affiliate";

const features = [
  {
    icon: BarChart3,
    title: "Credit Score Monitoring",
    description:
      "Track your credit score in real-time with daily updates and instant alerts whenever your score changes.",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light",
  },
  {
    icon: TrendingUp,
    title: "Credit Building Tools",
    description:
      "Access personalized action plans and smart recommendations designed to help you build credit faster.",
    color: "text-brand-green",
    bg: "bg-brand-green-light",
  },
  {
    icon: Shield,
    title: "3-Bureau Reporting",
    description:
      "We report to all three major credit bureaus — Experian, TransUnion, and Equifax — for maximum impact.",
    color: "text-brand-blue",
    bg: "bg-brand-blue-light",
  },
  {
    icon: Lock,
    title: "Identity Protection",
    description:
      "24/7 dark web monitoring, fraud alerts, and $1M identity theft insurance to keep you fully protected.",
    color: "text-brand-green",
    bg: "bg-brand-green-light",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$1",
    period: "14-day trial",
    description: "Perfect for getting started on your credit journey",
    features: [
      "Credit score monitoring",
      "1-bureau reporting",
      "Basic credit tools",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Standard",
    price: "$19.99",
    period: "per month",
    description: "Everything you need to build credit confidently",
    features: [
      "Daily score monitoring",
      "3-bureau reporting",
      "Credit building tools",
      "Identity alerts",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$29.99",
    period: "per month",
    description: "Complete protection and accelerated credit growth",
    features: [
      "Real-time monitoring",
      "3-bureau reporting",
      "Advanced credit tools",
      "$1M ID theft insurance",
      "Dedicated advisor",
      "Credit dispute assistance",
    ],
    cta: "Go Premium",
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Marcus Johnson",
    location: "Atlanta, GA",
    score: "+87 points",
    text: "I went from a 580 to a 667 in just 8 months using Credit Builder IQ. Their step-by-step guidance made the whole process simple. I finally got approved for my first car loan!",
    avatar: "MJ",
  },
  {
    name: "Priya Sharma",
    location: "Dallas, TX",
    score: "+112 points",
    text: "The 3-bureau reporting feature is incredible. My score jumped over 100 points in less than a year. I used the improvement to refinance my mortgage and save $300/month.",
    avatar: "PS",
  },
  {
    name: "Derek Owens",
    location: "Chicago, IL",
    score: "+64 points",
    text: "After a rough financial period, I needed to rebuild fast. Credit Builder IQ gave me a clear roadmap. The identity protection feature caught suspicious activity before it became a real problem.",
    avatar: "DO",
  },
];

function CTAButton({
  children,
  className = "",
  ocid,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  ocid: string;
  variant?: "primary" | "secondary" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 font-semibold transition-all duration-200 cursor-pointer";
  const variants = {
    primary:
      "bg-brand-green hover:bg-brand-green-dark text-white shadow-cta rounded-full px-8 py-3 text-base",
    secondary:
      "bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full px-8 py-3 text-base",
    outline:
      "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-full px-8 py-3 text-base",
  };
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={ocid}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Credit Builder IQ
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
              data-ocid="nav.features.link"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-foreground transition-colors"
              data-ocid="nav.pricing.link"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-foreground transition-colors"
              data-ocid="nav.testimonials.link"
            >
              Reviews
            </a>
          </nav>
          <CTAButton
            ocid="header.get_started.button"
            variant="primary"
            className="text-sm px-5 py-2"
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </CTAButton>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-brand-blue-light text-brand-blue border-0 font-semibold px-3 py-1">
                #1 Credit Building Platform
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Build Your Credit.{" "}
                <span className="text-brand-green">Unlock Your Future.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Monitor your credit score daily, get personalized improvement
                tips, and report to all 3 major bureaus. Join over 500,000
                members who improved their scores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  ocid="hero.start_trial.button"
                  variant="primary"
                  className="text-base px-8 py-4"
                >
                  Start $1 Trial Today <ChevronRight className="w-5 h-5" />
                </CTAButton>
                <CTAButton
                  ocid="hero.learn_more.button"
                  variant="outline"
                  className="text-base px-8 py-4"
                >
                  See How It Works
                </CTAButton>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[
                    "bg-brand-blue",
                    "bg-brand-green",
                    "bg-brand-blue-dark",
                  ].map((c) => (
                    <div
                      key={c}
                      className={`w-8 h-8 rounded-full ${c} border-2 border-white`}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    4.9/5 from 12,000+ reviews
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-feature">
                <img
                  src="/assets/generated/credit-score-hero.dim_600x400.png"
                  alt="Credit score dashboard showing score improvement"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                        Your Credit Score
                      </p>
                      <p className="text-3xl font-bold text-brand-green">742</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        This month
                      </p>
                      <p className="text-lg font-bold text-brand-green">
                        ↑ +23 pts
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-green rounded-full"
                      style={{ width: "74%" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted border-y border-border py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500K+", label: "Members" },
              { value: "87 pts", label: "Avg Score Increase" },
              { value: "3", label: "Bureaus Reported" },
              { value: "$1M", label: "ID Theft Insurance" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-brand-blue font-display">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-brand-green-light text-brand-green border-0 font-semibold">
              Everything You Need
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Complete Credit Toolkit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All the tools and monitoring you need to build, protect, and grow
              your credit score — in one platform.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full border border-border shadow-card hover:shadow-feature transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div
                      className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-3`}
                    >
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-muted py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-brand-blue-light text-brand-blue border-0 font-semibold">
              Simple Pricing
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Start with a risk-free $1 trial. Cancel anytime, no long-term
              commitment.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`pricing.plan.${i + 1}`}
              >
                <Card
                  className={`h-full flex flex-col relative ${
                    plan.highlight
                      ? "border-2 border-brand-blue shadow-feature"
                      : "border border-border shadow-card"
                  } bg-white`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-brand-blue text-white border-0 px-4 font-semibold">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pt-8 pb-4">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-brand-blue font-display">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2 text-sm">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <CTAButton
                      ocid={`pricing.plan_${i + 1}.button`}
                      variant={plan.highlight ? "primary" : "outline"}
                      className="w-full justify-center"
                    >
                      {plan.cta} <ChevronRight className="w-4 h-4" />
                    </CTAButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-brand-green-light text-brand-green border-0 font-semibold">
              Real Results
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Members Who Transformed Their Credit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thousands of people have rebuilt and boosted their credit scores
              using Credit Builder IQ.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <Card className="h-full border border-border shadow-card bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {t.avatar}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">
                            {t.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t.location}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-brand-green-light text-brand-green border-0 font-bold text-sm">
                        {t.score}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-green py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Building Better Credit Today
          </h2>
          <p className="text-lg text-white/85 mb-8">
            Join 500,000+ members improving their credit scores. Start with just
            $1 — cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta_banner.start_button"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-bold rounded-full px-10 py-4 text-base hover:bg-brand-blue-light transition-colors shadow-cta"
            >
              Get Started for $1 <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-4 text-white/70 text-sm">
            No long-term contract. Cancel anytime.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-brand-blue flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-bold text-white">
                  Credit Builder IQ
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Helping Americans build better credit scores and unlock
                financial freedom since 2019.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Reviews", "FAQs"].map((link) => (
                  <li key={link}>
                    <a
                      href={AFFILIATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Legal
              </h4>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={AFFILIATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              <strong className="text-white/60">Disclaimer:</strong> This
              website contains affiliate links. We may receive compensation when
              you click on links and make a purchase. Results vary by
              individual. Credit scores are affected by many factors and
              improvement is not guaranteed. The score improvement amounts shown
              are examples from actual members and are not typical results.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-xs text-white/40">
                © {new Date().getFullYear()}. Built with love using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/60 underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
