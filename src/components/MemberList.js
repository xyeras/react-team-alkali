import { useState, useEffect } from 'react';
import { membersData } from '../data/membersData';
import MemberCard from '../components/MemberCard';

const MemberList = () => {
    
    const [members, setMembers] = useState([membersData]);

    return (
        <div id="MemberList">

            FIXME

            <div className="row">
                    {members.map(member => {
                        return (
                        <div className="col-sm-12 col-md-3" key={member.id}>
                            <MemberCard member={member} />
                        </div>
                        );
                    })}
            </div>

        </div>
    );

    // return (
    //     <div>
    //         <h2>This is my Members Page!</h2>
    //     </div>
    // );
}

export default MemberList;