import { Link } from 'react-router-dom';

const MemberCard = ( {member} ) => {


    return (
        <div>
        <div className="card mb-3">
            <div className="card-header text-center">{member.bio}</div>
            <div className="th-card-bg-img" style={{'backgroundImage': `url(${member.profile_img})`}}></div>
            <div className="card-body">
                <h4 className='card-title'>
                    {member.firstName} {member.lastName}
                </h4>
                <h6 className="text-secondary">{member.alter_ego}</h6>
                <div className="my-2">
                    <strong>Email: </strong>
                    {member.email}
                </div>

                <div className="my-2">
                    <strong>
                        Languages: 
                    </strong>
                    {member.languages?.map((language, i) => {
                        return <small key={i}> {language}{i === member.languages.length - 1 ? '' : ', ' } </small>
                    })}
                </div>

                <div className="my-2 d-flex justify-content-between">
                    <Link to={`/members/${member.id}`} className="card-link">View Details
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MemberCard;