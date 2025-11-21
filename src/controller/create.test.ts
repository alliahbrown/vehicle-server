// import {expect, jest, test} from '@jest/globals';
// import { Pool } from 'pg';
// import { Request, Response } from 'express';

// import { FakeResponse } from "../fake/response";
// import { CreateVehicleController } from "./create";

// import { VehicleStore } from "../store/vehicle";
// import { AppError, ErrorCode } from "../errors";


import {jest} from '@jest/globals';
import { Vehicle } from "../model/vehicle";

// On définit ici un module `Mock` ie: tout chargement du module `import { VehicleStore } from "../store/vehicle'`
// retournera une """fausse""" implementation qui  n'intéragit pas avec la base de données.


jest.mock('../store/vehicle', (() => ({
  VehicleStore: jest.fn().mockImplementation(() => {
    return {
      createVehicle: jest.fn().mockImplementation(async (req: any): Promise<Vehicle> => {
        return new Vehicle(
          12,
          req.shortcode,
          req.battery,
          req.position,
        );
      }),
    }
  })
})));