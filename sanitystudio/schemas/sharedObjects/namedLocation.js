export default {
    name: 'namedLocation',
    type: 'object',
    title: 'Sted',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Navn',
        },
        {
            name: 'location',
            type: 'geopoint',
            title: 'Lokasjon',
        },
    ]
}
