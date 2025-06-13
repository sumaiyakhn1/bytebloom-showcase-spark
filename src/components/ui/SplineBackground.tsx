import { useEffect } from "react";
import React from 'react';


const SplineBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.4/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {React.createElement('spline-viewer', {
        url: 'https://prod.spline.design/2AaxJMwwynC2KUWM/scene.splinecode',
      })}
    </div>
  );
};

export default SplineBackground;
