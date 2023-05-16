const CATEGORIES = {
    "Politica": "Politica",
    "Cronaca": "Cronaca",
    "Cultura": "Cultura",
    "Sport": "Sport",
    "Economia": "Economia",
    "Abruzzo": "Abruzzo"
}

const getNews = async (category) => {
    if (!CATEGORIES[category]) {
        throw new Error("Category does not exists")
    }
    const response = await fetch(`https://raw.githubusercontent.com/astagi/ansa-news/develop/json/${category}.json`)
    return await response.json()
}

export {CATEGORIES, getNews}