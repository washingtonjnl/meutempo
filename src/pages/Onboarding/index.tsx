import { Container, TextContent, Form } from './styles';

function Onboarding() {
  return (
    <Container>
      <img src="/assets/planner.png" alt="Planner" />
      <TextContent>
        <h1>Seu tempo é valioso!</h1>
        <p>
          Gerenciar os momentos de foco é essencial para manter a qualidade de
          vida e isso não precisa ser difícil.
          <br />
          <br />
          <span>O simples funciona. Vamos começar?</span>
        </p>
      </TextContent>
      <Form>
        <input type="text" name="name" placeholder="Digite seu nome" />
        <button type="submit">Iniciar jornada de foco</button>
      </Form>
    </Container>
  );
}

export default Onboarding;
