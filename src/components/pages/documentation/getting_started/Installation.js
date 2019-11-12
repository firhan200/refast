import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as myStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Box, BoxTitle, Alert } from '../../../styles';

const Installation = () => {
    return(
        <Box>
            <BoxTitle icon="fa fa-server" label="Environment Setup"/>
            <hr/>
            <b>NodeJS</b> - install node js from its official website here <a rel="noopener noreferrer" href="http://nodejs.org/" target="_blank">http://nodejs.org/</a>.
            <br/>
            <b>NPM</b> - npm will automaticly installed with NodeJS.
            <br/>
            <br/>
            after installation finish you can check version of NodeJS by typing in your terminal or cmd
            <SyntaxHighlighter language="jsx" style={myStyle}>
                {`node -v`}
            </SyntaxHighlighter>
            result:
            <SyntaxHighlighter language="jsx" style={myStyle}>
                {`v12.13.0`}
            </SyntaxHighlighter>
            and check NPM version by typing
            <SyntaxHighlighter language="jsx" style={myStyle}>
                {`npm -v`}
            </SyntaxHighlighter>
            result:
            <SyntaxHighlighter language="jsx" style={myStyle}>
                {`v6.12.0`}
            </SyntaxHighlighter>

            <br/>
            <BoxTitle icon="fa fa-globe" label="Run Demo"/>
            <hr/>
            to run demo simply install serve and run serve on your machine:
            <SyntaxHighlighter language="jsx" style={myStyle}>
{`npm install -g serve
serve -s build`}
            </SyntaxHighlighter>

            it will show information of your server running host and port:
            <SyntaxHighlighter language="jsx" style={myStyle}>
{`Serving!

- Local:            http://localhost:5000
- On Your Network:  http://192.168.1.15:5000

Copied local address to clipboard!`}
            </SyntaxHighlighter>
            then you can run demo by simply run <a rel="noopener noreferrer" target="_blank" href="http://localhost:5000">http://localhost:5000</a> in your browser.
            
            <br/>
            <br/>
            <BoxTitle icon="fa fa-folder" label="Folder Structures"/>
            <hr/>
            below is template folder structure that will make you easy to find components or files.
            <br/>
            <Alert style={{marginTop: '10px'}} type="warning" message={(
                <div>
                    All main components (ProgressBar, Box, Charts, etc) in <b>src/components/styles</b>.
                </div>
            )}/>
            <SyntaxHighlighter language="jsx" style={myStyle}>
{`src/
    components/
        /apps /* example app */
        /layout /* Navbar, Menubar, Notification & Message Panel here */
        /pages /* Authorization, Misc, Error pages, Docs and etc. */
        /styles /* this contains all components template style */
    helpers/
        /* all helpers file */
    redux/
        actions/ /* all redux actions */
        reducers/ /* all reducers */
        store.js /* redux create store */
    sass/
        _colors.scss /* all colors in 1 file make it easy to change */
        _components.scss /* all styles use in components */
        _desktop.scss /* desktop resolution styles */
        _menu.scss /* menu styles */
        _mobile.scss /* mobile resolution styles */
        _tablet.scss /* tablet resolution styles */
        _variables.scss /* global variables */
        index.scss /* put all scss together */
        `}
            </SyntaxHighlighter>
        </Box>
    )
}

export default Installation;