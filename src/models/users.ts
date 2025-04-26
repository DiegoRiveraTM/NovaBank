import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    balance: number;
    accountNumber: string;
    transactions: mongoose.Types.ObjectId[];
    withdrawals: mongoose.Types.ObjectId[];
    deposits: mongoose.Types.ObjectId[];
}

const UserSchema: Schema<IUser> = new Schema(
    {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    balance: { type: Number, default: 0 },
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    withdrawals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    deposits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    accountNumber: { type: String, required: true, unique: true }
    }, 
    { timestamps: true } //this creates createdAd and updatedAt fields auto
);
export default mongoose.model<IUser>('User', UserSchema);