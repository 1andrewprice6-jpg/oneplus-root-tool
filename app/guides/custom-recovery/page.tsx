import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, Terminal } from "lucide-react";

const steps = [
  { title: "Unlock Bootloader First", desc: "You must have an unlocked bootloader before installing custom recovery. Follow the Unlock Bootloader guide first." },
  { title: "Download TWRP Image", desc: "Download the correct TWRP image for your OnePlus 12 model (CPH2573 for Global, PJD110 for China). Get it from the Downloads page." },
  { title: "Boot into Fastboot Mode", desc: "Power off your device, then hold Volume Down + Power to enter fastboot mode, or run: adb reboot bootloader" },
  { title: "Flash TWRP Recovery", desc: "Run: fastboot flash recovery twrp-3.7.0-oneplus12.img — replace filename with your downloaded file." },
  { title: "Boot into TWRP", desc: "Immediately run: fastboot boot twrp-3.7.0-oneplus12.img — this temporarily boots into TWRP without making it permanent yet." },
  { title: "Make TWRP Permanent", desc: "In TWRP, go to Advanced → Flash Current TWRP to permanently install it so it survives reboots." },
  { title: "Create a Backup", desc: "Before making any changes, use TWRP Backup to create a full NANDroid backup of your current system." },
];

export default function CustomRecoveryPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/guides"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Guides</button></Link>
      </div>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">Install Custom Recovery (TWRP)</h1>
        <Badge variant="secondary">Medium</Badge>
      </div>
      <Alert className="mb-6 border-yellow-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription><strong>Prerequisite:</strong> Your bootloader must be unlocked before proceeding. <Link href="/guides/unlock-bootloader" className="underline hover:text-primary">Unlock Bootloader guide →</Link></AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle>Prerequisites</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Unlocked bootloader</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>ADB & Fastboot installed</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>TWRP image for your device model</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>60%+ battery charge</span></div>
            </CardContent>
          </Card>
          {steps.map((step, i) => (
            <Card key={i}>
              <CardHeader><CardTitle className="text-base">Step {i + 1}: {step.title}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {step.title.includes("Fastboot Mode") && (
                  <div className="mt-3 bg-muted rounded p-3 font-mono text-sm flex items-center gap-2">
                    <Terminal className="h-4 w-4" />adb reboot bootloader
                  </div>
                )}
                {step.title.includes("Flash TWRP") && (
                  <div className="mt-3 bg-muted rounded p-3 font-mono text-sm flex items-center gap-2">
                    <Terminal className="h-4 w-4" />fastboot flash recovery twrp-3.7.0-oneplus12.img
                  </div>
                )}
                {step.title.includes("Boot into TWRP") && (
                  <div className="mt-3 bg-muted rounded p-3 font-mono text-sm flex items-center gap-2">
                    <Terminal className="h-4 w-4" />fastboot boot twrp-3.7.0-oneplus12.img
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
              <Link href="/downloads/twrp" className="block p-2 border rounded hover:border-primary text-sm transition-colors">TWRP Recovery Image</Link>
              <Link href="/downloads/adb-fastboot" className="block p-2 border rounded hover:border-primary text-sm transition-colors">ADB & Fastboot Tools</Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Next Steps</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/guides/magisk-root" className="block p-2 border rounded hover:border-primary text-sm transition-colors">→ Root with Magisk</Link>
              <Link href="/guides/custom-rom" className="block p-2 border rounded hover:border-primary text-sm transition-colors">→ Install Custom ROM</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
