import { useState } from "react";
import { Movies } from "../Movies/Movies";
import { moviesProps } from "../../MoviesProps.type";
import "./Filter.css"


export const Filter = ({ movies }: moviesProps) => {

    //HOOK
  const  [ movieName, setMovieName ] = useState("All")

    //CATEGORIES ITEMS
    const categories = ["All", ...new Set(movies.map((item: any) => item.category))]
    
    //FILTERED FILMS
    const filteredFilms = movieName === "All" ? movies : movies.filter( item => item.category === movieName )

    return (
        <main>
            <div className="filter">      
                <h2 className="filter-text">
                    filtered movies:
                </h2>
                {categories.map((item) => <button onClick={ () => setMovieName(item) }>{item}</button>)}
            </div>
            <Movies filteredFilms={filteredFilms} />
        </main>

    )
}