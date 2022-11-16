import Hero from "@/components/Hero";
import { getPage } from "@/lib/strapi/getPage";
import { getComponent } from "@/lib/strapi/buildPage";

async function fetchData() {
  return await getPage("homepage");
}

export default async function Page() {
  const { data } = await fetchData();
  return (
    <div>
      {/* <Hero data={data.attributes.Hero}></Hero> */}
      {data.attributes.content.map((content, i) => {
        const componentName = content.__component.split(".").pop();
        const Component = getComponent(componentName);
        return <Component key={i} data={content} />;
      })}
    </div>
  );
}
