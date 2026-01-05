import React from "react";
import { Container } from "@/components/layout/Container";
import { PageSection } from "@/components/layout/PageSection";

export function AboutSection() {
  return (
    <PageSection background="default" id="about">
      <Container className="text-center max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-8">
          Built by musicians, designers, developers — and you.
        </h2>
        <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
          <p>
            Tempso started as a passion project to fix the broken experience of
            streaming classical music. Today, it is growing into a community
            effort involving musicologists, students, and developers from around
            the world.
          </p>
          <p className="font-medium text-gray-900">
            Anyone can join. Everyone can contribute.
          </p>
        </div>
      </Container>
    </PageSection>
  );
}
