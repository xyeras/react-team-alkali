import { Link } from 'react-router-dom';


const MemberCard = ( {member} ) => {
    return (
        
        <div className="card text-center">
            <div className="th-card-bg-img text-center" style={{'backgroundImage': `url(${member.profile_img})`}}>
            </div>

           <div className='body text-center'>
             <h4 className='card-title'>
                 {member.firstName}  {member.lastName}
             </h4>

             
                <h6 className='info'>
                    <strong>Bio: 
                        </strong>  {member.bio}
                </h6>
                
                <h6>
                    <strong>Email: </strong>{member.email}
                </h6>

                    <div className='my-2'>
                        <strong> Languages: </strong>

                        {member.languages?.map((language, i) => {
                            return <small key={i}> {language}{i === member.languages.length - 1 ? '' : ', ' } </small>
                        })}
                    </div>

                <div className='col mt-3'>
                    <Link to={`/members/${member.id}`} className="card-link">View Details
                    </Link>
                </div>
            </div>
        </div>
        
    

    );
}
export default MemberCard;