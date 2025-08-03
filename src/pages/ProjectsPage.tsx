import MagicBento from '../blocks/Components/MagicBento/MagicBento.tsx'
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.tsx";

const ProjectsPage = () => {
    return (
        <AnimatedContent>
<MagicBento
    textAutoHide={true}
    enableStars={true}
    enableSpotlight={true}
    enableBorderGlow={true}
    enableTilt={true}
    enableMagnetism={true}
    clickEffect={true}
    spotlightRadius={300}
    particleCount={12}
    glowColor="132, 0, 255"
        />
        </AnimatedContent>
    );
};
export default ProjectsPage;