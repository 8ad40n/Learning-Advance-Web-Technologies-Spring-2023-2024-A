import { Module } from '@nestjs/common';

@Module({})
export class Feature1Module {
    constructor()
    {
        console.log("Feature1 module");
    }
}
