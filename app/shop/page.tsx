import { Metadata } from "next";
import { Suspense } from "react";
import { ShopContent } from "./ShopContent";
import { ProductSkeletonGrid } from "@/components/shop/ProductSkeleton";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Galleria Gioielli | GioiPlanet",
  description:
    "Esplora la nostra collezione esclusiva di gioielli rigenerati, orologi di prestigio e occasioni uniche garantite dai nostri esperti.",
};

function ShopLoadingFallback() {
  return (
    <main>
      <Hero
        title="La Nostra Collezione"
        subtitle="Gioielli rigenerati, orologi di prestigio e occasioni uniche garantite dai nostri esperti."
        backgroundImage="/herosection.jpg"
      />
      <div className="container mx-auto px-4 py-8">
        <ProductSkeletonGrid count={9} viewMode="grid" />
      </div>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoadingFallback />}>
      <ShopContent />
    </Suspense>
  );
}
