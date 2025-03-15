import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="useRef focus Inputfield" className="input-focus"/>
    </div>
  );
}

export default FocusInput;
