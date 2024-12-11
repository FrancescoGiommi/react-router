/* Import Outlet */
import { Outlet } from "react-router-dom";

/* Import NavBar */
import NavBar from "../components/NavBar";

export default function DefoultLayout() {
  return (
    <>
      <div className="page-wrapper">
        <header>
          <NavBar />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>Footer</footer>
      </div>
    </>
  );
}
