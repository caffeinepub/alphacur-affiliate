import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Apple,
  CheckCircle2,
  ChevronRight,
  Clock,
  Heart,
  Menu,
  Package,
  Salad,
  SmartphoneIcon,
  Star,
  TrendingDown,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const AFFILIATE_URL =
  "https://www.nutrisystem.com/diet-plans/nutrisystem-program";
const LOGO_SRC = "/assets/images-019d42c8-6d97-708e-a058-297c6fd6e5db.png";

const stats = [
  { value: "50+", label: "Years of Proven Results" },
  { value: "11.6 lbs", label: "Avg Lost in First Month" },
  { value: "160+", label: "Menu Items to Choose" },
  { value: "4.5M+", label: "Customers Served" },
];

const steps = [
  {
    number: "01",
    icon: Salad,
    title: "Choose Your Plan",
    description:
      "Pick the program that fits your lifestyle — Basic, Uniquely Yours, or our premium Ultimate plan with fresh-frozen meals.",
  },
  {
    number: "02",
    icon: Package,
    title: "We Deliver Your Meals",
    description:
      "Your perfectly portioned, dietitian-designed breakfasts, lunches, dinners, and snacks arrive at your door. No cooking required.",
  },
  {
    number: "03",
    icon: TrendingDown,
    title: "Lose Weight & Feel Great",
    description:
      "Follow the plan, track progress with the free NuMi app, and watch the pounds come off — week after week.",
  },
];

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "per day",
    description: "Everything you need to start your weight loss journey",
    features: [
      "Breakfasts, lunches & dinners delivered",
      "1 week FREE on your first order",
      "Free NuMi tracking app",
      "Unlimited counselor support",
      "160+ menu options",
    ],
    cta: "Start Basic Plan",
    highlight: false,
    badge: null,
  },
  {
    name: "Uniquely Yours",
    price: "$12.99",
    period: "per day",
    description: "Maximum flexibility with full menu access",
    features: [
      "Full menu access (160+ items)",
      "Flex meals for dining out",
      "1 week FREE on first order",
      "Free NuMi app + premium features",
      "Dietitian counseling sessions",
      "Diabetes-friendly options",
    ],
    cta: "Choose Uniquely Yours",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Uniquely Yours Ultimate",
    price: "$14.99",
    period: "per day",
    description: "Premium fresh-frozen meals for the best results",
    features: [
      "Fresh-frozen premium meals",
      "Top-rated menu selections",
      "1 week FREE on first order",
      "Priority delivery",
      "Advanced NuMi features",
      "Dedicated health coach",
    ],
    cta: "Go Ultimate",
    highlight: false,
    badge: null,
  },
];

const whyFeatures = [
  {
    icon: Heart,
    title: "Dietitian-Designed Meals",
    description:
      "Every meal is crafted by registered dietitians to balance nutrition, taste, and portion control for optimal weight loss.",
  },
  {
    icon: SmartphoneIcon,
    title: "Free NuMi App Included",
    description:
      "Track your meals, log activity, set goals, and connect with a community of over 4 million members on the go.",
  },
  {
    icon: Apple,
    title: "Diabetes & Vegetarian Options",
    description:
      "We offer dedicated plans for people with diabetes and vegetarian preferences — at no extra cost.",
  },
  {
    icon: Clock,
    title: "No Counting Calories",
    description:
      "We do the math so you don't have to. Just follow the plan and enjoy meals without obsessing over numbers.",
  },
];

const testimonials = [
  {
    name: "Sandra L.",
    location: "Austin, TX",
    result: "Lost 28 lbs in 2 months",
    text: "I was skeptical, but Nutrisystem completely changed my life. The meals are actually delicious and I never felt deprived. My clothes fit again and I have so much more energy!",
    initials: "SL",
  },
  {
    name: "Mike T.",
    location: "Phoenix, AZ",
    result: "Lost 42 lbs in 4 months",
    text: "As a busy dad of three, I had no time to meal prep. Nutrisystem delivered everything I needed. Down 42 pounds and I kept every single one off. Best decision I ever made.",
    initials: "MT",
  },
  {
    name: "Deborah R.",
    location: "Charlotte, NC",
    result: "Lost 19 lbs in 6 weeks",
    text: "The Uniquely Yours plan gave me so much variety. I loved being able to flex meals on weekends with my family. Lost 19 pounds without ever feeling like I was on a diet!",
    initials: "DR",
  },
];

function AffiliateLink({
  children,
  className = "",
  ocid,
}: {
  children: React.ReactNode;
  className?: string;
  ocid: string;
}) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={ocid}
      className={className}
    >
      {children}
    </a>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-body">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <AffiliateLink ocid="header.logo.link">
            <img
              src={LOGO_SRC}
              alt="Nutrisystem"
              className="h-10 w-auto object-contain"
            />
          </AffiliateLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-gray">
            <a
              href="#how-it-works"
              className="hover:text-brand-green transition-colors"
              data-ocid="nav.how_it_works.link"
            >
              How It Works
            </a>
            <a
              href="#plans"
              className="hover:text-brand-green transition-colors"
              data-ocid="nav.plans.link"
            >
              Plans
            </a>
            <a
              href="#reviews"
              className="hover:text-brand-green transition-colors"
              data-ocid="nav.reviews.link"
            >
              Reviews
            </a>
          </nav>

          {/* CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <AffiliateLink
              ocid="header.get_started.button"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-green hover:bg-brand-green-dark text-white font-semibold rounded-full px-6 py-2.5 text-sm transition-colors shadow-cta"
            >
              Get Started <ChevronRight className="w-4 h-4" />
            </AffiliateLink>
            <button
              type="button"
              className="md:hidden p-2 text-brand-gray hover:text-brand-green"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              data-ocid="header.mobile_menu.toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu — onClick on nav closes on any link click */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-border"
            >
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: nav close on link click is intentional */}
              <nav
                className="flex flex-col px-6 py-4 gap-4 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a
                  href="#how-it-works"
                  className="text-brand-gray hover:text-brand-green transition-colors"
                  data-ocid="nav.mobile.how_it_works.link"
                >
                  How It Works
                </a>
                <a
                  href="#plans"
                  className="text-brand-gray hover:text-brand-green transition-colors"
                  data-ocid="nav.mobile.plans.link"
                >
                  Plans
                </a>
                <a
                  href="#reviews"
                  className="text-brand-gray hover:text-brand-green transition-colors"
                  data-ocid="nav.mobile.reviews.link"
                >
                  Reviews
                </a>
                <AffiliateLink
                  ocid="nav.mobile.get_started.button"
                  className="inline-flex items-center justify-center gap-1.5 bg-brand-green text-white font-semibold rounded-full px-6 py-2.5 text-sm"
                >
                  Get Started <ChevronRight className="w-4 h-4" />
                </AffiliateLink>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── Hero Section ── */}
        <section className="bg-white pt-14 pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              {/* Logo — large, prominent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55 }}
                className="mb-8"
              >
                <img
                  src={LOGO_SRC}
                  alt="Nutrisystem"
                  className="h-20 sm:h-24 w-auto object-contain mx-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-3xl"
              >
                <Badge className="mb-5 bg-brand-green-light text-brand-green border-0 font-semibold px-4 py-1.5 text-sm">
                  America&apos;s #1 Meal Delivery Weight Loss Program
                </Badge>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] tracking-tight mb-5">
                  Lose Weight the{" "}
                  <span className="text-brand-green">Delicious Way</span>
                </h1>

                <p className="text-lg sm:text-xl text-brand-gray leading-relaxed mb-8 max-w-2xl mx-auto">
                  Chef-crafted meal delivery straight to your door. No cooking,
                  no calorie counting — just real food and real results. Lose up
                  to 13 lbs in your first month.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <AffiliateLink
                    ocid="hero.start_plan.button"
                    className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-full px-10 py-4 text-base transition-colors shadow-cta"
                  >
                    Start My Plan <ChevronRight className="w-5 h-5" />
                  </AffiliateLink>
                  <a
                    href="#plans"
                    data-ocid="hero.see_plans.button"
                    className="inline-flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green-light font-bold rounded-full px-10 py-4 text-base transition-colors"
                  >
                    See Plans
                  </a>
                </div>

                {/* Star Rating Social Proof */}
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-brand-dark">
                    4.8/5
                  </span>
                  <span className="text-sm text-brand-gray">·</span>
                  <span className="text-sm text-brand-gray">
                    Over 30,000 verified reviews
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Stats / Trust Bar ── */}
        <section className="bg-muted border-y border-border py-10 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-brand-green font-display">
                    {stat.value}
                  </p>
                  <p className="text-sm text-brand-gray mt-1 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <Badge className="mb-4 bg-brand-green-light text-brand-green border-0 font-semibold">
                Simple Steps
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
                How Nutrisystem Works
              </h2>
              <p className="text-lg text-brand-gray max-w-xl mx-auto">
                Getting started is easy. We take care of the hard parts so you
                can focus on feeling your best.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  className="relative"
                >
                  <Card className="h-full border border-border shadow-card hover:shadow-feature transition-shadow duration-300 bg-white">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl font-extrabold text-brand-green-light font-display select-none">
                          {step.number}
                        </span>
                        <div className="w-11 h-11 rounded-2xl bg-brand-green-light flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-brand-green" />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold text-brand-dark">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-brand-gray leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Plans Section ── */}
        <section id="plans" className="bg-muted py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <Badge className="mb-4 bg-brand-green-light text-brand-green border-0 font-semibold">
                Pricing Plans
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-brand-gray max-w-xl mx-auto">
                Every plan includes free shipping and a 14-day money-back
                guarantee. Start losing weight today.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  data-ocid={`plans.plan.${i + 1}`}
                >
                  <Card
                    className={`h-full flex flex-col relative bg-white ${
                      plan.highlight
                        ? "border-2 border-brand-green shadow-feature"
                        : "border border-border shadow-card"
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <Badge className="bg-brand-green text-white border-0 px-4 py-1 font-bold text-xs">
                          {plan.badge}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="pt-8 pb-4">
                      <CardTitle className="text-xl font-bold text-brand-dark">
                        {plan.name}
                      </CardTitle>
                      <div className="mt-2">
                        <span className="text-4xl font-extrabold text-brand-green font-display">
                          {plan.price}
                        </span>
                        <span className="text-brand-gray ml-2 text-sm">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-sm text-brand-gray mt-2">
                        {plan.description}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-3 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                            <span className="text-brand-dark">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <AffiliateLink
                        ocid={`plans.plan_${i + 1}.button`}
                        className={`inline-flex items-center justify-center gap-2 font-bold rounded-full px-6 py-3 text-sm transition-colors w-full ${
                          plan.highlight
                            ? "bg-brand-green hover:bg-brand-green-dark text-white shadow-cta"
                            : "border-2 border-brand-green text-brand-green hover:bg-brand-green-light"
                        }`}
                      >
                        {plan.cta} <ChevronRight className="w-4 h-4" />
                      </AffiliateLink>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Nutrisystem ── */}
        <section className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <Badge className="mb-4 bg-brand-green-light text-brand-green border-0 font-semibold">
                Why We&apos;re Different
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
                The Nutrisystem Advantage
              </h2>
              <p className="text-lg text-brand-gray max-w-xl mx-auto">
                Backed by science, built around real life. Here&apos;s why
                millions choose Nutrisystem.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="h-full border border-border shadow-card hover:shadow-feature transition-shadow duration-300 bg-white">
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 rounded-2xl bg-brand-green-light flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-brand-green" />
                      </div>
                      <CardTitle className="text-base font-bold text-brand-dark leading-snug">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-brand-gray leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section id="reviews" className="bg-muted py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <Badge className="mb-4 bg-brand-green-light text-brand-green border-0 font-semibold">
                Real Member Stories
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
                Results That Speak for Themselves
              </h2>
              <p className="text-lg text-brand-gray max-w-xl mx-auto">
                Over 4.5 million customers have transformed their lives with
                Nutrisystem. Here are a few of their stories.
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
                      <p className="text-sm text-brand-gray leading-relaxed mb-6 italic">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">
                              {t.initials}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-brand-dark">
                              {t.name}
                            </p>
                            <p className="text-xs text-brand-gray">
                              {t.location}
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-brand-green-light text-brand-green border-0 font-bold text-xs whitespace-nowrap ml-2">
                          {t.result}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA Banner ── */}
        <section className="bg-gradient-to-br from-brand-green to-brand-green-dark py-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Start Your Weight Loss Journey Today
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
              Join 4.5 million members. Get chef-crafted meals delivered, lose
              weight without the guesswork, and feel like yourself again.
            </p>
            <AffiliateLink
              ocid="cta_banner.start_button"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-green font-bold rounded-full px-12 py-4 text-base hover:bg-brand-green-light transition-colors shadow-cta"
            >
              Get My Plan Now <ChevronRight className="w-5 h-5" />
            </AffiliateLink>
            <p className="mt-5 text-white/70 text-sm">
              14-Day Money-Back Guarantee · Free Shipping · No Long-Term
              Contract
            </p>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-brand-dark py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <AffiliateLink ocid="footer.logo.link">
                <img
                  src={LOGO_SRC}
                  alt="Nutrisystem"
                  className="h-10 w-auto object-contain mb-4 brightness-0 invert"
                />
              </AffiliateLink>
              <p className="text-sm text-white/55 leading-relaxed">
                America&apos;s leading meal delivery weight loss program.
                Helping people eat well, lose weight, and live better since
                1972.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Plans & Pricing", href: "#plans" },
                  { label: "Member Reviews", href: "#reviews" },
                  { label: "Start Today", href: AFFILIATE_URL },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white/55 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
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
                        className="text-white/55 hover:text-white text-sm transition-colors"
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
              <strong className="text-white/60">Affiliate Disclaimer:</strong>{" "}
              This website contains affiliate links. We may receive compensation
              when you click on links and make a purchase. Results vary by
              individual — the weight loss results shown are not typical.
              Average weight loss in first month based on members following the
              Nutrisystem program. Always consult a healthcare professional
              before starting any weight loss program.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <p className="text-xs text-white/40">
                © {new Date().getFullYear()}. Built with ❤️ using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
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
