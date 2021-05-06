import React from 'react';
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
            //언디파인드 이면 홈으로 리다이렉트 시킨다.
        }
    }
    render(props) {

        const {location} = this.props;
        if (location.state) {
            return (
                <div className="detail_movie">
                    <h1 className="detail_title">{location.state.title}</h1>
                    <div className="detail_year">{location.state.year}</div>
                    <hr />
                    <li>{location.state.genres}</li>
                    <br />
                    <img src={location.state.poster} className="detail_img" />
                    <hr />
                    <div className="content">{location.state.summary}</div>
                    <hr />
                </div>

            );
        } else {
            return null;

        }

    }
}

/*
function Detail(location){
    console.log(location);
    return (
        <div>detail</div>
    );
}
*/
export default Detail;