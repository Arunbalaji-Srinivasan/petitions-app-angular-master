import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  showSuccess: boolean;
  private bodyText: string;
  constructor(    public toast: ToastComponent
    ) { }

    ngOnInit(): void {

      this.bodyText = 'This text can be updated in modal 1';
      this.initConfig();
    }

    public payPalConfig?: IPayPalConfig;

 
    private initConfig(): void {
      this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: () => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
          this.toast.setMessage('Payment successfull!!','success');

        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
                this.toast.setMessage('Payment successfull!!','success');

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.toast.setMessage('Payment Cancelled,!!','success');

      },
      onError: err => {
        console.log('OnError', err);
        this.toast.setMessage('Payment Not Successfull, Please try again!!','success');

      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
    }
  
}
