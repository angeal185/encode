const utils = {
  to: {
    base64(str){
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function(match, p1) {
          return String.fromCharCode('0x' + p1);
      }));
    },
    hex(str) {
      return Array.from(str).map(function(c){
        return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/\%/g,'').toLowerCase()
      }).join('');
    },
    uint8(str){
      return new TextEncoder().encode(str)
    },
    bytes(arr){
      return Array.from(utils.to.uint8(arr))
    },
    string(str){
      return str
    }
  },
  from:{
    base64(str) {
      return decodeURIComponent(atob(str).split('').map(function(c){
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    },
    hex(str) {
      return decodeURIComponent('%' + str.match(/.{1,2}/g).join('%'));
    },
    uint8(arr){
      return new TextDecoder().decode(arr);
    },
    bytes(arr){
      return utils.from.uint8(Uint8Array.from(arr))
    },
    string(str){
      return str
    }
  }
}

function encode(arg, f, t){
  try {
    return utils.to[t](utils.from[f](arg));
  } catch (err) {
    return null
  }
}

export { encode }
