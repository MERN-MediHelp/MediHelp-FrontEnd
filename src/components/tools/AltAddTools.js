import { useState } from 'react';
import { baseUrl } from '../../config';
import "./AddTools.css";
function AltAddTools() { 
    let [toolName, setToolName] = useState("");
    let [toolDescription, setToolDescription] = useState("");
    const handleSubmit = async() => {
            await fetch(`${baseUrl}/post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    toolName, toolDescription
                }),
                mode: "cors",
            })
                .then(response => response.json());
            setToolName("");
            setToolDescription("");
        }
    return (
        <div className="container">
            <h2>Add a tool to donate</h2>
            <form id="add_tool_form">
                <div className="group">
                    <input id="tool_name" type="text" onChange={e => setToolName(e.target.value)} value={toolName}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Name</label>
                </div>
                <div className="group">
                    <input id="tool_description" type="text" onChange={e => setToolDescription(e.target.value)} value={toolDescription}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Description</label>
                </div>
                <div className="col-auto">
                    <button type="submit" onClick={handleSubmit} id="add_tool_button" className="btn btn-falcon-default btn-sm me-2">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export { 
    AltAddTools,
}