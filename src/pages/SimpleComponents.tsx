import { Button, TextField } from "@mui/material";
import DefaultPage from "../components/ComponentLibrary/DefaultPage/DefaultPage";
import Dialog from "../components/Dialog/Dialog";

export default function SimpleComponents() {
    return (
        <DefaultPage
            pageName="Simple components"
            description={<p>This is the simple components page of your application.</p>}
            content={
                <div>
                    <section className="f-ttb">
                        <h4 data-t-ui="h1">Buttons</h4>
                        <div className="f-ltr">
                            <Button size="small">Test</Button>
                            <Button size="small" variant="contained">Test</Button>
                            <Button size="small" variant="outlined">Test</Button>
                        </div>
                        <div className="f-ltr">
                            <Button size="medium">Test</Button>
                            <Button size="medium" variant="contained">Test</Button>
                            <Button size="medium" variant="outlined">Test</Button>
                        </div>
                        <div className="f-ltr">
                            <Button size="large" >Test</Button>
                            <Button size="large" variant="contained">Test</Button>
                            <Button size="large" variant="outlined">Test</Button>
                        </div>
                    </section>
                    <section>
                        <h4 data-t-ui="h1">Controls</h4>
                        <TextField type="text" label="Text field" />
                    </section>
                    <section>
                        <h4>Messaging</h4>
                        <Dialog title="TELUS Health rules" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nesciunt quas veritatis aspernatur labore expedita magni sit mollitia blanditiis quam distinctio illum ipsa odio perferendis, earum harum nobis reiciendis suscipit rem? Laudantium magnam sunt nostrum libero quasi quos qui facilis. Officiis deleniti nam odit a molestiae labore voluptate eius, ipsa impedit distinctio praesentium veniam porro culpa pariatur, excepturi laboriosam minima ipsum placeat at, delectus amet possimus minus cumque sed! Cumque error, reprehenderit quas fugiat inventore, aliquam hic qui consequuntur enim, ipsam temporibus laudantium? Fuga in odit nihil rerum. Eligendi quibusdam praesentium perferendis sequi, pariatur quaerat, commodi excepturi sit esse nemo expedita ab est! Esse soluta et molestias sit, quos incidunt nobis ullam laudantium rem aperiam numquam cum non ipsa accusantium."
                            actions={<div><Button size="large">Cancel</Button><Button size="large" variant="contained">Click</Button></div>}
                        ></Dialog>

                    </section>
                </div>
            }>
        </ DefaultPage>
    );
}