import './Card.css';
export const Card = (
    {
        title,
        description,
        image,
        onClick
    }
)=>{
    return(
        <div className="card">
            <img src={image} alt="img"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary" onClick={(e)=>{
                    e.preventDefault();
                    onClick(title);
                }}>Go somewhere</a>
            </div>
        </div>
    )
}
