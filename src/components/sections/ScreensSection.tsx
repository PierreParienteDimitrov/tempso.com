import React from "react";
import { Container } from "@/components/layout/Container";
import { PageSection } from "@/components/layout/PageSection";

export function ScreensSection() {
  const screens = [
    { title: "Composer Profile", desc: "Every composer, organized." },
    { title: "Work Structure", desc: "Movements, not just tracks." },
    { title: "Recording Compare", desc: "Find your favorite interpretation." },
    { title: "Era Browsing", desc: "Travel through music history." },
  ];

  return (
    <PageSection background="default" id="screens" className="overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Beautiful, structured, and built for discovery.
          </h2>
          <p className="text-xl text-gray-600">
            An interface designed for the depth of classical music, not the
            simplicity of pop.
          </p>
        </div>

        {/* Scrollable container for mobile, grid for desktop if space allows or keep scroll */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:-mx-0 sm:px-0 gap-6 snap-x">
          {screens.map((screen, idx) => (
            <div
              key={idx}
              className="snap-center flex-shrink-0 w-[280px] sm:w-[320px] flex flex-col"
            >
              <div className="aspect-[9/16] bg-gray-100 rounded-3xl border border-gray-200 mb-6 flex items-center justify-center shadow-sm">
                <span className="text-gray-400 font-medium">
                  Screen {idx + 1}
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {screen.title}
                </h3>
                <p className="text-gray-500">{screen.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}
