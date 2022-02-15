import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


const result = {
  paymentAddress: "addr1qye6q2kx0xpxsluy8n5vl9dggglp509lxwu5ld7980deqr3uep0d0y7svz4y76tn3uvvpjxmqraexv8lmv5nj0zmv3ys028q6y",
  identifier: "Cute Creatures",
  maxNftsPerTx: 3,
  adaPricePerUnit: 48,
  nftsTotalInSale: 8888,
  nftsLeftCount: 8486,
  nftsBoughtCount: 402,
  nftsMintedCount: 402,
  hasDiscount: false
}

@Component({
  selector: 'mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.css']
})
export class MintComponent implements OnInit {

  counterText = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://api.nft-craze.art/v1/project/Cute%20Creatures").subscribe(r=>{
      console.log(r);
        })

    this.counterText = result.nftsLeftCount + " out of " + result.nftsTotalInSale + " available";
  }

}
