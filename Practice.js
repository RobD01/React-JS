let data = [
    {Topic: 'Volunteering'},
    {Topic: 'Writing'},
    {Topic: 'Photography'}
  ]

const interests = [
'3D printing',
'Amateur radio',
'Scrapbook',
'Amateur radio',
'Acting',
'Baton twirling',
'Board games',
'Book restoration',
'Cabaret',
'Calligraphy',
'Candle making',
'Computer programming',
'Coffee roasting',
'Cooking',
'Colouring',
'Cosplaying',
'Couponing',
'Creative writing']

for (i in interests)
    {data.push({
        Topic: interests[i]
        
    });}

console.log(data)