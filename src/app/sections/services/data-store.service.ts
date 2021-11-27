import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  public getAboutItems() {
    return [
      {
        icon: 'assets/images/about-item-1.png',
        label: 'Digital',
        description: 'Achieve complete digital invoice handling'
      },
      {
        icon: 'assets/images/about-item-2.png',
        label: 'Compliant',
        description: 'Ensure compliance to country regulations'
      },
      {
        icon: 'assets/images/about-item-3.png',
        label: 'Secure',
        description: 'High access and data security'
      },
      {
        icon: 'assets/images/about-item-4.png',
        label: 'Accurate data',
        description: 'Guarantees accurate data on inbound and outbound invoices'
      }
    ]
  }

  public getFeatures() {
    return [
      {
        icon: 'assets/images/feature-item-1.png',
        label: 'Automatically receive and send invoices',
        description: 'Automating invoices results in faster payment period, it helps your business save costs, increase scalability, and achieve the best ROI possible.'
      },
      {
        icon: 'assets/images/feature-item-2.png',
        label: 'Multiple formats supported',
        description: 'Fawateer supports multiple formats and automatically convert information into structured data in specific format'
      },
      {
        icon: 'assets/images/feature-item-3.png',
        label: 'Dynamic QR code',
        description: 'Fawateer system generates e-invoices with QR code that enable consumers to scan in invoices using their mobile phone'
      },
      {
        icon: 'assets/images/feature-item-4.png',
        label: 'Reachability',
        description: 'Fawateer enables to send direct SMS and WhatsApp messages to your customers anywhere for generated invoices, language and content are customizable'
      },
      {
        icon: 'assets/images/feature-item-5.png',
        label: 'Customize your invoices branding',
        description: 'Fawateer allows you to customize your invoices content and branding'
      },
      {
        icon: 'assets/images/feature-item-6.png',
        label: 'Archiving',
        description: 'Fawateer archives the e-invoices and provides the possibility to manage all of your invoices with ease by storing them in one place.'
      },
      {
        icon: 'assets/images/feature-item-7.png',
        label: 'Seamless integration',
        description: 'Fawateer provides a safe and high integration capability with external systems (tax authority system, internal systems ..)'
      },
      {
        icon: 'assets/images/feature-item-8.png',
        label: 'Advanced analytics',
        description: 'Fawateer can help businesses acquire more insights about their invoices providing managers with the capability to make smart, timely, and informed decisions.'
      }
    ]

  }


  public getBenefits() {
    return [
      {
        icon: 'assets/images/benefit-item-1.png',
        description: 'Real-time delivery and processing'
      },
      {
        icon: 'assets/images/benefit-item-2.png',
        description: 'Quick invoice delivery and period closing'
      },
      {
        icon: 'assets/images/benefit-item-3.png',
        description: 'No human errors'
      },
      {
        icon: 'assets/images/benefit-item-4.png',
        description: 'Data exchange quickly and securely'
      },
      {
        icon: 'assets/images/benefit-item-5.png',
        description: 'Reduced invoicing costs'
      },
      {
        icon: 'assets/images/benefit-item-6.png',
        description: 'Environmentally friendly'
      },
      {
        icon: 'assets/images/benefit-item-7.png',
        description: 'Faster processing'
      },
      {
        icon: 'assets/images/benefit-item-8.png',
        description: 'Efficient implementation'
      },
      {
        icon: 'assets/images/benefit-item-9.png',
        description: 'High traceability'
      }
    ]
  }
}
