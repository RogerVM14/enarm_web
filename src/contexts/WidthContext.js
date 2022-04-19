import { createContext } from "react";
 
const WidthContext = createContext('');

// export const WidthProvider = ({children}) => {
//     const [width, setWidth] = useState(getWindowWidth());

//     useEffect(() => {
//         window.addEventListener("resize", event => {
//             const x = getWindowWidth();
//             setWidth(x);
//         });
//         console.log("Commando Resize: " + width);
//     }, [width]);

//     return (
//         <WidthContext>
//             {children}
//         </WidthContext>
//     )
// };

export default WidthContext;