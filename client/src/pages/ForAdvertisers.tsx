import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Target, Zap, BarChart3, ShoppingBag, Rocket, Megaphone, Heart, Check } from "lucide-react";

export default function ForAdvertisers() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/10 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Smarter, Faster, and More Affordable Outdoor Advertising
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Traditional billboard advertising is expensive and inflexible. ATA changes that. We give you access to hundreds of digital screens across Africa — where you only pay for the exposure you need.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground">Everything you need to run successful campaigns</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: DollarSign,
              title: "Smart Budgeting",
              description: "Set your budget, and ATA's Real-Time Bidding (RTB) system automatically allocates ad time across screens that fit your target.",
              features: ["Automated budget optimization", "Pay only for impressions", "Flexible spending limits"]
            },
            {
              icon: Target,
              title: "Precise Targeting",
              description: "Select by city, neighborhood, audience type, or time of day — and we'll match your ads to the right screens.",
              features: ["Location-based targeting", "Audience demographics", "Time-of-day scheduling"]
            },
            {
              icon: Zap,
              title: "Dynamic Scheduling",
              description: "Launch, pause, or update your creatives in real-time without extra cost.",
              features: ["Instant creative updates", "Real-time control", "No additional fees"]
            },
            {
              icon: BarChart3,
              title: "Analytics Dashboard",
              description: "Track impressions, screen locations, playback verification, and audience exposure.",
              features: ["Real-time reporting", "Playback verification", "Performance metrics"]
            }
          ].map((feature, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-feature-${index + 1}`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Use Cases</h2>
            <p className="text-lg text-muted-foreground">Perfect for businesses of all sizes</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShoppingBag,
                title: "Retail Offers",
                description: "Promote retail offers and events to drive foot traffic."
              },
              {
                icon: Rocket,
                title: "Product Launches",
                description: "Run product launches across multiple cities simultaneously."
              },
              {
                icon: Megaphone,
                title: "Brand Awareness",
                description: "Manage brand awareness campaigns at scale."
              },
              {
                icon: Heart,
                title: "Public Messages",
                description: "Deploy public or NGO messages efficiently and affordably."
              }
            ].map((useCase, index) => (
              <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-use-case-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-neon/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Your next campaign deserves better visibility
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of advertisers already using ATA to reach their audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-start-advertising">
              <Link href="/contact">Start Advertising</Link>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-book-demo">
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
