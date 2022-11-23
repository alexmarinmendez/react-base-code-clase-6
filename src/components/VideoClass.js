import { Component } from "react";

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stars: this.props.rate
        }
        this.rateVideo = this.rateVideo.bind(this);
    }

    rateVideo() {
        this.setState({
            stars: this.state.stars + 1
        })
    }

    render() {
        return (
            <div className="video-container">
                <div className="video-image">
                <img src={this.props.thumbnail} alt="Same alt value" />
                </div>
                <div className="video-info">
                <h3>{this.props.title}</h3>
                <span>{this.state.stars} stars</span> | <button onClick={this.rateVideo}>Rate this video</button>
                <p>Upload date: {this.props.dateAdded}</p>
                <h4>Channel's Title: {this.props.channel}</h4>
                <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Video;