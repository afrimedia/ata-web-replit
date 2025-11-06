import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cloud, BarChart3, Shield, Boxes, Server } from "lucide-react";
import {
  SiCloudflare,
  SiDigitalocean,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

export default function Platform() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-background via-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            The Technology Powering Africa's Outdoor Ad Revolution
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Built on cutting-edge infrastructure to deliver reliable, scalable,
            and transparent advertising.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Real-Time Bidding Engine
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              ATA uses an RTB-inspired algorithm to dynamically match
              advertisers with available screen time. It ensures fair pricing,
              high fill rates, and maximum ROI for both sides.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Intelligent ad placement optimization
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Fair market pricing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Maximum screen utilization
                </span>
              </li>
            </ul>
          </div>
          <Card className="h-64 flex items-center justify-center bg-gradient-to-br from-primary/5 to-neon/5">
            <CardContent className="text-center">
              <Zap className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
              <p className="text-sm text-muted-foreground">
                RTB Algorithm Visualization
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <Card className="h-64 flex items-center justify-center bg-gradient-to-br from-neon/5 to-primary/5 md:order-1 order-2">
            <CardContent className="text-center">
              <Cloud className="w-24 h-24 text-neon mx-auto mb-4 opacity-50" />
              <p className="text-sm text-muted-foreground">
                Hybrid Cloud Architecture
              </p>
            </CardContent>
          </Card>
          <div className="md:order-2 order-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-neon/10 mb-6">
              <Cloud className="w-8 h-8 text-neon" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Smart Content Delivery
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our hybrid cloud architecture delivers ad content quickly and
              reliably, even in low-connectivity environments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-neon mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Offline caching for uninterrupted playback
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-neon mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Secure cloud sync</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-neon mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Remote updates powered
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-6">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">
              Real-Time Analytics
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Monitor ad performance, playback verification, and audience
              metrics in real time. Transparency and trust are built into every
              impression.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Live playback verification
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Detailed impression tracking
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Audience engagement metrics
                </span>
              </li>
            </ul>
          </div>
          <Card className="h-64 flex items-center justify-center bg-gradient-to-br from-primary/5 to-neon/5">
            <CardContent className="text-center">
              <BarChart3 className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
              <p className="text-sm text-muted-foreground">
                Analytics Dashboard
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
