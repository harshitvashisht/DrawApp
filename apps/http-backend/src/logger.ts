import { prismaClient } from "@repo/db/client";


export async function logActivity(userId: string, action: string, metadata?: any) {
  try {
    await prismaClient.activity.create({
      data: {
        userId,
        action,
        metadata,
      },
    });
  } catch (err) {
    console.error("Activity logging failed:", err);
  }
}