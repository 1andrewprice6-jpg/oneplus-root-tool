import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function RedditPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Reddit</h1>
        <p className="text-muted-foreground">OnePlus communities on Reddit</p>
      </div>
      <div className="grid gap-4 max-w-2xl">
        {[
          { name: "r/oneplus", desc: "The main OnePlus subreddit. Over 500k members. Great for news, reviews, and general help.", url: "https://www.reddit.com/r/oneplus/" },
          { name: "r/AndroidRoot", desc: "The dedicated Android rooting subreddit. Ask detailed rooting questions and get expert answers.", url: "https://www.reddit.com/r/androidroot/" },
          { name: "r/LineageOS", desc: "Dedicated to LineageOS custom ROM. Great resource if you're planning to flash a custom ROM.", url: "https://www.reddit.com/r/LineageOS/" },
        ].map((sub) => (
          <Card key={sub.name}>
            <CardHeader><CardTitle>{sub.name}</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>{sub.desc}</p>
              <a href={sub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                Visit {sub.name} <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
