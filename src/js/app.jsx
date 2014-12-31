var React = require('react');
var Slider = require('./components/slider.jsx');

var sliderContent = [
    {image: "http://dummyimage.com/600x400/000/fff", text: "slide1"},
    {image: "http://dummyimage.com/600x400/20a6c7/fff", text: "slide2"},
    {image: "http://dummyimage.com/600x400/77c722/fff", text: "slide3"}
];

React.render(<Slider content={sliderContent}/>,
             document.getElementById('content'));
