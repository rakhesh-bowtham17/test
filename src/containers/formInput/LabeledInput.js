import React from "react";
import PropTypes from "prop-types";
import Input from "../../components/form-inputs/input/Input";
import { Label } from "../../components/form-inputs/label/Label";
import styles from "./LabeledInput.module.scss";

const LabeledInput = ({ type, name, register, errors }) => {
  return (
    <div className={styles["input-label"]}>
      <Label name={name} />
      <Input type={type} name={name} register={register} errors={errors} />
    </div>
  );
};

Input.prototype = {
  type: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default LabeledInput;
