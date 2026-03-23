import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, ExternalLink } from "lucide-react";

const channels = [
  { title: "XDA Developers Forum", desc: "The most active Android modding community. Find OnePlus 12 specific threads, ROM releases, and expert help.", href: "https://forum.xda-developers.com/f/oneplus-12.html", external: true },
  { title: "Discord Server", desc: "Real-time chat with other OnePlus 12 users and developers. Get instant help with your rooting questions.", href: "/discord", external: false },
  { title: "Reddit — r/OnePlus", desc: "The OnePlus subreddit for news, discussions, and help from thousands of OnePlus users.", href: "/reddit", external: false },
  { title: "Telegram Group", desc: "Join our Telegram community for quick support and the latest news on OnePlus 12 development.", href: "https://t.me/oneplus12root", external: true },
];

export default function CommunityPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><Users className="h-8 w-8" />Community</h1>
        <p className="text-muted-foreground">Connect with other OnePlus 12 users and developers</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {channels.map((ch) => (
          <a key={ch.title} href={ch.href} target={ch.external ? "_blank" : undefined} rel={ch.external ? "noopener noreferrer" : undefined}>
            <Card className="h-full hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  {ch.title}
                  {ch.external && <ExternalLink className="h-3 w-3 ml-auto" />}
                </CardTitle>
                <CardDescription>{ch.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-primary text-sm">Join →</span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </>
  );
}
