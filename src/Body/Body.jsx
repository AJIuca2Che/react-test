import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
import CoinPage from "./CoinPage/CoinPage";
function Body (props) {
    return (
        <>
        <GlobalData/>
        <ListCoins {...props}/>
        <CoinPage {...props}/>
        </>
    )
}

export default Body;