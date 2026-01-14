import { Navlinks } from "./components/nav-links";
import { NavSearch } from "./components/nav-search";
export const Navbar = () => {
  console.log(`Navbar rendered`);
  return (
    <div>
      <Navlinks />
      <NavSearch />
    </div>
  );
};
