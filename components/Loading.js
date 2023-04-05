import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Loading(props) {
  const [isloading, setisloading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouter = () => {
      router.events.on("routeChangeStart", ()=>setisloading(true));
      router.events.on("routeChangeComplete", ()=>setisloading(false));
    };
    handleRouter();
    return () => handleRouter();
  }, []);
  return (
    isloading && (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
        <div className="border-[4px] w-[50px] h-[50px] border-white rounded-full border-r-slate-300 animate-spin"></div>
      </div>
    )
    // <div>
    //     {
    //         isloading && (
    //           <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
    //             <div className="border-[4px] w-[50px] h-[50px] border-white rounded-full border-r-slate-300 animate-spin"></div>
    //           </div>
    //         )
    //     }
    // </div>
  );
}

export default Loading;
