import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10 ${props.right ? 'items-end' : 'items-start'}`}
            style={{opacity: props.opacity}}
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};


export const Overlay = () => {

    const scroll = useScroll();
    const [opacityOne, setOpacityOne] = useState(1);
    const [opacityTwo, setOpacityTwo] = useState(1);
    const [opacityThree, setOpacityThree] = useState(1);

    useFrame(() => {
        setOpacityOne(1 - scroll.range(0, 1 / 3));
        setOpacityTwo(scroll.curve(1 / 3, 1 / 3));
        setOpacityThree(scroll.range(2 / 3, 1 / 3));
    });


    return (
        <Scroll html className="font-orbit">
            <div className="w-screen">
                <Section opacity={opacityOne}>
                    <p className="animate-bounce flex justify-end">❤️</p>
                    <h1 className="font-semibold  text-2xl">🎫 한가람미술관</h1>
                    <p className=" text-gray-500 border-l-2 pl-3 mt-3">본관 전체 3층 총 6개 전시실</p>
                    <ul className="leading-9 mt-3">
                        <li>전시기간 : 10:00 ~ 19:00</li>
                        <li>휴관일 : 매주 월요일</li>
                    </ul>
                    <button className="mt-10 mr-3 border rounded-md p-4">공간 소개</button>
                    <button className="mt-10 border rounded-md p-4">대관 안내</button>
                </Section>
                
                <Section right opacity={opacityTwo}> 
                <p className="animate-bounce flex justify-end">❤️</p>
                    <h1 className="font-semibold  text-2xl">🎫 서울서예박물관</h1>
                    <p className=" text-gray-500 border-l-2 pl-3 mt-3">본관 전체 4층 중 2·3층 총 5개 전시실</p>
                    <ul className="leading-9 mt-3">
                        <li>전시기간 : 09:00 ~ 14:00</li>
                        <li>휴관일 : 매수 월요일</li>
                    </ul>
                    <button className="mt-10 mr-3 border rounded-md p-4">공간 소개</button>
                    <button className="mt-10 border rounded-md p-4">대관 안내</button>
                </Section>

                <Section opacity={opacityThree}>
                <p className="animate-bounce flex justify-end">❤️</p>
                    <h1 className="font-semibold  text-2xl">🎫 제7전시실</h1>
                    <p className=" text-gray-500 border-l-2 pl-3 mt-3">다양한 장르의 작품을 소개할 수 있는 소규모 전시공간</p>
                    <ul className="leading-9 mt-3">
                        <li>전시기간 : 15:00 ~ 21:00</li>
                        <li>휴관일 : 매주 금요일</li>
                    </ul>
                    <button className="mt-10 mr-3 border rounded-md p-4">공간 소개</button>
                    <button className="mt-10 border rounded-md p-4">대관 안내</button>
                </Section>
            </div>
        </Scroll>
    );
};

export default Overlay;