import React from "react";
import ClassSession from "../components/ClassSession";

  
const Ranks = () => {
  return (
    <div>
        <div className="row text-white">
            <div className="col-12"><h1>Class Schedule</h1></div>
        </div>
        <div className="col-lg-5 col-sm-12"><ClassSession/></div>
        <div className="row bg-primary text-white">
          <h1>Build strength, confidence, and character through martial arts</h1>
            <div className="col-lg-4 col-sm-12">
              <ul>             
                <h2>Muay Thai Kickboxing</h2>
                <li>
                Muay Thai is a martial art derived from the ancient battlefield  arts of  Thailand. Unlike ordinary  kickboxing, Muay Thai permits  strikes with the knees and the elbows, as  well as punches and kicks.  Muay Thai bouts feature a lot of kicks to the  legs to slow down an  opponent, as well as a lot of clinch work. Clinch  work is a Muay Thai  specialty in which you control your opponent's upper body with your arms  in order to land knees and elbows or to trow them to the mat. 
                </li>
                <div>
                  <img src="muaythaisample.jpg" className="w-100 h-100"/>
                </div>
              </ul>
            </div>
              <div className="col-lg-4 col-sm-12">
                <ul>
                  
                  <h2>Brazilian Jiu-Jitsu</h2>
                <li>
                Jiu-Jitsu has it routes in Japan, but its modern and most widely practised form comes from Brazil. Brazilian Jiu-Jitsu is a martial art that focuses on grappling and ground fighting against opponents by utilising various chokes, joint locks, and other submissions to take out an opponent. Traditionally it is practised while wearing a gi and belt, with the belt color signifying you rank and status on the mat. Practitioners of this art can grow their physical ability and confidence for self defense through training, while having fun at the same time.
                </li>
                <div>
                  <img src="bjjsample.jpg" className="w-100 h-100"/>
                </div>
                </ul>
              </div>
              <div className="col-lg-4 col-sm-12">
                <ul>
                  <h2>Wrestling</h2>
                <li>
                  Wrestling's is considered to be one of the most ancient of sports, and has been recorded as one of the main events in the very first olympics. This martial art focuses on grappling, takedowns, and pins to control opponents. While it is considered to be one of the most physically demanding martial arts, wrestling is the foundation in which the art of fighting is built. A skilled wrestler can confidently go into a fight knowing that he can control when and where the fight goes to the ground.  
                </li>
                <div>
                  <img src="wrestlingsample.jpg" className="w-100 h-100"/>
                </div>
                </ul>
              </div>
                
            </div>

        </div>     

  );
};
  
export default Ranks;