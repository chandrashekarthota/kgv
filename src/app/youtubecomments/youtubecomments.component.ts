import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-youtubecomments',
  templateUrl: './youtubecomments.component.html',
  styleUrls: ['./youtubecomments.component.css']
})

export class YoutubecommentsComponent implements OnInit {
  sortedComments:any =[];
  APIKey = "AIzaSyCi9PkmxW6enMj1biPJHueF0UmwfiKUHZQ";
    channelId = "UCTdwo3KQySgWQCAf4BTfBjg";
    videoId =  "RbLwpk0dkQg";
    apiUrl = "https://www.googleapis.com/youtube/v3/commentThreads?key=" + this.APIKey+ "&videoId=" + this.videoId +"&part=snippet&maxResults=50";
    
  constructor(private httpClient: HttpClient) { }
    myApiResult: any = [{
      items: []
    }];
    comments =[];
    
  

  ngOnInit(): void {
    this.getApiData();
  }

  
getApiData() {     

      this.httpClient.get(this.apiUrl).subscribe((pulledData: any[]) => {
        this.myApiResult = pulledData;        
        this.comments = this.myApiResult.items.filter(k=>k.snippet.topLevelComment.snippet.likeCount > 1);

        //sort comments by likes
        this.sortedComments = this.comments.sort(function(b,a){
          return a.snippet.topLevelComment.snippet.likeCount > b.snippet.topLevelComment.snippet.likeCount?1:a.snippet.topLevelComment.snippet.likeCount <b.snippet.topLevelComment.snippet.likeCount?-1:0
        });
    
      });
    }  

}
