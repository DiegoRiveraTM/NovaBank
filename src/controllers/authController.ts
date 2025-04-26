import User from '../models/Users';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
