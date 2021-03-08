export default {
    name: 'article',
    type: 'document',
    title: 'Artikkel',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Tittel'
      },
      {
        title: 'Innhold', 
        name: 'text',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Forfatter',
        name: 'author',
        type: 'reference',
        to: [{type: 'author'}]
      },
    ]
  }
  