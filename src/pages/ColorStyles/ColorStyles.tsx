import { Typography, useTheme } from "@mui/material";
import './ColorStyles.scss';
import DefaultPage from "../../components/ComponentLibrary/DefaultPage/DefaultPage";
export default function ColorStyles() {
    const theme = useTheme(); // Access the MUI theme
    const palette = [
        {
            name: 'Brand Colors',
            items: [
                { name: '-', color: 'var(--brand-900)', MUILabel: '', contrastText: true },
                { name: '--brand-dark', color: 'var(--brand-800)', MUILabel: 'primary.dark', contrastText: true },
                { name: '--brand-TELUS', color: 'var(--brand-700)', MUILabel: "primary.main", contrastText: true },
                { name: '--brand-medium', color: 'var(--brand-600)', MUILabel: '', contrastText: true },
                { name: '--brand-light', color: 'var(--brand-500)', MUILabel: 'primary.light', contrastText: true },
                { name: '--brand-graphic', color: 'var(--brand-400)', MUILabel: '', contrastText: true },
                { name: '-', color: 'var(--brand-300)', MUILabel: '', contrastText: false },
                { name: '--brand-lighter', color: 'var(--brand-200)', MUILabel: '', contrastText: false },
                { name: '-', color: 'var(--brand-100)', MUILabel: '', contrastText: false },
                { name: '--brand-lightest', color: 'var(--brand-050)', MUILabel: '', contrastText: false },
            ],
        },
        {
            name: 'Neutral Colors',
            items: [
                { name: '--grey-thunder', color: 'var(--grey-900)', MUILabel: 'grey[900]', contrastText: true },
                { name: '--grey-charcoal', color: 'var(--grey-800)', MUILabel: 'grey[800]', contrastText: true },
                { name: '--grey-shuttle', color: 'var(--grey-700)', MUILabel: 'grey[700]', contrastText: true },
                { name: '--grey-concrete', color: 'var(--grey-600)', MUILabel: 'grey[600]', contrastText: true },
                { name: '--grey-cloud', color: 'var(--grey-500)', MUILabel: 'grey[500]', contrastText: false },
                { name: '--grey-mystic', color: 'var(--grey-400)', MUILabel: 'grey[400]', contrastText: false },
                { name: '--grey-athens', color: 'var(--grey-300)', MUILabel: 'grey[300]', contrastText: false },
                { name: '--grey-athens', color: 'var(--grey-200)', MUILabel: 'grey[200]', contrastText: false },
                { name: '--grey-alabaster', color: 'var(--grey-100)', MUILabel: 'grey[100]', contrastText: false },
                { name: '--grey-alabaster', color: 'var(--grey-050)', MUILabel: 'grey[050]', contrastText: false },
            ],
        },
    ];
    return (
        <DefaultPage pageName="Color Styles"
            description={<p>
                This is the color palette of your application.
            </p>}
            content={
                <div className="palette-category">
                    {palette.map((category) => (
                        <div key={category.name}>
                            <Typography variant="h5">{category.name}</Typography>
                            <div className="palette-grid">
                                {category.items.map((item, index) => (
                                    <div
                                        key={item.name}
                                        className={`palette-item ${item.contrastText ? 'contrast-text' : ''}`}
                                        style={{ backgroundColor: item.color }}
                                    >

                                        <Typography variant="body2">
                                            {item.name}
                                        </Typography>
                                        {item.MUILabel && (
                                            <Typography variant="body2">
                                                {item.MUILabel}
                                            </Typography>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            }>
        </ DefaultPage>
    );
}