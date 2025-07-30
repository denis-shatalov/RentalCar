import React from "react";
import { useField } from "formik";

// Функция форматирования числа с запятой
const formatNumber = (value) => {
  const numeric = value.replace(/[^\d]/g, ""); // убираем всё, кроме цифр
  if (!numeric) return "";
  return Number(numeric).toLocaleString("en-US"); // формат: 5,000
};

const parseNumber = (formatted) => {
  return formatted.replace(/,/g, ""); // убираем запятые
};

const CustomInput = ({ name, prefix, className, placeholder }) => {
  const [field, , helpers] = useField(name);

  const handleChange = (e) => {
    const raw = parseNumber(e.target.value);
    helpers.setValue(raw); // сохраняем в Formik чистое число
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        {...field}
        value={formatNumber(field.value)}
        onChange={handleChange}
        className={className}
        placeholder={placeholder}
        style={{
          paddingLeft: prefix ? 50 : 20,
          boxSizing: "border-box",
          backgroundColor: "var(--input-bg)"
        }}
      />
      {field.value && (
        <span
          style={{
            position: "absolute",
            left: 10,
            top: "49%",
            transform: "translateY(-50%)",
            color: "var(--input-color)",
            pointerEvents: "none",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          {prefix}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
