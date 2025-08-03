import { type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

// Тип пропсов
interface CustomizedTooltipProps {
    title: string;
    children: ReactNode;
}

const BootstrapTooltip = styled(({ className, ...props }: any) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

export default function CustomizedTooltips({ children, title }: CustomizedTooltipProps) {
    return (
        <BootstrapTooltip title={title}>
            {children}
        </BootstrapTooltip>
    );
}