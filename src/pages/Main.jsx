import React from 'react';
// import Progress from '../components/Progress';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { correctHeight, detectBody } from './Helpers';


function fixWrapperHeight() {
    // Get and set current height
    let headerH = 62;
    let navigationH = $("#navigation").height();
    let contentH = $(".content").height();

    // Set new height when contnet height is less then navigation
    if (contentH < navigationH) {
        $("#wrapper").css("min-height", navigationH + 'px');
    }

    // Set new height when contnet height is less then navigation and navigation is less then window
    if (contentH < navigationH && navigationH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH  + 'px');
    }

    // Set new height when contnet is higher then navigation but less then window
    if (contentH > navigationH && contentH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }
}


function setBodySmall() {
    if ($(this).width() < 769) {
        $('body').addClass('page-small');
    } else {
        $('body').removeClass('page-small');
        $('body').removeClass('show-sidebar');
    }
}


class Main extends React.Component {
    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <Progress />
                <Navigation location={this.props.location}/>

                <div id="page-wrapper" className={wrapperClass}>

                    <Header />

                    {this.props.children}

                    <Footer />

                </div>

            </div>
        )
    }

    componentDidMount() {
        $(document).ready(function () {
            // Set minimal height of #wrapper to fit the window
            fixWrapperHeight();

            // Add special class to minimalize page elements when screen is less than 768px
            setBodySmall();

        });

        $(window).bind("load", function () {
            // Remove splash screen after load
            $('.splash').css('display', 'none')
        });

        // Run correctHeight function on load and resize window event
        $(window).bind("resize click", function () {

            // Add special class to minimalize page elements when screen is less than 768px
            setBodySmall();

            // Wait until metisMenu, collapse and other effect finish and set wrapper height
            setTimeout(function () {
                // Set minimal height of #wrapper to fit the window
                fixWrapperHeight();
            }, 300);
        });
    }
}

export default Main