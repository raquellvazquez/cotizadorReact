import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spin from './components/Spin';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: '',
    }
  });

  /**
   * Mostar el Spin
   */

  const [cargando, setcargando] = useState(false)

  const {datos, cotizacion} = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
            setcargando={setcargando}
          />

          {cargando ? <Spin/> : null}
          
          <Resumen datos={datos}/>

          {!cargando ? (
            <Resultado cotizacion={cotizacion} />
          )
          :
            null
          }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
