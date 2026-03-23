import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle, Terminal } from "lucide-react";

const steps = [
  { title: "Enable Developer Options", desc: "Go to Settings → About Phone → tap Build Number 7 times to enable Developer Options." },
  { title: "Enable OEM Unlocking", desc: "In Developer Options, toggle on 'OEM Unlocking'. You may need to verify your identity." },
  { title: "Enable USB Debugging", desc: "Also in Developer Options, enable 'USB Debugging' and 'USB Debugging (Security Settings)'." },
  { title: "Connect Device to PC", desc: "Connect your OnePlus 12 to your PC via USB cable. Accept the RSA fingerprint prompt on your phone." },
  { title: "Verify ADB Connection", desc: "Open a terminal and run: adb devices — your device should appear in the list." },
  { title: "Reboot to Fastboot", desc: "Run: adb reboot bootloader — your device will restart into fastboot mode." },
  { title: "Unlock Bootloader", desc: "Run: fastboot oem unlock — confirm the unlock on your device screen using volume keys and power button." },
  { title: "Factory Reset", desc: "Your device will perform a factory reset. This is normal and required. All data will be erased." },
];

export default function UnlockBootloaderPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/guides"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Guides</button></Link>
      </div>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">Unlock Bootloader</h1>
        <Badge>Easy</Badge>
      </div>
      <Alert className="mb-6 border-yellow-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription><strong>Important:</strong> Unlocking the bootloader will wipe all data on your device. Back up everything first. This also voids your warranty.</AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle>Prerequisites</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>ADB & Fastboot installed on your PC</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>OnePlus USB Drivers installed (Windows)</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>At least 50% battery charge</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Backup of all important data</span></div>
            </CardContent>
          </Card>
          {steps.map((step, i) => (
            <Card key={i}>
              <CardHeader><CardTitle className="text-base">Step {i + 1}: {step.title}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {(step.title.includes("ADB") || step.title.includes("Fastboot") || step.title.includes("Reboot")) && (
                  <div className="mt-3 bg-muted rounded p-3 font-mono text-sm flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    {step.title.includes("ADB") ? "adb devices" : step.title.includes("Reboot") ? "adb reboot bootloader" : "fastboot oem unlock"}
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
              <Link href="/downloads/adb-fastboot" className="block p-2 border rounded hover:border-primary text-sm transition-colors">ADB & Fastboot Tools</Link>
              <Link href="/downloads/drivers" className="block p-2 border rounded hover:border-primary text-sm transition-colors">OnePlus USB Drivers</Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Next Steps</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/guides/custom-recovery" className="block p-2 border rounded hover:border-primary text-sm transition-colors">→ Install Custom Recovery</Link>
              <Link href="/guides/magisk-root" className="block p-2 border rounded hover:border-primary text-sm transition-colors">→ Root with Magisk</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
