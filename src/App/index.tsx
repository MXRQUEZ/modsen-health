import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { pages } from "@/constants/pages";
import Layout from "./layout";
import Home from "@/pages/home";

const App = () => {
  return (
    <Suspense fallback={<div>Loader</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pages.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
