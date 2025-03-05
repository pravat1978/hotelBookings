import React from "react";
import MainLayout from "./layout/MainLayout";
import SearchPanel from "./search/SearchPanel";
import HotelGrid from "./hotels/HotelGrid";
import HeroBanner from "./layout/HeroBanner";

function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <div className="w-full py-8 px-4 space-y-12 bg-white">
        <section className="-mt-32 relative z-20">
          <SearchPanel className="mb-12" />
        </section>

        <section className="pt-8">
          <HotelGrid />
        </section>
      </div>
    </MainLayout>
  );
}

export default Home;
