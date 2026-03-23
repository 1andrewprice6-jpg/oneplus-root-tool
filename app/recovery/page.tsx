import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function RecoveryPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Home</button></Link>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><Shield className="h-8 w-8" />Recovery Tools</h1>
        <p className="text-muted-foreground">Tools and methods for recovering a soft-bricked OnePlus 12</p>
      </div>
      <Alert className="mb-6 border-yellow-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>These tools are for emergency use. If your device is hard-bricked (no signs of life), contact OnePlus support or a professional repair service.</AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>MSMTool (DeepFlash)</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>The most powerful recovery tool for OnePlus devices. MSMTool allows you to flash the device at a very low level, recovering even severely bricked devices.</p>
            <p className="text-yellow-600 dark:text-yellow-400">⚠ Use with extreme caution. Incorrect use can permanently brick your device.</p>
            <a href="https://forum.xda-developers.com/t/tool-oneplus-12-msm-tool.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">View on XDA Developers →</a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Factory Reset via Recovery</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>For soft bricks, a factory reset through TWRP or stock recovery often resolves boot loops and other issues.</p>
            <ol className="space-y-1 list-decimal list-inside">
              <li>Power off device</li>
              <li>Hold Vol Down + Power for stock recovery</li>
              <li>Navigate to Wipe Data</li>
              <li>Confirm and reboot</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Restore Stock Boot</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>If you've flashed a bad boot image, you can restore the stock boot.img using fastboot:</p>
            <div className="bg-muted rounded p-2 font-mono text-xs">fastboot flash boot stock_boot.img</div>
            <Link href="/firmware" className="text-primary hover:underline block mt-2">Download Stock Firmware →</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Need More Help?</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <Link href="/troubleshooting" className="block p-2 border rounded hover:border-primary transition-colors">Troubleshooting Guide</Link>
            <Link href="/community" className="block p-2 border rounded hover:border-primary transition-colors">Community Forum</Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
