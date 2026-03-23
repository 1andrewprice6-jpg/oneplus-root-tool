import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle } from "lucide-react";

const roms = [
  { name: "LineageOS 21", android: "Android 14", status: "Stable", desc: "The most popular custom ROM with near-stock Android experience." },
  { name: "Pixel Experience", android: "Android 14", status: "Stable", desc: "Brings Google Pixel features and UI to your OnePlus 12." },
  { name: "crDroid", android: "Android 14", status: "Beta", desc: "Feature-rich ROM based on AOSP with many customization options." },
  { name: "Evolution X", android: "Android 14", status: "Stable", desc: "Pixel-like ROM with tons of additional customization features." },
];

export default function CustomRomPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/guides"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Guides</button></Link>
      </div>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">Install Custom ROM</h1>
        <Badge variant="destructive">Hard</Badge>
      </div>
      <Alert className="mb-6 border-red-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription><strong>Advanced:</strong> Flashing a custom ROM will erase all data. You must have an unlocked bootloader and custom recovery (TWRP) installed first. This is irreversible without the original firmware.</AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader><CardTitle>Prerequisites</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Unlocked bootloader</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>TWRP custom recovery installed</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>NANDroid backup of current system</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Custom ROM zip for OnePlus 12</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>GApps package (if required by ROM)</span></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Installation Steps</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-sm">
              {["Boot into TWRP recovery (hold Volume Down + Power)", "Go to Wipe → Format Data → type 'yes' to confirm full wipe", "Go back to main menu → Install → select your ROM zip", "Optionally flash GApps package immediately after ROM (same session)", "Swipe to flash, wait for completion", "Reboot to System — first boot takes 5-10 minutes, this is normal"].map((s, i) => (
                <div key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">{i+1}</span>
                  <p className="text-muted-foreground">{s}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <div>
            <h2 className="text-xl font-semibold mb-4">Supported ROMs</h2>
            <div className="grid gap-4">
              {roms.map((rom) => (
                <Card key={rom.name}>
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-2">
                      <div><h3 className="font-semibold">{rom.name}</h3><p className="text-xs text-muted-foreground">{rom.android}</p></div>
                      <Badge variant={rom.status === "Stable" ? "default" : "secondary"}>{rom.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{rom.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Required Guides First</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/guides/unlock-bootloader" className="block p-2 border rounded hover:border-primary text-sm transition-colors">1. Unlock Bootloader</Link>
              <Link href="/guides/custom-recovery" className="block p-2 border rounded hover:border-primary text-sm transition-colors">2. Install TWRP</Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Need Help?</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/troubleshooting" className="block p-2 border rounded hover:border-primary text-sm transition-colors">Troubleshooting Guide</Link>
              <Link href="/community" className="block p-2 border rounded hover:border-primary text-sm transition-colors">Community Forum</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
