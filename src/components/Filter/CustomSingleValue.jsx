import { components } from "react-select";

export const CustomSingleValue = (props) => {
  return (
    <components.SingleValue {...props}>
      {`To $${props.data.label}`}
    </components.SingleValue>
  );
};
