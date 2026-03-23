import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Wrench, MessageCircle, Mail } from "lucide-react";

const options = [
  { title: "FAQ", desc: "Answers to the most commonly asked questions about rooting OnePlus 12.", href: "/faq", icon: "help" },
  { title: "Troubleshooting", desc: "Step-by-step solutions for common issues encountered during rooting.", href: "/troubleshooting", icon: "wrench" },
  { title: "Community Forum", desc: "Ask the community — thousands of experienced users ready to help.", href: "/community", icon: "chat" },
  { title: "Contact Us", desc: "Can't find an answer? Reach out to our support team directly.", href: "/contact", icon: "mail" },
];

export default function SupportPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Support</h1>
        <p className="text-muted-foreground">Get help with your OnePlus 12 rooting journey</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {options.map((opt) => (
          <Link key={opt.href} href={opt.href}>
            <Card className="h-full hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {opt.icon === "help" && <HelpCircle className="h-5 w-5" />}
                  {opt.icon === "wrench" && <Wrench className="h-5 w-5" />}
                  {opt.icon === "chat" && <MessageCircle className="h-5 w-5" />}
                  {opt.icon === "mail" && <Mail className="h-5 w-5" />}
                  {opt.title}
                </CardTitle>
                <CardDescription>{opt.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-primary text-sm">Get help →</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
