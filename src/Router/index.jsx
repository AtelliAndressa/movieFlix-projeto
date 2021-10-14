import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Router from "./Router";
import { useContext} from 'react';
import { MyContext } from "../Context/Context";

//lógica pra routear o site
//exact só renderiza se for exatamente a rota destino

function RotaPersonalizada(props){

  const { userAutentic } = useContext(MyContext);
console.log(userAutentic)
  //se não tiver logada redireciona pra login
  if(props.isPrivate && !userAutentic){
    return <Redirect to="/" exact />;
  }

  //se tiver logado ou não for privado
  return <Route {...props} />;


}

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        {Router.map((route) => {
          return (
            <RotaPersonalizada
              key={route.name}
              exact
              path={route.path}
              component={route.Component}
              isPrivate={route.isPrivate}
            />
          );
        })}
        <Route key="neg" component={() => <h1>Rota não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
