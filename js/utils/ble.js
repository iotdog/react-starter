function convertMac(origMac) {
  var ret = [];
  var i;
  var len;

  for (i = 0, len = origMac.length; i < len; i += 2) {
    ret.push(origMac.substr(i, 2));
  }
  return ret.join(':');
}

export default convertMac
