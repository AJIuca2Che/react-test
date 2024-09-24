import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header/Header';
import Body from './Body/Body';
import CoinPage from './Body/CoinPage/CoinPage';
import { currencies } from './constants';



function App() {
  const [selectedCurrency, setSelectedCurrency] = React.useState(currencies[0]);
  return ( 
  <Container>
    <Header selectedCurrency = {selectedCurrency} setSelectedCurrency = {setSelectedCurrency} />
    <Body selectedCurrency = {selectedCurrency}/>
    <CoinPage/>
  </Container>
)
};
export default App;
