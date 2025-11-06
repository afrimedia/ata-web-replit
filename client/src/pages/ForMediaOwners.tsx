import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Brain, TrendingUp, Globe2, Plug, RefreshCw, Coins } from "lucide-react";

export default function ForMediaOwners() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-neon/5 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Turn Every Screen into a Revenue Stream
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Monetize your digital screens effortlessly by plugging into ATA's automated ad network. Our platform fills idle ad slots with paid content from advertisers across Africa.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Benefits</h2>
          <p className="text-lg text-muted-foreground">Why media owners choose ATA</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: DollarSign,
              title: "Instant Monetization",
              description: "Generate income from every unused second of screen time."
            },
            {
              icon: Brain,
              title: "Automated Scheduling",
              description: "ATA's cloud player handles ad rotation and playback management."
            },
            {
              icon: TrendingUp,
              title: "Real-Time Earnings",
              description: "Track revenue, playback status, and uptime in one dashboard."
            },
            {
              icon: Globe2,
              title: "Remote Management",
              description: "Control your screens from anywhere — update, reboot, or monitor content easily."
            }
          ].map((benefit, index) => (
            <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-benefit-${index + 1}`}>
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to start earning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Plug,
                number: "01",
                title: "Connect",
                description: "Install the ATA Player App on your media player or smart TV."
              },
              {
                icon: RefreshCw,
                number: "02",
                title: "Sync",
                description: "Your screen joins our network and appears in the marketplace."
              },
              {
                icon: Coins,
                number: "03",
                title: "Earn",
                description: "Ads from verified brands automatically start playing — and you get paid."
              }
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden hover-elevate transition-all" data-testid={`card-step-${index + 1}`}>
                <CardHeader>
                  <div className="text-6xl font-heading font-bold text-neon/10 mb-4">{step.number}</div>
                  <step.icon className="w-12 h-12 text-neon mb-4" />
                  <CardTitle className="text-xl font-heading">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neon/10 via-primary/5 to-neon/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Join Africa's fastest-growing digital screen network
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start earning from your screens today. No setup fees, no commitments.
          </p>
          <Button size="lg" asChild data-testid="button-register-screen">
            <Link href="/contact">Register Your Screen</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
