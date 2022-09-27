const generateTrendUI = (trend) =>{
    console.log(trend)
    const trendUI = document.createElement('div')
    trendUI.classList.add('trend')

    const profileIconUI = document.createElement('div')
    profileIconUI.classList.add('trend-profile-icon')
    const profileImage = document.createElement('img')
    profileImage.src = trend.profileIcon
    profileIconUI.appendChild(profileImage)
    
    const profileNameUI = document.createElement('div')
    profileNameUI.classList.add('trend-profile-name')
    profileNameUI.innerText = trend.profileName

    const profileProjectUI = document.createElement('div')
    profileProjectUI.classList.add('trend-project')
    profileProjectUI.innerText = trend.projectName


    trendUI.appendChild(profileIconUI)
    trendUI.appendChild(profileNameUI)
    trendUI.appendChild(profileProjectUI)

    return trendUI
}

export default generateTrendUI