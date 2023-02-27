import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Homepage} from './components/Homepage/Homepage';
import { Topics, Courses, Webinars } from './components/Topics/index';
export const App = () => {
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/topics" element={<Topics/>}/>
                <Route path="/topics/courses" element={<Courses/>}/>
                <Route path="/topics/webinars" element={<Webinars/>}/>
                </Routes>
        </BrowserRouter>
    )
}