import { useEffect, useState } from 'react';
import MemberCard  from '../components/MemberCard';

import { membersData } from '../data/membersData';
import '../App.css';
import BgVid from '../video/bgvid.mp4';



const Dashboard = () => {
    const [members, setMembers] = useState ([]);

    useEffect(() => {
        let featured = membersData.filter(member => member.featured);
        setMembers(featured);

    }, [alert]);

    const updatedFeatured = memberId => {
        let foundMember = membersData.find(member => member.id ===+memberId);
        foundMember.featured = !foundMember.featured;
    };

    return (

        <div className='body mt-5 text-center'>
            <video autoPlay loop muted
                style={{
                    position: 'fixed',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    overflow:'hidden',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1'
                }}
                >
                <source src={BgVid} type='video/mp4' />
            </video>
            <div className='header2 justify-content-center'></div>
            <p>About our Team:</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus officiis ad consequuntur natus soluta voluptates consectetur fuga inventore voluptatibus assumenda.</p>
            <div className='row text-center'>
        </div>
        <div className='container text-center'>        
        <div className='card-header text-center'>
        <h1 className='col-md-6 subhead'data-text="This Week's Featured Member:"></h1>
            {members.map((member, index) => {
                return (
                    <div className='row justify-content-center' key={member.id}>
                    <MemberCard member={member} updatedFeatured={updatedFeatured} />
                    </div>  
                );
            })}
            </div>

        </div>
        </div>
    );
};

export default Dashboard;