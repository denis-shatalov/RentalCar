import CarDetails from "../../components/CarDetails/CarDetails";
import Loader from "../../components/Loader/Loader";
import { selectLoading, selectCurentCars } from "../../redux/cars/selectors";
import { fetchCarById } from "../../redux/cars/operations";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CarDetailsPage() {
    const { id } = useParams();
    const car = useSelector(selectCurentCars);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (id) {
        dispatch(fetchCarById(id));
      }
    }, [id, dispatch]);
  
    return (
      <div>
        {isLoading && <Loader />}
        {car && <CarDetails car={car} />}
      </div>
    );
  }
  