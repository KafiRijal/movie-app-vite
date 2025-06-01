import { useEffect, useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  useEffect(() => {
    function manipulateDOM() {
      console.log("Lifecycle: Component dimount");
      document.title = `Result: ${angka}`;
    }
    manipulateDOM();
  }, [angka]);

  console.log("Lifecycle: Component dirender");

  function addAngka() {
    setAngka(angka + 1);
    console.log(angka);
  }

  return (
    <div>
      <p>Result : {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}
export default Counter;
