const guestList = 'Our guests are: emma, jacob, isabella, ethan';

const length = guestList.length;

const uppercasedGuestList = guestList.toUpperCase();

const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');

const substringGuests = uppercasedGuestList.slice('16');

const guests = substringGuests.split(',');

console.log(guestList.length);
console.log(uppercasedGuestList);
console.log(isEthanOnTheList);
console.log(substringGuests);
console.log(guests);
