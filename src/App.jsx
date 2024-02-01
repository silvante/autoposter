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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayOut />}>
        <Route path="*" element={<Error />} />
        <Route path="/" index element={<Home />} />
        <Route path="/aksiyalar" element={<Aksiyalar />} />
        <Route path="/:mark" element={<CarModels />} />
        <Route path="/aksiyalar" element={<DatailLayout />}>
          <Route path="/aksiyalar/:title" element={<AksiyaDatails />} />
        </Route>
        <Route path="/mark" element={<AftermarksLay />}>
          <Route path="/mark/:model" element={<SelectedCars />} />
          <Route path="/mark/model/filter" element={<Filter/>}/>
          <Route path="/mark/model/sotib-olish" element={<OtherLayout />}>
            <Route path="/mark/model/sotib-olish/:id" element={<Buycar />} />
          </Route>
        </Route>
        <Route path="/kredit" element={<Kredit />} />
        <Route path="/sotib-olish" element={<BuyLayOut />}>
          <Route path="/sotib-olish/:id" element={<Buycar />} />
        </Route>
        <Route path="/kontactlar" element={<Kontaktlar/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
