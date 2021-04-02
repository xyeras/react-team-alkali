import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Members from '../pages/Members'
import Member from '../pages/Member'
import AddMember from '../pages/AddMember'
import Navbar from '../components/Navbar'

const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/members' exact component={Members}/>
                    {/* I switched order of line 16-17 for AddMember to show up */}
                    <Route path='/members/add' component={AddMember} />
                    <Route path='/members/:memberId' component={Member} />
                </Switch>
            </div>
        </div>
    );
}

export default AppRouter;