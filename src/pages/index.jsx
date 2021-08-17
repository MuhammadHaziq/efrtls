import React, { useState } from "react";
import Input from "../component/Input";
import Shap from "../component/Shap";
import { Container, Row, Col, Button } from "react-bootstrap";

const Biscuit = () => {
  const [rangeNumber, setRangeNumber] = useState(0);
  console.log(rangeNumber);
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 2 }}>
          <Input setRangeNumber={setRangeNumber} rangeNumber={rangeNumber} />
        </Col>
        <Col md={{ span: 2 }}>
          <Button
            variant="outline-primary"
            onClick={() => setRangeNumber(rangeNumber + 1)}
          >
            +
          </Button>
          <span className="inputValue">{rangeNumber}</span>
          <Button
            variant="outline-primary"
            onClick={() =>
              setRangeNumber(rangeNumber !== 0 ? rangeNumber - 1 : 0)
            }
          >
            -
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Shap number={rangeNumber} />
        </Col>
      </Row>
    </Container>
  );
};
export default Biscuit;
