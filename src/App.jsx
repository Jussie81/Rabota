import KNITULogo from './assets/KNITU.jpg'
import juAniLogo from './assets/icoc.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://t.me/Jussie27" target="_blank">
          <img src={juAniLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.kstu.ru/index.jsp" target="_blank">
          <img src={KNITULogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>JuAni + KNITU</h1>
      <div className="card">
        <button onClick={() => alert('Быков Дмитрий Сергеевич 131-23')}>
          Нажмите
        </button>
        <p>
          Для получения данных о студенте!
        </p>
      </div>
      <p className="read-the-docs">
        JuAni edition
      </p>
    </>
  )
}

export default App
