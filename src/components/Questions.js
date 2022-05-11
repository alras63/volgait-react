import React from 'react';
import Question from './Question.js';

import equal from 'fast-deep-equal'
export default class Questions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            q: 0,
            questions: [{
                "num": "0",
                "type": 'start',
                "image": "assets/main_screen_img.png",
                "title": " Let’s find your perfect pair!",
                "description": " Take the quiz to easily discover your perfect fit from thousands of styles",
                "buttonText": "Start Now"
            },
            {
                "num": "1",
                "type": 'cards_icons',
                "title": "You are looking for",
                "cards": [
                    {
                        "id": 0,
                        "icon" : "assets/woman_icon.svg",
                        "text": "Women's Styles"
                    },
                    {
                        "id": 1,
                        "icon" : "assets/men_icon.svg",
                        "text": "Men's Styles"
                    }
                ],
                "buttonText": "I'd like to see both"
            }]
        };
        // this.updateQ = this.updateQ.bind(this);
    }


     insertUrlParam(key, value) {
        if (window.history.pushState) {
            let searchParams = new URLSearchParams(window.location.search);
            searchParams.set(key, value);
            let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
            window.history.pushState({path: newurl}, '', newurl);
            console.log(newurl);

        }
    }

    onChangeQ = (e, qNum, data) => {
        this.setState({ q: qNum });

        if(data.screen != undefined && data.value != undefined) {
            this.insertUrlParam(data.screen, data.value);
        }
    }
    render() {


        return (
            <Question onChangeQ={this.onChangeQ} q={this.state.q} question={this.state.questions[this.state.q]} />
        );
    }
}