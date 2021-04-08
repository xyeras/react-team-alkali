import { useState, useEffect } from 'react';
import { membersData } from '../data/membersData';
import MemberCard from '../components/MemberCard';
import BgVid3 from '../video/bgvid3.mp4';
import '../App.css';

const Members = () => {
    const [members, setMembers] = useState(membersData);
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
                <source src={BgVid3} type='video/mp4' />
            </video>
        
            <div className="cards text-center">
                
                <div className="row d-flex">
                    <div className="col text-center">
                        <div className="content" form='group'>

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

                <div className="row mt-3">
                        {members.map(member => {
                            return (
                            <div className="col my-2 mx-3 mt-3" key={member.id}>

                                <MemberCard member={member} />
                            </div>
                            )
                        })}
                </div>

            </div>
        </div>
    );
 

}
export default Members;