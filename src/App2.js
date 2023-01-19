import { useState } from "react";
import Timer from "./Components/Timer";

function App2() {
    //  timer의 상태관리
    const [showTimer, setShowTimer] = useState(false); 
    return (
        <div>
            {/* 둘 다 true일 때만 실행함 */}
            {showTimer && <Timer/>} 
            {/* 클릭했을 때 showTimer가 true가 됨 => 타이머 실행 */}
            {/* 한 번 더 클릭하면 다시 false로 변경 => 타이머 종료 */}
            <button onClick={() => setShowTimer(!showTimer)}>타이머 시작 / 종료</button>
        </div>
    )
}

export default App2;