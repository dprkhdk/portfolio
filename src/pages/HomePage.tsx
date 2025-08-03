import StartingText from "../components/StartingText.tsx";
import ProfilePhoto from "../components/ProfilePhoto.tsx";
import { Box } from "@mui/material";
import CarouselBox from "../components/CarouselBox.tsx"

const HomePage = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                // Задаем разные шаблоны для мобильной и десктопной версий
                gridTemplateAreas: {
                    // Мобильная версия: 3 строки, 1 колонка
                    xs: `
                        "text"
                        "photo"
                        "carousel"
                    `,
                    // Десктопная версия: 2 строки, 2 колонки
                    lg: `
                        "text photo"
                        "carousel photo"
                    `
                },
                gridTemplateColumns: { xs: '1fr', lg: '1fr auto' },
                gap: 4,
                padding: 2,
                marginTop: { xs: 4, lg: 10 },
                alignItems: { xs: "center", lg: "center" },
            }}
        >
            {/* Текст (область 'text') */}
            <Box sx={{ gridArea: 'text' }}>
                <StartingText />
            </Box>

            {/* Фото (область 'photo') */}
            <Box sx={{ gridArea: 'photo', justifySelf: 'center', alignSelf: { lg: 'center' } }}>
                <ProfilePhoto />
            </Box>

            {/* Карусели (область 'carousel') */}
            <CarouselBox/>
        </Box>
    );
};

export default HomePage;