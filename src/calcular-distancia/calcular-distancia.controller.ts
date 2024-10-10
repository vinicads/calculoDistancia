import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { CalcularDistanciaService } from './calcular-distancia.service';


@Controller('calcularDistancia')
export class CalcularDistanciaController {
  constructor(private readonly calcularDistanciaService: CalcularDistanciaService) {}

  @Post()
  async calcularDistancia(
    @Res() res: Response, 
    @Req() req: Request,
    @Body("de") de: string,
    @Body("para") para: string,
  ){
      return this.calcularDistanciaService.calcularDistanciaCep(de, para, res);
  }
}
