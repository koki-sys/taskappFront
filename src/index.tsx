import { BrowserRouter } from 'react-router-dom'
import { RootRouter } from 'Route'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import './index.css'

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(
        <RecoilRoot>
            <BrowserRouter>
                <RootRouter />
            </BrowserRouter>
        </RecoilRoot>,
    )
}
