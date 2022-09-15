import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { RiseLoader } from "react-spinners";
const App = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center pt-[20%]">
          <RiseLoader
            color="#7329ac"
            loading={loading}
            margin="30%%"
            size={40}
            speedMultiplier={1}

          />
        </div>
      ) : (
        <div className="h-screen bg-white">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
