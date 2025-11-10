import {ArrowRight, Zap, TrendingUp, Star} from 'lucide-react';

const streamingServices = [
  {
    id: 'netflix',
    name: 'Netflix',
    color: '#E50914',
    description: 'Binge-worthy originals',
    featured: 'Stranger Things, The Crown, Wednesday',
    icon: '🎬',
  },
  {
    id: 'apple',
    name: 'Apple TV+',
    color: '#555555',
    description: 'Premium storytelling',
    featured: 'Ted Lasso, Foundation, Severance',
    icon: '🍎',
  },
  {
    id: 'prime',
    name: 'Prime Video',
    color: '#146EB4',
    description: 'Exclusive productions',
    featured: 'The Boys, Rings of Power, Invincible',
    icon: '🎯',
  },
  {
    id: 'disney',
    name: 'Disney+',
    color: '#113CCF',
    description: 'Magical originals',
    featured: 'Andor, Loki, The Mandalorian',
    icon: '⭐',
  },
];

const trendingShows = [
  {
    title: 'The Last of Us',
    platform: 'HBO Max',
    genre: 'Drama',
    rating: 9.2,
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Oppenheimer: Limited Series',
    platform: 'Netflix',
    genre: 'Thriller',
    rating: 8.9,
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'Dark Matter',
    platform: 'Apple TV+',
    genre: 'Sci-Fi',
    rating: 8.7,
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'Fallout',
    platform: 'Prime Video',
    genre: 'Action',
    rating: 8.5,
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
];

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
              Your gateway to the best exclusive shows and movies from Netflix,
              Apple TV+, Prime Video, and more. Explore all your favorite
              streaming platforms in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="btn btn-primary gap-2">
                Start Exploring <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {streamingServices.map(service => (
              <div
                key={service.id}
                className="card bg-base-200 border border-base-300 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="card-body">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="card-title text-xl">{service.name}</h3>
                  <p className="text-sm text-base-content/60">
                    {service.description}
                  </p>
                  <p className="text-xs text-base-content/50 italic line-clamp-2">
                    {service.featured}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 md:py-32 border-t border-base-300 bg-base-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-primary" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Trending Now</h2>
            </div>
            <p className="text-base-content/60">
              The most talked-about originals across all platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingShows.map((show, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div
                  className="relative h-64 rounded-lg overflow-hidden mb-4 border border-base-300"
                  style={{background: show.image}}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Zap className="text-primary size-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {show.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-base-content/60">
                  <span>{show.platform}</span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-primary fill-primary" />
                    <span>{show.rating}</span>
                  </div>
                </div>
              </div>
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
            Browse thousands of original shows and movies. Compare ratings, find
            your next obsession, and get personalized recommendations.
          </p>
          <button className="btn btn-primary gap-2 btn-lg">
            Explore All Originals <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
