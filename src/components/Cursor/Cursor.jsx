import React, { useRef } from "react";
import { useEffect } from "react";
import "./Cursor.scss";

const Cursor = () => {
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (eo) => {
      const { clientX, clientY } = eo;
      console.log(ref.current);
      const mouseX = clientX - ref.current.clientWidth / 2;
      const mouseY = clientY - ref.current.clientHeight / 2;
      ref.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
    return () =>
      document.removeEventListener("mousemove", (eo) => {
        const { clientX, clientY } = eo;
        const mouseX = clientX - ref.current.clientWidth / 2;
        const mouseY = clientY - ref.current.clientHeight / 2;
        ref.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      });
  }, []);

  return <div className="cursor" ref={ref}></div>;
};

export default Cursor;
