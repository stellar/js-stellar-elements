import * as React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Label = styled.Button`
  position: relative;

  ${(props) =>
    props.isFullWidth &&
    `
    display: flex;
    justify-content: space-between;
  `};
`;

const LabelText = styled.View`
  vertical-align: middle;
`;

const Check = styled.View`
  vertical-align: middle;
  display: inline-block;
  width: 20px;
  height: 20px;
  color: black;
  border-radius: 2px;
  border: 1px solid black;
  text-align: center;
  line-height: 20px;

  margin-left: ${(props) => props.isLabelFirst && "10px"};
  margin-right: ${(props) => !props.isLabelFirst && "10px"};
`;

/**
 * Note: unlike most other elements, this is a React component, not a
 * styled-component.
 */
const Checkbox = ({ label, isLabelFirst, isFullWidth, checked, ...props }) => {
  return (
    <Label
      isFullWidth={isFullWidth}
      accessible
      accessibilityLabel={label}
      {...props}
    >
      {isLabelFirst && <LabelText>{label}</LabelText>}
      <Check isChecked={checked} isLabelFirst={isLabelFirst}>
        {checked && <>✓</>}
      </Check>
      {!isLabelFirst && <LabelText>{label}</LabelText>}
    </Label>
  );
};

Checkbox.defaultProps = {
  isLabelFirst: false,
};

Checkbox.propTypes = {
  /** @ignore */
  checked: PropTypes.bool,
  /** A string label is required for accessibility reasons. */
  label: PropTypes.string.isRequired,
  /** If true, the label will appear to the left of the checkbox. */
  isLabelFirst: PropTypes.bool,
  /** If true, take up the full width and justify the contents.*/
  isFullWidth: PropTypes.bool,
};

/** @component */
export default Checkbox;
