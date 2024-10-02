import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { userName, email, password } = reqBody;
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User Already Exists" },
        { status: 400 }
      );
    }


    const newUser = new User({
      userName,  
      email,
      password,
    });
   
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "User Created Successfully",
      success: true,
      data: savedUser,
    });
  } catch (error: any) {
    console.error("Error in user registration:", error); 
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
