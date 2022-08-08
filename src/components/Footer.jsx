

import Button from "react-bootstrap/Button"; // Importamos el componente

const Footer = (props) => {
  return (
    <div className="footer">
      <h3>
        Si quieres ver mas sobre aves haz click aqui:{" "}
        <Button variant="success">Ver mas</Button>{" "}
      </h3>
    </div>
  );
};
export default Footer;