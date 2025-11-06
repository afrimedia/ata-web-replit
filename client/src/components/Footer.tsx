import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/newsletter", { email });
      
      toast({
        title: "Subscribed!",
        description: "You'll receive monthly insights and industry trends.",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-neon to-primary bg-clip-text text-transparent mb-4">
              AdvaTech Africa
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Revolutionizing outdoor advertising across Africa through automation and accessibility.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" disabled={isSubmitting} data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-blog">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">For Advertisers</h3>
            <ul className="space-y-2">
              <li><Link href="/advertisers" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-advertisers">Features</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-demo">Book a Demo</Link></li>
              <li><Link href="/login" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-dashboard">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">For Media Owners</h3>
            <ul className="space-y-2">
              <li><Link href="/media-owners" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-media-owners">Benefits</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-register-screen">Register Screen</Link></li>
              <li><Link href="/platform" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-technology">Technology</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AdvaTech Africa. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-youtube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
