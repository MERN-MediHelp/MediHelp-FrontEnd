import "./styles.css";
import "./AddTools.css";
import { javaSpringBootProductAPI } from "../../config";
import { useState } from "react";
const ToolCard = ({ name, description, id }) => {
    return (
        <div className="card">
            <div className="general">
                <div className="body">
                    <h3>{name}</h3>
                    <div>{description}</div>
                </div>
            </div>
        </div>
    );
}

const UpdateToolCard = ({ name, description, id }) => {
    let [toolName, setToolName] = useState(name);
    let [toolDescription, setToolDescription] = useState(description);

    const handleSubmit = async () => {
        const name = toolName;
        const description = toolDescription;
        const data = {
            name: name,
            description: description,
        };
        console.log(data);
        await fetch(`${javaSpringBootProductAPI}/${id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json());
    }
    return (
        <div className="card">
            <div className="general">
                <h3>
                    <input defaultValue={name} onChange={e => setToolName(e.target.value)}>
                    </input>
                </h3>
                <div>
                    <input defaultValue={description} onChange={e => setToolDescription(e.target.value)}>
                    </input>
                </div>
                <button onClick={handleSubmit}>
                    <span className="fas fa-edit"></span>
                </button>
            </div>
        </div>
    );
}

const DeleteToolCard = ({ name, description, id }) => {
    const handleSubmit = async () => { 
        await fetch(`${javaSpringBootProductAPI}/${id}`, {
            method: "DELETE",
            mode: "cors",
        })
            .then(response => response.json());
    }
    return (
        <div className="card">
            <div key={id} className="general">
                <h3>{name}</h3>
                <div>{description}</div>
                <button onClick={handleSubmit}>
                    <span className="fas fa-trash"></span>
                </button>
            </div>
        </div>
    );
}

const AltAddTools = () => { 
    let [toolName, setToolName] = useState("");
    let [toolDescription, setToolDescription] = useState("");

    async function sendRequest(){
        //fetch the date form spring boot api http://localhost:8081/api/product
        // Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
        const response = await fetch(`${javaSpringBootProductAPI}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            //body: JSON.stringify(data),
            body: JSON.stringify({
                name: toolName,
                description: toolDescription,
            }),
        }).then(response => response.json());
        console.log(response);
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            sendRequest();
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
    ToolCard,
    UpdateToolCard,
    DeleteToolCard,
    AltAddTools,
}