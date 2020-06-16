import axios from 'axios'
const url = `https://serene-waters-63279.herokuapp.com`

class GiftCardModel {
  static all = () => {
    return fetch(`${url}/giftcards`).then(res => res.json())
  }

  static show = (giftCardId) => {
    return fetch(`${url}/giftcards/${giftCardId}`).then(res => res.json())
  }

  static create = (giftCardData) => {
    return fetch(`${url}/giftcards/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(giftCardData)
    })
      .then(res => res.json())
  }

  static update = (giftCardId, giftCardUpdate) => {
        let request = axios.put(`${url}/${giftCardId}`, giftCardUpdate)
        return request 
    }

  static delete = (giftCardId) => {
    let request = axios.delete(`${url}/${giftCardId}`);
    return request
  }
  }

export default GiftCardModel;