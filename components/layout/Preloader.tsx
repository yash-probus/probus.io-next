"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [rendered, setRendered] = useState(true);

  useEffect(() => {
    // Smooth fade out after page hydration/ready
    const timer = setTimeout(() => {
      setLoading(false);
      const removeTimer = setTimeout(() => {
        setRendered(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (!rendered) return null;

  return (
    <div
      id="preloader-wrapper"
      style={{
        backgroundColor: "#fff",
        zIndex: 10000,
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: loading ? 1 : 0,
        visibility: loading ? "visible" : "hidden",
        transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
        pointerEvents: loading ? "all" : "none",
      }}
    >
      <div className="preloader-container">
        <div className="cssload-loader">
          <div
            className="cssload-inner cssload-one"
            style={{ borderBottomColor: "#3c8de2" }}
          />
          <div
            className="cssload-inner cssload-two"
            style={{ borderRightColor: "#ffa53c" }}
          />
          <div
            className="cssload-inner cssload-three"
            style={{ borderTopColor: "#946ff7" }}
          />
        </div>
      </div>

      <style>{`
        .preloader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .preloader-container .cssload-loader {
          position: absolute;
          width: 100px;
          height: 100px;
          left: 50%;
          top: 50%;
          margin-top: -50px;
          margin-left: -50px;
          perspective: 780px;
        }
        .preloader-container .cssload-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 50%;
        }
        .preloader-container .cssload-inner.cssload-one {
          left: 0;
          top: 0;
          animation: cssload-rotate-one 1.15s linear infinite;
          border-bottom-width: 3px;
          border-bottom-style: solid;
        }
        .preloader-container .cssload-inner.cssload-two {
          right: 0;
          top: 0;
          animation: cssload-rotate-two 1.15s linear infinite;
          border-right-width: 3px;
          border-right-style: solid;
        }
        .preloader-container .cssload-inner.cssload-three {
          right: 0;
          bottom: 0;
          animation: cssload-rotate-three 1.15s linear infinite;
          border-top-width: 3px;
          border-top-style: solid;
        }

        @keyframes cssload-rotate-one {
          0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
          }
        }
        @keyframes cssload-rotate-two {
          0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
          }
        }
        @keyframes cssload-rotate-three {
          0% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
}
