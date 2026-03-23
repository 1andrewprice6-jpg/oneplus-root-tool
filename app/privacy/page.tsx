import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><Shield className="h-8 w-8" />Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: October 2024</p>
      </div>
      <div className="max-w-3xl space-y-6">
        {[
          { title: "Information We Collect", text: "OnePlus 12 Root Tool does not collect personal information. We do not require account creation, login, or any personal data submission to use this site." },
          { title: "Analytics", text: "We may use anonymous, aggregated analytics (e.g., page views) to understand how users interact with the site. No personally identifiable information is collected or stored. We do not use advertising networks or sell data to third parties." },
          { title: "Cookies", text: "This site does not use tracking cookies. We may use essential cookies only if required for basic functionality." },
          { title: "Third-Party Links", text: "This site contains links to third-party websites (GitHub, XDA, OnePlus official site, etc.). We have no control over the privacy practices of these external sites. We encourage you to review their privacy policies." },
          { title: "Downloads", text: "Files linked from this site are hosted on external servers (Google, GitHub, OnePlus, TWRP official). We do not track your downloads. Please refer to those services' privacy policies for their data practices." },
          { title: "Changes to This Policy", text: "We may update this privacy policy from time to time. Changes will be reflected on this page with an updated date." },
          { title: "Contact", text: "If you have any questions about this privacy policy, please contact us at support@oneplus-root.dev." },
        ].map((s) => (
          <Card key={s.title}>
            <CardHeader><CardTitle className="text-base">{s.title}</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">{s.text}</p></CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
