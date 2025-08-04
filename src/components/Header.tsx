import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";

import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.tsx";
import LanguageButton from "./LanguageButton.tsx";
import GooeyNav from "../blocks/Components/GooeyNav/GooeyNav.tsx";
import { languageStore } from "../store/language-store.tsx";

const Header = observer(() => {
    const location = useLocation();

    const items = [
        { label: languageStore.Home, href: "/" },
        { label: languageStore.Projects, href: "/projects" },
        { label: languageStore.Experience, href: "/experience" },
    ];
    const activeIndex = items.findIndex(item => item.href === location.pathname);

    return (
        <AnimatedContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <LanguageButton />
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={activeIndex === -1 ? 0 : activeIndex}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </Box>
        </AnimatedContent>
    );
});

export default Header;