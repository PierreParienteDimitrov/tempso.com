import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/button";
import MobileHomepagePreview from "@/components/sections/home/MobileHomepagePreview";

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
            {/* Phone Mockup with Mobile Homepage */}
            <div className="relative aspect-[9/16] w-full max-w-sm bg-gray-800 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
              <MobileHomepagePreview />
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
