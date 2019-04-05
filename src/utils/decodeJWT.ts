import jwt from 'jsonwebtoken';
import User from '../entities/User';

const decodeJWT = async (token: string): Promise<User | undefined> => {
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || '');
    const { userId } = decoded;
    const user = await User.findOne({ userId });
    return user;
  } catch (error) {
    return undefined;
  }
};

export default decodeJWT;
