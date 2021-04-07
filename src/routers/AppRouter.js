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
                    {/* React has order issue even though exact keyword is suppose to fix this */}
                    <Route path='/members/add' exact component={AddMember} />
                    <Route path='/members/:memberId' exact component={Member} />
                    {/* <Route path='/add' component={AddMember} /> */}
                    {/* <Route path='/members/add' exact component={AddMember} /> */}
                </Switch>
            </div>
        </div>
    );
}
export default AppRouter;