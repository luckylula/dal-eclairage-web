import { ThemeSelector } from "@/components/ThemeSelector";
import { TypographySelector } from "@/components/TypographySelector";

export function SelectorDock() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <ThemeSelector />
      <TypographySelector />
    </div>
  );
}
