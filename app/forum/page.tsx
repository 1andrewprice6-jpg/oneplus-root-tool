import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MessageCircle } from "lucide-react";

export default function ForumPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2"><MessageCircle className="h-8 w-8" />Forum</h1>
        <p className="text-muted-foreground">Community discussion and support forums for OnePlus 12</p>
      </div>
      <div className="space-y-4 max-w-2xl">
        <Card>
          <CardHeader><CardTitle>XDA Developers — OnePlus 12</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>The primary forum for all OnePlus 12 development, including ROMs, kernels, Magisk modules, and general rooting help. Thousands of active threads from experienced developers.</p>
            <a href="https://forum.xda-developers.com/f/oneplus-12.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
              Visit XDA Forum <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>OnePlus Community Forums</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>The official OnePlus community forum. Great for OxygenOS feedback, bug reports, and general OnePlus 12 discussions.</p>
            <a href="https://community.oneplus.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
              Visit OnePlus Community <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
