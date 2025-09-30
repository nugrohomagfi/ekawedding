"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";
import { Zap, Accessibility, MoonStar, Puzzle, Paintbrush, Search } from "lucide-react";

type Feature = { title: string; description: string; icon: LucideIcon };
const features: Feature[] = [
  { title: "Blazing fast", description: "Next.js + Edge optimized for speed.", icon: Zap },
  { title: "Accessible", description: "Built with a11y and best practices.", icon: Accessibility },
  { title: "Dark mode", description: "Looks great in light and dark.", icon: MoonStar },
  { title: "Type‑safe", description: "End‑to‑end TypeScript included.", icon: Puzzle },
  { title: "Beautiful UI", description: "shadcn/ui + Tailwind out of the box.", icon: Paintbrush },
  { title: "SEO ready", description: "Metadata + Open Graph defaults.", icon: Search },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "The clean UI and thoughtful details helped us ship our new product line in weeks, not months.",
    avatar: "/vercel.svg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "PM, InnovateX",
    content: "Remarkably simple, incredibly fast. Our team loves working with it.",
    avatar: "/next.svg",
    rating: 5,
  },
];

const faqs = [
  { question: "How do I get started?", answer: "Sign up and follow the quick start — you’ll be live in minutes." },
  { question: "Can I try it first?", answer: "Yes, there’s a free trial with full features." },
  { question: "Do you support teams?", answer: "Absolutely — roles, permissions, and shared workspaces are included." },
];

export default function Home() {
  const [isYearly, setIsYearly] = useState(true);

  const pricing = [
    {
      name: "Starter",
      price: isYearly ? 9 : 12,
      note: isYearly ? "per month, billed annually" : "per month",
      description: "For individuals and side projects.",
      features: ["5 projects", "10GB storage", "Community support"],
      cta: "Start free",
      featured: false,
    },
    {
      name: "Pro",
      price: isYearly ? 29 : 36,
      note: isYearly ? "per month, billed annually" : "per month",
      description: "For teams that move fast.",
      features: ["Unlimited projects", "100GB storage", "Priority support", "Team roles"],
      cta: "Get Pro",
      featured: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-[12px] bg-primary/10 text-primary">✦</span>
              <span className="text-sm font-semibold tracking-tight">YourBrand</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a className="hover:text-foreground" href="#features">Features</a>
              <a className="hover:text-foreground" href="#pricing">Pricing</a>
              <a className="hover:text-foreground" href="#faq">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="hidden md:inline-flex">Sign in</Button>
              <Button>Get started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[65rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">New release v2.0</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">Design smarter. Ship faster.</span>
            </h1>
            <p className="mt-4 text-balance text-lg text-muted-foreground md:text-xl">
              A modern Next.js starter with a clean, minimal aesthetic. Beautiful defaults, excellent UX, and zero clutter.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">Get started</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">View demo</Button>
            </div>
          </div>

          {/* Mock screenshot */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="relative rounded-[12px] border bg-background/60 p-2 shadow-sm backdrop-blur">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px]">
                <div className="absolute inset-0 bg-grid-small text-muted-foreground/10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[12px] ring-1 ring-black/5" />
            </div>
          </div>

          {/* Trusted logos */}
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {["Acme", "Globex", "Umbrella", "Soylent", "Initech"].map((n) => (
              <span key={n} className="text-xs text-muted-foreground">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}      {/* Features */}
      <section id="features" className="border-t bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need, nothing you don’t</h2>
            <p className="mt-3 text-muted-foreground">Opinionated defaults with room to grow.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Card
                key={i}
                className="group relative h-full border-muted/60 bg-background/60 transition-all hover:translate-y-[-2px] hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <f.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="text-2xl font-semibold md:text-3xl">Get up and running in three steps</h3>
            <p className="mt-2 text-muted-foreground">From zero to production in minutes.</p>
          </div>

          {/* Timeline on mobile, 3-column on desktop */}
          <div className="relative grid gap-6 md:grid-cols-3">
            {/* connector line for mobile */}
            <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-border md:hidden" />

            {["Install", "Customize", "Deploy"].map((step, idx) => (
              <Card key={idx} className="relative h-full border-muted/60 bg-background shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Numbered marker */}
                    <div className="relative">
                      <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-sm ring-1 ring-black/5 md:size-9">
                        {idx + 1}
                      </span>
                      {/* connector dot for mobile */}
                      <span className="absolute left-1/2 top-8 hidden h-6 -translate-x-1/2 border-l border-dashed border-border md:hidden" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold tracking-tight">{step}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {idx === 0 && "Create your project with a single command and sensible defaults."}
                        {idx === 1 && "Adjust styles, components, and content to match your brand."}
                        {idx === 2 && "Ship to your favorite platform with zero‑config deploys."}
                      </p>

                      {/* Contextual helper content */}
                      {idx === 0 && (
                        <div className="mt-4 rounded-lg border bg-muted/40 p-3 text-xs">
                          <div className="font-mono">
                            npx create-next-app@latest my-app
                          </div>
                          <div className="mt-2 font-mono text-muted-foreground">
                            cd my-app && pnpm add -D tailwindcss postcss autoprefixer
                          </div>
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="mt-4 rounded-lg border bg-muted/40 p-3 text-xs">
                          <div className="font-mono">pnpm dlx shadcn@latest init</div>
                          <div className="mt-2 font-mono text-muted-foreground">pnpm dlx shadcn@latest add button card badge</div>
                        </div>
                      )}
                      {idx === 2 && (
                        <div className="mt-4 rounded-lg border bg-muted/40 p-3 text-xs">
                          <div className="font-mono">git init && git add -A && git commit -m "init"</div>
                          <div className="mt-2 font-mono text-muted-foreground">vercel deploy —prod</div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="text-2xl font-semibold md:text-3xl">Loved by product teams</h3>
            <p className="mt-2 text-muted-foreground">Real feedback from people building real products.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-muted/60">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        className={`h-5 w-5 ${s < t.rating ? "opacity-100" : "opacity-20"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-foreground/90">“{t.content}”</blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-muted text-xs">{t.name.slice(0,1)}</span>
                    <div className="text-sm">
                      <div className="font-medium leading-none">{t.name}</div>
                      <div className="text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-muted/40">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h3 className="text-2xl font-semibold md:text-3xl">Simple, transparent pricing</h3>
            <p className="mt-2 text-muted-foreground">Scale as you grow. Cancel anytime.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pricing.map((plan) => (
              <Card key={plan.name} className={`flex flex-col ${plan.featured ? "border-primary/30 shadow-sm" : ""}`}>
                <CardHeader>
                  <div className="flex items-end justify-between">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-right">
                      <div className="text-4xl font-semibold">${plan.price}</div>
                      <div className="text-sm text-muted-foreground">{plan.note}</div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="mt-2 space-y-2">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.featured ? "default" : "outline"}>{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-sm text-muted-foreground">
            Need a custom plan? <a className="text-primary underline-offset-4 hover:underline" href="#contact">Contact sales</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-20">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold md:text-3xl">Frequently asked questions</h3>
            <p className="mt-2 text-muted-foreground">Quick answers to common questions.</p>
          </div>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
        <div className="container mx-auto max-w-5xl px-4 py-14">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-background/60 p-6 text-center shadow-sm backdrop-blur md:flex-row md:text-left">
            <div>
              <h4 className="text-xl font-semibold">Ready to build something great?</h4>
              <p className="text-muted-foreground">Start with the clean foundation and focus on your product.</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg">Get started</Button>
              <Button size="lg" variant="outline">Talk to sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[12px] bg-primary/10 text-primary">✦</span>
                <span className="text-sm font-semibold tracking-tight">YourBrand</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Clean foundations for modern web apps. Built with accessibility and performance in mind.
              </p>
            </div>

            {/* Product */}
            <div>
              <h5 className="text-sm font-semibold">Product</h5>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-foreground" href="#features">Features</a></li>
                <li><a className="hover:text-foreground" href="#pricing">Pricing</a></li>
                <li><a className="hover:text-foreground" href="#faq">FAQ</a></li>
                <li><a className="hover:text-foreground" href="#">Changelog</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h5 className="text-sm font-semibold">Resources</h5>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-foreground" href="#">Docs</a></li>
                <li><a className="hover:text-foreground" href="#">Guides</a></li>
                <li><a className="hover:text-foreground" href="#">Community</a></li>
                <li><a className="hover:text-foreground" href="#">Support</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold">Stay in the loop</h5>
              <p className="mt-3 text-sm text-muted-foreground">Get product updates and tips. No spam.</p>
              <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>

          <Separator className="my-10" />

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground">Twitter</a>
              <a href="#" className="hover:text-foreground">GitHub</a>
              <a href="#" className="hover:text-foreground">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
