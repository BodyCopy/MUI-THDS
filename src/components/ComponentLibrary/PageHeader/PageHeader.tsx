import { Typography } from '@mui/material';
import './PageHeader.scss'

interface PageHeaderProps {
    children: React.ReactNode;
}
export default function PageHeader({ children }: PageHeaderProps) {
    return (
        <header className='page-header'>
            <Typography variant='hero'>
                {children}
            </Typography>
        </header>
    )
}