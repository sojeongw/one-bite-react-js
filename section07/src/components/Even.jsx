import {useEffect} from "react";

// 3. unmount(죽음)
const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수. useEffect가 끝날때 실행된다.
        return () => {
            console.log("unmount");
        };
    }, [])
    return <div>짝수입니다</div>
}

export default Even;