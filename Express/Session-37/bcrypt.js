const bcrypt= require('bcrypt');
const password="Sonam@123";

async function generateHashPassword(password){
    try {
        const hashPassword = await bcrypt.hash(password,12);
        console.log(hashPassword);
        validateUser("SONAM@123",hashPassword);
        return hashPassword;
    } catch (error) {
        console.log(error);
    }
}
async function validateUser(password,hashPassword){
    try {
        const res = await bcrypt.compare(password,hashPassword);
        if(res){
            console.log("Correct Password");
        }else{
            console.log("Invalid Password");
        }
    } catch (error) {
        
    }
}
const dbPassword=generateHashPassword(password);
