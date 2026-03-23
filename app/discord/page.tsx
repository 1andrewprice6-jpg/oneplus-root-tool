import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function DiscordPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Discord</h1>
        <p className="text-muted-foreground">Real-time community chat for OnePlus 12 users</p>
      </div>
      <div className="max-w-md">
        <Card>
          <CardHeader><CardTitle>Join Our Discord Server</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-4">
            <p>Our Discord server is the best place to get real-time help with your OnePlus 12 rooting questions. Connect with experienced developers, get instant support, and stay up to date on the latest releases.</p>
            <ul className="space-y-1">
              <li>• #general — general discussion</li>
              <li>• #rooting-help — get help with rooting</li>
              <li>• #rom-releases — latest custom ROM announcements</li>
              <li>• #troubleshooting — fix issues with expert help</li>
            </ul>
            <a href="https://discord.gg/oneplus12root" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline font-medium">
              Join Discord Server <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
