import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
// app.use(cors())

app.get('/', async (req, res) => {
  const candle = await prisma.candlesticks.count
  res.json({candle})
})

// http://localhost:3002/candle?symb=TRBUSDT&ex=bybit_linear&dtfrom=2023-09-28&dto=2023-09-29

app.get('/candle', async (req, res) => {
  const { t, ex, symb, dtfrom, dto }: { t?: string, ex?:string, symb?:string, dtfrom?:string, dto?:string } = req.query;
  const symbol = symb ? {symbol:symb} : {}
  const exchange = ex ? {exchange:ex} : {}
  const dparse = (d:string)=> Math.round( Date.parse(d) / 1000);
  const _dtFrom = dtfrom ? { time: {gte: dparse(dtfrom)} } : {}
  const _dtTo = dto ? { time: {lte: dparse(dto)} } : {}
  const dateB =_dtFrom.time && _dtTo.time  ? {AND: [_dtFrom, _dtTo] } : _dtFrom.time ? _dtFrom : _dtTo.time || {}

  const candle = await prisma.candlesticks.findMany({
    where: { period: t || '1h', ...exchange, ...symbol, ...dateB },
   //  orderBy : { "time": "asc", "id":"asc" },
    take:100
  })
  const formatDate = (yourDate:number):string=>{
    const dateIso = new Date(yourDate).toISOString().split('T')
    return   dateIso[0] + ' ' +  dateIso[1].slice(0, 8)
  }
  const mapper = (c:any) =>({...c, date :formatDate( c?.time ? c.time * 1000 : 1)})
  res.json(candle.map(mapper))
})

// {"AND": [ { "time": { "gte": 1696420260}},{"time": { "lte": 1696420320} }]}

const server = app.listen(3002, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3002',
  ),
)

/*
app.get('/feed', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true }
  })
  res.json(posts)
})

app.get('/filterPosts', async (req, res) => {
  const { searchString }: { searchString?: string } = req.query;
  const filteredPosts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchString,
          },
        },
        {
          content: {
            contains: searchString,
          },
        },
      ],
    },
  })
  res.json(filteredPosts)
})

app.post(`/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
})

app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    include: { author: true }
  })
  res.json(post)
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { published: true },
  })
  res.json(post)
})

app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
})
*/


