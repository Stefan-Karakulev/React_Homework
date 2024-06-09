type MoviesProps = {
    movies: string[]
}

const Movies = ({ movies }: MoviesProps) => {
    return (
        <div>
            <p>My favourite movies are:</p>
            <ol>
                {movies.map(movie => (
                    <li key={movie} >{movie}</li>
                ))}
            </ol>
        </div>
    )
}
export default Movies;
