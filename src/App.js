import React, { useRef, useEffect } from "react";
// import placeholder from "./placeholder.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

function App() {
  const wrapper = useRef();
  const topLayer = useRef();
  const handle = useRef();
  let skew = 0;
  let delta = 0;

  useEffect(() => {
    if (wrapper.current.className === "skewed") {
      skew = 1000;
    }
  }, []);

  const handleMove = (e) => {
    delta = e.clientX - (window.innerWidth / 2) * 0.5;
    handle.current.style.left = e.clientX + delta + "px";
    topLayer.current.style.width = e.clientX + skew + delta + "px";
  };
  return (
    <div className="App">
      <div
        id="wrapper"
        className="skewed"
        ref={wrapper}
        onMouseMove={(e) => handleMove(e)}
      >
        <div className="layer bottom">
          <div className="content-wrapper">
            <img src={img1} alt="bottom" />
          </div>
        </div>
        <div className="layer top" ref={topLayer}>
          <div className="content-wrapper">
            <img src={img2} alt="top" />
          </div>
        </div>
        <div className=" skewed handle" ref={handle}></div>
      </div>
    </div>
  );
}

export default App;
