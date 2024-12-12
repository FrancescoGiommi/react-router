/* Import Outlet */
import { Outlet } from "react-router-dom";

/* Import NavBar */
import NavBar from "../components/NavBar";

export default function AlternativeLayout() {
  return (
    <>
      <div className="page-wrapper">
        <header>
          <NavBar />
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
