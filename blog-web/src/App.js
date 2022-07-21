import {Suspense} from "react";
import {useRoutes} from 'react-router-dom'
import {Button} from "antd";

import Header from "./components/Header/Header";
import routingTable from "./utils/routingTable";

import './App.less';
import 'lib-flexible'

function App() {
    
    const elements = useRoutes(routingTable);
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                {elements}
            </Suspense>
        </div>
    );
}

export default App;
