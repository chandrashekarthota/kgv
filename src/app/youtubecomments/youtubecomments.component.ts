import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtubecomments',
  templateUrl: './youtubecomments.component.html',
  styleUrls: ['./youtubecomments.component.css']
})
export class YoutubecommentsComponent implements OnInit {
  sortedComments:any =[];
  constructor() { 
    
  }

  ngOnInit(): void {
    var comments = [
      {
        "kind": "youtube#commentThread",
        "etag": "1lX8buMwfJMJn-sL1fGJsjinKI4",
        "id": "Ugz0-eFMGoPB8vpsicF4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "XRqG2vbMhj6uOyju9aEICUrHP8M",
            "id": "Ugz0-eFMGoPB8vpsicF4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "I&#39;m here after phani&#39;s review 🤗",
              "textOriginal": "I'm here after phani's review 🤗",
              "authorDisplayName": "Narendra babu",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJzYCYw0j1sDBUDCoMPB0ThGjBi51I7MU4kMHVxW3g=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCuguZHy-EzNTwb9VooNvSJA",
              "authorChannelId": {
                "value": "UCuguZHy-EzNTwb9VooNvSJA"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 1,
              "publishedAt": "2020-10-15T04:55:02Z",
              "updatedAt": "2020-10-15T04:55:02Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "iTvdzYVLk9VnnoI38eAZrXc0QuQ",
        "id": "UgxeOWVmZ5bhMU81YtR4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "2Gzznvbl-B_dwYqY5BAOYm04D1Y",
            "id": "UgxeOWVmZ5bhMU81YtR4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Chala bhaga chepperu  amma ,chustunnte tinali  anipistondhi",
              "textOriginal": "Chala bhaga chepperu  amma ,chustunnte tinali  anipistondhi",
              "authorDisplayName": "sowmya soumi",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJzgS0IfxWlReKbYqyQ-7YpTVFwSjEP2JMrpSyEZZw=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCdOsCnANZzm0PcfTM8x0CVA",
              "authorChannelId": {
                "value": "UCdOsCnANZzm0PcfTM8x0CVA"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 0,
              "publishedAt": "2020-10-15T03:47:59Z",
              "updatedAt": "2020-10-15T03:47:59Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "deomNQTvLKVUTI9cNdryeFVx7CI",
        "id": "Ugw5p1ZaVIyxYRGOoYd4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "pnwW1_Pgo4TaEZx_TCa6ONQYsac",
            "id": "Ugw5p1ZaVIyxYRGOoYd4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Pala mujallu anedi nenu chudaledu vina ledu wow what a wonderful recipe &quot;never defore ever after &quot; take a bow😍😍😍👍👌",
              "textOriginal": "Pala mujallu anedi nenu chudaledu vina ledu wow what a wonderful recipe \"never defore ever after \" take a bow😍😍😍👍👌",
              "authorDisplayName": "SAIRAM VLOGS",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJzyp10qaNhhc5H0XTA_1G9OsZxKxOythJ00A-2WZg=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCaxXyP4xORDI3FkcM7MW19A",
              "authorChannelId": {
                "value": "UCaxXyP4xORDI3FkcM7MW19A"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 2,
              "publishedAt": "2020-10-15T03:09:50Z",
              "updatedAt": "2020-10-15T03:09:50Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "9Hmi84sVwed1lQJvyKeP_kSn9kQ",
        "id": "Ugx7TKY90RY3ZpxXRTh4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "j9WZ_lXEozGEN7rnWbepo9O0Uzg",
            "id": "Ugx7TKY90RY3ZpxXRTh4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "So nice aunty maku baga pakinivastunai Mee vantalu thank you very much",
              "textOriginal": "So nice aunty maku baga pakinivastunai Mee vantalu thank you very much",
              "authorDisplayName": "Legend Gamer",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJx5jlltmPQRf4toaSS3mVakb1dshLPp4uhuGA=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCpxZxrZGx84q3vCezk4iFHg",
              "authorChannelId": {
                "value": "UCpxZxrZGx84q3vCezk4iFHg"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 2,
              "publishedAt": "2020-10-15T02:20:06Z",
              "updatedAt": "2020-10-15T02:20:06Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "jOoqbX9nVpyeRIZENY2LYm94WgI",
        "id": "Ugym8jg4oWyumSBszAV4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "unQoirDmQRHw2iyKF6JD9FIcWRk",
            "id": "Ugym8jg4oWyumSBszAV4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Chaala clear ga cheppyaru <br />Evvaraina try cheyochu <br />Nenu definite ga try chesta🌹🌹🌹",
              "textOriginal": "Chaala clear ga cheppyaru \nEvvaraina try cheyochu \nNenu definite ga try chesta🌹🌹🌹",
              "authorDisplayName": "Nazia kausar Shaik",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJx32QJxB2HP24nvb8Id_5HpLIEUbKtEMP2Lug=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCHrhLpz5tOoviHrIRCwJXkw",
              "authorChannelId": {
                "value": "UCHrhLpz5tOoviHrIRCwJXkw"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 2,
              "publishedAt": "2020-10-14T18:56:37Z",
              "updatedAt": "2020-10-14T18:56:37Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "Sj1KQWMJBR6vqIcb6POL1pAFh_w",
        "id": "UgweASndns4_LOoyqBB4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "QPde4P72AAPykQQv1aoci-EZ2yo",
            "id": "UgweASndns4_LOoyqBB4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Naku chala istamaina vantakam palamunjulu chustunte ventane chesukuni tinali anipistundi mam",
              "textOriginal": "Naku chala istamaina vantakam palamunjulu chustunte ventane chesukuni tinali anipistundi mam",
              "authorDisplayName": "Rupa Rainbow colours",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJyvvjXeBqhjOsveLFAR6TJcuBW9kApYDlZy4PVudg=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCTLD7wn0sHJbPmfRh8OvSmQ",
              "authorChannelId": {
                "value": "UCTLD7wn0sHJbPmfRh8OvSmQ"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T14:47:50Z",
              "updatedAt": "2020-10-14T14:47:50Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "6fiPiuT2jEB-Xgw8HjncPwYfOrw",
        "id": "UgyKZQFJkdY5KjOJ_H94AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "dhLr61VgopeVXV_rLh2ui0X2rjk",
            "id": "UgyKZQFJkdY5KjOJ_H94AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Ma pinni peru kuda kamalamma avida vantalu baga chestharu. Traditional vantalu ante kamalamma",
              "textOriginal": "Ma pinni peru kuda kamalamma avida vantalu baga chestharu. Traditional vantalu ante kamalamma",
              "authorDisplayName": "bharathi koilada",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJyl1ESvMX_kAJkP1vCXhrWBsfBHhqBxHOpfCoVZOQ=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCPM8tA8vb7ENbQlCMafNgCA",
              "authorChannelId": {
                "value": "UCPM8tA8vb7ENbQlCMafNgCA"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T11:58:05Z",
              "updatedAt": "2020-10-14T11:58:05Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "ToHtk8c9QwB7M-GC5DvLgoJf5pI",
        "id": "Ugxvbd6fUVeIxGT6TUl4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "yiyv1IMXLsRrWQNZ2DYnnakFRe8",
            "id": "Ugxvbd6fUVeIxGT6TUl4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Amma Chala Baga undhi amma",
              "textOriginal": "Amma Chala Baga undhi amma",
              "authorDisplayName": "Noor E Afzal Official YouTube channel.",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJyf2_HvykApeLpqSxLhwexzi_f4poalfxZj6qY1aw=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCjORXUWCX-HJBF5ahCUAQWg",
              "authorChannelId": {
                "value": "UCjORXUWCX-HJBF5ahCUAQWg"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T11:46:40Z",
              "updatedAt": "2020-10-14T11:46:40Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "k2UWAgQmQWKJiC8GasvRhOAQ7Hg",
        "id": "UgxqQkX52cTy1Z9JyU14AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "4zOgC5oBRN5sJOgjaS5jr5tHb5A",
            "id": "UgxqQkX52cTy1Z9JyU14AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Kamala gari vantalu thopu దమ్ముంటే aapu",
              "textOriginal": "Kamala gari vantalu thopu దమ్ముంటే aapu",
              "authorDisplayName": "Tallapalli Venkatesh",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJwsirJud27mndmxnR1sU1ita9kFj4_ZAdEduw=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCK6P-Z0rc-6r_FsbtwPfd3Q",
              "authorChannelId": {
                "value": "UCK6P-Z0rc-6r_FsbtwPfd3Q"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 4,
              "publishedAt": "2020-10-14T10:04:53Z",
              "updatedAt": "2020-10-14T10:04:53Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 1,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "6vS6J7bMIIrCKzlPM_LoVZhALEc",
        "id": "Ugx2_lqyv45DxfhyBpd4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "yjGeyySCYmH-agtpp1pwGvOyiNc",
            "id": "Ugx2_lqyv45DxfhyBpd4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Super andi",
              "textOriginal": "Super andi",
              "authorDisplayName": "tej k",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJx12b1GpYr3EIdW2_-SKGxALF9Oi5SlRMCIsA=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCB3GDJU-l8B3I46FybocLMw",
              "authorChannelId": {
                "value": "UCB3GDJU-l8B3I46FybocLMw"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T09:40:24Z",
              "updatedAt": "2020-10-14T09:40:24Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "Cuj5hPyvLCV8q1-Fs-h5ODCQckE",
        "id": "UgxLOysUh2I9mpsRUSR4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "dJcjM0w3Mjrh45ZhsnHALmXnD1U",
            "id": "UgxLOysUh2I9mpsRUSR4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Nenu ila first time chustunna<br />👍👍👍👍👍<br />💐💐💐💐💐",
              "textOriginal": "Nenu ila first time chustunna\n👍👍👍👍👍\n💐💐💐💐💐",
              "authorDisplayName": "Garbham Deepa",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJyuHxv6P7OYYB-_spTaht1766WgfI2yoFkzvJX8=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCd4RbfTj9stStCrvyQAXK9w",
              "authorChannelId": {
                "value": "UCd4RbfTj9stStCrvyQAXK9w"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 4,
              "publishedAt": "2020-10-14T09:37:02Z",
              "updatedAt": "2020-10-14T09:37:30Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "-gmD8e4I_JlMJ6aldYEI2t4bvhg",
        "id": "UgzMfS2-xXBzShv-6D14AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "ntGNvNl2pEWo6LahuZkd0VuHFbA",
            "id": "UgzMfS2-xXBzShv-6D14AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Chala manchugundhi",
              "textOriginal": "Chala manchugundhi",
              "authorDisplayName": "kapil Kanna",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJyyFHOFVpDuQjrgbA98tKylligLrhvhpyzfdA=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UClw0UV1Kiu3VT-H44grnWGg",
              "authorChannelId": {
                "value": "UClw0UV1Kiu3VT-H44grnWGg"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T09:29:11Z",
              "updatedAt": "2020-10-14T09:29:11Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "tR1IYTliYgZ_C-qtJ7iX3NQhgtM",
        "id": "UgzCAvX5Q0U92j2jSxl4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "YxevAvBGpgulwBNKd_fNklI5rpA",
            "id": "UgzCAvX5Q0U92j2jSxl4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Chala baga chepthunnaru andi",
              "textOriginal": "Chala baga chepthunnaru andi",
              "authorDisplayName": "gopikrishna gunda",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJx5BEgD96CQyoW5x8Czwd608uvOKj-zJvJ18A=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCf0IguSvECCxFJn3tUdejsQ",
              "authorChannelId": {
                "value": "UCf0IguSvECCxFJn3tUdejsQ"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T09:20:37Z",
              "updatedAt": "2020-10-14T09:20:37Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "iSA3oCt0Ym0KBQ1ic7ZHjAIZXzI",
        "id": "UgyapuxradlzxMuWUwx4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "LLTaDqIdB-PdhmFiRkKVRcx3g5Y",
            "id": "UgyapuxradlzxMuWUwx4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "superb amma",
              "textOriginal": "superb amma",
              "authorDisplayName": "Sumathi. Devara",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJwnmigfgIZMBOel45eXDO6K9efTRqVYG-pYU4sayA=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCWTTs7j4AXthhZNsAJ5ew0Q",
              "authorChannelId": {
                "value": "UCWTTs7j4AXthhZNsAJ5ew0Q"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T09:11:12Z",
              "updatedAt": "2020-10-14T09:11:12Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "J3KKiwT8invEVYX5PHrPoPtgPsY",
        "id": "UgzK4ndr1ybNbk-OouR4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "LPGRpdIO65tlo3Z3rhTtv8zKuGg",
            "id": "UgzK4ndr1ybNbk-OouR4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "So nice",
              "textOriginal": "So nice",
              "authorDisplayName": "hari teja",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJyOy0i8pGtqIV9ck9Ya7OlRi-9o-1j1L4qzj0vMuQ=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCzFrr_Aa-nQ_fAw2La6pxcQ",
              "authorChannelId": {
                "value": "UCzFrr_Aa-nQ_fAw2La6pxcQ"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T09:02:38Z",
              "updatedAt": "2020-10-14T09:02:38Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "YpVFE7GaSOH0Kc0X7jyKieOJu-o",
        "id": "Ugy-0N-1nj_bzgCHLNF4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "37SauBwWsuKfYDia1q68NFjRGLE",
            "id": "Ugy-0N-1nj_bzgCHLNF4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Chala bagunnai ammaamma garu",
              "textOriginal": "Chala bagunnai ammaamma garu",
              "authorDisplayName": "alekhyamaheswari baji",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJykPnUT0nVfhHozFqHwENyOWmU802_LnUU1Rg=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCxVy2WgOJISsnN7kbstmsGw",
              "authorChannelId": {
                "value": "UCxVy2WgOJISsnN7kbstmsGw"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 3,
              "publishedAt": "2020-10-14T08:46:49Z",
              "updatedAt": "2020-10-14T08:46:49Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "kDt76PJYyZUZYXMajF8Hxu6-Zwc",
        "id": "UgyAclN79u39VMUVInJ4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "df38G50X9otoNLYSQUDRqFrCMus",
            "id": "UgyAclN79u39VMUVInJ4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Chustunte noorutundi 👌",
              "textOriginal": "Chustunte noorutundi 👌",
              "authorDisplayName": "svs t",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJyRvXHrUE-4iR--giRSA_wIcOwRExI38KLoQA=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCE0_wfZugYXTIABnzl7A8lg",
              "authorChannelId": {
                "value": "UCE0_wfZugYXTIABnzl7A8lg"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 2,
              "publishedAt": "2020-10-13T04:32:17Z",
              "updatedAt": "2020-10-13T04:32:17Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "wAihS5aM8bPoJC3yMn96IEmlYY4",
        "id": "UgxQHq24acaHzpzz0lh4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "NaqHivBOdZHdxFTaslWKDBQRcLY",
            "id": "UgxQHq24acaHzpzz0lh4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "పాల ముంజెలు అని వినడమే కానీ ఎప్పుడూ చూళ్ళేదు, తినలేదు.<br />Simple way lo cheppaaru..<br />I will try it.👍",
              "textOriginal": "పాల ముంజెలు అని వినడమే కానీ ఎప్పుడూ చూళ్ళేదు, తినలేదు.\nSimple way lo cheppaaru..\nI will try it.👍",
              "authorDisplayName": "Chalamalacety DURGA BHAVANI",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJw6B4x8nxpk64Zl-ncED1y7N4GMoXukqduFX8SAD-A=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCESRvBlJDhoomssK1FFGm0A",
              "authorChannelId": {
                "value": "UCESRvBlJDhoomssK1FFGm0A"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 1,
              "publishedAt": "2020-10-13T01:08:57Z",
              "updatedAt": "2020-10-13T01:08:57Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "6gHdrzsp07RUmAJk5oQZ7UgY4Rg",
        "id": "Ugx3L4ZU7ltTIVy-dWd4AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "CCnsRpp2KfuJGpDMPCmVZWKckj0",
            "id": "Ugx3L4ZU7ltTIVy-dWd4AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "Munjulu ni English lo &quot;Ice Apple&quot; antaaranta✔<br />Milk Munjulu recipe 👌👌👌👌",
              "textOriginal": "Munjulu ni English lo \"Ice Apple\" antaaranta✔\nMilk Munjulu recipe 👌👌👌👌",
              "authorDisplayName": "Gunduboss001",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJzfeFFADhB8P1VzrRhbcxeymCgIr8TrR1Ej-Q=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCJFsvdSUhJ_bviRqppit6rw",
              "authorChannelId": {
                "value": "UCJFsvdSUhJ_bviRqppit6rw"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 1,
              "publishedAt": "2020-10-12T17:01:36Z",
              "updatedAt": "2020-10-12T17:01:36Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
      {
        "kind": "youtube#commentThread",
        "etag": "o4f1ij_xiteHs3MNinQhral4i4k",
        "id": "UgzF1-xM8opoCEfxXK14AaABAg",
        "snippet": {
          "videoId": "RbLwpk0dkQg",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "w4akN-lmuHMtValT5EcUXif37LU",
            "id": "UgzF1-xM8opoCEfxXK14AaABAg",
            "snippet": {
              "videoId": "RbLwpk0dkQg",
              "textDisplay": "So good ❤️",
              "textOriginal": "So good ❤️",
              "authorDisplayName": "pasam chaitanya",
              "authorProfileImageUrl": "https://yt3.ggpht.com/a/AATXAJzuC8407y7mZbjCiy-OuYO53IS66wkDN28qee515g=s48-c-k-c0xffffffff-no-rj-mo",
              "authorChannelUrl": "http://www.youtube.com/channel/UCdcBKI-1wgCqXys_kKKoQ8Q",
              "authorChannelId": {
                "value": "UCdcBKI-1wgCqXys_kKKoQ8Q"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 1,
              "publishedAt": "2020-10-12T16:49:19Z",
              "updatedAt": "2020-10-12T16:49:19Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      }
    ]

    this.sortedComments = comments.sort(function(b,a){
      return a.snippet.topLevelComment.snippet.likeCount > b.snippet.topLevelComment.snippet.likeCount?1:a.snippet.topLevelComment.snippet.likeCount <b.snippet.topLevelComment.snippet.likeCount?-1:0
    });


  }

  


  

}
