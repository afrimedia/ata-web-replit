import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, BarChart, Handshake } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-background via-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Empowering Africa's Digital Advertising Future
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            AdvaTech Africa (ATA) is a technology company reshaping outdoor advertising through automation and accessibility. We believe in giving every brand — from startups to corporates — the power to go digital outdoors without barriers.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="hover-elevate transition-all">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To make outdoor advertising accessible, automated, and affordable across Africa.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4 text-neon">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A connected digital ecosystem where every brand and every screen can participate in Africa's advertising revolution.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Core Values</h2>
          <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "We're constantly reimagining what's possible."
            },
            {
              icon: Users,
              title: "Accessibility",
              description: "Every brand deserves visibility."
            },
            {
              icon: BarChart,
              title: "Transparency",
              description: "Data-driven, open, and fair."
            },
            {
              icon: Handshake,
              title: "Collaboration",
              description: "We grow through shared networks and partnerships."
            }
          ].map((value, index) => (
            <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-value-${index + 1}`}>
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground mb-12">The people behind the platform</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="hover-elevate transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-neon flex items-center justify-center text-4xl font-heading font-bold text-white flex-shrink-0">
                  CB
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-heading font-bold mb-2">Caleb Binyenya</h3>
                  <p className="text-primary font-medium mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground">
                    Tech entrepreneur passionate about automation, digital media, and Africa's next wave of advertising innovation. Leading ATA's mission to democratize outdoor advertising across the continent.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
