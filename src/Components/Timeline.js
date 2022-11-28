import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal";
import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./Confetti";

import "../App.css";

const Timeline = ({ setObserver, callback }) => {
  const [message0, setMessage0] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");
  const [messageEnd, setMessageEnd] = useState("");

  const timeline0 = useRef(null);
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  const timelineEnd = useRef(null);
  const circle0 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);
  const circleEnd = useRef(null);

  const someCallback0 = () => {
    setMessage0("Step one");
    callback();
  };

  const someCallback = () => {
    setMessage1("Step one");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Step two");
  };

  const someCallback3 = () => {
    setMessage3("Step two");
  };

  const someCallback4 = () => {
    setMessage4("Step two");
  };
  const someCallback5 = () => {
    setMessage5("Step two");
  };
  const someCallback6 = () => {
    setMessage6("Step two");
  };

  const someCallbackEnd = () => {
    setMessageEnd("Finish");
    fireConfetti();
  };

  useEffect(() => {
    //setObserver(timeline0.current);
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);
    setObserver(timelineEnd.current);
    //setObserver(circle0.current, someCallback);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
    setObserver(circle6.current, someCallback6);
    setObserver(circleEnd.current, someCallbackEnd);
  }, []);

  return (
    <div className="wrapper resume">

    {/*<div id="timeline0" ref={timeline0} className="timeline" />
      <div className="circleWrapper">
        <div id="circle0" ref={circle0} className="circle"> </div>
        <div className="messageR">
            <div key="work company">
                <h4>Experienced Digital Nomad</h4>
                <p className="info">
                    Mind Engineer
                    <span>&bull;</span> <em className="date">Dec '22</em>
                </p>
                <div>I currently travel the world in order to learn more about myself, train my mind and shape my reality.</div>
            </div>  
        </div>
    </div>*/} 

      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle"> </div>
        <div className="messageR">
            <div key="work company">
                <h4>Blockchain Project, Germany</h4>
                <p className="info">
                    Blockchain developer 
                    <span>&bull;</span> <em className="date">Oct '22</em>
                </p>
                <div>Developed Smart Contracts and a blockchain marketplace to mint NFTs and showcase user's wallet.</div>
            </div>  
        </div>
      </div>

      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle"></div>
        <div className="messageL">
            <div key="work company">
                <h4>Solo Trip to Nepal and India</h4>
                <p className="info">
                    Mind Engineer
                    <span>&bull;</span> <em className="date">Sep '22</em>
                </p>
                <div>Designed a spiritual search for mind growth and found equanimity.</div>
            </div> 
        </div>
      </div>

      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle"> </div>
        <div className="messageR">
            <div key="work company">
                <h4>JPMorgan Asset Management, New York</h4>
                <p className="info">
                    Senior Software Engineer
                    <span>&bull;</span> <em className="date">Oct '18 to Aug '22</em>
                </p>
                <div>Developed and architected financial software.</div>
            </div> 
        </div>
      </div>
        
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle"></div>
        <div className="messageL">
            <div key="work company">
                <h4>Money.Net, Online Trading Platform, New York</h4>
                <p className="info">
                    Software Engineer
                    <span>&bull;</span> <em className="date">Jun '16 to Jun '18</em>
                </p>
                <div>Studied half of my subjects at Stern Business school and won innovation contests.</div>
            </div> 
        </div>
      </div>

      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle"></div>
        <div className="messageR">
            <div key="work company">
                <h4>Engineering School, New York University</h4>
                <p className="info">
                    Master in Management of Technology
                    <span>&bull;</span> <em className="date">2015 to 2018</em>
                </p>
                <div>Studied half of my subjects at Stern Business school and won innovation contests.</div>
            </div> 
        </div>
      </div>

      <div id="timeline6" ref={timeline6} className="timeline" />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle"></div>
        <div className="messageL">
            <div key="work company">
                <h4>Invip Device for the Visually Impaired, New York</h4>
                <p className="info">
                    CTO Co-Founder
                    <span>&bull;</span> <em className="date">2015 to 2018</em>
                </p>
                <div>Mobile tool that allows visually impaired interpret the visual world using AI and a speech interface.</div>
            </div> 
        </div>
      </div>

      <div id="timelineEnd" ref={timelineEnd} className="timeline" />
      <div className="circleWrapper">
        <div id="circleEnd" ref={circleEnd} className="circle"></div>
        <div className="messageR">
            <div key="work company">
                <h4>Católica de Santa María University, Peru</h4>
                <p className="info">
                    BSc. Systems Engineering, Computer Science Major
                    <span>&bull;</span> <em className="date">2013</em>
                </p>
                <div>Valedictorian, class president, fell in love with software development. Here is where the magic started.</div>
            </div> 
        </div>
      </div>

    </div>
  );
};

export default function Storytelling() {

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="storytelling ">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#6a4062"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />

      <Fade duration={1000}>
            <div className="row">
                <h1>A Bit More About Me...</h1>
                <div className="bgrid-thirds">
                    <div className="row">
                        <div className="columns">
                            <p >
                                I enjoy ritically reasoning topics. Topics that particulary interest me
                                are Financial Markets, Blockchain, Quantum physics, Entrepreneurship. I read about 
                                ancient civilizations like Sumerians and Incas. 
                            </p>
                        </div>
                        <div className="columns ">
                        <p>
                            My Myers-BriggsType Indicator (MBTI) is INTP [Introverted iNtuitive Thinking Perceiving].
                            I hope this bring more clarity regarding team fit. I encourage you to take the test here.
                        </p>
                        </div>
                        <div className="columns ">
                        <p>
                            I am actively working on shaping a framework and compiling learning for what I call Mind Engineering.
                            If you're interested, we can have a short call to exchange ideas. You can book me here.
                        </p>
                        </div>
                    </div>
                </div>
              </div> 
        </Fade>
    </div>
  );
}
