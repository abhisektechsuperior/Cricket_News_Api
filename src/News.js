import React,{Component} from 'react'
import Newsitem from './Newsitem'

export class News  extends Component{
    articles = [
        {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": null,
            "title": "Heath Streak: Former Zimbabwe captain & coach dies aged 49",
            "description": "Former Zimbabwe captain and coach Heath Streak, who had been suffering from colon cancer, dies at the age of 49.",
            "url": "https://www.bbc.co.uk/sport/cricket/66693655",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3F77/production/_130974261_gettyimages-927831784.jpg",
            "publishedAt": "2023-09-03T09:12:56Z",
            "content": "Heath Streak had been receiving treatment at a hospital in Johannesburg, South Africa\r\nFormer Zimbabwe captain and coach Heath Streak, who had been suffering from colon cancer, has died at the age of… [+1746 chars]"
            
        },
        {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Mukesh Ambani succession plan: The new generation taking over from Asia’s richest man",
            "description": "Mukesh Ambani, who heads India's biggest business empire, is preparing to hand over the reins to his children.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-66643831",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14114/production/_126769128_reliance.jpg",
            "publishedAt": "2023-09-02T23:37:05Z",
            "content": "For months, the world has been captivated by the last season of Succession, the Emmy-winning TV drama on the lives of the corporate élite. \r\nBut in India, a real-life succession plan, involving a for… [+6960 chars]"
        },
        {
            "source": {
              "id": null,
              "name": "Android Authority"
            },
            "author": "C. Scott Brown",
            "title": "Cricket now offers the ability to pay for multiple months and earn big discounts",
            "description": "If you have the money to pay for a few months in advance, Cricket Wireless will now offer you substantial discounts.",
            "url": "https://www.androidauthority.com/cricket-wireless-pay-in-advance-3358140/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2020/08/Cricket-Wireless-stock-photo-1-e1627508745504.jpg",
            "publishedAt": "2023-08-25T14:55:54Z",
            "content": "<ul><li>Cricket Wireless now offers discounts for individual subscribers who pay months in advance.</li><li>Depending on how far ahead you pay, you can earn up to $300 off your yearly charges.</li><l… [+1387 chars]"
        },
        {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": null,
            "title": "Cricket Australia makes neck protectors compulsory",
            "description": "Cricket Australia brings in new rules which will require batters to wear neck protectors on their helmets when facing fast or medium bowling.",
            "url": "https://www.bbc.co.uk/sport/cricket/66805723",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E89C/production/_131084595_gettyimages-1171931485.jpg",
            "publishedAt": "2023-09-14T07:00:55Z",
            "content": "Australia batter Steve Smith says neck protectors make him feel \"claustrophobic'\r\nCricket Australia has made it mandatory for batters to wear neck protectors on their helmets when facing fast or medi… [+1505 chars]"
        },
        {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "Brendan Griffiths",
            "title": "Where to watch free Champions League live streams from anywhere",
            "description": "Free Champions League live streams are back this season for multiple matches if you know where to look. We've found some very affordable options if you insist on seeing every game too.",
            "url": "https://www.businessinsider.com/guides/streaming/where-to-watch-champions-league-live-streams-free",
            "urlToImage": "https://i.insider.com/6509a1ef12dc4f001a165110?width=1200&format=jpeg",
            "publishedAt": "2023-09-19T15:01:38Z",
            "content": "When you buy through our links, Insider may earn an affiliate commission. Learn more\r\nFinding out where to watch a Champions League live stream can change quite often depending on where you live, but… [+9322 chars]"
        },
        {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": null,
            "title": "Sri Lanka win 'best thing for women's cricket'",
            "description": "Tammy Beaumont says England's T20 series defeat to Sri Lanka was the \"best thing for the women's game\" as they prepare to face each other in a three-game one-day international series.",
            "url": "https://www.bbc.co.uk/sport/cricket/66755335",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13D15/production/_131037118_gettyimages-1537641454.jpg",
            "publishedAt": "2023-09-08T15:38:51Z",
            "content": "<table><tr><th>England v Sri Lanka - three-match ODI series</th></tr>\r\n<tr><td>Dates: 9-14 September</td></tr><tr><td>Coverage: Highlights on BBC Two and BBC iPlayer. Ball-by-ball commentary on all t… [+2087 chars]"
        },
        {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": null,
            "title": "Fit-again Rahul makes India World Cup squad",
            "description": "Wicketkeeper KL Rahul is named in India's Cricket World Cup squad, having not played for four months.",
            "url": "https://www.bbc.co.uk/sport/cricket/66719753",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15BC5/production/_130992098_gettyimages-1251847136.jpg",
            "publishedAt": "2023-09-05T12:53:14Z",
            "content": "Rahul's IPL campaign with the Lucknow Super Giants was cut short by injury\r\nWicketkeeper KL Rahul has been named in India's Cricket World Cup squad, having been out of action for four months.\r\nThe 31… [+1480 chars]"
        },
        {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Australia names injured quartet in experienced Cricket World Cup squad",
            "description": "Australian selectors have named an experienced Cricket World Cup squad leaning towards pace bowlers and all-rounders.",
            "url": "https://www.aljazeera.com/sports/2023/9/6/australia-names-injured-quartet-in-experienced-cricket-world-cup-squad",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-07-09T094216Z_526835632_UP1EJ790QYE0I_RTRMADP_3_CRICKET-TEST-ENG-AUS-1693993453.jpg?resize=1200%2C675",
            "publishedAt": "2023-09-06T10:57:51Z",
            "content": "Cricket Australia has named the injured quartet of Pat Cummins, Steve Smith, Glenn Maxwell and Mitchell Starc in a provisional 15-man squad for next months 50-over Cricket World Cup in India.\r\nCaptai… [+2212 chars]"
        },
        {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Heath Streak, former Zimbabwe cricket captain, dies aged 49",
            "description": "Zimbabwe's all-time leading wicket-taker died on Sunday morning after a battle with cancer.",
            "url": "https://www.aljazeera.com/sports/2023/9/3/heath-streak-former-zimbabwe-cricket-captain-dies-aged-49",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/afp.com-20030208-PH-PAR-APP2003020828558-highres-1693739430.jpg?resize=1920%2C1379",
            "publishedAt": "2023-09-03T11:49:31Z",
            "content": "Heath Streak, former Zimbabwe captain and the nations all-time leading wicket-taker, has died at the age of 49 after battling liver and colon cancer.\r\nIn the early hours of this morning, Sunday, 3 Se… [+3763 chars]"
        },  
        {
            "source": {
              "id": "bbc-news",
              "name": "BBC News"
            },
            "author": null,
            "title": "ECB invests £2m to encourage diversity",
            "description": "The England and Wales Cricket Board aims to increase participation from ethnically diverse communities, state schools and people with disabilities.",
            "url": "https://www.bbc.co.uk/sport/cricket/66797402",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14B55/production/_130212848_cricket.jpg",
            "publishedAt": "2023-09-13T12:53:06Z",
            "content": "Racism, sexism, classism and elitism widespread in cricket - report chair Cindy Butts\r\nThe England and Wales Cricket Board will invest £2m in programmes designed to encourage participation from ethni… [+1851 chars]"
          },
          {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Abid Hussain",
            "title": "‘Indian hostility’ looms over Asia Cup’s stripped-back hosts Pakistan",
            "description": "Pakistan gets set to host just four of 13 matches of the regional cricket tournament after India's refusal to tour.",
            "url": "https://www.aljazeera.com/sports/2023/8/29/cricket-pakistan-asia-cup-2023-hosts-india",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/AP22296405469137-1693310448.jpg?resize=1920%2C1440",
            "publishedAt": "2023-08-29T12:41:01Z",
            "content": "Islamabad, Pakistan When Pakistan last hosted the Asia Cup in 2008, Imran Khan was a political novice, Narendra Modi was still banned from travelling to the United States, Indias cricket team was mak… [+6482 chars]"
        },
        {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Abid Hussain",
            "title": "How the six teams stack up at the Asia Cup cricket tournament",
            "description": "Pakistan will take on Nepal in the tournament opener in Multan on Wednesday.",
            "url": "https://www.aljazeera.com/sports/2023/8/30/how-the-six-teams-stack-up-at-the-asia-cup-cricket-tournament",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/2022-09-11T185506Z_205166399_UP1EI9B1GJTC8_RTRMADP_3_CRICKET-ASIACUP-1693340242.jpg?resize=1920%2C1440",
            "publishedAt": "2023-08-30T05:29:14Z",
            "content": "Islamabad, Pakistan Hosts Pakistan kick off the Asia Cup, taking on tournament debutants Nepal at the Multan Cricket Stadium on August 30 as Asias biggest cricket nations fine-tune their preparations… [+5122 chars]"
        },       
        {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Williamson and Boult to lead New Zealand’s Cricket World Cup squad",
            "description": "Opener Finn Allen and fast bowler Adam Milne miss out on the squad for the ODI World Cup in India.",
            "url": "https://www.aljazeera.com/sports/2023/9/11/williamson-and-boult-to-lead-new-zealands-cricket-world-cup-squad",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/AP23013539120263-1694435592.jpg?resize=1920%2C1440",
            "publishedAt": "2023-09-11T12:37:07Z",
            "content": "Kane Williamson will lead New Zealand at next months one-day Cricket World Cup and Trent Boult will spearhead the pace attack but opener Finn Allen and fast bowler Adam Milne have missed out on the s… [+2359 chars]"
          },
          {
            "source": {
              "id": "al-jazeera-english",
              "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Pakistan name ICC Cricket World Cup squad, injured pacer Naseem Shah out",
            "description": "Pakistan to play without key fast bowler Shah, who has been replaced by Hasan Ali in the 15-member World Cup squad.",
            "url": "https://www.aljazeera.com/news/2023/9/22/pakistan-name-icc-cricket-world-cup-squad-injured-pacer-naseem-shah-out",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/AP23245433234074-1695375846.jpg?resize=1920%2C1440",
            "publishedAt": "2023-09-22T11:37:29Z",
            "content": "The Pakistan Cricket Board has announced its 15-member team for the 2023 ICC Mens Cricket World Cup, confirming that an injured Naseem Shah will be on a lengthy layoff.\r\nThe tournament is set to begi… [+3453 chars]"
        },
        {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Editorial",
            "title": "Express View on India’s Asia Cup win: Raising the game",
            "description": "Victory provides space to India's cricket managers to do a rethink. There is no scope for complacency",
            "url": "https://indianexpress.com/article/opinion/editorials/express-view-on-indias-asia-cup-win-raising-the-game-8945868/",
            "urlToImage": "https://images.indianexpress.com/2023/09/express-view-20.jpg",
            "publishedAt": "2023-09-19T02:03:41Z",
            "content": "At the end of the victorious campaign at Asia Cup whose importance to this Indian team cant be understated, came a revealing soundbite from captain Rohit Sharma. He talked about the potential of R As… [+1656 chars]"
        },                                                                            
              
        
      ]
    constructor(){
        super();
        console.log("hello  I am a constructor")
        this.state={
articles: this.articles,
loading:false
        }
    }
    render(){
  return (
    <div className='container my-5'>
         <div className='row'>
        {this.state.articles.map((element)=>{
            return(      
                <div className='col-md-4'key={element.url} >
                <Newsitem title={element.title.slice(0,40)} description={element.description.slice(0,88)} imageUrl={element.urlToImage}
                newsUrl={element.url}/>
                </div>
              
            )

        })}
          </div>
       
        
    </div>
  )
}
}

export default News