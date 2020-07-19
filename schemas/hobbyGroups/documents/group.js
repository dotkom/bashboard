export default {
    name: 'hobbyGroup',
    type: 'document',
    title: 'Interessegruppe',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Navn',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Beskrivelse',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Bilde',
        },
        {
            name: "active",
            type: "boolean",
            title: "Aktiv",
        }
    ]
}
