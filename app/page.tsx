"use client";

import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleAlert, Zap, Book, Download, Settings, ExternalLink, FileText, Shield, Github, MessageCircle } from "lucide-react";

const devices = [
  { name: "OnePlus 12 Global", model: "CPH2573" },
  { name: "OnePlus 12 China", model: "PJD110" },
  { name: "OnePlus 12R", model: "CPH2609" },
];
const guides = [
  { title: "Unlock Bootloader", href: "/guides/unlock-bootloader", difficulty: "Easy" },
  { title: "Install Custom Recovery", href: "/guides/custom-recovery", difficulty: "Medium" },
  { title: "Root with Magisk", href: "/guides/magisk-root", difficulty: "Medium" },
  { title: "Install Custom ROM", href: "/guides/custom-rom", difficulty: "Hard" },
];
const tools = [
  { name: "ADB & Fastboot", version: "34.0.5", href: "/downloads/adb-fastboot", required: true },
  { name: "OnePlus USB Drivers", version: "2.0", href: "/downloads/drivers", required: true },
  { name: "Magisk", version: "27.0", href: "/downloads/magisk", required: false },
  { name: "TWRP Recovery", version: "3.7.0", href: "/downloads/twrp", required: false },
];

export default function Home() {
  return (
    <>
      <Alert className="mb-8 border-destructive bg-card text-card-foreground">
        <TriangleAlert className="h-4 w-4" />
        <AlertDescription>
          <strong>Warning:</strong> Rooting your device will void your warranty and may brick your device.
          Proceed only if you understand the risks.{" "}
          <Link className="underline ml-1 hover:text-primary" href="/disclaimer">Read full disclaimer</Link>
        </AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5" />Root Your OnePlus 12</CardTitle>
              <CardDescription>Select your device model and follow the automated rooting process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Select Your Device</h3>
                <div className="grid gap-3">
                  {devices.map((d) => (
                    <div key={d.model} className="p-4 border rounded-lg cursor-pointer transition-all hover:border-primary">
                      <div className="flex items-center justify-between">
                        <div><h4 className="font-medium">{d.name}</h4><p className="text-sm text-muted-foreground">Model: {d.model}</p></div>
                        <Badge>Supported</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Book className="h-5 w-5" />Step-by-Step Guides</CardTitle>
              <CardDescription>Detailed tutorials for manual rooting and customization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {guides.map((g) => (
                  <Link key={g.href} className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors group" href={g.href}>
                    <div><h4 className="font-medium group-hover:text-primary">{g.title}</h4><p className="text-sm text-muted-foreground">Difficulty: {g.difficulty}</p></div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Download className="h-5 w-5" />Required Tools</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tools.map((t) => (
                  <Link key={t.href} className="flex items-center justify-between p-3 border rounded-lg hover:border-primary transition-colors group" href={t.href}>
                    <div><h4 className="font-medium text-sm group-hover:text-primary">{t.name}</h4><p className="text-xs text-muted-foreground">v{t.version}</p></div>
                    <div className="flex items-center gap-2">
                      {t.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                      <Download className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Settings className="h-5 w-5" />Quick Links</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link className="flex items-center gap-2 p-2 rounded hover:bg-accent transition-colors" href="/firmware"><FileText className="h-4 w-4" /><span className="text-sm">Stock Firmware</span></Link>
                <Link className="flex items-center gap-2 p-2 rounded hover:bg-accent transition-colors" href="/recovery"><Shield className="h-4 w-4" /><span className="text-sm">Recovery Tools</span></Link>
                <a className="flex items-center gap-2 p-2 rounded hover:bg-accent transition-colors" target="_blank" rel="noopener noreferrer" href="https://github.com/oneplus-root"><Github className="h-4 w-4" /><span className="text-sm">Source Code</span><ExternalLink className="h-3 w-3 ml-auto" /></a>
                <Link className="flex items-center gap-2 p-2 rounded hover:bg-accent transition-colors" href="/community"><MessageCircle className="h-4 w-4" /><span className="text-sm">Community Forum</span></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-sm font-semibold">Device Status</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Bootloader:</span><Badge variant="destructive">Locked</Badge></div>
                <div className="flex justify-between"><span>Root Access:</span><Badge variant="secondary">No</Badge></div>
                <div className="flex justify-between"><span>Recovery:</span><Badge variant="secondary">Stock</Badge></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
