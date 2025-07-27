import css from "./CarCard.module.css"
import { useNavigate } from "react-router-dom";
import { parseLocation } from "../../utils/parseLocation";
import { useDispatch, useSelector } from "react-redux";
import { selectCarsFavorites } from "../../redux/cars/selectors";
import { toggleFavorite } from "../../redux/cars/slice";


export default function CarCard({ car }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorites = useSelector(selectCarsFavorites);

    const { city, country } = parseLocation(car.address);
    const formattedMileage = car.mileage.toLocaleString("en-US").replace(/,/g, " ");
    
    const isFavorite = favorites.includes(car.id);

    const handleBtnMore = (id) => {
        navigate(`/catalog/${id}`);
    };
    
     const handleFavoriteClick = () => {
    dispatch(toggleFavorite(car.id));
  };

    return (
        <div className={css.carCard}>
            <div className={css.imageWrapper}>
        <img className={css.img} src={car.img} alt={car.brand} />

        <svg
          onClick={handleFavoriteClick}
          className={`${css.favoriteIcon} ${isFavorite ? css.active : ""}`}
          width="24"
          height="24"
        >
          <use href={`/sprite.svg#${isFavorite ? "icon-Property-1Active" : "icon-Property-1Default-1"}`} />

        </svg>
      </div>
            <div className={css.title}>
                <div>
                {car.brand} <span className={css.model}>{car.model}, </span> {car.year}
                </div>
                <div>${car.rentalPrice}</div>
            </div>
            
            <div className={css.location}>
                <div>{city}</div>
                <div>{country} </div>
                <div>{car.rentalCompany}</div>
            </div>

            <div className={css.location}>
                <div>Suv</div>
                <div>{formattedMileage} km</div>
            </div>
            <button className={css.button} type="button" onClick={(e) => handleBtnMore(car.id, e)}>Read More</button>
        </div>
    )
}