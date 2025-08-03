import { Box } from "@mui/material";
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.tsx";
import Carousel from "../blocks/Components/Carousel/Carousel.tsx";
import { observer } from "mobx-react-lite";
import { languageStore } from "../store/language-store.tsx";
const CarouselBox = observer(() => {

    return (
        <Box sx={{ gridArea: 'carousel' }}>
            <AnimatedContent
                distance={300}
                direction="horizontal"
                reverse={true}
                duration={3}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.4}
            >
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        gap: 4
                    }}
                >
                    <Carousel
                        items={languageStore.whatIKnowItems}
                        baseWidth={330}
                        autoplay={true}
                        autoplayDelay={2000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />

                    <Carousel
                        items={languageStore.whatILearnItems}
                        baseWidth={330}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </Box>
            </AnimatedContent>
        </Box>
    );
});

export default CarouselBox;