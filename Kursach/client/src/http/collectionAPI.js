import {$authHost, $host} from "./index";

export const createCollection = async (collection) => {
    const {data} = await $authHost.post('api/collection', collection)
    return data
}

export const fetchCollections = async () => {
    const {data} = await $host.get('api/collection')
    return data
}
export const deleteCollection = async (id) => {
    const {data} = await $authHost.delete(`api/collection/${id.id}`, id)
    return data
}