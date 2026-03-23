import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><AlertTriangle className="h-8 w-8 text-yellow-500" />Disclaimer</h1>
        <p className="text-muted-foreground">Please read this carefully before proceeding</p>
      </div>
      <div className="max-w-3xl space-y-6">
        {[
          { title: "1. Risk of Device Damage", text: "Rooting, flashing custom recoveries, ROMs, or modifying your OnePlus 12 in any way carries a risk of permanently damaging (bricking) your device. While we take every precaution to ensure our guides are accurate and safe, we cannot guarantee that following them will be risk-free for every user in every situation." },
          { title: "2. Warranty Void", text: "Unlocking the bootloader and rooting your device will void the manufacturer warranty provided by OnePlus. By proceeding, you acknowledge that you may lose eligibility for warranty-based repairs or replacements." },
          { title: "3. Data Loss", text: "Unlocking the bootloader requires a factory reset, which erases all data on your device. Additional data loss may occur when flashing ROMs or performing other modifications. Always back up your data before proceeding." },
          { title: "4. No Affiliation", text: "This website and its tools are not affiliated with, endorsed by, or connected to OnePlus Technology Co., Ltd., OPPO, BBK Electronics, Google, or any other entity. All trademarks and brand names are the property of their respective owners." },
          { title: "5. No Liability", text: "The creators and contributors of OnePlus 12 Root Tool accept no responsibility or liability for any damage to devices, data loss, security vulnerabilities, or other harm that may result from following our guides or using tools linked on this site. You proceed entirely at your own risk." },
          { title: "6. Third-Party Tools", text: "We link to third-party tools (Magisk, TWRP, ADB, etc.) that are developed and maintained by their respective authors. We have no control over these tools and accept no responsibility for their functionality, safety, or any changes made by their developers." },
          { title: "7. Legal Compliance", text: "Modifying your device may affect your ability to use certain apps or services (banking apps, Google Pay, etc.) due to security policies. Ensure that your modifications comply with the laws and regulations in your jurisdiction." },
        ].map((section) => (
          <Card key={section.title}>
            <CardHeader><CardTitle className="text-base">{section.title}</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">{section.text}</p></CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
