import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronDown, Menu, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const AFFILIATE_URL =
  "https://www.nutrisystem.com/diet-plans/nutrisystem-program";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img
            src="/assets/uploads/images-1.png"
            alt="Nutrisystem"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["How It Works", "Benefits", "Reviews", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              data-ocid={`nav.${item.toLowerCase().replace(/\s+/g, "-")}.link`}
              className="text-sm font-semibold text-gray-600 hover:text-[#2F8F57] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            data-ocid="header.get_started.button"
            className="bg-[#2F8F57] hover:bg-[#267a4a] text-white font-bold px-6 py-2 rounded-full text-sm"
            onClick={() => window.open(AFFILIATE_URL, "_blank")}
          >
            Get Started Today
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.mobile_menu.toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {["How It Works", "Benefits", "Reviews", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-semibold text-gray-700 hover:text-[#2F8F57]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button
                className="bg-[#2F8F57] hover:bg-[#267a4a] text-white font-bold rounded-full w-full"
                onClick={() => {
                  window.open(AFFILIATE_URL, "_blank");
                  setMenuOpen(false);
                }}
              >
                Get Started Today
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
    <section className="bg-white py-16 md:py-24" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Logo + meal image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <img
              src="/assets/uploads/images-1.png"
              alt="Nutrisystem"
              className="w-72 object-contain"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/nutrisystem-hero-meal.dim_600x500.jpg"
                alt="Healthy Nutrisystem Meal"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs font-semibold text-[#2F8F57]">
                  ✨ Real meals. Real results.
                </p>
                <p className="text-xs text-gray-500">
                  Over 150+ chef-crafted menu items
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Headline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-[#2F8F57] text-xs font-bold px-4 py-2 rounded-full w-fit">
              🏆 #1 Doctor-Recommended Weight Loss Program
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight">
              Lose Up to <span className="text-[#2F8F57]">13 lbs</span> in Your
              First Month*
            </h1>
            <p className="text-lg text-[#4B4F55] leading-relaxed">
              Get delicious meals delivered right to your door with
              Nutrisystem's proven weight-loss program. No counting calories —
              just eat, enjoy, and lose weight with expert guidance every step
              of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                data-ocid="hero.start_journey.button"
                size="lg"
                className="bg-[#2F8F57] hover:bg-[#267a4a] text-white font-extrabold px-8 py-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open(AFFILIATE_URL, "_blank")}
              >
                START MY WEIGHT LOSS JOURNEY →
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-[#2F8F57]">50%</p>
                <p className="text-xs text-[#7A8088]">Off Today</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-extrabold text-[#2F8F57]">1M+</p>
                <p className="text-xs text-[#7A8088]">Success Stories</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-extrabold text-[#2F8F57]">50yr</p>
                <p className="text-xs text-[#7A8088]">of Science</p>
              </div>
            </div>
            <p className="text-xs text-[#7A8088]">
              *Results not typical. Individual results may vary.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyItWorks() {
  const features = [
    {
      icon: "🍽️",
      title: "Chef-Crafted Meals",
      desc: "Over 150+ delicious, portion-controlled meals designed by culinary experts and nutritionists so you never feel deprived.",
    },
    {
      icon: "⏱️",
      title: "No Meal Prep Needed",
      desc: "Save hours every week. Your meals arrive ready to heat and eat — perfect for busy families and professionals.",
    },
    {
      icon: "🚚",
      title: "Free Delivery",
      desc: "Everything ships free right to your door. No grocery trips, no meal planning stress — just open, heat, and eat.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-[#2F8F57] uppercase tracking-widest mb-3">
            The Science Behind It
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] uppercase tracking-tight">
            WHY NUTRISYSTEM WORKS
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-2">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="text-5xl mb-5">{f.icon}</div>
                  <h3 className="text-lg font-extrabold text-[#111111] mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#4B4F55] leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoodStrip() {
  return (
    <div className="w-full overflow-hidden" style={{ maxHeight: 320 }}>
      <img
        src="/assets/generated/nutrisystem-food-strip.dim_1200x400.jpg"
        alt="Nutrisystem meal variety"
        className="w-full object-cover"
        style={{ height: 320 }}
      />
    </div>
  );
}

function MillionBanner() {
  return (
    <section className="bg-[#2F8F57] py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-extrabold text-2xl md:text-3xl leading-snug"
        >
          Join Over{" "}
          <span className="underline decoration-white/50">
            1 MILLION People
          </span>{" "}
          Who Lost Weight With Nutrisystem
        </motion.p>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "I lost 22 lbs in 2 months! The meals actually taste amazing and I never felt hungry. This is the only diet plan that's ever worked for me.",
      stars: 5,
    },
    {
      name: "James R.",
      text: "Lost 35 lbs over 4 months. The convenience is unbeatable — everything delivered to my door and I just had to follow the plan. 10/10 recommend!",
      stars: 5,
      featured: true,
    },
    {
      name: "Lisa T.",
      text: "After trying countless programs, Nutrisystem finally worked for me. Down 18 lbs and feeling healthier than I have in years!",
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-[#2F8F57] uppercase tracking-widest mb-3">
            Verified Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] uppercase tracking-tight">
            REAL RESULTS, REAL PEOPLE
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`reviews.item.${i + 1}`}
            >
              <Card
                className={`h-full rounded-2xl ${
                  r.featured
                    ? "border-2 border-[#2F8F57] shadow-xl"
                    : "border border-gray-200 shadow-sm"
                }`}
              >
                <CardContent className="p-6">
                  {r.featured && (
                    <div className="bg-[#2F8F57] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                      ⭐ Most Helpful Review
                    </div>
                  )}
                  <div className="flex mb-3">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star
                        key={`star-${r.name}-${j}`}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-[#4B4F55] text-sm leading-relaxed mb-4">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2F8F57]/10 flex items-center justify-center">
                      <span className="text-[#2F8F57] font-bold text-sm">
                        {r.name[0]}
                      </span>
                    </div>
                    <p className="font-bold text-sm text-[#111111]">{r.name}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    "Portion-controlled meals designed by nutritionists",
    "150+ delicious menu items to choose from",
    "No calorie counting or carb tracking required",
    "Personalized meal plans for your goals",
    "24/7 support from weight loss coaches",
    "Clinically proven to help you lose weight",
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-[#2F8F57] uppercase tracking-widest mb-3">
            Everything You Get
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] uppercase tracking-tight">
            BENEFITS AT A GLANCE
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100"
              data-ocid={`benefits.item.${i + 1}`}
            >
              <div className="w-6 h-6 rounded-full bg-[#2F8F57] flex-shrink-0 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm font-semibold text-[#111111]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      unit: "/day",
      desc: "Essential weight loss meals",
      features: [
        "Breakfast, lunch & dinner",
        "80+ menu items",
        "Free shipping",
        "Basic support",
      ],
      featured: false,
    },
    {
      name: "Core",
      price: "$12.74",
      unit: "/day",
      desc: "Most popular program",
      features: [
        "All Basic features",
        "130+ menu items",
        "Free NutriShakes",
        "Priority support",
        "Flex meals included",
      ],
      featured: true,
    },
    {
      name: "Uniquely Yours",
      price: "$14.29",
      unit: "/day",
      desc: "Maximum flexibility & results",
      features: [
        "All Core features",
        "160+ menu items",
        "Fresh frozen meals",
        "Dedicated coach",
        "Custom meal plans",
      ],
      featured: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-[#2F8F57] uppercase tracking-widest mb-3">
            Choose Your Plan
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] uppercase tracking-tight">
            FIND YOUR PERFECT PLAN
          </h2>
          <p className="mt-4 text-[#4B4F55]">
            All plans include free shipping and a 14-day money-back guarantee
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`plans.item.${i + 1}`}
            >
              <Card
                className={`relative h-full rounded-2xl overflow-hidden ${
                  plan.featured
                    ? "border-2 border-[#2F8F57] shadow-2xl"
                    : "border border-gray-200 shadow-sm"
                }`}
              >
                {plan.featured && (
                  <div className="bg-[#2F8F57] text-white text-xs font-extrabold text-center py-2 uppercase tracking-widest">
                    🔥 Most Popular — Save 50%
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-extrabold text-[#111111] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#7A8088] mb-4">{plan.desc}</p>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-[#2F8F57]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#7A8088] mb-1">
                      {plan.unit}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-[#4B4F55]"
                      >
                        <Check
                          className="w-4 h-4 text-[#2F8F57] flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    data-ocid={`plans.item.${i + 1}.button`}
                    className={`w-full rounded-full font-bold py-5 ${
                      plan.featured
                        ? "bg-[#2F8F57] hover:bg-[#267a4a] text-white shadow-lg"
                        : "bg-white border-2 border-[#2F8F57] text-[#2F8F57] hover:bg-green-50"
                    }`}
                    onClick={() => window.open(AFFILIATE_URL, "_blank")}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button
            data-ocid="plans.view_all.button"
            size="lg"
            className="bg-[#2F8F57] hover:bg-[#267a4a] text-white font-extrabold px-10 py-6 rounded-full text-base shadow-lg"
            onClick={() => window.open(AFFILIATE_URL, "_blank")}
          >
            VIEW ALL PLANS & SAVE 50% →
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "How does Nutrisystem work?",
      a: "Nutrisystem delivers pre-planned, portion-controlled meals directly to your door. You follow the meal plan and add in fresh grocery items called PowerFuels and SmartCarbs. The program is designed to keep you in a caloric deficit while feeling full and satisfied.",
    },
    {
      q: "How much weight can I expect to lose?",
      a: "On average, Nutrisystem members lose up to 13 lbs and 7 inches in the first month. Individual results vary based on starting weight and how closely you follow the program. Most people continue to lose 1-2 lbs per week after the first month.",
    },
    {
      q: "Are the meals healthy and nutritious?",
      a: "Yes! All Nutrisystem meals are developed by registered dietitians and are high in protein, fiber, and essential nutrients. Each meal is designed to keep you satisfied while maintaining the caloric deficit needed for weight loss.",
    },
    {
      q: "Can I pause or cancel my subscription?",
      a: "Absolutely. Nutrisystem offers flexible subscription options. You can pause, modify, or cancel your plan at any time. There's also a 14-day money-back guarantee so you can try the program risk-free.",
    },
    {
      q: "Is Nutrisystem suitable for vegetarians or those with dietary restrictions?",
      a: "Yes! Nutrisystem offers vegetarian-friendly meal plans and can accommodate many dietary preferences. They offer a wide variety of meals and you can filter by your food preferences and dietary needs when building your menu.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-[#2F8F57] uppercase tracking-widest mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </motion.div>
        <div className="space-y-3">
          {questions.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
              data-ocid={`faq.item.${i + 1}`}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                data-ocid={`faq.item.${i + 1}.toggle`}
              >
                <span className="font-semibold text-[#111111] pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2F8F57] flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-[#4B4F55] leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="bg-[#2B2B2B] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p className="text-2xl font-extrabold text-[#2F8F57] mb-8">
            🎉 Get 50% Off + Free Shipping Today!
          </p>
          <Button
            data-ocid="bottom_cta.start.button"
            size="lg"
            className="bg-[#2F8F57] hover:bg-[#267a4a] text-white font-extrabold px-12 py-7 rounded-full text-lg shadow-2xl hover:shadow-green-900/30 transition-all"
            onClick={() => window.open(AFFILIATE_URL, "_blank")}
          >
            CLAIM MY 50% DISCOUNT NOW →
          </Button>
          <p className="text-gray-400 text-sm mt-6">
            No commitment required. Cancel anytime. 14-day money-back guarantee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-[#2B2B2B] border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <img
              src="/assets/uploads/images-1.png"
              alt="Nutrisystem"
              className="h-10 w-auto object-contain brightness-0 invert mb-3"
            />
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              * This is an affiliate link. I may earn a commission if you
              purchase through my link at no extra cost to you. Results may
              vary.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-4">
              {["How It Works", "Benefits", "Reviews", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                  data-ocid={`footer.${link.toLowerCase().replace(/\s+/g, "-")}.link`}
                >
                  {link}
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              © {year}.{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                Built with love using caffeine.ai
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
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <WhyItWorks />
        <FoodStrip />
        <MillionBanner />
        <Testimonials />
        <Benefits />
        <Plans />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
