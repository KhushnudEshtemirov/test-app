import { Routes, Route } from "react-router-dom" 

import Documents from '../pages/documents'
import CreateDocument from '../pages/createDocument'

export default function AppRoutes() {
    return <Routes>
        <Route path='/' element={<Documents/>} />
        <Route path='/create-document' element={<CreateDocument/>} />
    </Routes>
}