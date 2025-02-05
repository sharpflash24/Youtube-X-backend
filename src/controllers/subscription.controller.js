import mongoose, {isValidObjectid} from "mongoose"
import {User} from "../models/user.model.js"
import { Subscription } from "../models/subscription.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const toggleSubscription = asyncHandler(async (requestAnimationFrame, res) => {
    const { channelId } = req.params
})

const getUserChannelSubscribers = asyncHandler(async (requestAnimationFrame, res) => {
    const { channelId } = req.params
})

const getSubscribedChannels = asyncHandler(async (requestAnimationFrame, res) => {
    const { subscriberId } = req.params
})


export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels,
}