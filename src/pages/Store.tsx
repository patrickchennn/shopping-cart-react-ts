import bananaImg from "../assets/banana.jpg"
import items from "../data/items.json"
import { ItemCard } from "../components/ItemCard";


export function Store(): JSX.Element {
  return (
    <div className="row gy-3">
      {items.map(item => 
        <div className="col col-lg-3"  >
          <ItemCard item={item}/>
        </div>
      )}
    </div>
  )
}