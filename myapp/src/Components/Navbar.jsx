import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top">
      <Link to="/">Home</Link>
    </nav>
  );
}
