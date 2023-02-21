import React, { useEffect, useState } from "react";
import { CoinList } from "../../Config/Api";
import { CryptoState } from "../../ContextApi";
import axios from "axios";
import { Pagination } from "@mui/material";
import { Container } from "@mui/system";
import Coin from "../Coin";
import {
  LinearProgress,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  Table,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import styles from "./CoinsTable.css";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { currency, symbol } = CryptoState();
  const [page, setPage] = useState(1);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);

    // console.log(coins);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  // const handleSearch = () => {
  //   return coins.filter((coin) => {
  //     console.log(coins);
  //     coin.name.toLowerCase().includes(search.toLowerCase());
  //     // coin.symbol.toLowerCase().includes(search.toLowerCase());
  //   });
  // };

  const handleSearch = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: "center" }}>
      <Typography variant="h4" style={{ margin: 18 }}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      <TextField
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{ marginBottom: 20, width: "100%" }}
        onChange={handleChange}
      />
      <TableContainer component={Paper}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table>
            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    key={head}
                    align={head === "Coin" ? "" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {/* 
            <TableBody>
              {handleSearch().map((row) => {
                console.log(row);
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <TableRow
                    // onClick={() => navigate(`/coins/${row.id}`)}
                    key={row.name}
                  >
                    {" "}
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        display: "flex",
                        gap: 15,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="50"
                        style={{ marginBottom: 10 }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                          {row.symbol}
                        </span>
                        <span style={{ color: "green" }}>{row.name}</span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">
                      {symbol}{" "}
                      {numberWithCommas(row.market_cap.toString().slice(0, -6))}
                      Mm
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody> */}
          </Table>
        )}
      </TableContainer>

      {handleSearch.map((row) => {
        return (
          <Coin
            key={row.id}
            name={row.name}
            image={row.image}
            symbol={row.symbol}
            volume={row.market_cap}
            price={row.current_price}
          />
        );
      })}
    </Container>
  );
};

export default CoinsTable;
