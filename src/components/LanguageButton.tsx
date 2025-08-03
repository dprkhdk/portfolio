import {languageStore} from "../store/language-store.tsx";
import {Button} from "@mui/material";
import {observer} from "mobx-react-lite";

const LanguageButton = observer(() =>{
    const handleLanguageChange = () => {
        console.log(languageStore.mainText)
        languageStore.toggleChange();
    };
    return (
        <Button
            onClick={handleLanguageChange}
            key={languageStore.language}
            sx={{
                variant: "outlined",
                px: 2,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: '12px',
                borderColor: 'linear-gradient(145deg, #6a0dad, #8a2be2)',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(138, 43, 226, 0.4)',
                '&:hover': {
                    borderColor: 'linear-gradient(145deg, #8a2be2, #6a0dad)',
                    boxShadow: '0 6px 16px rgba(138, 43, 226, 0.6)',
                },
                '&:active': {
                    boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)',
                },
            }}
        >
            {languageStore.languageFlag}
        </Button>
    )
})
export default LanguageButton;