import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="flex justify-center p-4">
                <ul className="flex list-none m-0 p-0 space-x-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-emerald-600 underline"
                                    : "text-slate-600 hover:text-emerald-600"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-emerald-600 underline"
                                    : "text-slate-600 hover:text-emerald-600"
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-emerald-600 underline"
                                    : "text-slate-600 hover:text-emerald-600"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/actors"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-emerald-600 underline"
                                    : "text-slate-600 hover:text-emerald-600"
                            }
                        >
                            Actor List
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;