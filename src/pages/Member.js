import { useEffect, useState } from 'react';
import { membersData } from '../data/membersData';
import { useParams } from 'react-router-dom';
import MemberList from '../components/MemberList'

const Member = () => {
    let { memberId } = useParams();
    const [members, setMembers] = useState(membersData);
    const [member, setMember] = useState({
        firstName: '',
        lastName: '',
        email: '',
        linkedIn: '',
        github: '',
        bio: '',
        profile_img: '',
        languages: [],
    });

    useEffect(() => {
        let foundMember = membersData.find(m => m.id === +memberId);
        if(foundMember){
            setMember(foundMember);
        }
    }, [member, memberId]);

    const updatedFeatured = memId => {
        let foundMember = membersData.find(m => m.id === +memId);
        foundMember.featured = !foundMember.featured;
      }; 
    
    return (
        <div id='member'>
            <div className='row mt-4'>
                <div className='col'>
                    <div className='card'>
                        <div className="row no-gutters">
                            <div className='col-md-4 th-img-container'>
                                <div className='th-member-img'
                                style={{ backgroundImage: `url(${member.profile_img})`}}></div>
                            </div>
                            <div className='col-md-8 th-card-body'>
                                <div className="card-body">
                                    <div className='th-card-header d-flex justify-content-between'>
                                        <span>
                                            <a 
                                            href='javascript:void(0)'
                                            onClick={() => updatedFeatured(member.firstName.lastName)}>
                                                {member.featured}
                                                </a>
                                        </span>
                                        <span>{member.firstName.lastName}</span>
                                    </div>
                                    <div className='th-card-name my-3'>
                                    <h2>
                                    <span>{member.firstName} </span>
                                    </h2>
                                    </div>
                                    <div className='th-card-details'>

                                        <div className='detail'>
                                            <h4 className='text-primary'>About {member.firstName}</h4>

                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex veniam repellendus voluptatum a eveniet quo perspiciatis, vero provident quisquam temporibus.</p>

                                        </div>

                                        <div className='detail'>
                                            <h4 className='text-primary'>Languages</h4>
                                            <p>
                                                {member.languages.map((language, i) => {
                                                   return (
                                                    <span 
                                                    className='badge badge-success mx-1'
                                                    key={i}>
                                                    {language}
                                                    </span>
                                                   );
                                                })}
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <MemberList members={members} />

                </div>
            </div>
        </div>
    );
};

export default Member;