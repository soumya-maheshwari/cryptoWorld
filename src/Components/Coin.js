import React from "react";
import { Table, TableCell, TableRow } from "@mui/material";
import styles from "./Coin.css";
const Coin = ({ name, image, symbol, price, volume, priceChange }) => {
  return (
    <Table>
      <div className="coin-row">
        <TableRow>
          <TableCell>
            <img src={image} className="imgg" alt="crypto" />
          </TableCell>

          <TableCell>
            <h1 className="coin-name">{name} </h1>
          </TableCell>

          <TableCell>
            <p className="coin-symbol">{symbol}</p>
          </TableCell>

          <TableCell>
            <p className="coin-price">${price}</p>
          </TableCell>

          <TableCell>
            <p className="coin-volume">${volume.toLocaleString()}</p>
          </TableCell>

          <TableCell className="price" style={{ alignContent: "right" }}>
            {priceChange < 0 ? (
              <p className="red">{priceChange.toFixed(2)}</p>
            ) : (
              <p className="green">{priceChange.toFixed(2)}</p>
            )}
          </TableCell>
        </TableRow>
      </div>
    </Table>
  );
};

export default Coin;
