import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Terminal } from "lucide-react";

const issues = [
  {
    problem: "Device not recognized by ADB",
    solutions: ["Enable USB Debugging in Developer Options", "Try a different USB cable (data cable, not charge-only)", "Install OnePlus USB drivers (Windows)", "Revoke USB debugging authorizations and re-authorize", "Try a different USB port on your PC"],
    command: null,
  },
  {
    problem: "Bootloader unlock fails with 'FAILED (remote: unlock is not allowed)'",
    solutions: ["Enable OEM Unlocking in Developer Options (Settings → Developer Options → OEM Unlocking)", "Log in to your Google account and wait 7 days (OnePlus may require this)", "Make sure you're in fastboot mode, not recovery mode"],
    command: null,
  },
  {
    problem: "Device stuck in boot loop after flashing",
    solutions: ["Boot into TWRP recovery (Vol Down + Power)", "Go to Wipe → Wipe Cache / Dalvik cache and reboot", "If persisting, perform a full wipe and reflash the ROM", "If no TWRP, boot to stock recovery: Vol Up + Power, then wipe data"],
    command: null,
  },
  {
    problem: "Fastboot not detecting device",
    solutions: ["Make sure device is in fastboot mode (not recovery or normal boot)", "Try: fastboot devices to confirm detection", "On Windows, install OEM USB drivers or use Device Manager to update driver", "Try running as Administrator on Windows / with sudo on Linux"],
    command: "fastboot devices",
  },
  {
    problem: "Magisk root not persisting after reboot",
    solutions: ["Make sure you flashed the patched boot.img, not booted it temporarily", "Verify with: fastboot flash boot magisk_patched.img (not fastboot boot)", "Check that you're not accidentally booting from a backup slot"],
    command: "fastboot flash boot magisk_patched.img",
  },
  {
    problem: "TWRP is not persisting (replaced by stock recovery on reboot)",
    solutions: ["In TWRP, go to Advanced → Flash Current TWRP to make it permanent", "Disable Android Verified Boot (AVB) if applicable", "Some OnePlus builds restore stock recovery on first boot — flash TWRP again from within TWRP"],
    command: null,
  },
];

export default function TroubleshootingPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><Wrench className="h-8 w-8" />Troubleshooting</h1>
        <p className="text-muted-foreground">Solutions to common issues during the rooting process</p>
      </div>
      <div className="space-y-6">
        {issues.map((issue, i) => (
          <Card key={i}>
            <CardHeader><CardTitle className="text-base text-red-500 dark:text-red-400">Problem: {issue.problem}</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm font-medium">Solutions:</p>
              <ul className="space-y-1">
                {issue.solutions.map((s, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2"><span className="text-primary">•</span>{s}</li>
                ))}
              </ul>
              {issue.command && (
                <div className="bg-muted rounded p-3 font-mono text-sm flex items-center gap-2 mt-2">
                  <Terminal className="h-4 w-4" />{issue.command}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-muted-foreground text-sm">Still stuck? <Link href="/community" className="text-primary hover:underline">Ask the community →</Link></p>
      </div>
    </>
  );
}
