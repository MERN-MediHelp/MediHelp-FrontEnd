import { GetTools } from  'E:\\JavaScript\\React\\medihelp\\src\\components\\data\\tools\\tools.js';

// View all tools page
function Tools() {
    return (
        <div>
            <GetTools />
        </div>
    );
}

// Delete tools page
function DeleteTools() { 
    return (
        <div>
            <GetTools isDelete={true} />
        </div>
    );
}

export {
    Tools,
    DeleteTools,
}