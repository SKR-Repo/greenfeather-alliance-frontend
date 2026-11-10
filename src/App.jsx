import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ComingSoonPage from "./pages/ComingSoonPage";
import ForBusinessPage from "./pages/ForBusinessPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import GetStartedPage from "./pages/GetStartedPage";
import HomePage from "./pages/HomePage";
import ImpactPage from "./pages/ImpactPage";
import LearnPage from "./pages/LearnPage";
import WorkPage from "./pages/WorkPage";

/**
 * All website routes live here.
 *
 * <Layout /> wraps every page with Navbar + Footer; the matched page renders
 * in between (inside <Outlet />). To add a page: create it in src/pages and
 * add a <Route path="..." element={<YourPage />} /> above the "*" fallback.
 */
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="our-work" element={<WorkPage />} />
        <Route path="our-impact" element={<ImpactPage />} />
        {/* the donation page: reached from "Get Involved" and from the navbar "Give" button */}
        <Route path="get-involved" element={<GetInvolvedPage />} />
        <Route path="get-involved/ways-to-give" element={<GetInvolvedPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="for-business" element={<ForBusinessPage />} />
        {/* "Work with us" / "Let’s work together" buttons all lead to the same form (as on the live site) */}
        <Route path="get-started" element={<GetStartedPage />} />
        <Route path="for-business/work-with-us" element={<GetStartedPage />} />

        {/* every page that isn't built yet falls back to this placeholder */}
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
