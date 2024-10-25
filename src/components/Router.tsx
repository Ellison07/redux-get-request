import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
