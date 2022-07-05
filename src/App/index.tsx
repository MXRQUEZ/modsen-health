import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { pages } from "@/constants/pages";
import Layout from "./layout";

const App = () => {
  return (
    <Suspense fallback={<div>Loader</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pages.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
