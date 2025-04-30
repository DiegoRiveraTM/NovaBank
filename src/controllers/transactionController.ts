import User from '../models/users';
import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';

export const deposits = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const userId = req.user?.id;

        const user = await User.findById(userId).select('username clabe');

        if (!user){
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json({
            bank: "Nova Bank",
            name: user.username,
            clabe: user.clabe,
        });
} catch(error) {
        console.error("Error in deposits controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const withdrawals = async (req: Request, res: Request): Promise<void> => {

}

export const transfers = async (req: Request, res: Request): Promise<void> => {

}