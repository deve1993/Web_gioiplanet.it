"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { clsx } from "clsx";

const ALTRI_SERVIZI = [
  { name: "Gioielli Ricondizionati", href: "/gioielli-ricondizionati" },
  { name: "Aste", href: "/aste" },
];

const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Compravendita", href: "/compravendita" },
  { name: "Stime e Perizie", href: "/stime-perizie" },
  { name: "Altri Servizi", href: "#", hasDropdown: true },
  { name: "Galleria", href: "/shop" },
  { name: "Contatti", href: "/contatti" },
  { name: "Dove Siamo", href: "/dove-siamo" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Chiudi menu mobile al cambio route
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [pathname]);

  // Blocca scroll quando menu mobile è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Chiudi dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "#") {
      return ALTRI_SERVIZI.some((s) => pathname.startsWith(s.href));
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm h-16 lg:h-20 transition-all">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-10 lg:h-12 w-auto shrink-0">
          <Image
            src="/logo.png"
            alt="GioiPlanet"
            width={160}
            height={48}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Navigazione principale"
        >
          {NAVIGATION.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={clsx(
                    "font-medium transition-colors relative group flex items-center gap-1",
                    isActive(item.href)
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)]",
                  )}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  {item.name}
                  <ChevronDown
                    className={clsx(
                      "w-4 h-4 transition-transform",
                      isDropdownOpen && "rotate-180",
                    )}
                  />
                  <span
                    className={clsx(
                      "absolute left-0 bottom-0 h-0.5 bg-[var(--color-primary)] transition-all",
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[var(--color-border)] py-2 z-50">
                    {ALTRI_SERVIZI.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={clsx(
                          "block px-4 py-2 text-sm transition-colors",
                          isActive(subItem.href)
                            ? "text-[var(--color-primary)] bg-[var(--color-gray-accent)]"
                            : "text-[var(--color-text)] hover:bg-[var(--color-gray-accent)] hover:text-[var(--color-primary)]",
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "font-medium transition-colors relative group",
                  isActive(item.href)
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary)]",
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
                <span
                  className={clsx(
                    "absolute left-0 bottom-0 h-0.5 bg-[var(--color-primary)] transition-all",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            ),
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[var(--color-text)]"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Apri menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        className={clsx(
          "fixed inset-0 bg-white z-[60] transition-transform duration-300 ease-in-out lg:hidden flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-[var(--color-border)]">
          <span className="font-bold text-xl text-[var(--color-primary)]">
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Chiudi menu"
          >
            <X className="w-8 h-8 text-[var(--color-text)]" />
          </button>
        </div>
        <nav
          className="flex flex-col p-8 gap-4 overflow-y-auto"
          aria-label="Navigazione mobile"
        >
          {NAVIGATION.map((item) =>
            item.hasDropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className={clsx(
                    "text-xl font-medium transition-colors flex items-center gap-2 w-full",
                    isActive(item.href)
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)]",
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={clsx(
                      "w-5 h-5 transition-transform",
                      isMobileDropdownOpen && "rotate-180",
                    )}
                  />
                </button>
                {isMobileDropdownOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-3">
                    {ALTRI_SERVIZI.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={clsx(
                          "text-lg transition-colors",
                          isActive(subItem.href)
                            ? "text-[var(--color-primary)]"
                            : "text-[var(--color-text-light)] hover:text-[var(--color-primary)]",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-xl font-medium transition-colors",
                  isActive(item.href)
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary)]",
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
