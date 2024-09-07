import React from 'react';
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
const QZone = () => {
    return (
      <div className="bg-secondary text-center p-2  m-2">
        <h4>Q- zone</h4>
        <div>
          <img src={qZone1} className="img-fluid" alt="" />
          <img src={qZone2} className="img-fluid" alt="" />
          <img src={qZone3} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default QZone;