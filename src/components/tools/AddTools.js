import "./AddTools.css";
function AddTools() {
    return (
    <div className="container">
        <h2>Add a tool to donate</h2>
        <form id="add_tool_form" method="POST" encType="multipart/form-data">
            <div className="group">
                <input id="tool_name" type="text"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Name</label>
            </div>
            <div className="group">
                <input id="tool_description" type="text"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Description</label>
            </div>
            <div className="col-auto">
                <button type="submit" id="add_tool_button" className="btn btn-falcon-default btn-sm me-2">
                    Save
                </button>
            </div>
            <script src="E:\JavaScript\React\medihelp\src\components\data\tools\addTools.js"></script>
        </form>
    </div>
    );
}

export {
    AddTools,
}