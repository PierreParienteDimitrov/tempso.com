import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <PageSection background="dark" className="relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              Open classical music project
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Classical music,
              <br />
              <span className="text-gray-400">finally done right.</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl">
              Tempso is an open-source encyclopedia and a modern streaming app
              designed for the unique structure of classical music.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
              >
                Download App
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:bg-white/10"
              >
                Web App · Coming Soon
              </Button>
            </div>

            <Link
              href="#mission"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              Explore the Open Project <span>→</span>
            </Link>

            <p className="text-sm text-gray-500">
              Loved by musicians, students, and curious listeners worldwide.
            </p>
          </div>

          {/* Right Column: Visual/Mockup */}
          <div className="relative w-full max-w-[300px] mx-auto lg:max-w-none lg:ml-auto flex justify-center">
            {/* Placeholder for Phone Mockup */}
            <div className="relative aspect-[9/16] w-full max-w-sm bg-gray-800 rounded-[3rem] border-8 border-gray-900 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-50" />
              <span className="relative z-10 text-gray-500 font-medium">
                App Mockup
              </span>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-12 bg-slate-800/80 backdrop-blur px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-300 shadow-xl transform rotate-3">
                Symphony No. 3
              </div>
              <div className="absolute bottom-1/4 -left-8 bg-slate-800/80 backdrop-blur px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-300 shadow-xl transform -rotate-2">
                Compare Recordings
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
