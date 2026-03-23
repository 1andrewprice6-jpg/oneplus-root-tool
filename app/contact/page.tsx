import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground">Get in touch with the OnePlus 12 Root Tool team</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" />Email</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-2">For bug reports, guide corrections, and general inquiries:</p>
            <a href="mailto:support@oneplus-root.dev" className="text-primary hover:underline">support@oneplus-root.dev</a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Github className="h-5 w-5" />GitHub</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-2">Report issues or contribute to our open-source guides:</p>
            <a href="https://github.com/oneplus-root" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/oneplus-root</a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><MessageCircle className="h-5 w-5" />Community</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="mb-2">For help and community support, visit our forum or Discord for faster responses.</p>
            <a href="/community" className="text-primary hover:underline">Visit Community →</a>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
