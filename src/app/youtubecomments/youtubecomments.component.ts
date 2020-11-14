import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import _ from "lodash";

@Component({
  selector: 'app-youtubecomments',
  templateUrl: './youtubecomments.component.html',
  styleUrls: ['./youtubecomments.component.css']
})

export class YoutubecommentsComponent implements OnInit {
  sortedComments: any = [];
  APIKey = "AIzaSyDIHKU-1WxkDuuDF9ZaQKdfD8QPZhVXxcQ";
  channelId = "UCTdwo3KQySgWQCAf4BTfBjg";

  videoIds = ["hHqmNehcY9I","n-qlYf9NTBk","i0DDGXJimcA","-tLw3q4JgPM","8Luw327wI2U","7MWZUYWV-Wo","tjkJ45yetTs",
"RbLwpk0dkQg&t=11s","Ndgd3JZMfHU","kToxmmkzoZ4&t=23s","_5RDd4igN-0&t=25s","xyLmdxIqbh0&t=7s"];

  apiUrl = "";
  staticApiUrl = "/assets/youtubecomments.json";
  constructor(private httpClient: HttpClient) { }
  myApiResult: any = [{
    items: []
  }];
  comments = [];
  mergedComments = [];
  winners ={};
  //_ = require('lodash');

  ngOnInit(): void {
    //this.getApiData();
    this.getStaticYoutubeComments();
  }

  getStaticYoutubeComments(){
    this.httpClient.get(this.staticApiUrl).subscribe((pulledData: any[]) => {
      this.comments = [];
      this.myApiResult = pulledData;
      this.comments = this.myApiResult.filter(k => k.snippet.topLevelComment.snippet.likeCount > 2);
      //append next video comments to previous video comments
      this.mergedComments = [...this.mergedComments, ...this.comments];
      //sort comments by likes
      this.sortedComments = this.mergedComments.sort(function (b, a) {
        return a.snippet.topLevelComment.snippet.likeCount > b.snippet.topLevelComment.snippet.likeCount ? 1 : a.snippet.topLevelComment.snippet.likeCount < b.snippet.topLevelComment.snippet.likeCount ? -1 : 0
      });

      var grouped = _.groupBy(this.sortedComments, function(winner) {
        return winner.snippet.topLevelComment.snippet.authorDisplayName;
      });
      
      this.winners = Object.values(grouped);
      //console.log(this.winners);
    });
  }

  getApiData() {
    //if (this.sortedComments.length) {
      for (var i = 0; i < this.videoIds.length; i++) {

        this.apiUrl = "https://www.googleapis.com/youtube/v3/commentThreads?key=" + this.APIKey + "&videoId=" + this.videoIds[i] + "&part=snippet&maxResults=50";

        this.httpClient.get(this.apiUrl).subscribe((pulledData: any[]) => {
          this.comments = [];
          this.myApiResult = pulledData;
          this.comments = this.myApiResult.items.filter(k => k.snippet.topLevelComment.snippet.likeCount > 0);
          //append next video comments to previous video comments
          this.mergedComments = [...this.mergedComments, ...this.comments];
          //sort comments by likes
          this.sortedComments = this.mergedComments.sort(function (b, a) {
            return a.snippet.topLevelComment.snippet.likeCount > b.snippet.topLevelComment.snippet.likeCount ? 1 : a.snippet.topLevelComment.snippet.likeCount < b.snippet.topLevelComment.snippet.likeCount ? -1 : 0
          });
           console.log('merged object');
           console.log(this.sortedComments);
        });
      //}
    }
  }
}
