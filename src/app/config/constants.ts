import { Http, Headers, RequestOptions, Response } from '@angular/http';

class Constants {
    //IP SERVER API
    static SERVER_API: string = 'http://www.aprendizajeactivo.espol.edu.ec:80/';

    static jwtCT() {

            let headers = new Headers({'Content-Type': 'application/json'});
            return new RequestOptions({ headers: headers });

    }

    static headers() {
        // create authorization header with jwt token
            let headers = new Headers({ 'Content-Type': 'application/json', 'token': '$0m3-U/1qu3-K3Y'});
            return new RequestOptions({ headers: headers });
        }
    }

Object.seal(Constants);
export { Constants };
