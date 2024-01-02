import { Routes, Route } from "react-router-dom";
import {Home, Projetos} from '../pages'


export function RoutesApp() {
    return (
  
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/projetos' element={<Projetos />} />
        </Routes>

    );
  }
