import React from "react";
import RankList from "../components/Ranklist";
  
const Ranks = () => {
  return (
    <div>
        <div className="row text-white">
            <div className="col-12"><h1>Ranking System</h1></div>
        </div>
        <div className="row bg-primary text-white">
            <div className="col-lg-8 col-sm-12"><h2>Ranks show the time and dedication that you put into training martial arts. Everyone who starts this journey begins as a white belt, a beginner. As you keep training and learning, you can move up in rank, or belt color, which we track by number of classes you have attended. Your rank not only signifies your skill level, but also shows your dedication to the sport, and your status within the gym. With enough determination and lots of time in effort, eventually you can become a black belt. Anyone wearing a black belt is considered to be an expert, someone who truly lives and breathes the martial arts lifestyle.</h2></div>
            <div className="col-lg-4 col-sm-12">
              <img src="beltranks.jpg" className="w-100"/>
              <RankList className="w-100"/>
            </div>

        </div>     
    </div>
  );
};
  
export default Ranks;