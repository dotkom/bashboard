export default {
    name: 'careerOpportunity',
    type: 'document',
    title: 'Karrieremulighet',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
            description: 'Tittel på arbeidsmuligheten'
        },
        {
            name: 'ingress',
            type: 'string',
            title: 'Ingrees',
            description: 'En kort ingress'
        },
        {
            name: 'description',
            type: 'text',
            title: "Beskrivelse",
            description: 'Beskrivelse av arbeidsmuligheten'
        },
        {
            title: 'Startdato',
            name: 'startDate',
            type: 'date',
            description: "Arbeidsmulighetens startdato"
        },
        {
            title: 'Sluttdato',
            name: 'endDate',
            type: 'date',
            description: "Arbeidsmulighetens sluttdato"
        },
        {
            title: 'Søknadsfrist',
            name: 'deadline',
            type: 'date',
            description: "Frist for å søke"
        },
        {
            title: 'Søknadslenke',
            name: 'applicationUrl',
            type: 'url',
            description: "Link til søknadsside"
          },
          {
            title: 'Sted',
            name: 'location',
            type: 'geopoint',
            description: "Arebeidsmulighetens plassering"
          },
          {
            title: 'Type',
            name: 'type',
            type: 'string',
            options: {
                list: [
                  {
                    title: 'Heltid',
                    value: 'fullTime'
                  },
                  {
                    title: 'Deltid',
                    value: 'partTime'
                  },
                  {
                    title: 'Sommerjobb',
                    value: 'summerJob'
                  }
                ]
              }
          },
          {
            title: 'Bedrift',
            name: 'company',
            type: 'reference',
            to: [{type: 'company'}]
          }
    ]
}
