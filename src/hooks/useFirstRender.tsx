import { useRef, useEffect } from "react";

export function useFirstRender() {
     console.log("first render custom hook");
     const firstRender = useRef(true);

     useEffect(() => {
          firstRender.current = false;
     }, []);

     return firstRender.current;
}
export default useFirstRender;
