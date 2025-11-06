import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="w-full max-w-md px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back to ATA</h1>
          <p className="text-muted-foreground">
            Access your dashboard to manage campaigns and screens
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Choose your account type to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="advertiser" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="advertiser" data-testid="tab-advertiser">Advertiser</TabsTrigger>
                <TabsTrigger value="media-owner" data-testid="tab-media-owner">Media Owner</TabsTrigger>
              </TabsList>
              
              <TabsContent value="advertiser" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email-advertiser">Email</Label>
                  <Input
                    id="email-advertiser"
                    type="email"
                    placeholder="advertiser@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="input-email-advertiser"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-advertiser">Password</Label>
                  <Input
                    id="password-advertiser"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    data-testid="input-password-advertiser"
                  />
                </div>
                <Button className="w-full" data-testid="button-signin-advertiser">
                  Sign In as Advertiser
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Manage campaigns, upload creatives, view insights, and control spending.
                </p>
              </TabsContent>
              
              <TabsContent value="media-owner" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email-owner">Email</Label>
                  <Input
                    id="email-owner"
                    type="email"
                    placeholder="owner@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="input-email-owner"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-owner">Password</Label>
                  <Input
                    id="password-owner"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    data-testid="input-password-owner"
                  />
                </div>
                <Button className="w-full" data-testid="button-signin-owner">
                  Sign In as Media Owner
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Monitor screen uptime, earnings, and playback verification in real-time.
                </p>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/contact" className="text-primary hover:underline" data-testid="link-create-account">
                  Get started
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
