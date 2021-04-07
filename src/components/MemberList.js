import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const MemberList = () => {
    const [members, setMembers] = useState([]);
    return (
        <div id="MemberList">
            <div className="col-sm-12 col-md-3">
                    {members.map(member => {
                        return (
                        <div className="row member-list">
                            
                            <Link to={`/members/${member.id}`} className="card-link">View All Members</Link>
                        </div> 
                            
                        
                        )
                    })}
            </div>
        </div>
    );
}

export default MemberList;