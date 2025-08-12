import { IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './Dialog.scss'

interface DialogProps {
    actions: React.ReactNode;
    title: string;
    description: string;
}
export default function Dialog({ title, description, actions }: DialogProps) {
    return (
        <dialog className='dialog'>
            <header className='dialog__header'>
                <h4 className='dialog__header-heading'>
                    {title}
                </h4>
                <IconButton className='dialog__header-close-button'>
                    <CloseIcon/>
                </IconButton>
            </header>
            {description && (
                <div className='dialog-description'>
                    {description}
                </div>
            )}
            <div className='dialog-actions'>
                {actions}
            </div>
        </dialog>
    )
}