import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, User, ChevronRight } from "lucide-react";

const guides = [
  { title: "Unlock Bootloader", desc: "Learn how to unlock your OnePlus 12 bootloader safely", time: "15 min", author: "RootMaster", difficulty: "Easy", href: "/guides/unlock-bootloader", tags: ["Bootloader", "Beginner"] },
  { title: "Install Custom Recovery (TWRP)", desc: "Step-by-step guide to install TWRP custom recovery", time: "30 min", author: "TechGuru", difficulty: "Medium", href: "/guides/custom-recovery", tags: ["Recovery", "TWRP"] },
  { title: "Root with Magisk", desc: "Complete guide to root your device using Magisk", time: "45 min", author: "AndroidDev", difficulty: "Medium", href: "/guides/magisk-root", tags: ["Root", "Magisk"] },
  { title: "Install Custom ROM", desc: "Flash custom ROMs like LineageOS, Pixel Experience", time: "60 min", author: "ROMExpert", difficulty: "Hard", href: "/guides/custom-rom", tags: ["ROM", "Advanced"] },
  { title: "Backup and Restore", desc: "Create complete NANDroid backups before modifications", time: "20 min", author: "SafetyFirst", difficulty: "Easy", href: "/guides/unlock-bootloader", tags: ["Backup", "Safety"] },
  { title: "Unbrick Your Device", desc: "Recovery methods for soft-bricked OnePlus 12 devices", time: "90 min", author: "RecoveryPro", difficulty: "Hard", href: "/guides/unlock-bootloader", tags: ["Recovery", "Emergency"] },
];

const difficultyColor: Record<string, "default" | "secondary" | "destructive"> = {
  Easy: "default",
  Medium: "secondary",
  Hard: "destructive",
};

export default function GuidesPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Home</button></Link>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><Book className="h-8 w-8" />Rooting Guides</h1>
        <p className="text-muted-foreground">Comprehensive tutorials for OnePlus 12 rooting and customization</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <Link key={guide.title} href={guide.href}>
            <Card className="h-full hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <Badge variant={difficultyColor[guide.difficulty]}>{guide.difficulty}</Badge>
                </div>
                <CardDescription>{guide.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{guide.time}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" />{guide.author}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {guide.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-primary text-sm mt-3">Read Guide <ChevronRight className="h-3 w-3" /></div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
