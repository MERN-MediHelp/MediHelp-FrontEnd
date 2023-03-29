import "./AddTools.css";
function AddTools() {
    return (
    <div className="container">
        <h2>Add a tool to donate</h2>
        <form>
            <div className="group">
                <input type="text"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Name</label>
            </div>
            <div className="group">
                <input type="text"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Description</label>
            </div>
        </form>
    </div>
    );
}

export {
    AddTools,
}