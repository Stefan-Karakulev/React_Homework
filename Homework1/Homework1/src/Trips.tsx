

export const Trips = ()=>{
    const trips = ["Lisbon", "Moscow", "Amsterdam"]
    return(
        <div>
            <ol>
                {trips.map(trip=>(<li key={trip} >{trip}</li>))}
            </ol>

        </div>
    )
}
