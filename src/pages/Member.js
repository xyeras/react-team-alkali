import { useEffect, useState } from 'react';
import { membersData } from '../data/membersData';
import { useParams } from 'react-router-dom';
import { Route, Link,} from 'react-router-dom';
import MemberCard from '../components/MemberCard';

let languages = [
    'html',
    'css',
    'react',
    'javascript',
    'python',
    'haskell', 
    'oz', 
    'c++',
    'react native', 
    'nodeJS', 
    'mongoDB', 
    'express',
];


const Member = () => {
    let { memberId } = useParams();
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
    const [members, setMembers] = useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        let foundMember = membersData.find(m => m.id === +memberId);
        setMember(foundMember);
    }, [member, memberId, alert]);

    const updatedFeatured = memId => {
        let foundMember = membersData.find(m => m.id === +memId);
        foundMember.featured = !foundMember.featured;
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        },);
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
                                                {members.featured}
                                                </a>
                                        </span>
                                        
                                    </div>
                                    <div className='th-card-name my-3'>
                                    <h2>
                                    <span>{member.firstName} {member.lastName} </span>
                                    </h2>
                                    </div>
                                    <div className='th-card-details'>
                                        <div className='detail'>
                                            <h4 className='text-primary'>About {member.firstName}</h4>

                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex veniam repellendus voluptatum a eveniet quo perspiciatis, vero provident quisquam temporibus.</p>

                                        </div>
                                        <div className='detail'>
                                            <h4 className='text-primary'>Connect with  {member.firstName}</h4>
                                            <p></p>
                                        <div className='detail'>
                                            </div>
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
                    <div className="card-body mt-5">
                    <h4 className='col-sm-12 text-center mt-5'>
                    Check Out All Our Members!
                    </h4>
                    </div>
                    <div className='card'>
                    <div className="th-card-bg-img mt-3" style={{'backgroundImage': `url(${member.profile_img})`}}>
                    <div className="card-header text-center">
                                        <Link to={`/members`}>View Details
                                        </Link>
                                        <a href='javascript:void(0)' className='card-link' onClick={() => updatedFeatured(member.id)}>
                                            
                                        </a>
                                        </div>
                                            </div>

                                </div>
                </div>
                </div>
            </div>
            
        
        
    );
};

export default Member;