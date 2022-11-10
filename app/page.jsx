import Hero from "@/components/Hero"
import {getPage} from "@/lib/strapi/getPage";

async function fetchData() {
    const data = await getPage("homepage")
    console.log(data.data.attributes)
    return data
}


export default async function Page() {
    const {data} = await fetchData()
    return (
        <div>
            <Hero data={data.attributes.Hero}></Hero>
        </div>
    )
}