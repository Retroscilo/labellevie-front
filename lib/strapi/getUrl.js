const getUrl = () => {
    if (!process.env.NEXT_PUBLIC_STRAPI_URL) throw new Error("NEXT_PUBLIC_STRAPI_URL n'a pas été trouvé !")
    return process.env.NEXT_PUBLIC_STRAPI_URL
}

export default getUrl