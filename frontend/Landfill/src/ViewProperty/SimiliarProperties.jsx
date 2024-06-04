import "./SimiliarProperties.css";
import { Link } from "react-router-dom"; // Import Link
const SimiliarProperties = (props) => {
    return (
        <div className="individual-property">
            <div className={`photo-and-like`}>
                <img alt={props.images[0].filename} src={props.images[0].url} />
            </div>
            <div className="similar-properties">
                <div className="text-wrapper">₹ {props.price}</div>
                <div className="div">@per night</div>
                <p className="p">{props.plot} {props.street} {props.village} {props.city} {props.state} {props.country}</p>
                <div className="highlights">
                    <div className="text-wrapper-2" style={{ display: "inline-block" }}>Highlights:</div>
                    {props.highlights.map((highlight, index) => (
                        <div key={index} className="frame" style={{ margin: '1.5px' }}>
                            <div className="text-wrapper-3">{highlight}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="enquire-now">
                <div className="overlap-group">
                    <Link to={`/property/${props.id}`} className="text-wrapper-4">
                        <button><b>View Property</b></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SimiliarProperties;
