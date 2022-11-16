import getUrl from "./getUrl";

const getMedia = (imageData) => `${getUrl()}${imageData?.data?.attributes?.url}`;

export default getMedia;
