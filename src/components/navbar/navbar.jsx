import Logo from "../logo/logo";
import Link from "next/link";

import { auth, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default async function Navbar() {
    // Get the userId from auth() -- if null, the user is not logged in
    const { userId } = auth();
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <Logo />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                Adopters
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                Guardians
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                Help
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                FAQs
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex gap-3">
                        {userId ? (
                            <UserButton afterSignOutUrl="/" />
                        ) : (
                            <>
                                <SignInButton className="btn brand-btn-grey" mode="modal">Login</SignInButton>
                                <SignUpButton className="btn brand-btn" mode="modal">Register</SignUpButton>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
