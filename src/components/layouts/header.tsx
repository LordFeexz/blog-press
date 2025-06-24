import { FileText } from "lucide-react";
import LangToggle from "../common/lang-toggle";
import ThemeToggle from "../common/theme-toggle";

export default function Header() {
  return (
    <header
      id="app-header"
      className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Blog Press</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LangToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
