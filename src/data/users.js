module.exports.data = [
  {
    name: "Ava",
    dateOfBirth: "1990-04-01"
  },
  {
    name: "James",
    dateOfBirth: "1968-02-06"
  },
  {
    name: "Danielle",
    dateOfBirth: "1987-09-15"
  },
  {
    name: "Darnell",
    dateOfBirth: "1982-06-22"
  }
]

module.exports.getUserBirthDate = function(user) {
  console.log("users.js file",user)//TODO
  const numberedBirthday = Date.parse(user.dateOfBirth)
  return numberedBirthday
}
