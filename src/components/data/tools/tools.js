import { ToolCard } from  'E:\\JavaScript\\React\\medihelp\\src\\components\\tools\\tools.js';
import { baseUrl } from '../../../config';
import { useEffect, useState } from 'react';

function GetTools() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        
        const loadTools = async () => {
            const data = await fetch(`${baseUrl}/tools`, {mode: "cors"}
            )
                .then(response => response.json());
            setTools(data);
        }
        loadTools();
    }, []);

    // fetch(`${baseUrl}/tools`)
    //     .then(response => response.json())
    //     .then(data => setTools(data));
    const toolsList = tools.map((tool) => {
        return (
            <ToolCard name={tool.name} description={tool.description} id={tool._id}/>
        );
    });
    return (
        <div>
            {toolsList}
        </div>
    );
}

export {
    GetTools,
}