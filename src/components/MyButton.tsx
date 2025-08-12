import styles from './MyButton.module.scss';

type btnStyleType = 'filled' | 'outline' | 'ghost';

interface MyButtonProps {
    btnStyle: btnStyleType;
    children: React.ReactNode;
}

export default function MyButton({ btnStyle, children }: MyButtonProps) {
    return (
        <button className={styles[btnStyle]}>
            {children}
        </button>
    )
}