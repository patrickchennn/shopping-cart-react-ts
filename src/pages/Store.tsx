import bananaImg from "../assets/banana.jpg"
export function Store() {
    return (
      <>
        <h1>Store page</h1>
        <div className="card w-25">
          <img src={bananaImg} className="card-img-top img-thumbnail" alt="banana.jpg" style={{height:"18rem"}}/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </>
    )
  }