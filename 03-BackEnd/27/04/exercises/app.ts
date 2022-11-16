import express, { Request, Response, Router } from 'express'
import Plants from './Plants'

const app = express()

app.listen(3000, () => {
    console.log(`Escutando na porta 3000`);
});

const plants = new Plants()

app.get('/plants', async (_req: Request, res: Response) => {
    const result = await plants.getPlants();
    return res.status(200).json(result)

})

app.get('/plants/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await plants.getPlantById(id);
    return res.status(200).json(result)

})

app.delete('/plants/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await plants.removePlantById(id);
    return res.status(200).json(result)

})


app.post('/plants/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await plants.editPlant(id, req.body);
    return res.status(200).json(result)

})

app.post('/plants', async (req: Request, res: Response) => {
    const result = await plants.savePlant(req.body);
    return res.status(200).json(result)

})

app.get('/sunny/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await plants.getPlantsThatNeedsSunWithId(id);
    return res.status(200).json(result)

})