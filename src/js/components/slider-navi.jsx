var React = require('react');
var Slider = require('../model/slider');

module.exports = React.createClass({
    handleClick(e) {
        var activeSlide = document.querySelector('.sliderItem.active');
        var slideIndex = parseInt(activeSlide.getAttribute('data-slide'));

        if(e.target.className === "navRight"){
            this.SliderModel.moveSlide(activeSlide, slideIndex, "right");
        }

        if(e.target.className === "navLeft"){
            this.SliderModel.moveSlide(activeSlide, slideIndex, "left");
        }
    },
    componentDidMount() {
        this.SliderModel = new Slider(document.getElementsByClassName('sliderItem'), this.props.slideCount);
    },
    render() {
        return(
            <span className="sliderNavi" onClick={this.handleClick} >
                <span className="navLeft"></span>
                <span className="navRight"></span>
            </span>
        );
    }
});
