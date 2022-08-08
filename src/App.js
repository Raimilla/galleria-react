import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import Button from "react-bootstrap/Button"; // Importamos el componente
import Card from 'react-bootstrap/Card';
import Header from './components/Header.jsx';
import CardCard from './components/CardCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
<>
   <div className='container' >

    < Header title="GALERIA AVES DEL SUR DE CHILE" />
   

    <div className='containercard' >
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.avesdechile.cl/0jpgn/062.jpg" />
      <Card.Body>
        <CardCard titulo = "Aguilucho" />
        <CardCard descripcion ="Cazador solitario y de campos abiertos, planea en circulos para lanzarse en picada contra su presa." />
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.avesdechile.cl/0jpgn/036jpr3.jpg" />
      <Card.Body>
        <CardCard titulo = "Chuncho" />
        <CardCard descripcion ="Aunque de costumbres mas diurnas que otras aves de su tipo, es dificl de ver, de vuelo silencioso. " />
        <Button variant="primary">Ver mas</Button>
      </Card.Body>

    </Card><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.avesdechile.cl/0jpgn/113jt2.jpg" />
      <Card.Body>
        <CardCard titulo = "Bailarin" />
        <CardCard descripcion ="Es una de las rapaces mas faciles de reconocer, gris por encima y una gran mancha negra sobre el ala." />
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

   </div>
   </div>

      <div className="footer">
      <Footer />
      </div>
    </>

);
 
}



export default App;