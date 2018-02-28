import {Injectable} from '@angular/core';
import {Response, Headers, Http, HttpModule, RequestOptions} from '@angular/http';
import { HttpParams} from '@angular/common/http';

@Injectable()
export class ServiceTest {

    data: any;

    constructor(private http_: Http) { }

    email: any;
    batch: any;
    expiry: any;

    ngOnInit() { }

    submit(email: string, batch: string, expiry: string, mailOption: any, tokenStr: string) {

        // let url = 'https://pcf-enablement-vain-indignation.app.dev.digifabricpcf.com/creatingUser';
         let url = 'http://localhost:8080/creatingUser';
        // let url = 'https://sample2.apps.cumuluslabs.io/creatingUser';

         url = url + '/' + email + '/' + batch + '/' + expiry + '/' + mailOption;

        const token = window.btoa(tokenStr);
        const headers = new Headers({ 'Content-Type': 'application/json' ,
                                        'Authorization': 'Basic ' + token
                                    });
        const options = new RequestOptions({ headers: headers });
        this.http_.get(url, options)
        .subscribe(data => {
            this.data = data.text();
            alert(this.data);
        });
        return this.data;
    }
}
