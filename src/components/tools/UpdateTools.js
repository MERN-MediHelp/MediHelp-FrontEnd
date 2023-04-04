import "./AddTools.css";
import { baseUrl } from "../../config";
import { useState } from "react";
function UpdateToolCard({ name, description, id }) {
    let [toolName, setToolName] = useState("");
    let [toolDescription, setToolDescription] = useState("");
    const handleSubmit = async () => {
        const name = toolName;
        const description = toolDescription;
        const data = {
            name: name,
            description: description,
        };
        console.log(data);
        await fetch(`${baseUrl}/update/${id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json());
        window.location.reload();
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

export {
    UpdateToolCard,
}