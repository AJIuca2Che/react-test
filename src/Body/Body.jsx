import CoinPage from "./CoinPage/CoinPage";
import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
import CoinPage from "./CoinPage/CoinPage";
function Body (props) {
    return (
        <>
        <GlobalData/>
        <CoinPage {...props}/>
        <ListCoins {...props}/>
        <CoinPage {...props}/>
        </>
    )
}

export default Body;