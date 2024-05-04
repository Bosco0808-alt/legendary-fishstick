import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href={"/"} className="navbar-brand m-2">
        NTHYKYLDSS
      </Link>
      <Link href={"/"} className="nav-item nav-link m-2">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
