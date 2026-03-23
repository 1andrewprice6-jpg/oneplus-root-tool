import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Shield } from "lucide-react";

export default function MagiskPage() {
  return (
    <>
      <div className="mb-8"><Link href="/downloads"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Downloads</button></Link></div>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">Magisk</h1>
        <Badge variant="secondary">Optional</Badge>
      </div>
      <p className="text-muted-foreground mb-8">Magisk is the most popular systemless root solution for Android. It allows you to gain root access while keeping your system partition clean, making it harder for apps to detect root and easier to pass SafetyNet checks.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" />Magisk v27.0</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <a href="https://github.com/topjohnwu/Magisk/releases/download/v27.0/Magisk-v27.0.apk" className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors group" target="_blank" rel="noopener noreferrer">
                <div><h4 className="font-medium group-hover:text-primary">Magisk-v27.0.apk</h4><p className="text-xs text-muted-foreground">Latest stable — 11.8 MB</p></div>
                <Download className="h-4 w-4" />
              </a>
              <a href="https://github.com/topjohnwu/Magisk/releases" className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors group" target="_blank" rel="noopener noreferrer">
                <div><h4 className="font-medium group-hover:text-primary">All Releases (GitHub)</h4><p className="text-xs text-muted-foreground">View all versions and changelogs</p></div>
                <Download className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Key Features</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Systemless root — doesn&apos;t modify /system partition</p>
              <p>• MagiskHide / DenyList — hide root from specific apps</p>
              <p>• Magisk Modules — install modifications as modules</p>
              <p>• Zygisk — run code in Android&apos;s app process</p>
              <p>• OTA-friendly — easily restore stock boot before updates</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader><CardTitle>How to Use</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/guides/magisk-root" className="block p-2 border rounded hover:border-primary text-sm transition-colors">Root with Magisk Guide</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
