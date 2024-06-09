import React from "react"
import { Greetings } from "./Greetings"
import { Trips } from "./Trips"
import { AboutMe } from "./AboutMe"
function App() {
  
  return (
    <React.Fragment>
      <main>
        <Greetings/>
        <Trips/>
        
      </main>
      <h3>About me:</h3>
      <AboutMe fullName={"Stefan"} from={"Kavadarci"} favoriteMovies={["Spiderman","Batman"]}/>
    </React.Fragment>
  )
}

export default App
