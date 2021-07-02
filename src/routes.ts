import { ProfileController } from "./controller/ProfileController";
import {UserController} from "./controller/UserController";

export const Routes = [
{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, 
{
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
},
{
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
},
{
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},


///////////
{
    method: "get",
    route: "/profile",
    controller: ProfileController,
    action: "findAll"
}, 
{
    method: "get",
    route: "/profile/:id",
    controller: ProfileController,
    action: "one"
},
{
    method: "post",
    route: "/profile",
    controller: ProfileController,
    action: "save"
},
{
    method: "delete",
    route: "/profile/:id",
    controller: ProfileController,
    action: "remove"
}
];