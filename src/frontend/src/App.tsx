import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  Heart,
  Home,
  Lock,
  Phone,
  Shield,
  Star,
  TrendingDown,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const AFFILIATE_URL = "https://insurancesavenow.com/";
const LOGO_PATH =
  "/assets/img-20260401-wa0012-019d4927-2cd8-76a0-b23e-1bff092466a5.jpg";

function openAffiliate() {
  window.open(AFFILIATE_URL, "_blank", "noopener noreferrer");
}

const coverageTypes = [
  {
    icon: Car,
    title: "Auto Insurance",
    desc: "Compare rates from top auto insurers and save hundreds on your car insurance policy.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Home,
    title: "Home Insurance",
    desc: "Protect your home and belongings with the best homeowners insurance at the lowest price.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    desc: "Find affordable health coverage for you and your family from leading health insurers.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Shield,
    title: "Life Insurance",
    desc: "Secure your family's financial future with the right life insurance policy at the best rate.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    quote:
      "I saved $847 a year on my auto insurance by switching through this site. The comparison tool is incredibly easy to use \u2014 took me less than 2 minutes!",
  },
  {
    name: "James R.",
    location: "Orlando, FL",
    quote:
      "Found a home insurance policy $600 cheaper than what I was paying. The process was seamless and no spam calls afterward \u2014 exactly what they promised.",
  },
  {
    name: "Linda K.",
    location: "Chicago, IL",
    quote:
      "As a first-time homeowner I was clueless about insurance. This service compared 30+ options for me and I got an amazing rate. Highly recommend!",
  },
];

const steps = [
  {
    num: "1",
    title: "Enter Your Info",
    desc: "Fill in a quick 2-minute form about your coverage needs. No credit card required.",
  },
  {
    num: "2",
    title: "Compare Rates",
    desc: "Instantly see side-by-side quotes from 50+ top-rated insurance companies.",
  },
  {
    num: "3",
    title: "Choose & Save",
    desc: "Pick the best plan for your budget and start saving money today.",
  },
];

function FiveStars() {
  return (
    <div className="flex gap-1">
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      {/* Sticky Header */}
      <header
        data-ocid="header.panel"
        className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src={LOGO_PATH}
            alt="Insurance Save Now"
            className="h-12 w-auto object-contain"
          />
          <Button
            data-ocid="header.primary_button"
            onClick={openAffiliate}
            className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-5 py-2 rounded-full shadow-cta transition-all duration-200 text-sm"
          >
            Get My Free Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-accent text-accent-foreground mb-5 text-sm font-semibold px-4 py-1 rounded-full">
              \ud83c\udfc6 Trusted by Over 2 Million Americans
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-5">
              Save Big on Insurance &mdash;{" "}
              <span className="text-primary">Compare &amp; Save Today</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Stop overpaying for insurance. Compare quotes from 50+ top-rated
              insurers in under 2 minutes and find the best rates for auto,
              home, health, and life insurance.
            </p>
            <Button
              data-ocid="hero.primary_button"
              onClick={openAffiliate}
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground font-bold text-lg px-10 py-6 rounded-full shadow-cta transition-all duration-200 mb-8"
            >
              Get My Free Quote Now <ChevronRight className="ml-1 h-5 w-5" />
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-primary" /> SSL Secure
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" /> No Spam Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" /> 100% Free
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-primary py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, label: "Compare 50+ Insurers" },
              { icon: TrendingDown, label: "Save Up to 40%" },
              { icon: Clock, label: "Free in 2 Minutes" },
              { icon: CheckCircle, label: "No Obligation" },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-2 text-primary-foreground"
              >
                <Icon className="h-8 w-8 opacity-90" />
                <span className="font-semibold text-sm md:text-base">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              What Can You Save On?
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose your coverage type and find the best rates instantly.
            </p>
          </div>
          <div
            data-ocid="coverage.list"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coverageTypes.map((item, i) => (
              <motion.div
                key={item.title}
                data-ocid={`coverage.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="border border-border hover:shadow-feature transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className={`p-4 rounded-full ${item.bg}`}>
                      <item.icon className={`h-7 w-7 ${item.color}`} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">
                      {item.desc}
                    </p>
                    <Button
                      data-ocid={`coverage.secondary_button.${i + 1}`}
                      onClick={openAffiliate}
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full transition-all duration-200"
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to start saving.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-2xl shadow-cta">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Real People, Real Savings
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our customers are saying about the savings they&apos;ve
              found.
            </p>
          </div>
          <div
            data-ocid="testimonials.list"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                data-ocid={`testimonials.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="border border-border h-full shadow-card">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <FiveStars />
                    <p className="text-foreground text-sm leading-relaxed flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {t.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Phone className="h-12 w-12 mx-auto text-primary-foreground mb-5 opacity-90" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Save on Insurance?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join over 2 million Americans who have already found better rates.
              It&apos;s 100% free and takes under 2 minutes.
            </p>
            <Button
              data-ocid="cta.primary_button"
              onClick={openAffiliate}
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 font-bold text-lg px-12 py-6 rounded-full shadow-xl transition-all duration-200"
            >
              Start Saving Now <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <p className="mt-5 text-primary-foreground/60 text-sm">
              No credit card required &bull; No spam &bull; 100% free service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <img
              src={LOGO_PATH}
              alt="Insurance Save Now"
              className="h-10 w-auto object-contain"
            />
            <nav className="flex gap-6 text-sm text-muted-foreground">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Get a Quote
              </a>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </nav>
          </div>
          <div className="border-t border-border pt-6 space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Affiliate Disclosure:</strong> This site may receive
              compensation for referrals when you click links or purchase plans
              through our partner insurers. This compensation does not influence
              our recommendations or the rates shown.
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} InsuranceSaveNow.com. All rights
              reserved. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
