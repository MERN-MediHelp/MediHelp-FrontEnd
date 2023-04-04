import { baseUrl } from "../../config";
import "./AddTools.css";
function DeleteToolCard({ name, description, id }) {
    const handleSubmit = async () => { 
        await fetch(`${baseUrl}/delete/${id}`, {
            method: "DELETE",
            mode: "cors",
        })
            .then(response => response.json());

        window.location.reload();
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

export {
    DeleteToolCard,
}