import express ,{json, Request , Response} from 'express'
import { prismaClient } from '@repo/db/client'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { JWT_SECRET } from '@repo/backend-common/config'
import {CreateUserSchema, CreateSigninSchema, CreateRoomSchema} from "@repo/common/types"
const app = express()
app.use(express.json())

app.post('/signup' , async function (req:Request , res : Response) {
     
  const data = CreateUserSchema.safeParse(req.body);
  if(!data.success){
    res.json({
      message: "Incorrect Inputs"
    })
    return
  } 
       const { username, password, email, name } = data.data;
        try {
              const existingUser = await prismaClient.user.findUnique({where: {username}})

              if(existingUser){
                return res.json({message: "User already exists"})
              }
              const hashedPassword = await bcrypt.hash(password ,10)
            const newUser = await prismaClient.user.create({
            data: {
               username : username,
               email : email, 
               password: hashedPassword, 
               name : name 
            }
          })
          return res.json ({
            message: "User Signed Up ",
            newUser
          })

        } catch (error) {
          return res.status(500).json({
            message: "Server Error"
          });
          
        }
})
app.post('/signin', async function (req:Request , res: Response) {
      const data = CreateSigninSchema.safeParse(req.body);
  if(!data.success){
    res.json({message:"Incorrect Inputs"})
    return
  } 
    const {username , password} = data.data   
     const user = await prismaClient.user.findUnique({where:{username}})

     if(!user){
      res.json({
        message : "No User Found"
      })
      return;
     } 
     const passwordmatch = await bcrypt.compare(password, user.password)

     if(passwordmatch){

      const token = jwt.sign({
         id: user.id.toString()
      },JWT_SECRET,{expiresIn: '1h'})

      res.json({
        message :"user Signed In" ,
        token
      })
     }

})

app.post('/room', async function (req:Request , res: Response) {
      const data = CreateRoomSchema.safeParse(req.body);
  if(!data.success){
    res.json({message: "Incorrect Inputs"})
    return
  } 
      

})



app.listen(3001, () => {
  console.log('Server running at http://localhost:3001')
})