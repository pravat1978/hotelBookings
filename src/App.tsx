import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

const HotelDetail = lazy(() => import("./components/hotels/HotelDetail"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
