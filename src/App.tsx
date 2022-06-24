import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Enterprise from "./components/enterprise";
import Government from "./components/government";
import University from "./components/university";

const enterpriseList = [
  {
    id: 1,
    name: "Alta Software",
    operation: "Software and IoT",
    foundedYear: 2002,
  },
  {
    id: 2,
    name: "TMA Solution",
    operation: "Software",
    foundedYear: 2000,
  },
  {
    id: 3,
    name: "Tropical Company",
    operation: "Agreculture",
    foundedYear: 1990,
  },
  {
    id: 4,
    name: "Viettel Group",
    operation: "Telecommucation",
    foundedYear: 1995,
  },
];

const governmentList = [
  {
    id: 1,
    name: "Ho Chi Minh City",
    center: "District 1",
  },
  {
    id: 2,
    name: "Binh Phuoc",
    center: "Dong Xoai",
  },
  {
    id: 3,
    name: "Long An",
    center: "Tan An",
  },
];

const universityList = [
  {
    id: 1,
    name: "Ton Duc Thang University",
    address: "19, Nguyen Huu Tho, Tan Phong Ward, District 7",
    foundedYear: 1997,
  },
  {
    id: 2,
    name: "Bach Khoa University",
    address: "268, Ly Thuong Kiet, Ward 14, District 10",
    foundedYear: 1957,
  },
  {
    id: 3,
    name: "The University of Economics",
    address: "59C, Nguyen Dinh Chieu, Ward 6, District 3",
    foundedYear: 1976,
  },
  {
    id: 4,
    name: "Van Lang University",
    address: "45, Nguyen Khac Nhu, Co Giang Ward, District 1",
    foundedYear: 1995,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/government">Government</Link>
          </li>
          <li>
            <Link to="/university">University</Link>
          </li>
          <li>
            <Link to="/enterprise">Enterprise</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={<Enterprise enterprise={enterpriseList} />}
          />
          <Route
            path="/enterprise"
            element={<Enterprise enterprise={enterpriseList} />}
          />
          <Route
            path="/government"
            element={<Government government={governmentList} />}
          />
          <Route
            path="/university"
            element={<University university={universityList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
