import { Link } from "react-router-dom";
// import { CitySearch } from "./city-search";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/context/theme-provider";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <span
            className={`text-3xl font-extrabold tracking-wide ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            } bg-clip-text text-transparent`}
          >
            Weathrly
          </span>
        </Link>

        <div className="flex gap-4">
          {/* <CitySearch /> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
