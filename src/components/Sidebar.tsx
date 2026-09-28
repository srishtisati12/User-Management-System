import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <aside>
            <Link to="/dashboard">Dashboard</Link>
             <Link to="/users">Users</Link>
        </aside>
    );
}
export default Sidebar;