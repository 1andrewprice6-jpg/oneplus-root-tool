import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  { q: "Will rooting void my OnePlus 12 warranty?", a: "Yes. Unlocking the bootloader and rooting your device will void the manufacturer warranty. OnePlus detects bootloader unlock status. However, you can re-lock the bootloader and flash stock firmware to restore the device to near-factory state, though OnePlus may still be able to detect prior modifications." },
  { q: "Can I still receive OTA updates after rooting?", a: "OTA updates are disabled once you unlock the bootloader on most OnePlus builds. You can still manually install updates by downloading the full OTA package and flashing it. With Magisk, you can restore the stock boot image, apply the OTA, then re-root." },
  { q: "Will Google Pay/banking apps still work after rooting?", a: "This depends on your root method. Magisk with DenyList configured can hide root from specific apps. However, Google's Play Integrity API has become stricter. Many banking apps and Google Pay may not work out of the box. You may need additional Magisk modules like MagiskHide Props Config or Universal SafetyNet Fix." },
  { q: "What is the difference between a soft brick and a hard brick?", a: "A soft brick means your device is stuck in a boot loop or won't boot past a certain screen, but it's still partially functional (you can often enter recovery or fastboot mode). A hard brick means the device shows no signs of life at all. Soft bricks are almost always recoverable; hard bricks are rare and much more difficult to fix." },
  { q: "Can I unroot my OnePlus 12 after rooting?", a: "Yes! With Magisk, simply open the Magisk app, tap Uninstall → Restore Images. This removes the Magisk patch from your boot image and restores the stock boot. You can also flash the original stock boot.img via fastboot. Note: unlocking the bootloader itself cannot be 'undone' without re-locking it through fastboot." },
  { q: "What Android version does OnePlus 12 run?", a: "The OnePlus 12 shipped with OxygenOS 14 based on Android 14. It is eligible for updates to Android 15 and beyond. Our guides cover OxygenOS 14 and will be updated for future versions." },
  { q: "Do I need a PC to root my OnePlus 12?", a: "Yes, for the bootloader unlock and initial rooting process, you need a PC with ADB and Fastboot installed. Once rooted, subsequent modifications (installing Magisk modules, flashing via TWRP) can be done directly on the phone." },
  { q: "Is the OnePlus 12R the same as the OnePlus 12?", a: "No — the OnePlus 12R (CPH2609) is a separate, more affordable device with different hardware. While both are supported here, they use different firmware, TWRP images, and the rooting steps may have minor differences." },
];

export default function FaqPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><HelpCircle className="h-8 w-8" />Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Common questions about rooting the OnePlus 12</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <Card key={i}>
            <CardHeader><CardTitle className="text-base">{faq.q}</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">{faq.a}</p></CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
