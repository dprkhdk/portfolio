import { Box } from "@mui/material";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText.tsx";
import { observer } from "mobx-react-lite";
import { languageStore } from "../store/language-store.tsx";

const StartingText = observer(() => {
    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };



    return (
        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", maxWidth: "1200px", alignItems: { xs: "center", lg: "start" } }}>
            <SplitText
                key={languageStore.mainText}
                text={languageStore.mainText}
                className="text-2xl font-semibold"
                delay={100}
                duration={0.4}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="start"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
                key={languageStore.secondaryText}
                text={languageStore.secondaryText}
                className="text-1xl font-semibold"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="start"
            />

            <Box
                sx={{
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                    },
                }}
            >
                <SplitText
                    key={languageStore.thirdText}
                    text={languageStore.thirdText}
                    className="text-xl font-semibold"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="lines"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="start"
                />
            </Box>
        </Box>
    );
});

export default StartingText;