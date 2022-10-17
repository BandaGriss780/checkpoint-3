import data from "../listaDeLibros.json"
import { useParams } from "react-router-dom";

export const ViewMorePage = () => {
    const { id } = useParams();
    console.log(id);
    const selectBook = data.find(e => e.id === id);
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="card mb-3 d-flex maxWidth">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={selectBook.imageLink} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-dark">{selectBook.title}</h1>
                                <h2 className="card-2 text-dark">{selectBook.author}</h2>
                                <h3 className="card-3 text-dark">{selectBook.language}</h3>
                                <h3 className="card-3 text-dark">{selectBook.pages} Pages</h3>
                                <h3 className="card-3 text-dark">Release year: {selectBook.year}</h3>
                                <p className="card-text text-dark">{selectBook.description}</p>
                                <a className="text-muted  text-dark" href= {selectBook.link} >more Info</a>
                                <p className="card-text text-dark"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




