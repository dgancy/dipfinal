import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Damo() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function Cardu() {
  return (
    <div>
      <div className='cardtheme2'>
        <a>Dark</a>
        <Card style={{ width: '5rem' }}>
          <Card.Img variant="top" src="tate.jpg" />
            <Button variant="light" onClick={Damo}>Váltás</Button>
        </Card>
        <br />

        <a>dsad</a>
        <Card style={{ width: '5rem' }}>
          <Card.Img variant="top" src="tate.jpg" />
            <Button variant="primary">Váltás</Button>
        </Card>
        <br />
      </div>

      <div className='cardtheme1'>
        <a>dsadfd</a>
        <Card style={{ width: '5rem' }}>
          <Card.Img variant="top" src="tate.jpg" />
            <Button variant="primary">Váltás</Button>
            <br />

        </Card>
        <a>rtgewr</a>
        <Card style={{ width: '5rem' }}>
          <Card.Img variant="top" src="tate.jpg" />
            <Button variant="primary">Váltás</Button>
        </Card>
      </div>
    </div>

  );
}

export default Cardu;