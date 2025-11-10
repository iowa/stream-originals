'use client';

import {useEffect, useRef, useState} from 'react';
import {ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
import {Streamer, TitleListDto} from '@repo/common';
import TitlesPoster from '@/ui/titles/TitlesPoster';
import AppLine from '@/ui/app/AppLine';
import Link from 'next/link';
import {Paths} from '@/lib/Paths';

export default function StreamerTopTitles({
  streamer,
  titles,
}: {
  streamer: Streamer;
  titles: TitleListDto[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  });

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const {scrollLeft, scrollWidth, clientWidth} = container;
      setScrollState({
        canScrollLeft: scrollLeft > 0,
        canScrollRight: scrollLeft < scrollWidth - clientWidth - 10,
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400 * (direction === 'left' ? -1 : 1);
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-[800px]">
      <div className="flex justify-between items-center">
        <AppLine>
          <h2 className="text-4xl font-bold">Top 10</h2>
        </AppLine>
        <Link href={Paths.titles(streamer)}>
          <div className="flex text-lg items-center gap-2">
            All titles
            <ArrowRight />
          </div>
        </Link>
      </div>
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-2"
        >
          {titles.map(title => (
            <Link key={title.id} href={Paths.title(title.id)}>
              <TitlesPoster title={title} width={180} height={252} />
            </Link>
          ))}
        </div>
        <button
          onClick={() => scroll('left')}
          disabled={!scrollState.canScrollLeft}
          className={`btn btn-circle btn-lg absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-10 bg-white hover:bg-gray-200 text-black border-0 transition-all duration-300 ${
            scrollState.canScrollLeft
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!scrollState.canScrollRight}
          className={`btn btn-circle btn-lg absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-10 bg-white hover:bg-gray-200 text-black border-0 transition-all duration-300 ${
            scrollState.canScrollRight
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
