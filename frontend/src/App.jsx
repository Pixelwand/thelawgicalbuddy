import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Homepage} from './components/Homepage/Homepage';
export const App = () => {
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                </Routes>
        </BrowserRouter>
    )
}