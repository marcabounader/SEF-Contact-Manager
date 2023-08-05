
const Nav = ({tabs}) => {
    return ( 
        <header className="flex-row end nav-bg">
            <nav className="flex-row nav">
                {tabs != "" ? tabs.map((tab)=>(
                    <li className="p-5" key={tab}><a href={tab}>{tab}</a></li>
                )) : null}
            </nav>
        </header>
    );
}

export default Nav;