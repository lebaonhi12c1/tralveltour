import { useEffect, useRef, useState } from "react";

export  const useClickOutSide = (action) =>{
  const nodeRef = useRef();
  useEffect(() => {
    function handleClickOutSide(e) {
      if (!nodeRef.current?.contains(e.target)) {
        action()
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return nodeRef
}
const handleHover = (action,value)=>{
    action(!value)
}
const getBox = (color,size)=>{
  const box = Array(size).fill().map((item,index)=>`${index}px ${index}px 0px ${color ? color: '#000'}`).join(',')
  return {
    boxShadow: box
  }
}
const getReponsive = ()=>{
  const [reponsive,setReponsive] = useState(false)
  useEffect(()=>{
    const handleReponsiveDefautl = ()=>{
        window.innerWidth < 764 ?setReponsive(true) : setReponsive(false)
    }
    const handleReponsive = ()=>{
        window.innerWidth < 764 ?setReponsive(true) : setReponsive(false)
    }
    handleReponsiveDefautl()
    window.addEventListener('resize',handleReponsive)
    return ()=>{
        window.removeEventListener('resize',handleReponsive)
        handleReponsiveDefautl()
    }
  },[])
  return reponsive
}
export {handleHover,getBox,getReponsive}
