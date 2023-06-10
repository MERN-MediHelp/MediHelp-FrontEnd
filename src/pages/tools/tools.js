import { NavBar } from '../../components/navbar/navbar';
import {ToolsData}  from  'E:\\JavaScript\\React\\medihelp\\src\\components\\data\\tools\\tools.js';
// import ToolsData from '../../components/data/tools/tools';
// View all tools page
const Tools = () => {
    return (
        <div>
            <NavBar />
            <ToolsData />
        </div>
    );
}

// Delete tools page
const DeleteTools = () => { 
    return (
        <div>
            <NavBar />
            <ToolsData isDelete={true} />
        </div>
    );
}

const UpdateTools = () => {
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