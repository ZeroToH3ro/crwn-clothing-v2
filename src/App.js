import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.components";
import {Route, Routes} from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.components";
const Shop = () => {
    return <h1>I am the shop pages</h1>
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='sign-in' element={<SignIn/>}/>
            </Route>
        </Routes>
    )
};

export default App;
