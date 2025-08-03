import { Modal, Box, Typography, Button, IconButton, Fade } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import {observer} from "mobx-react-lite";
import { languageStore } from "../store/language-store.tsx";


interface ResumeModalProps {
    open: boolean;
    onClose: () => void;
}

const modalStyle = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'rgba(10, 5, 20, 0.7)',
    border: '1px solid rgba(132, 0, 255, 0.3)',
    borderRadius: '16px',
    boxShadow: '0 0 30px rgba(132, 0, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    p: 4,
    color: '#fff',
    outline: 'none',
};

const ResumeModal = observer(({ open, onClose }: ResumeModalProps) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            aria-labelledby="resume-download-modal-title"
        >
            <Fade in={open}>
                <Box sx={modalStyle}>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'grey.500',
                            '&:hover': {
                                color: 'white',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography id="resume-download-modal-title" variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
                        {languageStore.DownloadResume}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                        <a href="/cv/Denys%20Prykhodko%20FrontEnd%20Developer(EN).pdf" download="Denys Prykhodko FrontEnd Developer(EN).pdf" style={{ textDecoration: 'none' }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<DownloadIcon />}
                                sx={{
                                    color: '#fff',
                                    borderColor: 'rgba(132, 0, 255, 0.5)',
                                    '&:hover': {
                                        borderColor: 'rgba(132, 0, 255, 1)',
                                        backgroundColor: 'rgba(132, 0, 255, 0.1)',
                                    }
                                }}
                            >
                                English
                            </Button>
                        </a>

                        <a href="/cv/Denys%20Prykhodko%20FrontEnd%20Developer(UA).pdf" download="Denys Prykhodko FrontEnd Developer(UA).pdf" style={{ textDecoration: 'none' }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<DownloadIcon />}
                                sx={{
                                    color: '#fff',
                                    borderColor: 'rgba(132, 0, 255, 0.5)',
                                    '&:hover': {
                                        borderColor: 'rgba(132, 0, 255, 1)',
                                        backgroundColor: 'rgba(132, 0, 255, 0.1)',
                                    }
                                }}
                            >
                                Українське
                            </Button>
                        </a>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
});

export default ResumeModal;