import express ,{json, Request , Response} from 'express'
import { prismaClient } from '@repo/db/client'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import cors from 'cors'
import { JWT_SECRET } from '@repo/backend-common/config'
import {CreateUserSchema, CreateSigninSchema, CreateRoomSchema} from "@repo/common/types"
import authMiddleware from './middleware'
import { logActivity } from './logger'
const app = express()

app.use(express.json())
app.use(cors())

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

     if(!passwordmatch){
      return res.json({
        message: "Password Not Matched"
      })
     }const token = jwt.sign({
         id: user.id.toString()
      },JWT_SECRET,{expiresIn: '1h'})

      res.json({
        message :"user Signed In" ,
        token,
        username : user.username
      })

})

app.post('/room', authMiddleware ,async function (req:Request , res: Response) {
   
 const data = CreateRoomSchema.safeParse(req.body)

 if(!data.success){
    res.json({message:"Incorrect Inputs"})
    return
  } 
  try {
//@ts-ignore
    const id = req.id 
    const room = await prismaClient.room.create({
      data: {
             slug : data.data.room,
             adminId : id
      }
    })
    //@ts-ignore
    await logActivity(req.id, "Created a room", { roomSlug: data.data.room, roomId: room.id });
    console.log("activity happednd")
    return res.json ({
      message: "room-Created",
      room
    })
  } catch (error) {
    res.json({
      message: "Server Error !"
    })
  }

})

app.get('/chats/:roomId' , async(req:Request , res: Response)=>{
          
  const roomId = Number(req.params.roomId);

    const messages = await prismaClient.chat.findMany({where:{
          roomId : roomId,  
       },
       orderBy : {'id' : "desc"} ,
  })
          return res.json({
            messages
          })
})

app.get('/room/:slug' , async(req:Request , res: Response)=>{
          
  const slug = req.params.slug;

    const room = await prismaClient.room.findFirst({where:{
          slug
       }
  })
          return res.json({
            room
          })
})


app.get('/getrooms' ,async(req:Request , res: Response)=>{

  try {
    const rooms = await prismaClient.room.findMany()

    res.json ({
      rooms
    })

  } catch (error) {
    console.error("Database Connection Failed !")
  }
         
})

app.get('/myroom' ,authMiddleware, async(req:Request , res:Response)=>{
   try {
    //@ts-ignore
    const userId = req.id
    const rooms = await prismaClient.room.findMany({where: {adminId : userId}})
    res.json({ rooms });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user's rooms" });
  }
})

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001')
})


