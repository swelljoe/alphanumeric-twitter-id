/* Converted to an npm module from a script by Kevin van Zonneveld
   <kevin@vanzonneveld.net> and Even Simon <even.simon@gmail.com>.

usage:
  var antwid = require('alphanumeric-twitter-id')
  console.log(antwid.encode(904988993288319000))
  console.log(antwid.decode('beQRqJj6fwE')

*/

var index = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var bcpow = function(_a, _b){
  return Math.floor(Math.pow(parseFloat(_a), parseInt(_b)));
}

module.exports = {

  encode:function(_number){
    if('undefined' == typeof _number){
      return null;
    }
    else if('number' != typeof(_number)){
      throw new Error('Wrong parameter type');
    }

    var ret = '';

    for(var i=Math.floor(Math.log(parseInt(_number))/Math.log(index.length));i>=0;i--){
      ret = ret + index.substr((Math.floor(parseInt(_number) / bcpow(index.length, i)) % index.length),1);
    }

    return ret;
  },

  decode:function(_string){
    if('undefined' == typeof _string){
      return null;
    }
    else if('string' != typeof _string){
      throw new Error('Wrong parameter type');
    }

    var str = _string;
    var ret = 0;

    for(var i=0;i<=(str.length - 1);i++){
      ret = ret + index.indexOf(str.substr(i,1)) * (bcpow(index.length, (str.length - 1) - i));
    }

    return ret;
  },

};

