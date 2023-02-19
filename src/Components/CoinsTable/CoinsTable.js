import React, { useEffect, useState } from "react";
import { CoinList } from "../../Config/Api";
import { CryptoState } from "../../ContextApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
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
import styles from "./CoinsTable.css";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {
  const { coins, setCoins } = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);
  //   console.log(coins);

  const handleSearch = () => {
    return coins.filter((coin) => {
      // to check if it includes

      coin.name.toLowerCase().includes(search);
      coin.symbol.toLowerCase().includes(search);
    });
  };

  const navigate = useNavigate();
  return (
    <Container className="bg" style={{ textAlign: "center" }}>
      <Typography variant="h4" style={{ margin: 20 }}>
        Cryptocurrency Prices by Market Cap
      </Typography>

      <TextField
        label="search for a crypto currency...."
        variant="outlined"
        style={{ width: "100%" }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <TableContainer component={Paper}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table>
            <TableHead style={{ backgroundColor: "red" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                    }}
                    key={head}
                    align={head === "Coin" ? "" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {handleSearch().map((row) => {
                const profit = row.price_change_percentage_24 > 0;
                return (
                  <TableRow
                    onClick={() => navigate(`/coins/${row.id}`)}
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
                        src={row.image}
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
                        <span style={{ color: "darkgrey" }}>{row.name}</span>
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
                      M
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Container>
  );
};

export default CoinsTable;
