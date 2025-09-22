function toJSON(obj){
    return JSON.stringify(obj)
}

function toObject(json){
    return JSON.parse(json)
}

export { toJSON ,toObject}