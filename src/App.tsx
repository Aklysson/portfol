import * as C from "./Global";
import Lindo from "./img/lindo.jpg";

function App() {
  return (
    <C.Container>
      <C.LeftSide>
        <C.Avatar>
          <C.Image src={Lindo} alt="foto" />
        </C.Avatar>
      </C.LeftSide>
      <C.RightSide>
      <h1>Ola Mundo, eu sou <span>Aklysson Roberto</span></h1>
      <p>Este é o meu Portfólio Pessoal, aqui você pode encontrar um pouco mais sobre mim e meu trabalho.</p>
      </C.RightSide>
    </C.Container>
  );
}

export default App;
