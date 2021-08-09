import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
    /*1) constructor or else just state
    constructor() {
    super() 
    this.state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }
}*/
 /*2) Just state
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }
*/
    
        //destructure 
       // const {login, avatar_url, html_url } = props.user  
        return (
            <div className='card text-center'>
                <img src={avatar_url}
                 alt=""
                 className='round-img'
                 style={{ width: '60px' }}
                />
                <h3>{login}</h3>

                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        )
}

UserItem.protoTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
