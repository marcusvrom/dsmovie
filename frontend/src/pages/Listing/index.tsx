import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

function Listing() {
    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>

            
            
        </>
    )
}

export default Listing;