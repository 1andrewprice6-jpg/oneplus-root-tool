import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download } from "lucide-react";

const firmware = [
  { version: "OxygenOS 14.0.0.700", model: "Global (CPH2573)", android: "Android 14", date: "2024-10-15", status: "Latest" },
  { version: "OxygenOS 14.0.0.612", model: "Global (CPH2573)", android: "Android 14", date: "2024-08-20", status: "Stable" },
  { version: "ColorOS 14.0.0.700", model: "China (PJD110)", android: "Android 14", date: "2024-10-10", status: "Latest" },
  { version: "ColorOS 14.0.0.600", model: "China (PJD110)", android: "Android 14", date: "2024-07-18", status: "Stable" },
];

export default function FirmwarePage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/"><button className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Home</button></Link>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><FileText className="h-8 w-8" />Stock Firmware</h1>
        <p className="text-muted-foreground">Official OxygenOS and ColorOS firmware for OnePlus 12</p>
      </div>
      <Card className="mb-6">
        <CardContent className="pt-4 text-sm text-muted-foreground">
          Stock firmware is required when patching the boot image for Magisk root. Always use the firmware version that matches your current OxygenOS/ColorOS version. Flashing the wrong firmware can cause issues.
        </CardContent>
      </Card>
      <div className="space-y-4">
        {firmware.map((fw, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{fw.version}</CardTitle>
                <Badge variant={fw.status === "Latest" ? "default" : "secondary"}>{fw.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <span>Model: {fw.model}</span>
                <span>Android: {fw.android}</span>
                <span>Released: {fw.date}</span>
              </div>
              <a href="https://www.oneplus.com/support/softwareupgrade" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary text-sm hover:underline">
                <Download className="h-3 w-3" /> Download from OnePlus →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
