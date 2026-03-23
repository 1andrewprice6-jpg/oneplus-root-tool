import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Terminal, Monitor, Apple, Laptop } from "lucide-react";

export default function AdbFastbootPage() {
  return (
    <>
      <div className="mb-8"><Link href="/downloads"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Downloads</button></Link></div>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">ADB & Fastboot</h1>
        <Badge variant="destructive">Required</Badge>
      </div>
      <p className="text-muted-foreground mb-8">Android Debug Bridge (ADB) and Fastboot are essential command-line tools used for all rooting procedures. ADB allows communication with your device while it&apos;s in normal mode; Fastboot is used while in bootloader mode.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle>Download by Platform</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <a href="https://dl.google.com/android/repository/platform-tools-latest-windows.zip" className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors group" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3"><Monitor className="h-5 w-5" /><div><h4 className="font-medium group-hover:text-primary">Windows</h4><p className="text-xs text-muted-foreground">platform-tools-latest-windows.zip</p></div></div>
                <Download className="h-4 w-4" />
              </a>
              <a href="https://dl.google.com/android/repository/platform-tools-latest-darwin.zip" className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors group" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3"><Apple className="h-5 w-5" /><div><h4 className="font-medium group-hover:text-primary">macOS</h4><p className="text-xs text-muted-foreground">platform-tools-latest-darwin.zip</p></div></div>
                <Download className="h-4 w-4" />
              </a>
              <a href="https://dl.google.com/android/repository/platform-tools-latest-linux.zip" className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors group" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3"><Laptop className="h-5 w-5" /><div><h4 className="font-medium group-hover:text-primary">Linux</h4><p className="text-xs text-muted-foreground">platform-tools-latest-linux.zip</p></div></div>
                <Download className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Installation & Verification</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>1. Extract the zip file to a folder (e.g., C:\platform-tools on Windows)</p>
              <p>2. Add the folder to your system PATH environment variable</p>
              <p>3. Open a terminal and verify installation:</p>
              <div className="bg-muted rounded p-3 font-mono flex items-center gap-2"><Terminal className="h-4 w-4" />adb --version</div>
              <p>4. You should see the ADB version number printed. If not, check your PATH settings.</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Version Info</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Version:</span><span>34.0.5</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Source:</span><span>Google</span></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Also Needed</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/downloads/drivers" className="block p-2 border rounded hover:border-primary text-sm transition-colors">OnePlus USB Drivers</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
