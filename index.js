const CATEGORIES = {
    "Politica": "Politica",
    "Cronaca": "Cronaca",
    "Cultura": "Cultura",
    "Sport": "Sport",
    "Economia": "Economia",
    "Abruzzo": "Abruzzo",
    "Basilicata": "Basilicata",
    "Calabria": "Calabria",
    "Campania": "Campania",
    "Emilia_Romagna": "Emilia Romagna",
    "Friuli_Venezia_Giulia": "Friuli Venezia Giulia",
    "Lazio": "Lazio",
    "Liguria": "Liguria",
    "Lombardia": "Lombardia",
    "Marche": "Marche",
    "Molise": "Molise",
    "Piemonte": "Piemonte",
    "Puglia": "Puglia",
    "Sardegna": "Sardegna",
    "Sicilia": "Sicilia",
    "Toscana": "Toscana",
    "Trentino_Alto_Adige": "Trentino",
    "Umbria": "Umbria",
    "Valle_D_Aosta": "Valle Aosta",
    "Veneto": "Veneto"
}

const getNews = async (category) => {
    const response = await fetch(`https://raw.githubusercontent.com/astagi/ansa-news/develop/json/${category}.json`)
    return await response.json()
}

export {CATEGORIES, getNews}