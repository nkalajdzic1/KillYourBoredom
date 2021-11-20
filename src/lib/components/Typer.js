import React, { useState, useEffect } from "react";
const Typer = ({ text: dataText, className }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [loop, setLoop] = useState(0);

  const handleTyping = () => {
    setText(
      isDeleting
        ? dataText.substring(0, text.length - 1)
        : dataText.substring(0, text.length + 1)
    );

    setSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === dataText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoop(loop + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, speed);
    return () => clearTimeout(timer);
  });

  return <div className={className}>{text}</div>;
};

export default Typer;
