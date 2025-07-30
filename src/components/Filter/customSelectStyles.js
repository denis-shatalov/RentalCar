const customStyles = {
  container: (base) => ({
    ...base,
    width: "224px",
  }),
  control: (base) => ({
    ...base,
    backgroundColor: "var(--input-bg)",
    borderRadius: "12px",
    height: "44px",
    border: "none",
    color: "var(--input-color)",
    fontSize: "16px",
    fontWeight: 500,
    padding: "4px 8px",
    boxShadow: "none",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: "var(--input-bg)",
    color: state.isFocused
      ? "var(--color-text)"
      : "var(--color-secondary)",
    cursor: "pointer",
    borderRadius: "12px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "var(--input-bg)",
    borderRadius: "12px",
    marginTop: 4,
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--input-color)",
  }),
  placeholder: (base) => ({
    ...base,
    color: "var(--input-color)",
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: "250px",
    overflowY: "auto",
    scrollbarWidth: "thin",
    msOverflowStyle: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "var(--scrollbar-track-bg, #f0f0f0)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "var(--scrollbar-thumb-bg, #ccc)",
      borderRadius: "4px",
    },
  }),
};




export default customStyles;
