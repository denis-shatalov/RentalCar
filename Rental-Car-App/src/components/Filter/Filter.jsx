import React, { useEffect } from "react";
import Select from "react-select";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { selectBrands } from "../../redux/filters/selectors";
import { fetchBrand } from "../../redux/filters/operations";
import customStyles from "./customSelectStyles";
import { DropdownIndicator } from "./DropDownIndicator";
import { CustomSingleValue } from "./CustomSingleValue";
import CustomInput from "./CustomInput";
import { fetchCars } from "../../redux/cars/operations";
import { resetCars } from "../../redux/cars/slice";
import { setSelectedFilters } from "../../redux/filters/slice";




const prices = ["30", "40", "50", "60", "70", "80"];
const priceOptions = prices.map((p) => ({ value: p, label: p }));

export default function FilterForm() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrand());
  }, [dispatch]);

  const brandOptions = brands?.map((b) => ({ value: b, label: b })) || [];

 const customComponents = {
  DropdownIndicator,
  IndicatorSeparator: () => null,
};

  const priceSelectComponents = {
  DropdownIndicator,
  IndicatorSeparator: () => null,
  SingleValue: CustomSingleValue,
};

  
  return (
    <Formik
  initialValues={{
    brand: null,
    price: null,
    mileageFrom: "From",
    mileageTo: "To",
  }}
  onSubmit={(values) => {
    const filters = {
      brand: values.brand?.value || "",
      price: values.price?.value || "",
      mileageFrom: values.mileageFrom,
      mileageTo: values.mileageTo,
    };

    dispatch(setSelectedFilters(filters)); // сохраняем фильтры
  dispatch(resetCars());                 // сбрасываем старые машины
  dispatch(fetchCars({ page: 1, filters })); 
  }}
>
      {({ setFieldValue, values }) => (
        <Form className={css.filterBox}>
          <div className={css.selectWrapper}>
            <label className={css.label}>Car brand</label>
            <Select
              name="brand"
              options={brandOptions}
              placeholder="Choose a brand"
              onChange={(val) => setFieldValue("brand", val)}
              value={values.brand}
              styles={customStyles}
              className={css.select}
              components={customComponents}
/>
          </div>

          <div className={css.selectWrapper}>
            <label className={css.label}>Price / 1 hour</label>
            <Select
              name="price"
              options={priceOptions}
              className={css.select}
              placeholder="Choose a price"
              onChange={(val) => setFieldValue("price", val)}
              value={values.price}
              styles={customStyles}
              components={priceSelectComponents}
            />
          </div>

          <div>
            <label className={css.label}>Car mileage / km</label>
            <div className={css.inputGroup}>
              <CustomInput
      name="mileageFrom"
      
      prefix="From"
      className={`${css.inputPrice} ${css.leftInput}`}
    />
              
              <CustomInput
      name="mileageTo"
      
      prefix="To"
      className={css.inputPrice}
    />

            </div>
          </div>

          <div className={css.btnWrapper}>
            <button type="submit" className={css.btnSearch}>
              Search
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
