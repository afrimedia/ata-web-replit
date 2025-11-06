import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title: "How Real-Time Bidding Is Changing Outdoor Advertising",
      excerpt: "Discover how RTB technology is revolutionizing the way advertisers buy digital billboard space, making it more accessible and cost-effective than ever.",
      category: "Technology",
      readTime: "5 min read",
      date: "Jan 15, 2025"
    },
    {
      title: "Why SMEs Are the Future of Digital Billboards",
      excerpt: "Small and medium enterprises are driving the next wave of DOOH adoption. Learn why this shift matters for Africa's advertising landscape.",
      category: "Industry Insights",
      readTime: "4 min read",
      date: "Jan 10, 2025"
    },
    {
      title: "Data Transparency: The Key to Outdoor Media Growth",
      excerpt: "Transparency builds trust. Explore how real-time analytics and playback verification are transforming advertiser confidence in outdoor media.",
      category: "Analytics",
      readTime: "6 min read",
      date: "Jan 5, 2025"
    },
    {
      title: "The Future of DOOH in African Smart Cities",
      excerpt: "As African cities embrace smart infrastructure, digital out-of-home advertising is positioned to become a cornerstone of urban communication.",
      category: "Future Trends",
      readTime: "7 min read",
      date: "Dec 28, 2024"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-background via-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Stay Ahead with DOOH Insights
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission goes beyond technology — we're building a knowledge base to grow Africa's DOOH industry.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover-elevate transition-all cursor-pointer group" data-testid={`card-article-${index + 1}`}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
                <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-neon/5 to-primary/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Join our newsletter
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get monthly insights and industry trends delivered to your inbox.
          </p>
        </div>
      </section>
    </div>
  );
}
