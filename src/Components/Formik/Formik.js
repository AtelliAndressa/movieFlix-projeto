import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; 
import { Button, Input } from "@chakra-ui/react";
import {  StyledLogin,  StyledContainer,  StyledTitle,} from "../Formik/Formik.styled";
import { useHistory } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import bg from "../../Img/small.jpg";
import "./Formik.css";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Requerid"),
  senha: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function FormikLogin() {
  const history = useHistory();
  const { setUserAutentic, setCarregamento } = useContext(MyContext);

  const formik = useFormik({
    validationSchema: Schema,
    initialValues: {
      email: "",
      senha: "",
    },
    onSubmit: (values) => {
      loading(values);
    },
  });

  const loading = (values) => {
    sessionStorage.setItem("login", JSON.stringify(values));
    setUserAutentic(true);
    history.push("/movies");
  };

  return (
    <StyledContainer style={{ backgroundImage: `url(${bg})` }}>
      <StyledLogin>
        <form onSubmit={formik.handleSubmit}>
          <StyledTitle>
            <p>
              <label>Seja bem vindo!</label>
            </p>
            <label>Você está no MovieFlix</label>
            <p>O melhor serviço de streaming na atualidade!</p>
          </StyledTitle>
          <div>
            <h4>Fazer Login</h4>
            <Input className="input"
              placeholder="E-mail"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              style={{
                borderColor: formik.errors.email ? "tomato" : "blue",
              }}
            />
          </div>

          <div>
            <Input className="input"
              placeholder="Senha"
              size="md"
              id="senha"
              type="password"
              value={formik.values.senha}
              onChange={formik.handleChange}
              style={{
                borderColor: formik.errors.senha ? "tomato" : "blue",
              }}
            />
          </div>

          <Button type="submit" color="whrite" className="botton">
            Logar
          </Button>
        </form>
      </StyledLogin>
    </StyledContainer>
  );
}
