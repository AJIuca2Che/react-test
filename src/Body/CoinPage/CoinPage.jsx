import React from "react";
import CoinPriceSection from "./CoinPriceSection";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoinMetrics from "./CoinMetrics";
import CoinChart from "./CoinChart";
import ChartPeriods from './ChartPeriods';
import ChartIncreaseSize from "./ChartIncreaseSize";
import { getCoinById } from "../../services/api";


function CoinPage ({selectedCurrency}) {
    const [coinData, setCoinData] = React.useState({})
    React.useEffect(() => {
        getCoinById("btc-bitcoin",selectedCurrency.name ).then(setCoinData);
    }, [selectedCurrency]);
    return (
<>
    <CoinPriceSection/>
        <Row>
            <Col md = {4}>
            <CoinMetrics {...coinData} currency={selectedCurrency} />
            </Col>
            <Col md = {8}>
            <ChartPeriods/>
            <CoinChart />
            <ChartIncreaseSize/>
            </Col>
        </Row>
</>
    );
}

export default CoinPage;