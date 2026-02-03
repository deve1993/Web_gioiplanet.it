import Link from "next/link";
import { Button } from "./ui/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = "/herosection.jpg",
}: HeroProps) {
  return (
    <div className="relative h-[500px] lg:h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Gradient Overlay - Più leggero a destra per mostrare i diamanti */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 z-10" />

      {/* Content - Allineato a sinistra */}
      <div className="container relative z-20 px-4 lg:px-8">
        <div className="max-w-2xl">
          {/* Title con gradient text */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-wide text-left">
            <span className="bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent drop-shadow-2xl">
              {title}
            </span>
          </h1>

          {/* Subtitle - grigio chiaro */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed tracking-wide text-left">
            {subtitle}
          </p>

          {ctaText && ctaLink && (
            <div className="flex justify-start">
              <Link href={ctaLink}>
                <Button size="lg" className="shadow-xl shadow-sky-500/25">
                  {ctaText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
