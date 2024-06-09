import Movies from "./Movies"
type AboutMeProps = {
    fullName: string,
    from: string,
    favoriteMovies: string[]
}

export const AboutMe = (AboutMeProps: AboutMeProps) =>{

    return(
        <div className="aboutMe">
            <p>My name is {AboutMeProps.fullName}.</p>
            <p>I'm from  {AboutMeProps.from}.</p>
            <Movies movies={AboutMeProps.favoriteMovies}/>
        </div>
    )
}
