import { Link, TextField, Typography } from "@mui/material";
import DefaultPage from "../../components/ComponentLibrary/DefaultPage/DefaultPage";
import './TypographyStyles.scss';
import { useEffect, useState } from "react";
export default function TypographyStyles() {
    const [modularTypeScale, setModularTypeScale] = useState(1.125);

    const handleScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value); // Parse as a float for decimal values
        if (!isNaN(newValue) && newValue > 0) { // Ensure the value is valid and positive
            setModularTypeScale(newValue);
        } else {
            setModularTypeScale(1); // Default to 1 if the input is invalid
        }
    };

    useEffect(() => {
        console.log(`Modular Type Scale updated: ${modularTypeScale}`);
        document.documentElement.style.setProperty('--typography-scale', modularTypeScale.toString());
    }, [modularTypeScale]);

    return (
        <DefaultPage
            pageName="Typography Styles"
            description={<p>This is the Typography page of your application.</p>}
            content={
                <div className="typography-styles-grid grid">
                    <TextField
                        label="Modular Scale"
                        type="number" // Use number input
                        inputProps={{ step: 0.05 }} // Allow increments of 0.05
                        value={modularTypeScale} // Bind state to input value
                        onChange={handleScaleChange} // Update state on input change
                    />
                    <p>Current Scale: {modularTypeScale}</p>
                    <Typography textAlign="left" variant="hero" variantMapping={{ hero: 'h1' }}>This is a Hero</Typography>
                    <Typography textAlign="left" variant="hero" variantMapping={{ hero: 'h1' }}>This is long Hero with a linebreak</Typography>
                    <Typography textAlign="left" variant="h1">This is an H1</Typography>
                    <Typography textAlign="left" variant="h1">This is a long H1 with a linebreak</Typography>
                    <Typography textAlign="left" variant="h2">This is an H2</Typography>
                    <Typography textAlign="left" variant="h2">This is a long H2 with a linebreak</Typography>
                    <Typography textAlign="left" variant="h3">This is an H3</Typography>
                    <Typography textAlign="left" variant="h3">This is a long H3 with a linebreak</Typography>
                    <Typography textAlign="left" variant="h4">This is an H4</Typography>
                    <Typography textAlign="left" variant="h4">This is a extra long H4 with extra content to show a linebreak</Typography>
                    <Typography textAlign="left" variant="h5">This is an H5</Typography>
                    <Typography textAlign="left" variant="h5">This is a extra long H5 with extra content to show a linebreak</Typography>
                    <Typography textAlign="left" variant="h6">This is an H6</Typography>
                    <Typography textAlign="left" variant="h6">This is a extra long H6 with extra content to show a linebreak</Typography>
                    <Typography textAlign="left" variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos velit illo eius consequatur obcaecati deserunt nesciunt nemo dicta? Totam blanditiis officiis, dignissimos quia quo distinctio molestias in provident nisi? Voluptatum repellendus vitae animi consectetur voluptatibus eligendi ab, quisquam quos quam quas ad corporis excepturi quae est voluptas facilis nam amet id facere sunt eius veritatis hic delectus nihil. Ipsum adipisci laboriosam aspernatur ea excepturi modi officia, vel blanditiis ullam praesentium incidunt eius nihil ab eaque dolorum? Nesciunt culpa minus dolores! Quod cumque hic nemo odio! Corrupti corporis illo officiis <Link> this is a Link in a body of text</Link> quaerat libero et sequi dicta expedita tenetur voluptatem saepe odit totam quod at reiciendis mollitia nisi laudantium iusto, nulla ratione deleniti omnis aliquid. Aut nesciunt pariatur ipsum incidunt quisquam harum culpa.</Typography>
                    <Typography textAlign="left" variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt a exercitationem facilis magnam sapiente, consequuntur, placeat suscipit debitis similique optio pariatur voluptates fugit tempora, ex velit quia adipisci. Iusto nobis consectetur dolor consequatur reprehenderit, rem voluptate obcaecati eaque pariatur, ipsam nisi error tempora delectus enim vel a dolorem. Quo possimus harum asperiores minima doloribus nulla cum quos voluptatem sit quis, dolor animi ab minus in doloremque officiis. Omnis modi possimus pariatur saepe ipsum expedita tenetur obcaecati sunt dicta cumque tempore temporibus veniam, qui 
                    <Link> this is a Link in a body of text</Link> blanditiis? Ducimus quas corrupti, similique nemo, ratione minus voluptatum nisi nobis soluta dolore distinctio vero aut, alias consectetur. Ipsum asperiores quisquam in dolore error possimus esse, necessitatibus saepe et pariatur aut obcaecati animi delectus, ullam nostrum.</Typography>
                    <Typography textAlign="left" variant="caption">This is a Caption</Typography>
                    <Typography textAlign="left" variant="button">This is a Button</Typography>
                    <Typography textAlign="left" variant="overline">This is an Overline</Typography>
                    <Link>This is a Link</Link>
                </div>
            }>
        </ DefaultPage>
    );
}