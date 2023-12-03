import { DesktopNavLinks } from "./navlinks/DesktopNavLinks";

export const DesktopMenu = () => {
  return (
    <section className="hidden lg:flex">
      <DesktopNavLinks />
    </section>
  );
};
