import { Request, Response } from 'express';
import WilderModel from '../models/Wilder';

const wilderController = {
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      await WilderModel.init();
      const wilder = new WilderModel(req.body);
      const result = await wilder.save();
      res.json({ success: true, result });
    } catch (err) {
      res.json({ success: false, result: err });
    }
  },
  read: async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await WilderModel.find();
      res.json({ success: true, result });
    } catch (err) {
      res.json({ success: false, result: err });
    }
  },
  update: (req: Request, res: Response): void => {
    WilderModel.updateOne({ _id: req.body._id }, req.body)
      .then((result) => {
        if (!result) {
          res.json({ success: false, result: 'No such wilder exists' });
        }

        res.json(result);
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  delete: (req: Request, res: Response): void => {
    WilderModel.deleteOne({ _id: req.body._id })
      .then((result) => {
        if (!result) {
          res.json({
            success: false,
            result: 'No wilder with such ID was found',
          });
        }
        res.json({ success: true, result });
      })
      .catch((err) => res.json({ success: false, result: err }));
  },
};

export default wilderController;
