import { ToolCard, DeleteToolCard, UpdateToolCard } from '../../tools/tools';
import { javaSpringBootProductAPI } from '../../../config';
import { useEffect, useState } from 'react';

const ToolsData = (props) => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        
        const getAllTools = async () => {
            const data = await fetch(`${javaSpringBootProductAPI}`, {mode: "cors"}
            )
                .then(response => response.json());
            setTools(data);
        }
        getAllTools();
    }, []);

    const toolsList = tools.map((tool) => {
        return (
            <li key={tool.id}>
                <ToolCard name={tool.name} description={tool.description} id={tool.id}/>
            </li>
        );
    });

    const toDeleteList = tools.map((tool) => {
        return (
            <li key={tool.id}>
                <DeleteToolCard name={tool.name} description={tool.description} id={tool.id}/>
            </li>
        );
    });

    const toUpdate = tools.map((tool) => { 
        return (
            <li key={tool.id}>
                <UpdateToolCard name={tool.name} description={tool.description} id={tool.id} />
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
    ToolsData,
}