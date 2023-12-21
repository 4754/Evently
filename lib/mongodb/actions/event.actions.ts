"use server"

import { handleError } from "@/lib/utils"
import { CreateEventParams } from "@/types"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
import Event from "../database/models/event.model"

export const createEvent = async ({ event, userId, path}: CreateEventParams) =>{
    try {
        await connectToDatabase();

        const organiser = await User.findById(userId);

        if(!organiser){
            throw new Error("Organiser not found");
        }

        const newEvent = await Event.create({
            ...event,
            category: event.categoryId,
            organizer: userId,
        });

        return JSON.parse(JSON.stringify(newEvent))

    } catch (error) {
        handleError(error)
    }

}