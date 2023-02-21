import React, { useEffect, useState } from "react";
import { CoinList } from "../../Config/Api";
import { CryptoState } from "../../ContextApi";
import axios from "axios";
import styles from "./CoinsTable.css";
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

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { currency, symbol } = CryptoState();
  // const [page, setPage] = useState(1);

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
        className="search-box"
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{ marginBottom: 20, width: "100" }}
        onChange={handleChange}
      />
      <TableContainer component={Paper}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table className="tablee">
            <TableHead style={{ backgroundColor: "blue" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "900",
                      fontFamily: "Montserrat",
                    }}
                    key={head}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {handleSearch.map((row) => {
                return (
                  <Coin
                    key={row.id}
                    name={row.name}
                    image={row.image}
                    symbol={row.symbol}
                    volume={row.market_cap}
                    price={row.current_price}
                    priceChange={row.price_change_percentage_24h}
                  />
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      {/* {handleSearch.map((row) => {
        return (
          <Coin
            key={row.id}
            name={row.name}
            image={row.image}
            symbol={row.symbol}
            volume={row.market_cap}
            price={row.current_price}
            priceChange={row.price_change_percentage_24h}
          />
        );
      })} */}
    </Container>
  );
};

export default CoinsTable;
