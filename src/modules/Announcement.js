const announcementInterface = (state) =>({
    type: "announcementInterface"
})
const Announcement = (title, content) => {
    let state = {
        title:title,
        content:content
    }
    let myInterface = Object.create(announcementInterface(state))
    return Object.assign(myInterface,state)
}

export default Announcement