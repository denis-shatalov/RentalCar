import css from "./CarDetails.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-custom.css"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { parseLocation } from "../../utils/parseLocation";


export default function CarDetails({ car }) {

    const { city, country } = parseLocation(car.address);
    const formattedMileage = car.mileage.toLocaleString("en-US").replace(/,/g, " ");

  const initialValues = {
    name: "",
    email: "",
    date: null,
    comment: "",
    };
    

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string().email("Invalid email").required("Enter your email"),
  });
    

  const handleSubmit = (values, { resetForm }) => {
      console.log("Form values:", values);
      toast.success("You have successfully booked a car!");
    resetForm();
  };

    
  const today = new Date();

    
  return (
    <div className="container">
      <div className={css.detailsBox}>
        <div className={css.details}>
          <img className={css.img} src={car.img} alt={car.brand} />
          <div className={css.form}>
            <h3>Book your car now</h3>
            <p>Stay connected! We are always ready to help you.</p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values }) => (
                <Form className={css.formInput}>
                  <label className={css.position}>
                    <Field
                      className={css.input}
                      type="text"
                      name="name"
                      placeholder="Name*"
                    />
                   <ErrorMessage
                      name="name"
                      component="div"
                      className={css.error}
                    />
                  </label>

                  <label className={css.position}>
                    <Field
                      className={css.input}
                      type="email"
                      name="email"
                      placeholder="Email*"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={css.error}
                    />
                  </label>

                  <label>
                    <DatePicker
                      selected={values.date}
                      onChange={(val) => setFieldValue("date", val)}
                      className={`${css.input} ${css.customDatePicker}`}
                      placeholderText="Booking date"
                      dateFormat="dd/MM/yyyy"
                      name="date"
                      minDate={today}
                    />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className={css.error}
                    />
                  </label>

                  <label>
                    <Field
                      as="textarea"
                      name="comment"
                      placeholder="Comment"
                      className={`${css.input} ${css.comment}`}
                    />
                  </label>

                  <button className={css.btn} type="submit">
                    Submit
                  </button>
                </Form>
                
              )}
            </Formik>
          </div>
              </div>
              
              <div className={css.desc}>
                  
                  <h2>{car.brand} {car.model}, {car.year}</h2> 

                  <div className={css.svgLoc}>
                  
                  <svg width="16" height="16" stroke="currentColor">
                              <use href="/sprite.svg#icon-Location" />
                          </svg>
                      <div className={css.loc}>{city},{country}</div>
                      <div>Mileage: {formattedMileage} km</div>
                
                  </div>
                  
                  <p className={css.carPrice}>${car.rentalPrice}</p>
                  <p className={css.carDes}>{car.description}</p>

                  <div className={css.list}>
                      
                  <div>  
                          <h3>Rental Conditions: </h3>
                          
                      <ul>
                          {car.rentalConditions.map((condition, index) => (
                              <li key={index}><svg width="16" height="16" stroke="currentColor">
                <use href="/sprite.svg#icon-check-circle" /></svg>{condition}</li>
                          ))}
                      </ul>
                  </div>

                  <div>
                          <h3>Car Specifications:</h3>
                          
                      <ul>
                          <li><svg width="16" height="16" stroke="currentColor">
                          <use href="/sprite.svg#icon-calendar" /></svg>Year: { car.year}</li>
                          <li><svg width="16" height="16" stroke="currentColor">
                          <use href="/sprite.svg#icon-car" /></svg>Type: { car.type}</li>
                          <li><svg width="16" height="16" stroke="currentColor">
                          <use href="/sprite.svg#icon-fuel-pump" /></svg>Fuel Consumption: { car.fuelConsumption}</li>
                          <li><svg width="16" height="16" stroke="currentColor">
                          <use href="/sprite.svg#icon-gear" /></svg>Engine Size: { car.engineSize}</li>
                      </ul>
                  </div>

                 <div>
                          
                          <h3>Accessories and functionalities:</h3>
                          
                      <ul>
                          {car.accessories.map((condition, index) => (
                              <li key={index}><svg width="16" height="16" stroke="currentColor">
                <use href="/sprite.svg#icon-check-circle" /></svg>{condition}</li>
                          ))}
                      </ul>
                </div>
      
                  </div>
                  
                 
        </div>
          </div>
          <ToastContainer />
    </div>
  );
}
