import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-thismonth',
  templateUrl: './thismonth.component.html',
  styleUrls: ['./thismonth.component.css']
})
export class ThismonthComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  myApiResult: any = [{
    feed: {
      entry:[]
    }
  }];
  thisMonth =[];
  apiUrl = "https://spreadsheets.google.com/feeds/list/1u0hRHBNw8FteRdz88gsQy7rWs-RNh91wQfuYfl6Acno/od6/public/values?alt=json";
  ngOnInit(): void {

    this.getApiData();
  }

  getApiData() {
    this.httpClient.get(this.apiUrl).subscribe((pulledData: any[]) => {
      this.myApiResult = pulledData;
      console.log(this.myApiResult);
      this.thisMonth = this.myApiResult.feed.entry;
    });

}
}
