import React from "react";
import RankList from "../components/Ranklist";
import Member from "../components/Member";
import Schedule from "../components/Schedule";
  
const Members = () => {
  return (
    <div>
        <div className="row text-white">
            <div className="col-12"><h1>Member Profile</h1></div>
        </div>
        <div className="row text-white">
            <div className="col-lg-8 col-sm-12" >
                <Member />
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="row text-white">
                <div className="col-12"><RankList /></div>
                  
                <div className="col-12"><Schedule /></div>
              </div>
              
              </div>

        </div>     
    </div>
  );
};
  
export default Members;