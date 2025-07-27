 const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#f7f7f7",
    borderRadius: "12px",
    border: "none",
    color: "#8d929a",
    fontSize: "16px",
    fontWeight: 500,
    padding: "4px 8px",
    boxShadow: "none",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: "#f7f7f7",
    color: state.isFocused ? "#000000ff" : "#8d929a",
    cursor: "pointer",
    borderRadius: "12px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#f7f7f7",
    borderRadius: "12px",
    marginTop: 4,
  }),
  singleValue: (base) => ({
    ...base,
    color: "#101828",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#101828",
   }),
      menuList: (base) => ({
    ...base,
    maxHeight: "250px", // можно задать ограничение по высоте
    overflowY: "auto",
    scrollbarWidth: "thin", // Firefox: тонкий скроллбар
    msOverflowStyle: "auto", // IE/Edge

    // Chrome, Safari, Edge
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f0f0f0",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc",
      borderRadius: "4px",
    },
   
  }),
};

export default customStyles;
