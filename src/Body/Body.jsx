import CoinPage from "./CoinPage/CoinPage";
import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
function Body (props) {
    return (
        <>
        <GlobalData/>
        <CoinPage {...props}/>
        <ListCoins {...props}/>
        
        </>
    )
}

export default Body;