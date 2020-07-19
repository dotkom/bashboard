export default {
    name: 'company',
    type: 'document',
    title: 'Bedrift',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Navn',
            description: 'Bedriftens navn'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Beskrivelse',
            description: 'En kort beskrivelse av selskapet'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
            description: 'Selskapets logo'
        },
        {
            name: "homepage",
            type: "url",
            title: "Hjemmeside",
            description: "Selskapets hjemmeside"
        }
    ]
}
