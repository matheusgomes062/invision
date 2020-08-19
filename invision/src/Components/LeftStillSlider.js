import React from "react";
import Flicking from "@egjs/react-flicking";

const LeftStillSlider = () => {
  return (
    <Flicking className="flicking flicking0" gap={10}>
      <div className="panel">
        <img src="../Assets/Data.png" alt="img-1" />
      </div>
      <div className="panel">
        <img src="../Assets/Data.png" alt="img-1" />
      </div>
      <div className="panel">
        <img src="../Assets/Data.png" alt="img-1" />
      </div>
    </Flicking>
  );
};

export default LeftStillSlider;
