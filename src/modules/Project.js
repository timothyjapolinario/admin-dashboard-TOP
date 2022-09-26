
const projectInterface = (state) =>({
    type: "projectInterface"
})
const Project = (title, description, link, isFavorite) => {
    let state = {
        title:title,
        description:description,
        link:link,
        isFavorite:isFavorite,
    }
    let myInterface = Object.create(projectInterface(state))
    console.log(myInterface)
    return Object.assign(myInterface,state)
}

export default Project