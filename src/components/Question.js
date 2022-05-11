import React from 'react';
import main_screen_img from '../assets/main_screen_img.png'
import arman from '../assets/arman.png'
import avia_gl from '../assets/avia_gl.png'
import Back from '../assets/Back.svg'
import woman_icon from '../assets/woman_icon.svg'
import men_icon from '../assets/men_icon.svg'
import eyeglasses_icon from '../assets/eyeglasses_icon.svg'
import sunglasses_icon from '../assets/sunglasses_icon.svg'
import oval from '../assets/oval.svg'
import oval2 from '../assets/oval2.svg'
import round from '../assets/round.svg'
import like_img from '../assets/like_img.png'
import sizes_image from '../assets/sizes_image.png'
import rect_gl from '../assets/rect_gl.png'

import brow_gl from '../assets/brow_gl.png'
import geo_gl from '../assets/geo_gl.png'
import way_gl from '../assets/way_gl.png'
import round_gl from '../assets/round_gl.png'
import oval_gl from '../assets/oval_gl.png'
import over_gl from '../assets/over_gl.png'
import cat_gl from '../assets/cat_gl.png'
import riml_gl from '../assets/riml_gl.png'
import sq_gl from '../assets/sq_gl.png'
import wr_gl from '../assets/wr_gl.png'

import equal from 'fast-deep-equal'


export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { q: this.props.q, question: this.props.question };
        this.updateQ = this.updateQ.bind(this);

    }



    componentDidMount() {
        this.updateQ();
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.question, prevProps.question)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            this.updateQ();
        }
    }

    updateQ() {

        const question = this.props.question
        this.setState({
            question: question
        })
        // console.log(question);

    }


    nextQ(e) {
        // console.log(e.target.dataset.screen);
        // console.log(e.target.dataset.value);

        let data = {};
        data.screen = e.target.dataset.screen;
        data.value = e.target.dataset.value;

        if(e.target.dataset.screen == undefined) {
            if(e.target.closest("a")) {
                data.screen = e.target.closest("a").dataset.screen;
                data.value = e.target.closest("a").dataset.value;
            }
         
        }
        this.props.onChangeQ(e, this.state.q++, data);
        
    }
    render() {
        switch (this.state.q) {
            case 0: {
                return (
                    <section id="screen_start">
                        <div className="main_block">
                            <div className="container">
                                <img src={main_screen_img} alt="Happy to see yo!" />
                                <h1>
                                    {this.state.question.title}
                                </h1>
                                <p>
                                    {this.state.question.description}
                                </p>
                                <a onClick={(e) => {
                                    this.nextQ(e);
                                }} className="btn-rounded active">
                                    {this.state.question.buttonText}
                                </a>
                            </div>
                        </div>
                    </section>
                );
            }
            case 1: {
                return (
                <section id="screen_q" className="q_1">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                1/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                You are looking for
                            </div>
                            <div className="answers">
                                <a href="#" className="btn-tap"  data-screen="gender" data-value="5"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <div className="icon">
                                        <img src={woman_icon} alt="Woman" />
                                    </div>
                                    <p>
                                        Women's Styles
                                    </p>
                                </a>
                                <a href="#" className="btn-tap" data-screen="gender" data-value="4"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <div className="icon">
                                        <img src={men_icon} alt="man" />
                                    </div>
                                    <p>
                                        Men's Styles
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I'd like to see both</a>
                        </div>
                    </footer>
                </section>
                );
            }

            case 2: {
                return(
                    <section id="screen_q" className="q_2_man">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                2/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                What type of glasses are you looking for?
                            </div>
                            <div className="answers">
                                <a href="#" className="btn-tap" data-screen="eyewear_type" data-value="210"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <div className="icon">
                                        <img src={eyeglasses_icon} alt="Woman" />
                                    </div>
                                    <p>
                                        Eyeglasses
                                    </p>
                                </a>
                                <a href="#" className="btn-tap" data-screen="eyewear_type" data-value="211"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <div className="icon">
                                        <img src={sunglasses_icon} alt="man" />
                                    </div>
                                    <p>
                                        Sunglasses
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I'd like to see both</a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 3: {
                return(
                    <section id="screen_q" className="q_3">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                3/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                        <div className="container">
                            <img src={like_img} alt="Let’s find your perfect pair!" />
                            <h1>
                                Let's get to know you!
                            </h1>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I'd like to see both</a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 4: {
                return(
                    <section id="screen_q" className="q_3_1">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                3/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                Do you need vision correction?
                            </div>
                            <div className="answers">
                                <a href="#" className="btn-tap"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        Yes
                                    </p>
                                </a>
                                <a href="#" className="btn-tap"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        No
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I'd like to see both</a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 5: {
                return(
                    <section id="screen_q" className="q_sizes">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                2/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                What’s your current frame size?
                            </div>
                            <img src={sizes_image} alt="Lens_sizes" />
                            <div className="answers">
                                <a href="#" className="btn-tap tap_hor"  data-screen="frame_size" data-value="68"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <span>
                                        Small
                                    </span>
                                    <b>
                                        42-48 mm
                                    </b>
                                </a>
                                <a href="#" className="btn-tap tap_hor" data-screen="frame_size" data-value="67"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <span>
                                        Medium
                                    </span>
                                    <b>
                                        49-53 mm
                                    </b>
                                </a>
                                <a href="#" className="btn-tap tap_hor" data-screen="frame_size" data-value="66" onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <span>
                                        Large
                                    </span>
                                    <b>
                                        54-58 mm
                                    </b>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I don’t know</a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 6: {
                return(
                    <section id="screen_q" className="q_5">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                3/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                Would you like to protect your eyes from light emanating from screens?
                            </div>
                            <div className="answers">
                                <a href="#" className="btn-tap"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        Yes
                                    </p>
                                </a>
                                <a href="#" className="btn-tap"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        No
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I'd like to see both</a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 7: {
                return(
                    <section id="screen_q" className="q_6">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                2/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                Every face shape has a perfect fit. What’s yours?
                            </div>
                            <div className="answers">
                                <a href="#" className="btn-tap tap_faces"  data-screen="face_shape" data-value="long"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={oval} alt="Oval" />
                                    <b>
                                        I have a long face
                                    </b>
                                </a>
                                <a href="#" className="btn-tap tap_faces"   data-screen="face_shape" data-value="round"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={round} alt="Round" />
                                    <b>
                                        I have a round face
                                    </b>
                                </a>
                                <a href="#" className="btn-tap tap_faces" data-screen="face_shape" data-value="between"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={oval2} alt="Oval2" />
                                    <b>
                                        In between
                                    </b>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I don’t know</a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 8: {
                return(
                    <section id="screen_q" className="q_7">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                3/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                How would you define your facial features?
                            </div>
                            <div className="answers">
                                <a href="#" className="btn-tap"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        Sharp
                                    </p>
                                </a>
                                <a href="#" className="btn-tap"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        Rounded
                                    </p>
                                </a>
                                <a href="#" className="btn-tap"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        In between
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I don’t know</a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 9: {
                return(
                    <section id="screen_q" className="q_8">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                3/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                Which frame style are you looking for?
                            </div>
                            <p className="small">
                                You can pick more than one.
                            </p>
                            <div className="answers grid">
                                <a href="#" className="btn-tap tap-image"  data-screen="shape" data-value="rectangle"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={rect_gl} alt="Rect" />
                                    <p>
                                        Rectangle
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="aviator"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={avia_gl} alt="avia_gl" />
                                    <p>
                                        Aviator
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="browline"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={brow_gl} alt="brow_gl" />
                                    <p>
                                        Browline
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="geometric"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={geo_gl} alt="geo_gl" />
                                    <p>
                                        Geometric
                                    </p>
                                </a>
                                <a href="#" className="btn-tap tap-image"  data-screen="shape" data-value="wayframe"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={way_gl} alt="way_gl" />
                                    <p>
                                        Wayframe
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="round"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={round_gl} alt="round" />
                                    <p>
                                        Round
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="oval"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={oval_gl} alt="oval_gl" />
                                    <p>
                                        Oval
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="oversized"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={over_gl} alt="over_gl" />
                                    <p>
                                        Oversized
                                    </p>
                                </a>
                                <a href="#" className="btn-tap tap-image"  data-screen="shape" data-value="cat_eye"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={cat_gl} alt="cat_gl" />
                                    <p>
                                        Cat Eye
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="rimless"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={riml_gl} alt="riml_gl" />
                                    <p>
                                        Rimless
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="square"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={sq_gl} alt="sq_gl" />
                                    <p>
                                        Square
                                    </p>
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="shape" data-value="wrap"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src={wr_gl} alt="wr_gl" />
                                    <p>
                                        Wrap
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="btn-rounded">
                                Continue
                            </a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 10: {
                return(
                    <section id="screen_q" className="q_9">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                3/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                Are you looking for any particular eyewear brands?
                            </div>
                            <div className="answers">
                                <a href="#" className="btn-tap"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        Yes, I have some in mind
                                    </p>
                                </a>
                                <a href="#" className="btn-tap" onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <p>
                                        No, brand isn't important
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="both">I don’t know</a>
                        </div>
                    </footer>
                </section>
                );
            }
            case 11: {
                return(
                    <section id="screen_q" className="q_10">
                    <header>
                        <div className="container">
                            <a href="#" className="back">
                                <img src="assets/Back.svg" alt="Previous Step" />
                            </a>
                            <p className="step_info">
                                3/10
                            </p>
                            <a href="#" className="close">
                                <img src="assets/exit.svg" alt="Exit" />
                            </a>
                        </div>
                        <div className="progressbar">
                            <div className="active" style={{ width: '10%' }} />
                        </div>
                    </header>
                    <div className="main_block">
                        <div className="container">
                            <div className="text_q">
                                Choose your favorite brands
                            </div>
                            <p className="small">
                                You can pick more than one.
                            </p>
                            <div className="answers grid">
                                <a href="#" className="btn-tap tap-image"  data-screen="brand" data-value="ray_ban"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/rayban.png" alt="rayban" />
                                </a>
                                <a href="#" className="btn-tap  tap-image" data-screen="brand" data-value="dakley"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/dakley.png" alt="dakley" />
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="brand" data-value="gucci" onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/gucci.png" alt="gucci" />
                                </a>
                                <a href="#" className="btn-tap  tap-image" data-screen="brand" data-value="arman"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/arman.png" alt="arman" />
                                </a>
                                <a href="#" className="btn-tap tap-image" data-screen="brand" data-value="hilary_duft"   onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/hilaryduft.png" alt="hilaryduft" />
                                </a>
                                <a href="#" className="btn-tap  tap-image"   data-screen="brand" data-value="prada"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/prada.png" alt="prada" />
                                </a>
                                <a href="#" className="btn-tap  tap-image"  data-screen="brand" data-value="versace"  onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/versace.png" alt="versace" />
                                </a>
                                <a href="#" className="btn-tap  tap-image" data-screen="brand" data-value="vo" onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/vo.png" alt="vo" />
                                </a>
                                <a href="#" className="btn-tap  tap-image" data-screen="brand" data-value="michael" onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/michael.png" alt="michael" />
                                </a>
                                <a href="#" className="btn-tap tap-image" data-screen="brand" data-value="coach" onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/coach.png" alt="coach" />
                                </a>
                                <a href="#" className="btn-tap  tap-image" data-screen="brand" data-value="tory" onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/tory.png" alt="tory" />
                                </a>
                                <a href="#" className="btn-tap  tap-image" data-screen="brand" data-value="bur" onClick={(e) => {
                                    this.nextQ(e);
                                }}>
                                    <img src="assets/bur.png" alt="bur" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <a href="#" className="btn-rounded">
                                Continue
                            </a>
                        </div>
                    </footer>
                </section>
                );
            }

            case 11: {
                return(
                    <div>
                        Вы прошли тест
                    </div>
                );
            }
          

        }
        return (
            <div>



            </div>
        );

    }
}