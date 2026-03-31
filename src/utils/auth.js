const validator= requrire("validator");


function authenticate(data){
        const firstName= data.firstName;
        const email= data.email;
        const password= data.password;

        if (!firstName || firstName.trim()==='') throw new Error("first Name required");
        if (!validator.isEmail(email)) throw new Error("invalid email format");
        if (!validator.isStrongPassword(password)) throw new Error("Please ensure that the password contains a number, uppercase, lowercase, and a symbol and must have 8 or more letters");
}

module.exports= authenticate;