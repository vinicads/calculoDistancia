import { Injectable} from '@nestjs/common';
import axios from 'axios';
import * as geolib from 'geolib';

@Injectable()
export class CalcularDistanciaService {

    async calcularDistanciaCep(de, para, res) {
        try {
            if (!de){
                return res.status(400).send("Voce precisa enviar o CEP para a origem.")
            }

            if (!para){
                return res.status(400).send("Voce precisa enviar o CEP para o destino.")
            }
          const responseDe = await this.getCEP(de);
          const latDe = responseDe.data.lat;
          const lonDe = responseDe.data.lng;
          const responsePara = await this.getCEP(para);
          const latPara = responsePara.data.lat;
          const lonPara = responsePara.data.lng;
          const distancia = this.calcularDistancia(Number(latDe), Number(lonDe), Number(latPara), Number(lonPara));
    
          if (distancia) {
            return res.status(200).send({
              "distancia": distancia
            })
          } else {
            return res.status(404).send("CEP incorreto.")
          }
        } catch (error) {
            console.log(error)
          return res.status(400).send("Dados incorretos.")
        }
      }

      async getCEP(cep) {
        try {
          const resposta = await axios.get(`${process.env.apiCEP}/${cep}`);
          return resposta;
        } catch (error) {
          return null;
        }
      }

      calcularDistancia(lat1, lon1, lat2, lon2) {
        const distancia = geolib.getDistance(
          { latitude: lat1, longitude: lon1 },
          { latitude: lat2, longitude: lon2 }
        );
        const distanciaEmKm = distancia / 1000;
        return distanciaEmKm;
      }

}
