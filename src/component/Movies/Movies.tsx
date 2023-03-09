import "./Movies.css"
import { filteredFilms } from "../../MoviesProps.type"

export const Movies = ({ filteredFilms }: filteredFilms) => {
    return (
        <div className="movies-container">
            {
                filteredFilms.map((item, key) => {
                    const { image, title, age, tags, description } = item
                    return (
                        <article className="movies-item">
                            <img src={image} alt={title} />
                            <h2 className="movies-item-title">{title}</h2>
                            <h3>{age}</h3>
                            <p className="movies-item-desc">{description}</p>
                            <h5 className="movies-item-tag">tags: {tags}</h5>
                        </article>
                    )
                } )
            }
        </div>
    )
}