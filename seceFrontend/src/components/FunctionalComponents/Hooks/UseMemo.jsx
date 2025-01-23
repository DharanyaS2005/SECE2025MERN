import { useState, useMemo } from "react"

var slowFunction = (num) => {
    for (var slow = 0; slow < 10; slow++) {}
    return num*2;
}
const UseMemo = () => {
    var [num, setNum] = useState(0);
    var [dark, setDark] = useState(false);
    var styling = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    var doublingNumber = useMemo(() => {
        return slowFunction(num)
    }, [num])


return (
    <div style={styling}>
        <h2>This is useMemo page</h2>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
        <button onClick={() => setDark(curTheme => !curTheme)}>toggle theme</button>
        <h4> the number is {doublingNumber} </h4>
    </div>
)
}
export default UseMemo;