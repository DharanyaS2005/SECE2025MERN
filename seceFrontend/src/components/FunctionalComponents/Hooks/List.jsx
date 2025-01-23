import { useState, useEffect } from "react";
const List = ({ func }) => {
  var [numbers, setNumbers] = useState([]);
  useEffect(() => {
    setNumbers(func(5));
  }, [func]);
  return (
    <div>
      <h3>the number list is</h3>
      {numbers.map((number, index) => (
        <h4 key={index}>{number}</h4>
      ))}
    </div>
  );
};
export default List;
