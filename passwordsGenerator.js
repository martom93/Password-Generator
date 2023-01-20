function userIdGenerator(){
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=?<>,.'
let passwordLength = prompt('Enter length of the password: ')
let numberOfPasswords = prompt('How many passwords you want to generate: ')
let password = []

for(let i=0; i<numberOfPasswords; i++){
   password[i]=""
    for(let j=0; j<passwordLength; j++){
        password[i] += chars[Math.floor(Math.random()*chars.length)]
    }
}
password.forEach(function(password){
    console.log(password)
})
}
userIdGenerator()