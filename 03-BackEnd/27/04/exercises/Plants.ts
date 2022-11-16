// Plants.ts

import fs from 'fs/promises';

interface IPlant {
  id: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo { createdPlants: number }

enum FileType {
  Plants,
  OpsInfo,
}

class Plants {
  private readonly plantsFile = 'plantsData.json';
  private readonly opsFile = 'opsInfo.json';

  public initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };

    return newPlant;
  }

  public async readPlants(): Promise<string> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    return plantsRaw

  }

  public async readOpsInfo(): Promise<string> {
    const opsInfoRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    return opsInfoRaw
  }

  public async write(param: any): Promise<void> {
    await fs.writeFile(this.plantsFile, JSON.stringify(param));
  }

  public async getPlants(): Promise<IPlant[]> {
    const plants: IPlant[] = JSON.parse(await this.readPlants());
    return plants;
  }

  public async getPlantById(
    id: string,
  ): Promise<IPlant | null> {
    const plants: IPlant[] = JSON.parse(await this.readPlants());

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(
    id: string,
  ): Promise<IPlant | null> {
    const plants: IPlant[] = JSON.parse(await this.readPlants());

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(this.plantsFile, JSON.stringify(newPlants));

    return removedPlant;
  }

  public async getPlantsThatNeedsSunWithId(
    id: string,
  ): Promise<IPlant[]> {
    const plants: IPlant[] = JSON.parse(await this.readPlants());

    const filteredPlants = plants.filter((plant) =>
      plant.id === id
      && plant.needsSun
      && (!plant.specialCare
        || plant.specialCare.waterFrequency > 2));

    return filteredPlants;
  }

  public async editPlant(
    plantId: string,
    newPlant: IPlant,
  ): Promise<IPlant> {
    const plants: IPlant[] = JSON.parse(await this.readPlants());

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await fs.writeFile(this.plantsFile, JSON.stringify(updatedPlants));
    return newPlant;
  }

  public async savePlant(
    plant: IPlant,
  ): Promise<IPlant> {
    const plants: IPlant[] = JSON.parse(await this.readPlants());

    const newPlant = this.initPlant({ ...plant });
    plants.push(newPlant);

    let { createdPlants }: IOpsInfo = JSON.parse(await this.readOpsInfo());
    createdPlants += 1;
    await fs.writeFile(this.opsFile, JSON.stringify({ createdPlants }));

    await fs.writeFile(this.plantsFile, JSON.stringify(plants));
    return newPlant;
  }
}

export default Plants;