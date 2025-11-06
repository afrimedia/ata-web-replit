import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Cog,
  Globe,
  BarChart,
  Target,
  Clock,
  TrendingUp,
} from "lucide-react";
import heroImage from "@assets/generated_images/African_cityscape_night_billboards_1f991712.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-white via-primary to-neon bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Revolutionizing Outdoor Advertising in Africa
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            ATA is a next-generation Digital Out-of-Home platform designed to
            make outdoor advertising accessible, automated, and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8"
              asChild
              data-testid="button-start-advertising"
            >
              <Link href="/contact">Start Advertising</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 backdrop-blur-sm bg-background/10"
              asChild
              data-testid="button-join-screen-owner"
            >
              <Link href="/media-owners">Join as a Screen Owner</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to launch your campaign
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              number: "01",
              title: "Discover & Target",
              description:
                "Find digital screens across cities that match your audience and campaign goals.",
            },
            {
              icon: Clock,
              number: "02",
              title: "Bid & Schedule",
              description:
                "Choose your budget and preferred schedule — ATA's intelligent RTB engine allocates your ads efficiently.",
            },
            {
              icon: TrendingUp,
              number: "03",
              title: "Analyze & Optimize",
              description:
                "View live campaign performance and optimize in real-time for better results.",
            },
          ].map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover-elevate transition-all"
              data-testid={`card-step-${index + 1}`}
            >
              <CardContent className="p-8">
                <div className="text-6xl font-heading font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <step.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild data-testid="button-get-started-campaign">
            <Link href="/contact">
              Get started with your first campaign today
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Why Choose ATA
            </h2>
            <p className="text-lg text-muted-foreground">
              The future of outdoor advertising starts here
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Affordable",
                description: "Buy ad time — not entire screens.",
              },
              {
                icon: Cog,
                title: "Automated",
                description:
                  "Real-Time Bidding ensures efficient allocation and spending.",
              },
              {
                icon: Globe,
                title: "Connected",
                description:
                  "A growing network of verified digital screens across Africa.",
              },
              {
                icon: BarChart,
                title: "Transparent",
                description:
                  "Real-time reports and playback verification for every ad.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover-elevate transition-all"
                data-testid={`card-feature-${index + 1}`}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Trusted By
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're working with leading media owners and advertisers transforming
            outdoor advertising across Africa.
          </p>
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-card rounded-lg border">
            <span className="text-sm font-medium text-muted-foreground">
              Now Live in
            </span>
            <div className="flex gap-4 text-sm font-semibold">
              <span className="text-primary">Nairobi</span>
              <span className="text-primary">Mombasa</span>
              <span className="text-primary">Kampala</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-neon/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Ready to go live?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your first campaign in minutes or connect your screen today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-launch-dashboard">
              <a href="https://web.ata.ke/auth/login" target="_blank" rel="noopener noreferrer">Launch Dashboard</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              data-testid="button-join-network"
            >
              <Link href="/media-owners">Join Network</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
