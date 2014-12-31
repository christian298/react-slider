var React = require('react');

module.exports = React.createClass({
    render() {
        return(
            <div className={this.props.slideIndex === 0 ? "active sliderItem" : "sliderItem"} data-slide={this.props.slideIndex}>
                <img src={this.props.image} alt="" />
                <span>{this.props.text}</span>
            </div>
        );
    }
});
