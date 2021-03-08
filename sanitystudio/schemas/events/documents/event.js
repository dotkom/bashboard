export default {
    name: 'event',
    type: 'document',
    title: 'Arrangement',
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
            title: 'Starttid',
            name: 'startDateTime',
            type: 'datetime',
        },
        {
            title: 'Slutttid',
            name: 'endDateTime',
            type: 'datetime',
        },
        {
            title: 'Location',
            name: 'location',
            type: 'namedLocation',
          }
    ]
}
