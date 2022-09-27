const announcementInterface = (state) =>({
    type: "announcementInterface"
})
const Announcement = (title, content) => {
    let state = {
        title:title,
        content:content
    }
    let myInterface = Object.create(announcementInterface(state))
    console.log(myInterface)
    return Object.assign(myInterface,state)
}

export default Announcement