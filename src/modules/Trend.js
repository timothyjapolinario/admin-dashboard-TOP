const trendInterface = (state) =>({
    type: "trendInterface"
})
const Trend = (profileName, profileIcon, projectName) => {
    let state = {
        profileName:profileName,
        profileIcon:profileIcon,
        projectName: projectName
    }
    let myInterface = Object.create(trendInterface(state))
    return Object.assign(myInterface,state)
}

export default Trend