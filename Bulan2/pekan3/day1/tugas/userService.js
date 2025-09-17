import {user} from "./user.js";

export function getAllUser() {
    return user;
}

export function getUserById(id) {
    return user.find(u => u.id === id);
}