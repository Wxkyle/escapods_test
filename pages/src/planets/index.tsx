import { useEffect, useState } from "react";
import { Header } from "../header/Header"

interface PlanetsAPIPlanetInterface {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: [];
  films: [];
  url: string;
  created: string;
  edited: string;
}

const Planets = () => {

  const [planetsData, usePlanetsData] = useState([])

  const firstStarWarsCall = async () => {
    const response = await fetch('https://swapi.dev/api/planets/')
    const data = await response.json()
    console.log(data)
    usePlanetsData(data.results)
  }

  const effect = useEffect(() => {
    firstStarWarsCall()
  }, [])

  return (
    <div className="w-screen h-screen bg-slate-700">
      <Header title="Planets" />
      <div>Planets</div>
      <div className="grid grid-cols-5 auto-rows-auto">
        {planetsData.map((planet: PlanetsAPIPlanetInterface) => {
          return (
            <div className="bg-yellow-600 m-4" >
              <div>{planet.name}</div>
              <div>{planet.diameter}</div>
              <div>{planet.rotation_period}</div>
              <div>{planet.orbital_period}</div>
              <div>{planet.gravity}</div>
              <div>{planet.population}</div>
              <div>{planet.climate}</div>
              <div>{planet.terrain}</div>
              <div>{planet.surface_water}</div>
              <div>{planet.residents}</div>
              <div>{planet.films}</div>
              <div>{planet.url}</div>
              <div>{planet.created}</div>
              <div>{planet.edited}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Planets
