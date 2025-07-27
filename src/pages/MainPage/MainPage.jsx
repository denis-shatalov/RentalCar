import css from "./MainPage.module.css"
import { NavLink } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import { selectLoading } from "../../redux/cars/selectors";
import { useSelector } from 'react-redux';


export default function MainPage() {

    const isLoading = useSelector(selectLoading);

    return (
        <div>
            {isLoading && <Loader />}
             <div className={css.wrapper}>
                <div className={css.hero}>
                    <h1 className={css.title}>Find your perfect rental car</h1>
                    <p className={css.text}>Reliable and budget-friendly rentals for any journey</p>
                    <NavLink className={css.button} to="/catalog">View Catalog</NavLink>
            </div>
        </div>
        </div>
       
        
        
    )
}