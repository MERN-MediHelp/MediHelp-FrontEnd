import { ToolCard } from  'E:\\JavaScript\\React\\medihelp\\src\\components\\tools\\tools.js';
import { DeleteToolCard } from '../../tools/DeleteTools';
import { UpdateToolCard } from '../../tools/UpdateTools';
import { baseUrl } from '../../../config';
import { useEffect, useState } from 'react';

function GetTools(props) {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        
        const getAllTools = async () => {
            const data = await fetch(`${baseUrl}`, {mode: "cors"}
            )
                .then(response => response.json());
            setTools(data);
        }
        getAllTools();
    }, []);

    const toolsList = tools.map((tool) => {
        return (
            <li key={tool._id}>
                <ToolCard name={tool.name} description={tool.description} id={tool._id}/>
            </li>
        );
    });

    const toDeleteList = tools.map((tool) => {
        return (
            <li key={tool._id}>
                <DeleteToolCard name={tool.name} description={tool.description} id={tool._id}/>
            </li>
        );
    });

    const toUpdate = tools.map((tool) => { 
        return (
            <li key={tool._id}>
                <UpdateToolCard name={tool.name} description={tool.description} id={tool._id} />
            </li>
        );
    });

    if (props.isDelete) {
        return (
            <div>
                <ul>
                    {toDeleteList}
                </ul>
            </div>
        );
    } else if (props.isUpdate) {
        return (
            <div>
                <ul>
                    {toUpdate}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <ul>
                    {toolsList}
                </ul>
            </div>
        );
    }
}

export {
    GetTools,
}