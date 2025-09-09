import {z} from 'zod'

export const CreateUserSchema= z.object({
    username : z.string().min(3).max(20),
    password : z.string(),
    name : z.string(),
    email : z.string()
})

export const CreateSigninSchema = z.object({
    username : z.string(),
    password : z.string()
})

export const CreateRoomSchema = z.object({
    room : z.string()
})