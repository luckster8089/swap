const REACT_APP_API_URL = "http://localhost:3001/api/v1"


export default class UserModel {

    static show (userId) {
      return fetch(`${REACT_APP_API_URL}/users/${userId}`).then(res => res.json())
    }
    

    static create(data) {
      return fetch(`${REACT_APP_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
    }
    
    static login(credentials) {
      return fetch(`${REACT_APP_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      }).then(res => res.json())
    }
  
    static logout() {
      // TODO: complete this function
      return fetch(`${REACT_APP_API_URL}/auth/logout`, {
        method: "DELETE",
        credentials: 'include'
      })
      // Remember to add authorization headers
    }
  }
  