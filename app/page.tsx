"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "This platform has completely transformed our business operations. The intuitive interface and powerful features have saved us countless hours and significantly improved our team's productivity.",
    avatar: "/vercel.svg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateX",
    content: "After trying multiple solutions, this platform stands out with its exceptional support and continuous feature updates. It's become an indispensable tool for our team's workflow.",
    avatar: "/next.svg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, FutureLabs",
    content: "The implementation was seamless, and the impact was immediate. We've seen a 40% increase in efficiency since adopting this platform. The team loves working with it.",
    avatar: "/file.svg",
    rating: 4
  },
  {
    name: "David Kim",
    role: "Director of Engineering, NexGen",
    content: "The level of customization and the attention to detail is impressive. The support team is responsive and genuinely cares about our success with the platform.",
    avatar: "/globe.svg",
    rating: 5
  }
];

const features = [
  {
    title: "Lightning Fast",
    description: "Built with Next.js for optimal performance and speed.",
    icon: "⚡"
  },
  {
    title: "Fully Responsive",
    description: "Looks great on all devices, from mobile to desktop.",
    icon: "📱"
  },
  {
    title: "Modern UI",
    description: "Beautiful, clean design with dark mode support.",
    icon: "🎨"
  }
];

const faqs = [
  {
    question: "How do I get started?",
    answer: "Simply sign up for an account and follow our onboarding process to get started in minutes."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features."
  }
];

export default function Home() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [isYearly, setIsYearly] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const pricingPlans = [
    {
      name: "Starter",
      price: isYearly ? "8" : "10",
      billing: isYearly ? "per month, billed annually" : "per month",
      description: "Everything you need to get started",
      features: [
        "Up to 5 projects",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "API access"
      ],
      cta: "Get Started",
      featured: false
    },
    {
      name: "Professional",
      price: isYearly ? "24" : "30",
      billing: isYearly ? "per month, billed annually" : "per month",
      description: "For growing teams and businesses",
      features: [
        "Up to 20 projects",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "Tailored for your needs",
      description: "For large organizations with custom requirements",
      features: [
        "Unlimited projects",
        "1TB+ storage",
        "Advanced analytics",
        "24/7 dedicated support",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            🚀 Now in Beta
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Build Better Products
            <br />
            <span className="text-primary">Faster Than Ever</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The all-in-one platform for modern web development. Ship faster, scale easier, and create amazing user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Started Free</Button>
            <Button variant="outline" size="lg">View Demo</Button>
          </div>
          <div className="mt-12">
            <div className="relative h-64 bg-muted/50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Product Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Amazing Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to build and scale your next big idea.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium bg-muted px-3 py-1 rounded-full mb-4">Testimonials</span>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Trusted by forward-thinking companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Join thousands of satisfied users who have transformed their workflow with our platform.</p>
          </div>
          
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-1">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex -space-x-2">
                            <Avatar className="h-10 w-10 border-2 border-background">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-muted-foreground/20'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-foreground/90 italic">
                          &ldquo;{testimonial.content}&rdquo;
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-x-0 translate-y-0 left-auto right-auto" />
              <CarouselNext className="static translate-x-0 translate-y-0 left-auto right-auto" />
            </div>
          </Carousel>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['/vercel.svg', '/next.svg', '/file.svg', '/globe.svg'].map((logo, i) => (
              <div key={i} className="flex items-center justify-center p-4 bg-muted/30 rounded-lg">
                <div className="relative h-8 w-16">
                  <Image 
                    src={logo} 
                    alt={`Company ${i + 1}`}
                    fill
                    className="object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Scale up as your business grows.
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-4">
              <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                id="billing-toggle"
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <div className="relative">
                <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Yearly
                </span>
                {isYearly && (
                  <span className="absolute -top-5 -right-5 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    Save up to 20%
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className="relative">
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-medium px-4 py-1 rounded-full z-10">
                    Most Popular
                  </div>
                )}
                <Card 
                  className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${
                    plan.featured 
                      ? 'border-primary/30 shadow-lg shadow-primary/10 dark:shadow-primary/5' 
                      : 'border-border/50 hover:border-primary/20 hover:shadow-md'
                  }`}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight">
                        {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="ml-1 text-muted-foreground text-base font-normal">
                          {plan.billing}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 pt-0">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button 
                      size="lg" 
                      className={`w-full ${plan.featured ? 'bg-gradient-to-r from-primary to-primary/90 hover:opacity-90' : ''}`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Need something custom? <a href="#contact" className="text-primary hover:underline font-medium">Contact our sales team</a></p>
          </div>
        </div>
      </section>

      {/* Customization Demo */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Customize to Your Needs</h2>
            <p className="text-muted-foreground">Adjust the settings to see how our solution can work for you.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="slider">Performance</Label>
                <span className="text-sm text-muted-foreground">{sliderValue[0]}%</span>
              </div>
              <Slider
                id="slider"
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="theme">Theme</Label>
                <Tabs defaultValue="light" className="mt-2">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="light">Light</TabsTrigger>
                    <TabsTrigger value="dark">Dark</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div>
                <Label>Layout</Label>
                <Tabs defaultValue="grid" className="mt-2">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <div className="pt-4">
              <Progress value={sliderValue[0]} className="h-2" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our platform.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Have questions? We&apos;d love to hear from you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className="min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Documentation</a></li>
                <li><a href="#" className="hover:underline">Releases</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                <li><a href="#" className="hover:underline">GDPR</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.198 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
      </a>
    </div>
  </div>
</div>
</footer>
</div>
);
}
