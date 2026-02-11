"use client"

import { Container } from "@/components/layout/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const issues = [
  "You search for Bach and get random covers.",
  "Movements show up as unrelated tracks.",
  "Composers and performers are mixed together.",
  "No way to browse by era, genre, or instrumentation.",
];

export function ProblemSection() {
  return (
    <section className="py-24 border-t border-[#2c2929]" id="problem">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Classical music deserves a better app.
              </h2>
              <p className="text-lg text-[#aaa6a6] leading-relaxed">
                Spotify and Apple Music were built for pop songs, not symphonies.
                They flatten complex works into messy playlists, mix up composers
                with performers, and make it nearly impossible to find the
                recording you want.
              </p>
              <p className="text-lg text-[#aaa6a6] leading-relaxed">
                Whether you&apos;re studying a score, comparing interpretations, or
                simply trying to play a complete symphony — the experience is
                broken.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#171717] rounded-2xl p-8 border border-[#2c2929]">
              <h3 className="text-xl font-semibold mb-6 text-white">
                What&apos;s broken today:
              </h3>
              <StaggerContainer className="space-y-4">
                {issues.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ef8383]/20 flex items-center justify-center text-[#ef8383] text-sm font-bold">
                        ✕
                      </span>
                      <span className="text-[#aaa6a6]">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
