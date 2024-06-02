import React from "react";
import SectionHeading from "./SectionHeading.jsx";

function Solutions() {
    return (
        <div className="text-center">
            <SectionHeading title="解决方案" subtitle="解决方案解决方案解决方案解决方案解决方案" />
            <div className="grid lg:grid-cols-2 mt-20 gap-20">
                <div>
                    <h3 className="mt-7 text-[32px] font-fold">强有力的工具</h3>
                    <p className="mt-4 mb-8 text-gray-500">
                        强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具
                    </p>
                    <ul className="grid gap-3">
                        {/*{*/}
                        {/*    ["功能1", "功能2", "功能3"].map((item, index) => (*/}
                        {/*        <li key={index} className="flex items-center">*/}
                        {/*            <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>*/}
                        {/*            {item}*/}
                        {/*        </li>*/}
                        {/*    ))*/}
                        {/*}*/}

                        {[1,2].map((v) => (
                             <li className={`p-5 justify-between rounded border border-zinc-100 ${
                                 v === 1 && 'bg-zinc-100'
                             }`}
                                 key={v}
                             >
                                 <p className="text-lg font-bold">构建简单的生态系统</p>
                                 <div className="flex justify-between relative">
                                     <p className="text-lg leading-7 mt-1">
                                         构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统
                                     </p>
                                     <svg t="1710566198421" className="icon shrink-0 ml-8 relative -top-2" viewBox="0 0 1024 1024" version="1.1"
                                          xmlns="http://www.w3.org/2000/svg" p-id="4447" width="38" height="38">
                                         <path
                                             d="M613.610667 56.661333c14.570667-18.453333 21.696-15.082667 15.829333 8l-74.048 290.88 243.413333 73.173334c11.178667 3.349333 14.549333 13.653333 7.488 23.04L418.773333 967.893333c-14.186667 18.901333-20.906667 15.786667-14.933333-7.146666l78.378667-301.568-281.194667-49.429334c-11.605333-2.048-15.189333-11.072-7.744-20.522666L613.610667 56.661333z"
                                             fill="#3D3D3D" p-id="4448"></path>
                                     </svg>
                                 </div>
                             </li>
                            ))
                        }
                    </ul>
                </div>
                <img src="https://cdn.pixabay.com/photo/2020/06/21/13/58/fly-fishing-5324969_1280.jpg" alt=""/>
            </div>
        </div>
    );
}

export default Solutions;