import html from './app.html?raw'
import { setUserTheme } from '../src/use-cases/changeColorThema'
import { downloadCv } from './use-cases/download-cv'
import { mobileMenu } from '../src/use-cases/mobile-menu'


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
    
    setUserTheme()
    downloadCv()
    mobileMenu()
}