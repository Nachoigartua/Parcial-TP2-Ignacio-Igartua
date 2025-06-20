import jwt, { verify } from "jsonwebtoken"

//esto iria en un .env
const KEY = "clave"
//generacion del token con una firma 
const generateToken = async (DataTransfer) => {
 //payload es un proceso que tiene info delicada
 const payload = {
    email: DataTransfer.email,
    password: DataTransfer.password
 }

 // objeto con info del user y mi clave de app y si expira, en cuanto tiempo??
 const tkn = await jwt.sign(payload , KEY , {expiresIn: '5m'}  )
 return tkn;
}

const verifyToken = async () => {

}

export default {
    generateToken,
    verifyToken
}


//verificacion de token y duracion del mismo