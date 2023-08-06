function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-z]/g, '');
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
  this.number = fixedString.match(/(?<=\)).+/)[0];
}

console.log(new PhoneNumber('+55 (47) 99685-9730'))