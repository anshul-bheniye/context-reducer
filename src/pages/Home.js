 
 import {dogs} from "../db/adoptMe"
 import {Card} from "../components";
 import { useTitle } from "../hook/useTitle";

export const Home = () => {
 useTitle("Home");
 
 return (
    <section className="card-container" >
      {dogs.map((dog)=>(
        <div key={dog.id} >
          <Card dog={dog} />
        </div>
        
      ))}
    </section>
  )
}
