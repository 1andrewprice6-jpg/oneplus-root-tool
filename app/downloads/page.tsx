import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, HardDrive, Usb } from "lucide-react";

const downloads = [
  { title: "ADB & Fastboot", version: "34.0.5", size: "8.2 MB", href: "/downloads/adb-fastboot", required: true, icon: "terminal", desc: "Android Debug Bridge and Fastboot tools required for all rooting procedures." },
  { title: "OnePlus USB Drivers", version: "2.0", size: "12.4 MB", href: "/downloads/drivers", required: true, icon: "usb", desc: "Windows USB drivers for proper device recognition." },
  { title: "Magisk", version: "27.0", size: "11.8 MB", href: "/downloads/magisk", required: false, icon: "shield", desc: "Systemless root management tool. The industry standard for Android rooting." },
  { title: "TWRP Recovery", version: "3.7.0", size: "67.2 MB", href: "/downloads/twrp", required: false, icon: "disk", desc: "Team Win Recovery Project — custom recovery for flashing ROMs, backups, and more." },
];

export default function DownloadsPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Home</button></Link>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><Download className="h-8 w-8" />Downloads</h1>
        <p className="text-muted-foreground">All tools needed to root and customize your OnePlus 12</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {downloads.map((item) => (
          <Link key={item.href} href={item.href}>
            <Card className="h-full hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  {item.required ? <Badge variant="destructive">Required</Badge> : <Badge variant="secondary">Optional</Badge>}
                </div>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>v{item.version}</span>
                  <span>{item.size}</span>
                </div>
                <div className="flex items-center gap-1 text-primary text-sm mt-3"><Download className="h-3 w-3" /> View Download</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
