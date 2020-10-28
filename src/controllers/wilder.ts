import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response } from 'express';
import InputError from '../errors/InputError';
import WilderModel from '../models/Wilder';
import CreateWilderModel from './CreateWilderModel';

export default {
  create: async (req: Request, res: Response): Promise<void> => {
    const inputWilder = plainToClass(CreateWilderModel, req.body);
    const errors = await validate(inputWilder);
    if (errors.length > 0) {
      throw new InputError(errors);
    }
    await WilderModel.init();
    const wilder = new WilderModel(inputWilder);
    const result = await wilder.save();
    res.json({ success: true, result });
  },
  read: async (req: Request, res: Response): Promise<void> => {
    const result = await WilderModel.find();
    res.json({ success: true, result });
  },
  update: async (req: Request, res: Response): Promise<void> => {
    // eslint-disable-next-line no-underscore-dangle
    const result = await WilderModel.updateOne({ _id: req.body._id }, req.body);
    res.json(result);
  },
  delete: async (req: Request, res: Response): Promise<void> => {
    // eslint-disable-next-line no-underscore-dangle
    const result = await WilderModel.deleteOne({ _id: req.body._id });
    res.json({ success: true, result });
  },
};
