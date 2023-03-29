import "./styles.css";
function ToolCard({ name, description, id }) {
    return (
        <div key={id} className="card">
            <div className="general">
                <h3>{name}</h3>
                <div>{description}</div>
            </div>
        </div>
    );
}

export {
    ToolCard,
}