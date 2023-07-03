import { useRef } from "react";
import Webcam from "react-webcam";

import "./Camera.css";

function Camera() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <div>
      <header>header</header>
      <div className="main-camera">
        <div className="camera-wrapper">
          <Webcam
            ref={webcamRef}
            className="camera"
            mirrored={true}
            audio={false}
          />
          <canvas ref={canvasRef} className="landmarks" />
        </div>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default Camera;
