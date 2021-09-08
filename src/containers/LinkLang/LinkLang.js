import {Component, createRef} from "react"
import {connect} from "react-redux"

class LinkLang extends Component {

    constructor(props) {
        super(props);
        this.lang = createRef()
    }

    changeLang = () => {
        let language = this.lang.current.value

        if (language.toLowerCase() === 'ru') {
            this.props.onRU()
        } else {
            this.props.onEN()
        }
        return language
    }

    render() {
        return (
            <select ref={this.lang} onChange={this.changeLang} className="bg-secondary btn btn-secondary m-2">
                <option className="btn btn-secondary">RU</option>
                <option className="btn btn-secondary">EN</option>
            </select>
        )
    }
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRU: () => dispatch({type: 'RU'}),
        onEN: () => dispatch({type: 'EN'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkLang)