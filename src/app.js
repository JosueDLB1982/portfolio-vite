import html from './app.html?raw'
import { setUserTheme, setDarkMode, setLightMode } from '../src/use-cases/changeColorThema'
//import { setTheme } from './use-cases/colorSchemeSO'
import { downloadCv } from './use-cases/download-cv'

/**
 * 
 * @param {String} elementId identificador del punto de montaje de la app
 */
export const App = (elementId) => {
    (() => {
        const app = document.createElement('div')
        app.innerHTML = html
        document.querySelector(elementId).append(app)

    })()

    //setTheme
    downloadCv()
    setUserTheme()
    setDarkMode()
    setLightMode()
}