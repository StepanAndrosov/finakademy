import styles from './About.module.scss'
import {delSpace} from "../../utils/delSpace";

export const About = ({about}) => {

    const principles = about.principles.description
    const noTag = principles.replace(/<\/?[^>]+(>|$)/g, " ")
    const arr = noTag.split('  ');
    const newArr = delSpace(arr)

    return (
        <div className={styles.About + " row"}>
            <div className="col-sm-4 pt-3">
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h3 className="card-title bg-dark p-1">{about.mission.title}</h3>
                        <p className="card-text p-1">{about.mission.description}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 pt-3">
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h3 className="card-title bg-dark p-1">{about.principles.title}</h3>
                        <div className="card-text">
                            <ul className="list-group ">{newArr.map((item, index) => <li
                                className="list-group-item bg-secondary" key={item + index}>{item}</li>)}</ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 pt-3">
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h3 className="card-title bg-dark p-1">{about.values.title}</h3>
                        <p className="card-text p-1">{about.values.description}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 pt-3">
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h3 className="card-title bg-dark p-1">{about.team.title}</h3>
                        <p className="card-text p-1">{about.team.description}</p>
                        <button type="button" className="btn btn-primary">{about.team.button}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}