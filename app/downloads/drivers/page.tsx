import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Info } from "lucide-react";

export default function DriversPage() {
  return (
    <>
      <div className="mb-8"><Link href="/downloads"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Downloads</button></Link></div>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">OnePlus USB Drivers</h1>
        <Badge variant="destructive">Required — Windows Only</Badge>
      </div>
      <p className="text-muted-foreground mb-8">OnePlus USB drivers are required on Windows for your PC to properly recognize your OnePlus 12 when connected via USB. macOS and Linux users typically don&apos;t need additional drivers.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle>Download</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <a href="https://www.oneplus.com/support/softwareupgrade/details?code=PM1574156155944" className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors group" target="_blank" rel="noopener noreferrer">
                <div><h4 className="font-medium group-hover:text-primary">OnePlus USB Driver v2.0</h4><p className="text-xs text-muted-foreground">Windows 10/11 — 12.4 MB</p></div>
                <Download className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Installation Steps</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>1. Download and run the installer (OnePlus_USB_Drivers_Setup.exe)</p>
              <p>2. Follow the on-screen prompts and accept the license agreement</p>
              <p>3. Restart your computer after installation</p>
              <p>4. Connect your OnePlus 12 via USB — Windows should recognize it automatically</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Info className="h-4 w-4" />macOS & Linux</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>macOS and Linux ship with the necessary drivers built-in. Simply connect your device, enable USB Debugging, and authorize your computer on your phone. No additional drivers are needed.</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader><CardTitle>Next Steps</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/guides/unlock-bootloader" className="block p-2 border rounded hover:border-primary text-sm transition-colors">Start: Unlock Bootloader</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
