import { useState } from 'react';
import AnimatedContent from "../blocks/Animations/AnimatedContent/AnimatedContent.tsx";
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard.tsx";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard.tsx";
import {Box} from "@mui/material";
import {SocialIcon} from "react-social-icons";
import CustomizedTooltips from "./Tooltip.tsx";
import ResumeModal from './ResumeModal.tsx';
import {observer} from "mobx-react-lite";
import { languageStore } from "../store/language-store.tsx";

const ProfilePhoto = observer(() => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <>
            <AnimatedContent
                distance={300}
                direction="horizontal"
                reverse={false}
                duration={3}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.3}
            >
                <ProfileCard
                    handle="d.prkhdk"
                    status="Online"
                    contactText={languageStore.MyResume}
                    avatarUrl="/img.png"
                    showBehindGradient={true}
                    showUserInfo={true}
                    enableTilt={false}
                    onContactClick={handleOpenModal}
                />
                <Box sx={{mt: 1}}>
                    <SpotlightCard spotlightColor="rgba(117, 0, 117, 0.5)">
                        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                            <CustomizedTooltips title="GitHub"> <SocialIcon url="https://github.com/dprkhdk" network="github" target="_blank" className="socialIcon"/></CustomizedTooltips>
                            <CustomizedTooltips title="GitLab"> <SocialIcon url="https://gitlab.com/d.prkhdk" network="gitlab" target="_blank" className="socialIcon"/></CustomizedTooltips>
                            <CustomizedTooltips title="LinkedIn"> <SocialIcon url="https://www.linkedin.com/in/d-prkhdk/" network="linkedin" target="_blank" className="socialIcon"/></CustomizedTooltips>
                            <CustomizedTooltips title="Telegram"> <SocialIcon url="https://t.me/d_prkhdk" network="telegram" target="_blank" className="socialIcon"/></CustomizedTooltips>
                            <CustomizedTooltips title="Email"> <SocialIcon url="mailto:me@denys-prykhodko.pp.ua" network="email" target="_blank" className="socialIcon"/></CustomizedTooltips>
                        </Box>
                    </SpotlightCard>
                </Box>
            </AnimatedContent>

            <ResumeModal open={modalOpen} onClose={handleCloseModal} />
        </>
    );
});

export default ProfilePhoto;