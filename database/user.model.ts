import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: String;
    password?: String;
    bio?: String;
    picture: String;
    location?: String;
    portfolioWebsite: String;
    reputation?: string;
    saved: Schema.Types.ObjectId[];
    joinedAt: Date;
}

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    bio: {
        type: String,
    },
    picture: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    portfolioWebsite: {
        type: String
    },
    reputation: {
        type: Number,
        default: 0,
    },
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    joinedAt: { type: Date, default: Date.now }

})

const User = models.User || model('User', UserSchema);

export default User