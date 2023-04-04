import "./styles.css";
function ToolCard({ name, description, id }) {
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

export {
    ToolCard,
}