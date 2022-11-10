import getStrapiUrl from "@/lib/strapi/getUrl"

export async function getPage(page) {
    try {
        const url = getStrapiUrl()
        const res = await fetch(`${url}/api/${page}?populate=deep`)
        return await res.json()
    } catch (e) {
        throw new Error("Page not found !")
    }
}