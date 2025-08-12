import './PageNav.scss';

interface PageNavProps {
    children: React.ReactNode;
}

export default function PageNav({ children }: PageNavProps) {
    return (
        <nav className="page-nav">
            {children}
        </nav>
    )
}