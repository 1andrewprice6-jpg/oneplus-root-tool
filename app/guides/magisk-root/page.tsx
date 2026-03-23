import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, Terminal, Shield } from "lucide-react";

const steps = [
  { title: "Download Boot Image", desc: "Extract your device's stock boot.img from the firmware package. You can find the firmware on the Firmware page." },
  { title: "Transfer Files to Phone", desc: "Copy the stock boot.img and the Magisk APK to your phone's internal storage." },
  { title: "Patch Boot Image with Magisk", desc: "Install and open the Magisk app. Tap Install → Select and Patch a File → select the boot.img. Magisk will create a patched_boot.img." },
  { title: "Copy Patched Image to PC", desc: "Run: adb pull /sdcard/Download/magisk_patched_*.img — to copy the patched boot image to your PC." },
  { title: "Boot into Fastboot", desc: "Run: adb reboot bootloader — to enter fastboot mode." },
  { title: "Flash Patched Boot", desc: "Run: fastboot flash boot magisk_patched_*.img — to flash the Magisk-patched boot image." },
  { title: "Reboot and Verify", desc: "Run: fastboot reboot — then open the Magisk app and verify that root is active. Install the Magisk app as a system app if prompted." },
];

export default function MagiskRootPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/guides"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Guides</button></Link>
      </div>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">Root with Magisk</h1>
        <Badge variant="secondary">Medium</Badge>
      </div>
      <Alert className="mb-6 border-yellow-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>Rooting with Magisk requires an unlocked bootloader. Some banking apps and Google Pay may stop working after rooting.</AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" />Why Magisk?</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Magisk is the most popular and safest rooting method. It provides systemless root, meaning it doesn't modify the system partition directly. This makes it easier to pass SafetyNet/Play Integrity checks and unroot if needed.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Prerequisites</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Unlocked bootloader</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>ADB & Fastboot installed on PC</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Magisk APK downloaded</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Stock firmware for your exact OOS version</span></div>
            </CardContent>
          </Card>
          {steps.map((step, i) => (
            <Card key={i}>
              <CardHeader><CardTitle className="text-base">Step {i + 1}: {step.title}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {step.title.includes("Copy Patched") && (
                  <div className="mt-3 bg-muted rounded p-3 font-mono text-sm flex items-center gap-2">
                    <Terminal className="h-4 w-4" />adb pull /sdcard/Download/magisk_patched_*.img
                  </div>
                )}
                {step.title.includes("Flash Patched") && (
                  <div className="mt-3 bg-muted rounded p-3 font-mono text-sm flex items-center gap-2">
                    <Terminal className="h-4 w-4" />fastboot flash boot magisk_patched_*.img
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Required Downloads</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/downloads/magisk" className="block p-2 border rounded hover:border-primary text-sm transition-colors">Magisk APK v27.0</Link>
              <Link href="/firmware" className="block p-2 border rounded hover:border-primary text-sm transition-colors">Stock Firmware</Link>
              <Link href="/downloads/adb-fastboot" className="block p-2 border rounded hover:border-primary text-sm transition-colors">ADB & Fastboot</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
