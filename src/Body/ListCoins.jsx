import React from "react";
import Table from "react-bootstrap/Table";
import { getCoinList } from "../services/api";
import Alert from 'react-bootstrap/Alert';
import PriceNumber from "./PriceNumber";


function ListCoins( {selectedCurrency}) {
  const [coinList, setCoinList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getCoinList(selectedCurrency.name).then((data) => {
      setCoinList(data.slice(0, 100));
      setIsLoading(false)
    });
  }, [selectedCurrency]);

  if (isLoading)
    return (
      <Alert key={"primary"} variant={"primary"}>
      Loading...
      </Alert>
    )
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>7d</th>
          <th>Volume(24h)</th>
          <th>MarketCap</th>
        </tr>
      </thead>
      <tbody>
        {coinList.map(coin => (
          <tr key={coin.rank}>
            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td><PriceNumber value = {coin.quotes[selectedCurrency.name]?.price} symbol = {selectedCurrency.symbol}/></td>
            <td>{coin.quotes[selectedCurrency.name]?.percent_change_1h}%</td>
            <td>{coin.quotes[selectedCurrency.name]?.percent_change_24h}%</td>
            <td>{coin.quotes[selectedCurrency.name]?.percent_change_7d}%</td>
            <td><PriceNumber value = {coin.quotes[selectedCurrency.name]?.volume_24h} symbol = {selectedCurrency.symbol}/></td>
            <td><PriceNumber value = {coin.quotes[selectedCurrency.name]?.market_cap} symbol = {selectedCurrency.symbol}/></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListCoins;