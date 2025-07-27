
import CarsList from "../../components/CarList/CarList"
// import css from "./CatalogPage.module.css"
import Filter from "../../components/Filter/Filter"

export default function CatalogPage() {

    

    return (
        
        <div className="container">
            <Filter/>
            <CarsList />
            
        </div>
        
    )
}