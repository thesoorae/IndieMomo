# Sample State

```
state = {
  currentUser: {
    id: 1,
    username: "Grandma Lau"
    },

  batches: {
    1: {
      id: 1,
      title: "Pot Stickers",
      category: "Chinese",
      description: "...",
      orderDescription: "...",
      qty_in_order: 5,
      orderOptions: {
        1: {
          id: 1,
          price: 5,
          qty: 4,
        },
      ...}
      images:[
        {
          id: 1,
          url: '...'
          }...],
     goal: 10,
     zipCode: 94805,
     orders: [
        {
        id: 1,
        userId: 12,
        qty: 5
        }...],
     chef:{
       id: 4,
       username: 'Mr. Yang',
       imageUrl: '...',
       description: '...',
       videoUrl: '...',
       certifications: ['Food Safety']
       },
    ids: [1,5,6,10...]...
    }
    ...
  }

  currentBatch: {
    id: 1,
    title: '',
    category: '',
    description: '',
    images:[{
      id: 1,
      url: '',
      }...],
    goal: 28,
    zipCode: 94001
  }

  errors {
    batch: [],
    reviews: []
  }
}
```
