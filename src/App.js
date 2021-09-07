import { BrowserRouter } from 'react-router-dom';
import { ru } from './lang/ru'
import { en } from './lang/en'
import { connect } from 'react-redux';
import { Header } from './component/Header/Header'
import { Title } from './component/Title/Title';
import { About } from './component/About/About';
import Partners from './component/Partners/Partners';
import Products from './component/Products/Products';
import News from './component/News/News';
import { Footer } from './component/Footer/Footer'

function App(props) {

  let language

  props.language === 'ru' ? language = ru : language = en

  return (
    <div className="container">
      <BrowserRouter>
        <Header header={language.header} />
      </BrowserRouter>
      <Title title={language} />
      <About about={language.about_area} />
      <Partners partners={language.partners} />
      <Products products={language.products} />
      <News news={language.news} />
      <Footer footer={language.footer} />
    </div>
  );
}

function mapstateToProps(state) {
  return {
    language: state.language
  }
}

export default connect(mapstateToProps)(App);
