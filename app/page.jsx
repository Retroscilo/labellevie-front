import Hero from "@/components/Hero"
import {getPage} from "@/lib/strapi/getPage";

async function fetchData() {
    return await getPage("homepage")
}


export default async function Page() {
    const {data} = await fetchData()
    return (
        <div>
            <Hero data={data.attributes.Hero}></Hero>
        </div>
    )
}