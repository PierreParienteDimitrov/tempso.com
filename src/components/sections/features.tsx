import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { IconMusicNote, IconPlaylist, IconRadio, IconWaveform } from '@/components/ui/icons'
import { Grid } from '@/components/ui/grid'
import Image from 'next/image'

const features = [
  {
    icon: IconMusicNote,
    title: "Smart Music Discovery",
    description: "Discover classical music tailored to your taste with our intelligent recommendation system."
  },
  {
    icon: IconPlaylist,
    title: "Custom Playlists",
    description: "Create and manage classical playlists across different streaming services in one place."
  },
  {
    icon: IconRadio,
    title: "Live Radio Integration",
    description: "Listen to your favorite classical radio stations and discover new ones worldwide."
  },
  {
    icon: IconWaveform,
    title: "Sound Quality Control",
    description: "Adjust audio settings and quality for the perfect classical listening experience."
  }
]

export function Features() {
  return (
    <section className="section bg-gray-900">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="mb-4">
              <span className="text-lg text-gray-400">Features</span>
            </div>
            <h2 className="text-4xl font-medium mb-6">
              Everything you need for the perfect classical music experience
            </h2>
            <p className="text-lg text-gray-300">
              Tempso brings together all your favorite classical music services into one seamless interface.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer>
          <Grid cols={{ default: 1, md: 2 }} gap={8}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="p-8 rounded-2xl bg-gray-800/50 border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Grid>
        </StaggerContainer>
      </div>
    </section>
  )
}