import PageHeader from '../PageHeader/PageHeader';
import './DefaultPage.scss';

interface DefaultPageProps {
    pageName: string;
    description: React.ReactNode;
    content: React.ReactNode;
}
export default function DefaultPage({ pageName, content, description }: DefaultPageProps) {
    return (
        <main className='default-page'>
            <PageHeader>
                {pageName}
            </PageHeader>
            {description && (
                <div className='description'>
                    {description}
                </div>
            )}
            <div className='page-content'>
                {content}
            </div>
        </main>
    )
}