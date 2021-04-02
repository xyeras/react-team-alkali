import { useState, useEffect } from 'react';
import { membersData } from '../data/membersData';
import MemberCard from '../components/MemberCard';
const Members = () => {
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const foundMembers = membersData.filter(md => {
            return (
                md.firstName.toLowerCase().includes(searchTerm.toLowerCase()) +
                md.lastName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        searchTerm === '' ? setMembers(membersData) : setMembers(foundMembers);
    }, [searchTerm]);
    const handleChange = event => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }
    return (
        <div id="Members">
            <div className="row text-center mt-3">
                <div className="col">
                    <h2>View our Team!</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form=group">
                        <input
                            type="text"
                            className="form-control"
                            id="member-search"
                            placeholder="Search for a Member"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                    {members.map(member => {
                        return (
                        <div className="col-sm-12 col-md-3" key={member.id}>
                            <MemberCard member={member} />
                        </div>
                        )
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
export default Members;