import React from "react";
import { Container } from "@/components/layout/Container";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/button";

export function ComingSoonSection() {
  return (
    <PageSection background="muted" id="coming-soon">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text & Form */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              What’s next for Tempso.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re bringing the Tempso experience to the web and completely
              redesigning our mobile app.
            </p>

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tempso Web
                </h3>
                <p className="text-gray-600">
                  A full-featured desktop experience for serious listening and
                  research.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Next-gen Mobile App
                </h3>
                <p className="text-gray-600">
                  Rebuilt from the ground up for speed, beauty, and depth.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Get early access
              </label>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none"
                  required
                />
                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800 whitespace-nowrap"
                >
                  Notify me
                </Button>
              </form>
              <p className="text-xs text-gray-400 mt-3">
                No spam. We’ll email you only when it’s ready.
              </p>
            </div>
          </div>

          {/* Right: Teaser Visuals */}
          <div className="space-y-6">
            {/* Web Teaser */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 aspect-[16/10] relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors">
                <span className="text-gray-400 font-medium">
                  Web App Preview
                </span>
              </div>
              {/* Mock browser header */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
              </div>
            </div>

            {/* Mobile Teaser */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 aspect-[16/10] relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors">
                <span className="text-gray-400 font-medium">
                  Mobile App Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
