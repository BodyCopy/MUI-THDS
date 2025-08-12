import { IconButton, Icon } from '@mui/material';

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
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-5zsjn4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" height="24px" width="24px" tabindex="-1" title="Close"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
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