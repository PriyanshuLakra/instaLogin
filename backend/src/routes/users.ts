import { Hono } from "hono";
// this import doest work .. dont no why 
// import { PrismaClient } from "@prisma/client/extension";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
// import withAccelerate from 'prisma-with-accelerate';

export const userRouter = new Hono<{

    Bindings:{
        DATABASE_URL:string
    }
}>();

userRouter.post("/signup" , async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())



        const body = await c.req.json();
        console.log("hii")
        const user = await prisma.user.create({
            data:{
              username:body.username,
              password:body.password
            }
          })

          return c.json({
            message:"done!"
          })
})





