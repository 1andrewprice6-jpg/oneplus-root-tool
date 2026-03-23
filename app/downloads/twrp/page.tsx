import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const builds = [
  { model: "OnePlus 12 Global (CPH2573)", version: "3.7.0", filename: "twrp-3.7.0-0-oneplus12.img", size: "67.2 MB" },
  { model: "OnePlus 12 China (PJD110)", version: "3.7.0", filename: "twrp-3.7.0-0-oneplus12cn.img", size: "67.2 MB" },
];

export default function TwrpPage() {
  return (
    <>
      <div className="mb-8"><Link href="/downloads"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Downloads</button></Link></div>
      <div className="mb-6 flex items-center gap-3">
        <h1 className="text-3xl font-bold">TWRP Recovery</h1>
        <Badge variant="secondary">Optional</Badge>
      </div>
      <p className="text-muted-foreground mb-8">Team Win Recovery Project (TWRP) is a custom recovery environment that replaces the stock recovery. It provides a touchscreen interface for flashing ROMs, creating backups (NANDroid), and more.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle>Downloads by Model</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {builds.map((b) => (
                <a key={b.model} href="https://twrp.me/oneplus/oneplus12.html" className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors group" target="_blank" rel="noopener noreferrer">
                  <div><h4 className="font-medium text-sm group-hover:text-primary">{b.model}</h4><p className="text-xs text-muted-foreground">{b.filename} — {b.size}</p></div>
                  <Download className="h-4 w-4" />
                </a>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>What You Can Do with TWRP</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Flash custom ROMs, kernels, and mods</p>
              <p>• Create full NANDroid backups and restore them</p>
              <p>• Wipe data, cache, and Dalvik cache</p>
              <p>• Mount partitions and access files</p>
              <p>• Install Magisk directly from the recovery</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader><CardTitle>Installation Guide</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Link href="/guides/custom-recovery" className="block p-2 border rounded hover:border-primary text-sm transition-colors">Install TWRP Guide</Link>
              <Link href="/guides/unlock-bootloader" className="block p-2 border rounded hover:border-primary text-sm transition-colors">Unlock Bootloader First</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
