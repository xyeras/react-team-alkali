import { useState, useEffect } from 'react';
import { membersData } from '../data/membersData';
import MemberCard from '../components/MemberCard';

const MemberList = ( {members} ) => {
    

    return (
        <div id="MemberList">

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

}

export default MemberList;