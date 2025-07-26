function reverse(string) {
  return string.split('').reverse().join('');
}
reverse('hello');

module.exports = reverse;
