import express from "express";
import cartRouter from './src/routes/carts.routes.js'
import productsRouter from './src/routes/products.routes.js';
import cors from 'cors';




const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self';");
    next();
});
app.use('/api/carts', cartRouter);
app.use('/api/products', productsRouter);


const PORT = 8080;

app.get('/', (req, res) => { res.send('Hello World!'); });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));