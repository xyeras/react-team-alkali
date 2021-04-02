import { useEffect, useState } from 'react';
import MemberCard  from '../components/MemberCard';

import { membersData } from '../data/membersData';
import '../App.css';


const Dashboard = () => {
    const [members, setMembers] = useState ([]);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        let featured = membersData.filter(member => member.featured);
        setMembers(featured);
    }, [alert]);

    const updatedFeatured = memberId => {
        let foundMember = membersData.find(member => member.id ===+memberId);
        foundMember.featured = !foundMember.featured;
        showAlert();
    };

    const showAlert = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        },);
    };


    const updatedFeatured = memberId => {
        let foundMember = membersData.find(member => member.id ===+memberId);
        foundMember.featured = !foundMember.featured;
    };

    return (
        <div id='dashboard-page'>
            <div className='row text-center mt-3'>
                <div className='col'>
                    <h2>Team Alkali</h2>
            <h4 className='text-secondary'>Who We Are!</h4>
            
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eius iusto accusamus culpa laudantium, officiis harum voluptatibus, ipsa et repellendus qui, iure minus quisquam odio maiores aliquid facilis repudiandae! Consequuntur ipsum eaque culpa porro sunt, cum distinctio est atque omnis animi eos quisquam deleniti voluptate rerum velit inventore rem facere!</p>

            </div>
        </div>
        
        <div className='row'>
            {members.map((member, index) => {
                return (
                    <div className='col' key={member.id}>
                    <MemberCard member={member} updatedFeatured={updatedFeatured} />
                    </div>
                );
            })}
        </div>
        </div>
    );
};

export default Dashboard;