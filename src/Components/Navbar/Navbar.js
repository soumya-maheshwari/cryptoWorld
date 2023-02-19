import React from "react";
import styles from "./Navbar.css";
import ThemeProvider from "@mui/material";
// import createTheme from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { CryptoState } from "../../ContextApi";
function Navbar() {
  const { currency, setCurrency } = CryptoState();
  // const ok = "isd";
  // const darjTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#fff",
  //     },
  //     type: "dark",
  //   },
  // });
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <>
      <nav>
        <h1 className="nav-heading">crypto World</h1>
        <Select
          className="ss"
          variant="outlined"
          style={{
            width: 100,
            height: 50,
            display: "flex",
            alignItems: "center",
            color: "white",
            backgroundColor: "black",
          }}
          value={currency}
          onChange={handleChange}
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"INR"}>INR</MenuItem>
        </Select>
      </nav>
    </>
  );
}

export default Navbar;
