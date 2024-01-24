import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoResturantes from "./paginas/Administracao/Restaurantes/AdministracaoResturantes";
import FormularioResturante from "./paginas/Administracao/Restaurantes/FormularioResturante";
import PaginaBaseAdmin from "./paginas/Administracao/PaginaBaseAdmin";
import AdministracaoPratos from "./paginas/Administracao/Pratos/AdministracaoPratos";
import FormularioPrato from "./paginas/Administracao/Pratos/FormularioPrato";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path={"/admin"} element={<PaginaBaseAdmin/>}>
          <Route path="restaurantes" element={<AdministracaoResturantes />} />
          <Route path="restaurantes/novo" element={<FormularioResturante />} />
          <Route path="restaurantes/:id" element={<FormularioResturante />} />
          <Route path="pratos" element={<AdministracaoPratos />} />
          <Route path="pratos/novo" element={<FormularioPrato />} />
      </Route>
    </Routes>
  );
}

export default App;
