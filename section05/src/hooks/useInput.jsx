import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  // return 해줘야 함수 밖에서도 사용 가능
  return [input, onChange];
}

export default useInput;