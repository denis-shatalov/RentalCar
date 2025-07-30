import { components } from "react-select";

export const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width="16" height="16">
        <use href="/sprite.svg#icon-Vector" />
          <path
          d="M5 7L10 12L15 7"
          stroke="var(--input-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
    </components.DropdownIndicator>
  );
};
