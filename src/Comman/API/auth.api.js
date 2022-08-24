import { auth } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword,  sendEmailVerification,  onAuthStateChanged} from "firebase/auth";

export const SignUpapi = (data) => {

    console.log("SignUpapi",data);
 
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                           resolve({payload: "please cheack your email."});
                        })
                        .catch((e) => {
                            reject({payload: e});
                        })
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/claims-too-large") === 0) 
                {
                        reject({payload: "Email is already registed"});                
                }else{
                        reject({payload: errorMessage});
                }
            });
    })
}
