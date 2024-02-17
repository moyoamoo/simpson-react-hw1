// const loadDatafromDisk = () => {
//     const dataFromDisk = localStorage.getItem("simpsons");
//     console.log(dataFromDisk);
//     if (dataFromDisk) {
//       console.log(JSON.parse(dataFromDisk));
//       return JSON.parse(dataFromDisk);
//     }
//   };

import { useEffect } from "react";

//   useEffect(() => {
//     const dataFromDisk = loadDatafromDisk();
//     if (dataFromDisk) {
//       setSimpsons(dataFromDisk);
//     } else {
//       getApiData();
//     }
//   }, [getApiData]);

export const useLocalStorage = ({key, apiData}) =>{

const loadDatafromDisk = ()=>{
    const dataFromDisk = localStorage.getItem(key);
    if(dataFromDisk){
        return JSON.parse(dataFromDisk);
    }

}
    useEffect(() =>{
      const dataFromDisk = loadDatafromDisk();
      if (dataFromDisk){
        return []
      }
    }, )
}