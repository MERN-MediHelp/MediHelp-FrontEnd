import "./navbar.css";
import { webSiteURL } from '../../config';
function NavBar() {
    let url = webSiteURL + "tools";
    let addTools = webSiteURL + "add";
    let deleteTools = webSiteURL + "delete";
    let updateTools = webSiteURL + "update";

    return (
    <header className="header">
        <h1 className="logo"><a href="/">MediHelp</a></h1>
        <ul className="main-nav">
            <li><a id="AddTools" href={addTools} >Add Tools</a></li>
            <li><a id="ViewTools" href={url} >View Tools</a></li>
            <li><a id="DeleteTools" href={deleteTools} >Delete Tools</a></li>   
            <li><a id="UpadteTools" href={updateTools} >Update Tools</a></li>
        </ul>
	</header>
    );
}

export {
    NavBar,
}