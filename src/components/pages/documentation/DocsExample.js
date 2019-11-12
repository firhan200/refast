import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as myStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
                        <SyntaxHighlighter showLineNumbers={( typeof props.showLine !== 'undefined' ? props.showLine : true )} language="jsx" style={myStyle}>
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
                    <SyntaxHighlighter language="javascript" style={myStyle}>
                        { props.properties }
                    </SyntaxHighlighter>
                </div>
            ) : '' }
        </div>
    )
}

export default DocsExample;