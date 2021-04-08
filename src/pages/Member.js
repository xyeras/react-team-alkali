import { useEffect, useState } from 'react';
import { membersData } from '../data/membersData';
import { useParams } from 'react-router-dom';
import MemberList from '../components/MemberList';
import { Link } from 'react-router-dom';
import BgVid5 from '../video/bgvid5.mp4';
import '../App.css';

const Member = () => {
    let { memberId } = useParams();
    let [member, setMember] = useState({

        firstName: '',
        lastName: '',
        email: '',
        linkedIn: '',
        github: '',
        bio: '',
        profile_img: '',
        languages: [],
    });

    const [members, setMembers] = useState(membersData);
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

        <div className='container d-flex'>


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
            <source src={BgVid5} type='video/mp4' />
        </video>

            <div class='th-card'>
                  
                         <div className="card-body2 text-center">
                            <h2>{member.firstName} {member.lastName} </h2>
                                    <div className="bg2 col" style={{'backgroundImage': `url(${member.profile_img})`}}> 
                                    </div>
                                    <div className='info2'> 
                                    <strong className='strong2 text-danger'> My Bio: </strong>
                                    <h6>{member.bio}</h6>
                                    </div>
                                           

                        <div className='info2'>
                            <h4 className='text-danger text-center'>Connect Here:</h4>
                                <span className='badge'>
                                    <p>{member.email}</p>
                                    <p>{member.github}</p>
                                    <p>{member.linkedIn}</p>
                                </span>
                        </div>
                            <h4 className='text-center text-danger mt-3'>Languages
                                                <p className='text-center'>
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
                                            </h4>
                                    
                                </div>
                            
                        </div>
                    
                <div className="col text-center">
                    <p>
                    Check Out All Our Members!
                    </p>
                    <div className="col text-center">
                        <MemberList member={member.id} updatedFeatured={updatedFeatured}/>
            
                    </div>
                </div>
        </div>
            

    );
};
export default Member;