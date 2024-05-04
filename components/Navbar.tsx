import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href={"/"} className="navbar-brand">
        NTHYKYLDSS
      </Link>
      <Link href={"/"} className="nav-item nav-link">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
