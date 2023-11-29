import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='header-one'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Hooks</h1>
        </div>
        <h3>Los Hooks son una API de React que nos permite tener características especiales
            de los componentes de React como el estado, entre otras.
        </h3>
      </header>

      <div className='cards-container'>
        <div className='card'>
          <h1>useState</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>
        
        <div className='card'>
          <h1>useEffect</h1>
          <p>
            Es utilizado para ejecutar código cuando se renderiza el componente o si cambian
            las dependencias de los parámetro.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useMemo</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useCallback</h1>
          <p>
            Es utilizado para memorizar funciones que recibe como parámetro, y que si no 
            cambia, no se ejecuta de nuevo.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useRef</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useContext</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useId</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useReducer</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useDebugValue</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useLayoutEffect</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useDeferredValue</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useImperativeHandle</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useInsertionEffect</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useTransition</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>

        <div className='card'>
          <h1>useOptimistic</h1>
          <p>
            Es utilizado para crear variables de estado, es decir,  su valor es dinámico.
          </p>
          <button className='btn-example'>Ejemplo</button>
        </div>
      </div>

      <footer>
        Diseño y Desarrollo <a href='https://portafolio-2021.vercel.app/' target='_blank'> © Daniel Mena</a>
      </footer>

    </div>
  );
}

export default App;
