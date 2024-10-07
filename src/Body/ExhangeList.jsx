import { Table } from "react-bootstrap";
import React from "react";
import { BodyContext } from "./providers/BodyProvider";




function ExchangeList() {

    const {exchangeList} = React.useContext(BodyContext)


    return (
        <Table>
            <thead>
                <tr>
                <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {exchangeList.slice(0,100).map((exchange) => (
                <tr>
                    <td></td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
}


export default ExchangeList;