import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/button";

export function DevSection() {
  return (
    <PageSection background="default" id="dev">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Open source. Open data. Open contribution.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tempso isn't just an app; it's a platform for the future of
              musicology. Our schemas, tools, and client applications are open
              for you to explore and improve.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-gray-900" />
                Open-source repos for web, backend, and metadata models.
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-gray-900" />
                JSON exports and API access (in development).
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-gray-900" />
                Contribution guides and issue tracking.
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default">
                <Link href="https://github.com/tempso" target="_blank">
                  View GitHub Repos
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://discord.gg/tempso" target="_blank">
                  Join Discord
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Code Block Visual */}
          <div className="order-1 lg:order-2 bg-slate-900 rounded-xl p-6 shadow-2xl border border-slate-800 font-mono text-sm overflow-hidden">
            <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="text-blue-300">
              <code>
                {`{
  "work": {
    "title": "Symphony No. 5",
    "composer": "Ludwig van Beethoven",
    "catalog": "Op. 67",
    "key": "C minor",
    "movements": [
      {
        "title": "Allegro con brio",
        "tempo": "108 bpm",
        "form": "Sonata"
      },
      // ... more data
    ]
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
