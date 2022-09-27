const addItem = (itemName,identifier = "",item) =>{
    const finalName = identifier+"_"+itemName
    localStorage.setItem(finalName, JSON.stringify(item))
}

const getItem = (itemName) =>{
    const item = JSON.parse(localStorage.getItem(itemName));
    return item;
}

const getAllItem = (identifier) =>{
    let keys =Object.keys(localStorage);
    const itemList = []
    keys.forEach((key) => {
        if(key.includes(identifier)){
            let item = getItem(key, identifier)
            itemList.push(item)
        }
    })
    return itemList;
}

export {addItem, getItem,getAllItem}
