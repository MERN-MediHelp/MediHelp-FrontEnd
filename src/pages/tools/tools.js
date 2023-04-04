import { GetTools } from  'E:\\JavaScript\\React\\medihelp\\src\\components\\data\\tools\\tools.js';
import { NavBar } from '../../components/navbar/navbar';

// View all tools page
function Tools() {
    return (
        <div>
            <NavBar />
            <GetTools />
        </div>
    );
}

// Delete tools page
function DeleteTools() { 
    return (
        <div>
            <NavBar />
            <GetTools isDelete={true} />
        </div>
    );
}

function UpdateTools() {
    return (
        <div>
            <NavBar />
            <GetTools isUpdate={true} />
        </div>
    );
}

export {
    Tools,
    DeleteTools,
    UpdateTools,
}