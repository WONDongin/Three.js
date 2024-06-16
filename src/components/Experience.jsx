import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";


const Experience = () => {

    return (
        <>
            <ambientLight intensity={2} />  {/* 빛 */}
            <OrbitControls enableZoom={false} />    {/* 자유시점 + 확대 막기(스크롤기능) */}
            <ScrollControls pages={3} damping={0.25} >  {/* 스크롤 이벤트 */}
                <Overlay />
                <Office />
            </ScrollControls>
        </>
    );
};

export default Experience;
