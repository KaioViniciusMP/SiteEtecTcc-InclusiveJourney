import DisplayLugaresRecomendados from "@/src/components/DisplayLugaresRecomendados";
import FooterHome from "@/src/components/FooterHome";
import { LugaresSection } from "@/src/components/LugaresSection";
import { NavBar } from "@/src/components/NavBar";

export default function Lugares() {
    return (
        <div style={{
            overflowY: 'auto',
            height: '100vh',    	
        }}>
            <NavBar />
            <DisplayLugaresRecomendados />
            <LugaresSection />
            <FooterHome />
        </ div>
    )
}