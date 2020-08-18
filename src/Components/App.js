import React, {Suspense} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Detail from '../routes/Detail';
import Home from '../routes/Home';

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/:id" component={Detail} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;