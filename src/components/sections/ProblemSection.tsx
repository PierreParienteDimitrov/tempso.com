import React from "react";
import { Container } from "@/components/layout/Container";
import { PageSection } from "@/components/layout/PageSection";

export function ProblemSection() {
  return (
    <PageSection background="default" id="problem">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Classical music deserves better metadata.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Streaming services were built for songs, not symphonies. They
              flatten complex works into simple playlists, mixing up composers,
              performers, and movements in ways that make discovery impossible.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This breaks search, study, and the simple joy of listening to a
              complete work from start to finish.
            </p>
          </div>

          {/* Right: Card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              What’s broken today:
            </h3>
            <ul className="space-y-4">
              {[
                "Composers and performers are mixed up.",
                "Movements appear as unrelated tracks.",
                "Searching for a work often returns noise.",
                "No view of eras, genres, or instrumentation.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">
                    ✕
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
