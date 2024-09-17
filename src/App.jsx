import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header/Header';
import Body from './Body/Body';
import CoinPage from './Body/CoinPage/CoinPage';



function App() {
  return ( 
  <Container>
    <Header/>
    <Body/>
    <CoinPage/>
  </Container>
)
};
export default App;
