export default {
    name: 'offline',
    type: 'document',
    title: 'Offline',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Tittel',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Beskrivelse',
        },
        {
            name: 'coverimage',
            type: 'image',
            title: 'Omslag',
        },
        {
            name: "file",
            type: "file",
            title: "Fil",
        }
    ]
}
