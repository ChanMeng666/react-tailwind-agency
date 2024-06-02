import React from "react";
import Logo from "../assets/react.svg";

function Footer() {
    return (
        <footer className="grid gap-8 md:gap-0 text-gray-500 md:w-4/5 mx-auto mt-32 md:grid-cols-5">
            <div>
                <img src={Logo} alt="logo" className="w-8 h-8" />
                <p>
                    <a href="#">协议</a>.<a href="#">隐私</a>
                </p>
            </div>
            {/*{["产品", "关于", "博客", "联系"].map((item, index) => (*/}
            {/*    <div key={index}>*/}
            {/*        <h4 className="font-bold mb-4">{item}</h4>*/}
            {/*        <ul>*/}
            {/*            {["特性", "定价", "案例", "团队"].map((link, index) => (*/}
            {/*                <li key={index}>*/}
            {/*                    <a href="#">{link}</a>*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*))}*/}
            {
                [1,2,3].map((v) => (
                    <nav key={v} className="grid gap-2">
                        <p className="text-lg text-black">产品介绍</p>
                        <a href="#">产品介绍1</a>
                        <a href="#">产品介绍2</a>
                        <a href="#">产品介绍3</a>
                        <a href="#">产品介绍4</a>
                        <a href="#">产品介绍5</a>
                    </nav>
                ))
            }
            <nav className="grid gap-2 content-start">
                <p className="text-base text-black">注册</p>
                <a href="#">成为会员有福利</a>
                <input type="text" name="" id="" className="py-2 px-3 border" placeholder="email"/>
            </nav>
            <div className="col-span-full mt-12 border-t py-9 flex flex-col gap-4 justify-between md:flex-row">
                <p>© 2021 React</p>
                <div>
                    <a href="#" className="mr-2">Facebook</a>
                    <a href="#" className="mr-2">Twitter</a>
                    <a href="#" className="mr-2">Instagram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer