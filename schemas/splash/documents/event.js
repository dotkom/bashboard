export default {
    name: 'splashEvent',
    type: 'document',
    title: 'Splash event',
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
