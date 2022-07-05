export interface Item{
  id:number,
  name:string,
  price:number,
  imgUrl:string,
}
export interface Props{
  item: Item
}
export function ItemCard(props: Props): JSX.Element{
  return (
    <>
      <div className="card">
        <img src={props.item.imgUrl} className="card-img-top" alt={props.item.name} style={{height:"18rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}