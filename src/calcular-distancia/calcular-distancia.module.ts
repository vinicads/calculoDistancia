import { Module } from '@nestjs/common';
import { CalcularDistanciaService } from './calcular-distancia.service';
import { CalcularDistanciaController } from './calcular-distancia.controller';

@Module({
  controllers: [CalcularDistanciaController],
  providers: [CalcularDistanciaService],
})
export class CalcularDistanciaModule {}
