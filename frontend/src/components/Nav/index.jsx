import { useNavigate } from "react-router-dom";

const Nav = ({tabs}) => {
    const navigate=useNavigate();

    return ( 
        <header className="flex-row end nav-bg">
            <nav className="flex-row nav">
                {tabs != "" ? tabs.map((tab)=>(
                    <li className="p-5" key={tab}><a onClick={()=>navigate(tab)}>{tab}</a></li>
                )) : null}
            </nav>
        </header>
    );
}

export default Nav;