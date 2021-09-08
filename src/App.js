import {BrowserRouter} from 'react-router-dom';
import {ru} from './data/ru'
import {en} from './data/en'
import {connect} from 'react-redux';
import {Header} from './component/Header/Header'
import {Title} from './component/Title/Title';
import {About} from './component/About/About';
import Partners from './component/Partners/Partners';
import Products from './component/Products/Products';
import News from './component/News/News';
import {Footer} from './component/Footer/Footer'

function App(props) {

    const language = props.language === 'ru' ? ru : en

    return (
        <div className="container">
            <BrowserRouter>
                <Header header={language.header}/>
            </BrowserRouter>
            <Title title={language}/>
            <About about={language.about_area}/>
            <Partners partners={language.partners}/>
            <Products products={language.products}/>
            <News news={language.news}/>
            <Footer footer={language.footer}/>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(App);
