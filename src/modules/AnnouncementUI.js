const generateAnnouncementUI = (announcement) =>{
    const announcementUI = document.createElement('div')
    announcementUI.classList.add('announcement')

    const title = document.createElement('div')
    title.classList.add('announcement-title')
    title.innerText = announcement.title

    const content = document.createElement('div')
    content.classList.add('announcement-content')
    content.innerText = announcement.content

    announcementUI.appendChild(title)
    announcementUI.appendChild(content)

    return announcementUI
}

export default generateAnnouncementUI