import { useState, useEffect } from 'react';
import { membersData } from '../data/membersData';

const AddMember = () => {

    const [members, setMembers] = useState(membersData);
    const [member, setMember] = useState({
        firstName: '',
        lastName: '',
        featured: false,
        email: '',
        linkedIn: '',
        github: '',
        bio: '',
        profile_img: '',
        languages: [],
    });

    useEffect(() => {
        console.log(members);
        console.log(membersData);
    })

    const saveMember = () => {

        member.id = Date.now();
        membersData.push(member);
        // setMembers([...members, member]);
        setMembers(membersData);
        console.log('Submit works!');

    }

    const handleSubmit = event => {

        event.preventDefault();
        saveMember();
    
    };

    return (
        <div className="my-5">

            <form action='submit' id='member-form' onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={member.firstName}
                        onChange={event => {
                            setMember({...member, firstName: event.target.value});
                        }}
                        required/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={member.lastName}
                        onChange={event => {
                            setMember({...member, lastName: event.target.value});
                        }}
                        required/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={member.email}
                        onChange={event => {
                            setMember({...member, email: event.target.value});
                        }}
                        placeholder=""
                        required/>
                </div>

                <div className="form-group">
                    <label htmlFor="linkedIn">LinkedIn</label>
                    <input
                        type="text"
                        className="form-control"
                        id="linkedIn"
                        value={member.linkedIn}
                        onChange={event => {
                            setMember({...member, linkedIn: event.target.value});
                        }}
                        placeholder=""
                        required/>
                </div>

                <div className="form-group">
                    <label htmlFor="github">GitHub</label>
                    <input
                        type="text"
                        className="form-control"
                        id="github"
                        value={member.github}
                        onChange={event => {
                            setMember({...member, github: event.target.value });
                        }}
                        required/>
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        className="form-control"
                        id="bio"
                        value={member.bio}
                        onChange={event => {
                            setMember({...member, bio: event.target.value });
                        }}
                        rows="3"
                        placeholder=""></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="pfp">Profile image</label>
                    <input
                        type="text"
                        className="form-control"
                        id="profile_img"
                        value={member.profile_img}
                        onChange={event => {
                            setMember({...member, profile_img: event.target.value });
                        }}
                        required/>
                </div>

                <div className="form-group">
                    <label htmlFor="languages">Coding languages</label>
                    <input
                        type="text"
                        className="form-control"
                        id="languages"
                        value={member.languages}
                        onChange={event => {
                            let langArray = event.target.value.split(',');
                            setMember({...member, languages: langArray})
                        }}
                        placeholder="html,css,javascript,react"
                        required/>
                </div>

            <button className="btn btn-primary">Save</button>
            </form>

        </div>
    );
}

export default AddMember;