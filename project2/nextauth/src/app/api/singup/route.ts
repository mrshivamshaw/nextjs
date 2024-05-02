import connectDB from '../../../DBconfig/db.js'
import bcryptjs from 'bcryptjs'
import User from '../../../models/user.js'
import {NextRequest, NextResponse} from 'next/server'

connectDB();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const {email, password, username} = reqBody;

        const existingUser = await User.findOne({username});
        if(existingUser){
            return NextResponse.json({message: "User already exists", success : false}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(12);
        const hasshedPassword = await bcryptjs.hash(password, salt);

        const newuser = await User.create({
            email, password: hasshedPassword, username
        })

        return NextResponse.json({
            success : true,
            user : newuser
        }, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong", success : false}, {status: 500})
    }
}