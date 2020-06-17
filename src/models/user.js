import axios from 'axios'
const REACT_APP_API_URL = "http://localhost:3001/api/v1"


export default class UserModel {

    static show (userId) {
      return fetch(`${REACT_APP_API_URL}/users/${userId}`).then(res => res.json())
    }

    static delete (userId) {
      return fetch(`${REACT_APP_API_URL}/users/${userId}`, {
          method: "DELETE",
          credentials: 'include'
        })
      }
    

      static create(data) {
        const request = axios.post(`${process.env.REACT_APP_API_URL}/register`, data);
        return request;
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
      return fetch(`${REACT_APP_API_URL}/auth/logout`, {
        method: "DELETE",
        credentials: 'include'
      })
    }
  }
  