import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Kishan's Portfolio
        </Link>
      </div>
      <a href="/images/cv.pdf" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;