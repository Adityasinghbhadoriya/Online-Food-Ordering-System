import { model, models, Schema } from "mongoose";
import bcrypt from 'bcrypt'
const UserSchema = new Schema({
     email: {type: String, required: true, unique: true ,email: 1},
     password: {
        type: String,
        required: true,
        validate:pass => {
            if(!pass?.length || pass.length < 5)
            {
                alert('password must be atleast 5 characters');
            }
        },
    },

},{timestamps : true});

 UserSchema.post('validate', function (user){
    const notHashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
 })

 const User = models?.User || model('User',UserSchema );

export default User