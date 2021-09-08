import {NavLink} from "react-router-dom"
import LinkLang from "../../containers/LinkLang/LinkLang"

export const Header = ({header}) => {

    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    {header.map((item, index) => {
                        return (
                            <li className="nav-item p-2 " key={item + index}>
                                <NavLink className="nav-link" to={`${item}`}>{item}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <LinkLang/>
        </nav>
    )
}