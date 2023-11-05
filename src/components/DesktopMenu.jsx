import { DesktopNavLinks } from "./navlinks/DesktopNavLinks";

export function DesktopMenu() {
  return (
    <section className="hidden lg:flex">
      <DesktopNavLinks />
    </section>
  );
}
