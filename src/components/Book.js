import react from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const Book = (props) => {
    let ImageURL;
    if (props.data.volumeInfo.imageLinks == undefined) {
        ImageURL = null;
    } else {
        ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
    }
    return (
        <div className="col s12 m3">
            <div className="card large" onClick={() => {
            }}>
                <div className="card-image">
                    {ImageURL == null ? (
                        <img
                            src="https://picsum.photos/200/300"
                            alt=""
                            style={{ width: "100", height: "200" }}
                        />
                    ) : (
                        <img
                            src={ImageURL}
                            alt=""
                            style={{ width: "100", height: "200" }}
                        />
                    )}
                </div>
                <div className="card-content">
                    <p><b>{props.data.volumeInfo.title} </b></p>
                    By {props.data.volumeInfo.authors}
                </div>
            </div>
        </div>
    );
};

export default Book;
