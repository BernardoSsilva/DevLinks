import { useState } from 'react'
import { LogoGithub } from 'react-ionicons'
import { LogoLinkedin } from 'react-ionicons'
import { LogoInstagram } from 'react-ionicons'

import './App.css'

function App() {

  const [theme, setTheme] = useState("dark")
  const [iconColor, setIconColor] = useState("#ffffff")
  function alterTheme() {
    if (theme == "dark") {
      setTheme("light")
      setIconColor('#00000')
    } else {
      setTheme("dark")
      setIconColor("#ffffff")
    }


  }

  return (
    <>
      <body className={theme}>
        <div id="container">
          <div id="porfile">
            <img src="https://avatars.githubusercontent.com/u/126777966?v=4" alt="" />
            <p>@Print_berenarando</p>
          </div>
          <div id="switch">
            <button onClick={alterTheme}></button>
            <span></span>
          </div>
          <div id="list">
            <ul>
              <li><a href="#">Inscreva-se no nwl</a></li>
              <li><a href="#">Baixar meu e-book</a></li>
              <li><a href="#">Meu Portifolio</a></li>
              <li><a href="#">Conheca o explorer</a></li>
            </ul>
          </div>

          <div id="social-links">
            <a href="github.com/BernardoSsilva" target='_blank'> 

              <LogoGithub
                color={iconColor}
                title={"github"}
                height="3rem"
                width="3rem"
              /></a>
            <a href="https://www.linkedin.com/in/bernardo-santos-96a70b268/" target='_blank'>

              <LogoLinkedin
                color={iconColor}
                title={"linkedin"}
                height="3rem"
                width="3rem"
              />
            </a>
            <a href="https://www.instagram.com/print_berenarando/" target='_blank'><LogoInstagram
              color={iconColor}
              title={"instagram"}
              height="3rem"
              width="3rem"
            /></a>
          </div>
        </div>

      </body>

    </>
  )
}

export default App
