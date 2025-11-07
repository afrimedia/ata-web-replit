import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/advertisers", label: "For Advertisers" },
    { href: "/media-owners", label: "For Media Owners" },
    { href: "/platform", label: "Platform" },
    { href: "/about", label: "About" },
    // { href: "/blog", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center hover-elevate rounded-lg"
            data-testid="link-home"
          >
            <img
              src={
                new URL(
                  "@assets/ATA-(LOGO) 3_1762443724542.png",
                  import.meta.url,
                ).href
              }
              alt="ATA Logo"
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors hover-elevate ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild data-testid="button-login">
              <a href="https://web.ata.ke/auth/login" target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
            <Button variant="default" asChild data-testid="button-get-started">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium hover-elevate ${
                  location === link.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full"
                asChild
                data-testid="mobile-button-login"
              >
                <a href="https://web.ata.ke/auth/login" target="_blank" rel="noopener noreferrer">Login</a>
              </Button>
              <Button
                variant="default"
                className="w-full"
                asChild
                data-testid="mobile-button-get-started"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
