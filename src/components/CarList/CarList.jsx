import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/operations";
import {
  selectCars,
  selectPage,
  selectTotal,
  selectLoading,
} from "../../redux/cars/selectors";
import { selectSelectedFilters } from "../../redux/filters/selectors";
import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";
import Loader from "../Loader/Loader";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

export default function CarsList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectLoading);
  const selectedFilters = useSelector(selectSelectedFilters);

  // При первом рендере загружаем первую страницу с фильтрами
  useEffect(() => {
    dispatch(fetchCars({ page: 1, filters: selectedFilters }));
  }, [dispatch, selectedFilters]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchCars({ page: nextPage, filters: selectedFilters }));

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className={css.list}>
      <ul className={css.carList}>
        {cars.map((car) => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>

      {isLoading && <Loader />}

      {!isLoading && cars.length < total && (
        <button type="button" className={css.btnMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
      <ScrollToTopButton />
    </div>
  );
}
