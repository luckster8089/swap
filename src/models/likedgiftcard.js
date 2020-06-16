const url = `https://serene-waters-63279.herokuapp.com`

class LikedGiftCardModel {

    static create = (data) => {
        console.log(data)
    return fetch(`${url}/giftcards/like/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  }
}


export default LikedGiftCardModel;