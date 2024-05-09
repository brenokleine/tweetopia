import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        //[boolean, message] VVV
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^\w+$/, 'Username can only contain letters, numbers, and underscores!'],
    },
    image: {
        type: String,
    }
});

//if the model already exists, use it; otherwise, create a new model
const User = models.User || model('User', UserSchema);

export default User;