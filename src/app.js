import html from './app.html?raw'
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

    downloadCv()
}