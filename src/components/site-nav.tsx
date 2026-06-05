import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag } from "lucide-react";

const links = ["Store", "Phone", "Specs", "Support", "Reviews"];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-11 max-w-5xl items-center justify-between px-6 text-sm">
        <Link to="/" className="font-semibold tracking-tight text-foreground">
          ◐ Lumen
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="text-foreground/80 transition-colors hover:text-foreground">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 text-foreground/80">
          <Search className="h-4 w-4 cursor-pointer hover:text-foreground" />
          <ShoppingBag className="h-4 w-4 cursor-pointer hover:text-foreground" />
        </div>
      </nav>
    </header>
  );
}
