import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Apple,
  CheckCircle,
  ChevronRight,
  Medal,
  Menu,
  Star,
  Truck,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const AFFILIATE_URL =
  "https://www.nutrisystem.com/diet-plans/nutrisystem-program";
const HERO_IMAGE = "/assets/images-019d5258-ec3c-703b-b6e5-fbaf0f3e6304.png";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#plans", label: "Plans" },
  { href: "#benefits", label: "Benefits" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-header" : ""
      }`}
      data-ocid="header.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src={HERO_IMAGE}
              alt="Nutrisystem"
              className="h-10 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="hover:text-foreground transition-colors cursor-pointer"
                data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "-")}.link`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden md:inline-flex bg-primary hover:bg-brand-green-dark text-white shadow-cta font-semibold"
              data-ocid="header.cta.button"
            >
              <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                Start My Weight Loss
              </a>
            </Button>
            <button
              type="button"
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="header.menu.toggle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  className="text-sm font-medium text-foreground text-left py-2 border-b border-border last:border-0"
                  onClick={() => scrollTo(link.href)}
                >
                  {link.label}
                </button>
              ))}
              <Button
                asChild
                className="bg-primary hover:bg-brand-green-dark text-white w-full mt-2 font-semibold"
                data-ocid="mobile.cta.button"
              >
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start My Weight Loss
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative mt-16 bg-white overflow-hidden"
      data-ocid="hero.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge className="mb-5 bg-brand-green-light text-primary border-primary/20 text-xs font-semibold px-3 py-1">
              🌿 America&apos;s #1 Doctor-Recommended Weight Loss Program
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              Lose the Weight.{" "}
              <span className="text-primary italic">Keep Your Life.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nutrisystem delivers chef-crafted meals right to your door — no
              counting calories, no guessing. Just real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-brand-green-dark text-white shadow-cta text-base font-bold px-8"
                data-ocid="hero.primary.button"
              >
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get My Plan <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-brand-green-light font-semibold"
                data-ocid="hero.secondary.button"
                onClick={() => {
                  document
                    .querySelector("#how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See How It Works
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Clinically proven results",
                "Meals delivered to your door",
                "No cooking required",
                "Free shipping nationwide",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl overflow-hidden bg-brand-green-light p-8 border border-primary/10 shadow-feature">
                <img
                  src={HERO_IMAGE}
                  alt="Nutrisystem — America's #1 Weight Loss Program"
                  className="w-full h-auto object-contain"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-feature px-4 py-3 border border-border"
              >
                <p className="text-xs text-muted-foreground">
                  Avg. first month
                </p>
                <p className="font-display text-xl font-bold text-primary">
                  -13 lbs & 7 in
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-feature px-4 py-3 border border-border"
              >
                <p className="text-xs text-muted-foreground">Happy customers</p>
                <p className="font-display text-xl font-bold text-primary">
                  2M+
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { icon: Medal, label: "Doctor Recommended" },
    { icon: CheckCircle, label: "Lose up to 13 lbs Month 1" },
    { icon: Users, label: "2M+ Success Stories" },
    { icon: Truck, label: "Free Nationwide Shipping" },
  ];

  return (
    <section className="bg-primary py-5" data-ocid="trustbar.section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2 justify-center"
            >
              <stat.icon className="w-5 h-5 text-white/80 shrink-0" />
              <span className="text-white font-semibold text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Plan",
      desc: "Pick the Nutrisystem plan that fits your lifestyle, goals, and budget. Customize your menu with 160+ chef-crafted options.",
    },
    {
      step: "02",
      title: "Get Meals Delivered",
      desc: "Your fully portioned, calorie-controlled meals ship directly to your door — ready to eat or quick to prepare.",
    },
    {
      step: "03",
      title: "Lose the Weight",
      desc: "Follow your plan with support from diet coaches and the Numi app. Most people lose up to 13 lbs in the first month.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-muted"
      data-ocid="howitworks.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            How Nutrisystem Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to a healthier, lighter you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-9 left-[22%] right-[22%] h-0.5 bg-primary/20" />
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              data-ocid={`howitworks.item.${i + 1}`}
              className="flex flex-col items-center text-center"
            >
              <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-white border-2 border-primary flex items-center justify-center mb-5 relative z-10 shadow-card">
                <span className="font-display font-bold text-xl text-primary">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-brand-green-dark text-white shadow-cta text-base font-bold px-10"
            data-ocid="howitworks.cta.button"
          >
            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
              Get Started Today <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "Basic",
    price: "$10.54",
    unit: "/day",
    desc: "Everything you need to get started",
    popular: false,
    features: [
      "Breakfast, lunch, dinner & snacks",
      "100+ menu options",
      "Free shipping",
      "Basic diet support",
      "Online tools & tracking",
    ],
  },
  {
    name: "Core",
    price: "$12.14",
    unit: "/day",
    desc: "Most popular choice for results",
    popular: false,
    features: [
      "Everything in Basic",
      "130+ menu choices",
      "Numi app access",
      "Dietitian support chat",
      "Flex meal guidance",
    ],
  },
  {
    name: "Uniquely Yours",
    price: "$13.57",
    unit: "/day",
    desc: "Ultimate flexibility & fresh-frozen meals",
    popular: true,
    features: [
      "Everything in Core",
      "160+ full menu access",
      "Fresh-frozen meals included",
      "Priority diet coaching",
      "Top flexibility & customization",
    ],
  },
];

function Plans() {
  return (
    <section id="plans" className="py-20 bg-white" data-ocid="plans.section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            All plans include free shipping and Nutrisystem&apos;s money-back
            guarantee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              data-ocid={`plans.item.${i + 1}`}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-white font-bold text-xs px-4 py-1 shadow-cta">
                    ⭐ Most Popular
                  </Badge>
                </div>
              )}
              <Card
                className={`h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-primary border-2 shadow-feature"
                    : "border-border shadow-card hover:shadow-feature hover:border-primary/40"
                }`}
              >
                <CardHeader
                  className={`pb-4 ${
                    plan.popular ? "bg-brand-green-light rounded-t-lg" : ""
                  }`}
                >
                  <CardTitle className="font-display text-xl text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.desc}</p>
                  <div className="flex items-end gap-1 mt-3">
                    <span
                      className={`font-display text-4xl font-bold ${
                        plan.popular ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm mb-1">
                      {plan.unit}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-4">
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full font-bold ${
                      plan.popular
                        ? "bg-primary hover:bg-brand-green-dark text-white shadow-cta"
                        : "bg-white border-2 border-primary text-primary hover:bg-brand-green-light"
                    }`}
                    data-ocid={`plans.item.${i + 1}.button`}
                  >
                    <a
                      href={AFFILIATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Choose {plan.name}{" "}
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    icon: Medal,
    title: "Clinically Proven Results",
    desc: "Lose up to 13 lbs & 7 inches in your first month — backed by clinical studies and endorsed by leading physicians.",
  },
  {
    icon: Apple,
    title: "160+ Chef-Crafted Meals",
    desc: "Enjoy restaurant-quality breakfasts, lunches, dinners, and snacks with no cooking required. Real food, real flavor.",
  },
  {
    icon: Truck,
    title: "Free Nationwide Shipping",
    desc: "Your meals are delivered straight to your front door, anywhere in the US. No store runs, no meal prep stress.",
  },
  {
    icon: Users,
    title: "Dedicated Diet Coaches",
    desc: "Get personalized support from trained diet coaches and the Numi app — your success team is with you every step.",
  },
];

function Benefits() {
  return (
    <section
      id="benefits"
      className="py-20 bg-muted"
      data-ocid="benefits.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Why Millions Choose Nutrisystem
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A complete, proven weight loss system that fits your life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`benefits.item.${i + 1}`}
              className="bg-white rounded-2xl border border-border p-6 shadow-card text-center hover:shadow-feature hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-brand-green-light flex items-center justify-center mb-4 mx-auto">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="text-center mt-10"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-brand-green-dark text-white shadow-cta font-bold px-10"
            data-ocid="benefits.cta.button"
          >
            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
              Start Losing Weight Today{" "}
              <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Sarah M.",
    city: "Texas",
    rating: 5,
    quote:
      "I lost 28 lbs in 2 months without feeling deprived. The meals are actually delicious! I can't believe how easy it's been — Nutrisystem changed my life.",
  },
  {
    name: "James R.",
    city: "Ohio",
    rating: 5,
    quote:
      "Nutrisystem made it so simple. I didn't have to think about food — just eat and lose weight. Down 35 lbs and my energy is through the roof!",
  },
  {
    name: "Linda K.",
    city: "Florida",
    rating: 5,
    quote:
      "Best investment I've made in my health. Down 40 lbs and feeling absolutely amazing! The diet coaches kept me motivated every single week.",
  },
];

function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-20 bg-white"
      data-ocid="testimonials.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Real People, Real Results
          </h2>
          <p className="text-muted-foreground text-lg">
            Join 2 million+ people who&apos;ve transformed their lives with
            Nutrisystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              data-ocid={`testimonials.item.${i + 1}`}
              className="bg-white rounded-2xl border border-border p-6 shadow-card flex flex-col hover:shadow-feature transition-all"
            >
              <div className="flex mb-4">
                {Array.from({ length: r.rating }, (_, j) => `star-${j}`).map(
                  (starKey) => (
                    <Star
                      key={starKey}
                      className="w-5 h-5 fill-brand-gold text-brand-gold"
                    />
                  ),
                )}
              </div>
              <p className="text-foreground text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">
                    {r.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {r.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "How does Nutrisystem work?",
    a: "Nutrisystem delivers fully portioned, calorie-controlled meals and snacks directly to your door. You simply eat the provided meals throughout the day, supplemented with grocery add-ins like fruits, veggies, and dairy. The structured plan takes the guesswork out of dieting so you can focus on losing weight.",
  },
  {
    q: "Are the meals tasty?",
    a: "Absolutely! Nutrisystem offers 160+ chef-crafted menu options including favorites like BBQ sauce seasoned chicken, chocolate fudge brownies, and loaded potato soup. Many customers say the food quality exceeded their expectations, making it much easier to stick with the plan.",
  },
  {
    q: "How fast will I lose weight?",
    a: "Most Nutrisystem customers lose up to 13 lbs and 7 inches in their first month. Individual results vary based on your starting weight, activity level, and adherence to the plan. Consistent followers typically continue losing 1-2 lbs per week after the first month.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your Nutrisystem subscription at any time before your next order is processed. Nutrisystem also offers a money-back guarantee on your first order, so you can try the program risk-free. Contact customer service for details on the cancellation policy.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted" data-ocid="faq.section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Nutrisystem
          </p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="space-y-3"
          data-ocid="faq.panel"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              data-ocid={`faq.item.${i + 1}`}
              className="border border-border rounded-xl px-5 bg-white shadow-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground py-4 hover:no-underline hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-24 bg-primary" data-ocid="ctabanner.section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <img
              src={HERO_IMAGE}
              alt="Nutrisystem"
              className="h-14 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p className="text-white/80 text-xl mb-2">
            Join millions who&apos;ve transformed their lives with Nutrisystem.
          </p>
          <p className="text-white/60 text-base mb-10 max-w-xl mx-auto">
            Chef-crafted meals. Free delivery. Real results. Start today and
            lose up to 13 lbs in your first month.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-brand-green-light font-bold text-lg px-12 py-6 shadow-feature"
            data-ocid="ctabanner.primary.button"
          >
            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
              Get Started Today <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <p className="text-white/50 text-sm mt-5">
            Free shipping &bull; Money-back guarantee &bull; No cooking required
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="bg-brand-dark text-white/70 py-10"
      data-ocid="footer.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="mb-4">
              <img
                src={HERO_IMAGE}
                alt="Nutrisystem"
                className="h-8 w-auto object-contain brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-xs max-w-sm leading-relaxed">
              <strong className="text-white/50">Affiliate Disclosure:</strong>{" "}
              This site contains affiliate links. We may earn a commission if
              you purchase through our links at no extra cost to you. All
              recommendations are independent and based on product quality.
            </p>
          </div>
          <div className="text-xs text-right space-y-2">
            <p>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
                data-ocid="footer.affiliate.link"
              >
                Visit Nutrisystem
              </a>
            </p>
            <p>
              &copy; {year}. Built with ❤️ using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Plans />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
