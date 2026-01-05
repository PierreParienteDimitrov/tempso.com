import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/button";

export function MissionSection() {
  return (
    <PageSection background="muted" id="mission">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              The open, community-powered classical music database.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are building the world&apos;s most comprehensive open graph of
              classical music. Data that belongs to everyone, accessible to
              everyone.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "All composers — from well-known to overlooked voices.",
                "All compositions — with proper structure and context.",
                "All recordings — with performers, dates, and ensembles.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              <Link href="https://github.com/tempso" target="_blank">
                Join the Open Project on GitHub →
              </Link>
            </Button>
          </div>

          {/* Right: Visual (Knowledge Graph Placeholder) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

            {/* Simple node visualization concept */}
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="flex gap-8">
                <div className="w-24 h-24 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center font-bold text-blue-900 shadow-sm">
                  Composer
                </div>
              </div>
              <div className="w-0.5 h-8 bg-gray-300" />
              <div className="flex gap-8">
                <div className="w-24 h-24 rounded-full bg-purple-50 border-2 border-purple-100 flex items-center justify-center font-bold text-purple-900 shadow-sm">
                  Work
                </div>
                <div className="w-24 h-24 rounded-full bg-purple-50 border-2 border-purple-100 flex items-center justify-center font-bold text-purple-900 shadow-sm">
                  Era
                </div>
              </div>
              <div className="w-0.5 h-8 bg-gray-300" />
              <div className="flex gap-8">
                <div className="w-24 h-24 rounded-full bg-green-50 border-2 border-green-100 flex items-center justify-center font-bold text-green-900 shadow-sm">
                  Movement
                </div>
              </div>
            </div>

            <span className="absolute bottom-4 right-4 text-xs text-gray-400 font-mono">
              GRAPH_V1
            </span>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
