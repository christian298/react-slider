var React = require('react');
var SliderItem = require('./slider-item.jsx');
var SliderNavi = require('./slider-navi.jsx');

require('../../less/slider.less');

module.exports = React.createClass({
    getInitialState() {
        return{
            slideCount: 0
        };
    },
    componentDidMount() {
        this.setState({
            slideCount: document.getElementsByClassName('sliderItem').length || 0
        });
    },
    render() {
        var slideritems = this.props.content.map(function(item, index){
            return <SliderItem image={item.image} text={item.text} slideIndex={index} />
        });

        return(
            <div className="slider" >
                <div className="sliderWrapper">
                    {slideritems}
                </div>
                <SliderNavi slideCount={this.state.slideCount} moveSlide={this.moveSlide}/>
            </div>
        );
    }
});
