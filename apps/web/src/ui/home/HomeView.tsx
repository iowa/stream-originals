import {ArrowRight} from 'lucide-react';
import {streamerValues} from '@repo/common';
import Link from 'next/link';
import {Paths} from '@/lib/Paths';
import StreamerLogo from '@/lib/streamer/StreamerLogo';

export default function HomeView() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-base-100">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-screen blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-screen blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-balance">Discover Extraordinary</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Original Content
              </span>
            </h1>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto text-balance">
              Your gateway to the best exclusive shows and movies. Explore all
              your favorite streaming platforms in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="btn btn-primary gap-2 btn-lg">
                Explore All Originals <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {streamerValues.map(streamer => (
              <Link key={streamer} href={Paths.streamer(streamer)}>
                <div className="card bg-base-200 border border-base-300 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="card-body flex items-center">
                    <StreamerLogo streamer={streamer} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-base-300 bg-base-100">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready to dive into something new?
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            Browse thousands of original shows and movies. Compare streaming
            media services, find your next obsession,
          </p>
        </div>
      </section>
    </div>
  );
}
