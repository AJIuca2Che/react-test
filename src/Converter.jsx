import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const initialState = {
    from: 0,
    to: 0,
}

function Converter() {
    const [values, setValues] = React.useState(initialState);
    const [leftToRight, setLeftToRight] = React.useState(true);
    const handleClick = () => {
        setValues({
            from: values.to,
            to: values.from,
        });
        setLeftToRight(!leftToRight);
    };

    return (
        <Row className="g-2">
            <Col md>
                <InputGroup>
                    <FloatingLabel controlId="fromInput" label="from">
                        <Form.Control 
                        type="text" 
                        placeholder="0" 
                        value={values.from} 
                        defaultValue={values.to}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="from" label="Coin">
                        <Form.Select>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </InputGroup>
            </Col>
            <Col>
                <FontAwesomeIcon icon={faArrowsRotate} onClick={handleClick} />
            </Col>
            <Col md>
                <InputGroup>
                    <FloatingLabel controlId="toInput" label="to">
                        <Form.Control 
                        type="text" placeholder="0" 
                        value={values.to} 
                        defaultValue={values.from} 
                        
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="to" label="Coin">
                        <Form.Select>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </InputGroup>
            </Col>
        </Row>
    );
}

export default Converter;