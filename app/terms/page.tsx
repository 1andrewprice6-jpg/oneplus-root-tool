import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><FileText className="h-8 w-8" />Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: October 2024</p>
      </div>
      <div className="max-w-3xl space-y-6">
        {[
          { title: "1. Acceptance of Terms", text: "By accessing and using OnePlus 12 Root Tool, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this site." },
          { title: "2. Use of Content", text: "The guides, documentation, and content on this site are provided for informational purposes only. You may use them for personal, non-commercial use. You may not reproduce or redistribute our content without permission." },
          { title: "3. Assumption of Risk", text: "You expressly acknowledge and agree that the use of this site and any information or tools obtained through it is at your own risk. Rooting your device carries inherent risks including data loss and device damage." },
          { title: "4. Limitation of Liability", text: "To the fullest extent permitted by law, OnePlus 12 Root Tool and its contributors shall not be liable for any damages arising from your use of this site or the information contained herein." },
          { title: "5. Accuracy of Information", text: "We strive to keep our guides accurate and up to date. However, we make no warranties about the completeness, accuracy, or suitability of any information on this site for your particular purpose." },
          { title: "6. Changes to Terms", text: "We reserve the right to modify these terms at any time. Your continued use of the site after changes are posted constitutes acceptance of the new terms." },
          { title: "7. Governing Law", text: "These terms are governed by applicable law. Any disputes arising from these terms shall be resolved through appropriate legal channels." },
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
