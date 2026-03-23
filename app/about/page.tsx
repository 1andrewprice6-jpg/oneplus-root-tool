import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Shield, Users, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">About OnePlus 12 Root Tool</h1>
        <p className="text-muted-foreground">Your comprehensive resource for rooting and customizing your OnePlus 12</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Smartphone className="h-5 w-5" />Our Mission</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>OnePlus 12 Root Tool was created to make the rooting process accessible to everyone — from complete beginners to experienced Android enthusiasts. We believe every user should have full control over their device.</p>
              <p>Our guides are written by experienced Android developers and community members who have rooted hundreds of devices. We keep our documentation up to date with every major OxygenOS release.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" />Safety First</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>We prioritize device safety in all our guides. Every procedure includes backup instructions and safety warnings. We only recommend trusted, well-tested tools from reputable sources.</p>
              <p>All downloads we link to come directly from official sources — Google (ADB/Fastboot), OnePlus (Drivers), and the official Magisk GitHub repository.</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" />What We Cover</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Bootloader unlocking for all OnePlus 12 variants</p>
              <p>• Custom recovery installation (TWRP)</p>
              <p>• Magisk root with module support</p>
              <p>• Custom ROM installation (LineageOS, Pixel Experience, and more)</p>
              <p>• Stock firmware and recovery tools</p>
              <p>• Troubleshooting and unbrick guides</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" />Community</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>We are a community-driven project. Our guides are tested and reviewed by real users. If you find errors or have suggestions, please reach out through our forum or Discord.</p>
              <p className="text-xs">Not affiliated with OnePlus Technology Co., Ltd. OnePlus and OxygenOS are trademarks of their respective owners.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
