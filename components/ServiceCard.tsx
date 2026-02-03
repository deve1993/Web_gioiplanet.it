import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  link,
}: ServiceCardProps) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Icon container con gradient */}
      <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-sky-100 group-hover:to-sky-50 transition-all duration-300 shadow-sm">
        <Icon
          className="w-10 h-10 text-[var(--color-primary)] group-hover:text-sky-600 transition-colors"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="text-xl font-bold mb-3 text-[var(--color-text)] group-hover:text-slate-900 transition-colors">
        {title}
      </h3>

      <p className="text-[var(--color-text-light)] mb-6 leading-relaxed text-sm">
        {description}
      </p>

      {link && (
        <Link
          href={link}
          className="inline-flex items-center font-semibold text-[var(--color-primary)] hover:text-sky-700 transition-colors group/link"
        >
          Scopri di più
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
