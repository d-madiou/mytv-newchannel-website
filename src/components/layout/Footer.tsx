import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center gap-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}