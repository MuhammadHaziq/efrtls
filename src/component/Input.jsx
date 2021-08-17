import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ setRangeNumber, rangeNumber }) => {
  return (
    <React.Fragment>
      <Form.Label>Range </Form.Label>
      <Form.Range
        value={rangeNumber}
        name="rangeNumber"
        onChange={(e) => setRangeNumber(e.target.value)}
        max={100}
      />
    </React.Fragment>
  );
};
export default Input;
