import { getRepository } from "typeorm";
import { Profile } from "../entity/Profile";
import {NextFunction, Request, Response} from "express";


export class ProfileController{
    profileRepository = getRepository(Profile)

    async save(request : Request, response: Response, next: NextFunction){
        return this.profileRepository.save(request.body.profile)
    }

    async find(request : Request, response: Response, next: NextFunction){
        return this.profileRepository.find()
    }

    async one(request : Request, response: Response, next: NextFunction){
        return this.profileRepository.findOne(request.params.id)
    }

    async remove(request : Request, response: Response, next: NextFunction){
        return this.profileRepository.softRemove(request.params.id)
    }

    // async findByUserId(request : Request, response: Response, next: NextFunction){
    //     return this.profileRepository.findOne({user: User})
    // }
}