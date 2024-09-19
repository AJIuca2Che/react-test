import CoinPriceSection from "./CoinPriceSection";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoinMetrics from "./CoinMetrics";
import CoinChart from "./CoinChart";
import ChartPeriods from './ChartPeriods';
import ChartIncreaseSize from "./ChartIncreaseSize";

function CoinPage () {
    return (
<>
    <CoinPriceSection/>
        <Row>
            <Col md = {4}>
            <CoinMetrics/>
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