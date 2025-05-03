import { Request, Response } from 'express';
import User from '../models/users';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
//import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'; //i will uncomment this line when i configure the aws 

dotenv.config();

const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;

const generateClabe = (): string => {
    const clabe = Array.from ({ length: 18 }, () => Math.floor(Math.random() * 10)).join('');
    return clabe;
};

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password, username} = req.body;
    if (!email || !password || !username) {
        res.status(400).json({ message: "Email, username and password are required" });
        return;
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ username, email, password: hashedPassword, clabe: generateClabe(), accountNumber: crypto.randomUUID() });
        await newUser.save();
        res.status(201).json({ 
            message: "User registered successfully",
            accountNumber: newUser.accountNumber,
            clabe: newUser.clabe
        });
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
            return;
        }

        const user = await User.findOne({ email });
        if (!user){
            res.status(400).json({ message: "Invalid Credentials "})
            return;
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            res.status(400).json({ message: "Invalid Credentials" });
            return;
        }

        const secret = process.env.JWT_SECRET;
        if (!secret){
            console.error("JWT secret is not defined");
            res.status(500).json({ message: "Internal server error" });
            return;
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            secret,
            { expiresIn: '1h' } as SignOptions
        );

        res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
            },
        });
        
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(500).json({ message: "Internal server error", error: errorMessage });
    }
};


//This functions will be commented until i finish the frontend part and deploy the app to aws, then i will uncomment this code and configure the aws ses service
//This functions will be used to send the email to the user and recover the password


/*
const ses = new SESClient({ region: "us-east-1" });

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ message: "User not found"})
                return;
            }
            const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
            const expires = Date.now() + 15 * 60 * 1000; //this is for 15 minutes of expiration time
            
            user.resetPasswordCode = resetCode;
            user.resetPasswordExpires = expires;
            await user.save();
            
            const params = {
                Source: "my-email-verified@.com",
                Destination: { ToAddresses: [email] },
                Message: {
                    Subject: { Data: "Password Reset Code" },
                    Body: {
                        Text: { Data: `Your password reset code is ${resetCode} this code expires in 15 minutes` },
                    },
                },
            };
            const command = new SendEmailCommand(params);
            await ses.send(command);
            res.status(200).json({ message: "Password reset code sent to email" });
        } catch (error) {
            console.error("Error in forgotPassword:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
*/

/*
export const verifyResetCode = async (req: Request, res: Response): Promise<void> => {
    const  { email, code } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !user.resetPasswordCode || !user.resetPasswordExpires){
            res.status(400).json({ message: 'Invalid or expired reset code' });
            return;
        }
        if (user.resetPasswordCode !== code) {
            res.status(400).json({ message: 'Incorrect Code' });
            return;
        }
        if (user.resetPasswordExpires < Date.now()) {
            res.status(400).json({ message: 'Code Expired' });
            return;
        }
        res.status(200).json({ message: 'Code verified successfully' });
    } catch (error) {
        console.error('Error in verifyRedesCode: ', error);
        res.status(500).json({ message: 'Internal server error' });
        }
    };
*/    

/*
export const resetPassword = async (req: Request, res: Response): Promise<void> => {
    const { email, newPassword, confirmNewPassword } = req.body;
    try {
        if (!newPassword !== confirmNewPassword) {
            res.status(400).json({ message: 'Passwords do not match'});
            return;
        }
        const user = await User.findOne({ email });
        if (!user){
            res.status(400).json({ message: 'User not found'});
            return;
        }
        if (!user.resetPasswordCode || user.resetPasswordExpires < Date.now()){
            res.status(400).json({ message: 'You must verify the code again'})
            return;
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        user.resetPasswordCode = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });
        
    } catch (error) {
        console.error('Error in resetPassword:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
*/