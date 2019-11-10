import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);

const DocsExample = (props) => {
    return (
        <div className="example">
            <div className="preview">
                {/* render example */}
                { typeof props.example !== 'undefined' ? (
                    <div className="result">
                        { typeof props.title !== 'undefined' ? (
                            <div className="label">
                                { props.title }
                            </div>
                        ) : '' }
                        { props.example }
                    </div>
                ) : '' }
                
                {/* render code */}
                { typeof props.code !== 'undefined' ? (
                    <div className="code">
                        <SyntaxHighlighter language="javascript" style={dark}>
                            { props.code }
                        </SyntaxHighlighter>
                    </div>
                ) : '' }
            </div>

            {/* render prop types */}
            { typeof props.properties !== 'undefined' ? (
                <div className="properties">
                    <div className="label">
                        Properties
                    </div>
                    <SyntaxHighlighter language="javascript" style={dark}>
                        { props.properties }
                    </SyntaxHighlighter>
                </div>
            ) : '' }
        </div>
    )
}

export default DocsExample;