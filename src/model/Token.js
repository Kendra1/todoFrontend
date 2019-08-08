class Token {
    constructor(tokenData) {
        console.log(tokenData);
      this.value =
        tokenData.token || tokenData.access_token || tokenData.value;
  
      this.refreshValue =
        tokenData.refreshToken ||
        tokenData.refresh_token ||
        tokenData.refreshValue;
  
      this.type = tokenData.type || tokenData.tokenType || tokenData.token_type;
  
      this.expires = tokenData.expires || tokenData.expires_in;
    }
  }
  
  export default Token;