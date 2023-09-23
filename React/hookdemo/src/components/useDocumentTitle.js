import { useEffect, useRef } from "react";

const DynamicDocumentTitle=({title})=>{
    useEffect(()=>{
        document.title=title;
    },[title])

    return;
}

export default DynamicDocumentTitle;

// function useDocumentTitle(title){

//     const defaultTitle= useRef(document.title);

//     useEffect(()=>{
//         document.title=title;
//     },[title])
// }

// export default useDocumentTitle;