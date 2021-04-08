import { useState, useEffect } from 'react';
import { membersData } from '../data/membersData';
import { Link } from 'react-router-dom';
const MemberList = () => {
    const [members, setMembers] = useState(membersData);
    return (
        <div className='cards d-grid'>
                {membersData.map(member => {
                    return (
                    <div className='col-md-2 mx-5' key={member.id}>
                        <img src={member.profile_img}/>
                        <p className='my-3'>  {member.firstName} {member.lastName} </p>
                        <h5 className='info2'>
                        <Link to={`/members/${member.id}`}>Find Me Here</Link>
                    </h5>
                </div>
                    )
                })}
            </div>
    );
}
export default MemberList;