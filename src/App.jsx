import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut";
import Home from "./pages/Home";
import Aksiyalar from "./pages/Aksiyalar";
import AksiyaDatails from "./pages/AksiyaDatails";
import DatailLayout from "./layouts/DatailLayout";
import CarModels from "./pages/CarModels";
import AftermarksLay from "./layouts/AftermarksLay";
import SelectedCars from "./pages/SelectedCars";
// import Buycar from "./pages/Buycar";
import Kredit from "./pages/Kredit";
import BuyLayOut from "./layouts/BuyLayOut";
import Buycar from "./pages/Buycar";
import OtherLayout from "./layouts/OtherLayout";
import Kontaktlar from "./pages/Kontaktlar";
import Filter from "./pages/Filter";
import Katalog from "./pages/Katalog";
import NotFound from "./pages/NotFound";
import Model from "./pages/Model";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayOut />}>
        <Route path="/" index element={<Home />} />
        <Route path="/aksiyalar" element={<Aksiyalar />} />
        <Route path="/:mark" element={<CarModels />} />
        <Route path="/aksiyalar" element={<DatailLayout />}>
          <Route path="/aksiyalar/:id" element={<AksiyaDatails />} />
        </Route>
        <Route path="/sale" element={<AftermarksLay />}>
          <Route path="/sale/:mark/car/:model" element={<SelectedCars />} />
          <Route path="/sale/:mark/filter" element={<Filter />} />
          <Route path="/sale/:mark/sotib-olish/:id" element={<Buycar />} />
          <Route
            path="/sale/:mark/car/:model/sotib-olish/:id"
            element={<Buycar />}
          />
        </Route>
        <Route path="/kredit" element={<Kredit />} />
        <Route path="/sotib-olish" element={<BuyLayOut />}>
          <Route path="/sotib-olish/:id" element={<Buycar />} />
        </Route>
        <Route path="/bog'lanish" element={<Kontaktlar />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/katalog">
          <Route path="/katalog/:id" element={<Buycar />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
