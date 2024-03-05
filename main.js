import './css/normalize.css'
import './style.css'
import './css/style-button.css'

const downloadBtn = document.querySelector('#download-btn')

downloadBtn.addEventListener('click', () => {
    setTimeout(() => {
        const downloadCv = () => {
            const link = document.createElement('a')
            link.href = './assets/documents/cv-enero-2024.pdf'
            link.download = 'Josue Lopez Frontend DEV'
            link.click()
        }
        downloadCv()
    }, 3000);
})
