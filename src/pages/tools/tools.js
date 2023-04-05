import { ToolsData } from  'E:\\JavaScript\\React\\medihelp\\src\\components\\data\\tools\\tools.js';
import { NavBar } from '../../components/navbar/navbar';

// View all tools page
function Tools() {
    return (
        <div>
            <NavBar />
            <ToolsData />
        </div>
    );
}

// Delete tools page
function DeleteTools() { 
    return (
        <div>
            <NavBar />
            <ToolsData isDelete={true} />
        </div>
    );
}

function UpdateTools() {
    return (
        <div>
            <NavBar />
            <ToolsData isUpdate={true} />
        </div>
    );
}

export {
    Tools,
    DeleteTools,
    UpdateTools,
}