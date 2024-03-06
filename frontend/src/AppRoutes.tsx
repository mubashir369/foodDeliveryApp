import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<span>HOME PAGE</span>} />
            <Route path="/user" element={<span>USER PAGE</span>} />
            <Route path="*" element={<Navigate to={"/"}/>} />
        </Routes>
    )
}
export default AppRoutes