import React from "react";
  
const Home = () => {
  return (
    <div className="bg-primary text-white">
      <div>
        <img src="riptidecircle.png" className="mx-auto d-block m-5 w-50"/>
        <h1 className="fw-bolder text-center" >
            Train to be the best version of you!
        </h1>
        <img src="riptidegrouppic.jpg" className="rounded mx-auto d-block w-50 m-5"/>
      </div>
      <div className="row"> 
        <div className="col-4">
        <p className="fs-3 text-center">Ready to get started? Your first class is free!</p>
        <a href="/classes" type="button" className="btn btn-dark btn-lg m-4">Sign up and enroll for your first class!</a>
        </div>
        <div className="col-4">
          <p className="fs-4">
          RipTide Martial Arts Academy was founded in 2008 by John Juarez. After studying martial arts for the majority of his life, John felt that it was time for the next phase of his martial arts journey—passing on the knowledge he accumulated throughout his respective career. He decided to use his knowledge and background to help children and adults achieve their martial arts and fitness goals.          
          </p>
        </div>
        <div className="col-4">
          <p className="fs-4">
          John served as a US Marine for 12 years, competing at the highest level of marksmanship. His extensive knowledge of MMA has come from various training opportunities from some of the top world-renowned MMA gyms. (Xtreme Couture & American top team).          
          </p>
        </div>
      </div>  
    </div>
  );
};
  
export default Home;