import React, { createContext, useState, useEffect } from "react";
import Menubar from "./components/menubar";
import CreateContent from "./components/CreateContent";
import { Route, Routes } from "react-router-dom";
import NewProfile from "./pages/NewProfile";
import MainPage from "./pages/mainPage";
import Contacts from "./pages/Contacts";
export const ContactContext = createContext(null);
const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  // Load from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem("submittedData");

    if (stored) {
      setSubmittedData(...submittedData, JSON.parse(stored));
    }
  }, []);
  return (
    <ContactContext.Provider value={{ submittedData, setSubmittedData }}>
      <div className="">
        <Routes>
          <Route path="/newcontact" element={<NewProfile />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </ContactContext.Provider>
  );
};

export default App;
