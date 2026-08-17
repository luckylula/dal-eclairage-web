import { HeaderVariantSelector } from "@/components/HeaderVariantSelector";

export function SelectorDock() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      <div className="pointer-events-auto">
        <HeaderVariantSelector />
      </div>
    </div>
  );
}
