import { ToolCard } from  'E:\\JavaScript\\React\\medihelp\\src\\components\\tools\\tools.js';
import { DeleteToolCard } from '../../tools/DeleteTools';
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
            <ToolCard name={tool.name} description={tool.description} id={tool._id}/>
        );
    });

    const toDeleteList = tools.map((tool) => {
        return (
            <DeleteToolCard name={tool.name} description={tool.description} id={tool._id}/>
        );
    });

    if (props.isDelete) {
        return (
            <div>
                {toDeleteList}
            </div>
        );
    } else {
        return (
            <div>
                {toolsList}
            </div>
        );
    }
}

export {
    GetTools,
}