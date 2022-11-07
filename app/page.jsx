import {getPage} from "@/lib/strapi/getPage";

async function fetchData() {
    const data = await getPage("homepage")
    console.log(data)
    return data
}

export default async function Page() {
    const {data} = await fetchData()
    return (
        <>
            <div>Next JS & Strapi</div>
        </>
    )
}