import { useState, useEffect } from 'react';
import { membersData } from '../data/membersData';
import MemberCard from '../components/MemberCard';
import Members  from '../pages/Members'; 
import { Link } from 'react-router-dom';


const MemberList = () => {
    const [members, setMembers] = useState([]);
    return (
        <div id="MemberList">
            <div className="col-sm-12 col-md-3">
            <span key={members.MemberCard}>{members.id}</span>
                    {members.map(member => {
                        return (
                        <div className="row member-list">
                            
                            <Link to={`/members/${member.id}`} className="card-link">View All Members
                    </Link>
                        </div> 
                            
                        
                        )
                    })}
            </div>
        </div>
    );
    // return (
    //     <div>
    //         <h2>This is my Members Page!</h2>
    //     </div>    // );
}

export default MemberList;