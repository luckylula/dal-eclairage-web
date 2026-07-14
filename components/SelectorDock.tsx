import { AccentColorSelector } from "@/components/AccentColorSelector";
import { TypographySelector } from "@/components/TypographySelector";

export function SelectorDock() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <TypographySelector />
      <AccentColorSelector />
    </div>
  );
}
