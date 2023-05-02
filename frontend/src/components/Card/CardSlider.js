import React from 'react'
import Card from './Card.js'
import { useState ,useEffect,useRef} from 'react'

import "./Card.css"
import {memo} from "react";
import 'bootstrap/dist/css/bootstrap.css'



const CardSlider = (props) => {
      const listRef=useRef();




    let articles=[
      {"source":{"id":null,"name":"Yahoo Entertainment"},"author":"Yahoo Sports Staff","title":"NFL free agency 2023 tracker: Jimmy Garoppolo reportedly joining Raiders - Yahoo Sports","description":"Follow the NFL's annual signing and negotiating bonanza right here with Yahoo Sports.","url":"https://sports.yahoo.com/nfl-free-agency-2023-tracker-raiders-jakobi-meyers-set-wr-market-144215468.html","urlToImage":"https://s.yimg.com/ny/api/res/1.2/7_5FmVGc7ZQi4Vd4iJAydw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/db747cc0-c275-11ed-b1be-5b4722b1d28a","publishedAt":"2023-03-14T14:34:42Z","content":"Javon Hargrave helped the 49ers' defensive line level up on Day 1 of NFL free agency's legal tampering period. (Photo by Mitchell Leff/Getty Images)\r\nNFL free agency 2023 is upon us!\r\nThe legal tampe… [+2075 chars]"},{"source":{"id":null,"name":"Variety"},"author":"Todd Spangler","title":"Meta to Lay Off 10,000 More Employees, Mark Zuckerberg Says - Variety","description":"Meta, parent company of Facebook and Instagram, is pink-slipping another 10,000 employees, coming on the heels of laying off 11,000 last fall. Mark Zuckerberg, Meta’s co-founder and CEO, anno…","url":"https://variety.com/2023/digital/news/meta-layoffs-10000-more-employees-mark-zuckerberg-1235553578/","urlToImage":"https://variety.com/wp-content/uploads/2022/07/Meta-CEO-Mark-Zuckerberg.jpg?w=1000&h=563&crop=1","publishedAt":"2023-03-14T14:15:38Z","content":"Meta, parent company of Facebook and Instagram, is pink-slipping another 10,000 employees, coming on the heels of laying off 11,000 last fall.\r\nMark Zuckerberg, Meta’s co-founder and CEO, announced t… [+15081 chars]"},{"source":{"id":null,"name":"ESPN"},"author":null,"title":"Sources - Raiders add WR Jakobi Meyers on 3-year deal - ESPN","description":"Receiver Jakobi Meyers has agreed to a three-year contract with the Las Vegas Raiders worth $33 million, including $21 million guaranteed, sources told ESPN's Adam Schefter.","url":"https://www.espn.com/nfl/story/_/id/35857215/sources-raiders-add-wr-jakobi-meyers-3-year-deal","urlToImage":"https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1011%2Fr1074318_1296x729_16%2D9.jpg","publishedAt":"2023-03-14T14:10:05Z","content":"New England Patriots free agent wide receiver Jakobi Meyers has agreed to a three-year contract with the Las Vegas Raiders worth $33 million, including $21 million guaranteed, sources told ESPN's Ada… [+1534 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"Jordan Novet","title":"Google pushes further into generative A.I. with tool that creates text for Gmail and Docs - CNBC","description":"Google has started testing features to create text with artificial intelligence in its Gmail and Google Docs applications.","url":"https://www.cnbc.com/2023/03/14/google-starts-testing-generative-ai-in-gmail-docs-coming-to-sheets.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107207969-1678749021326-gettyimages-1135937165-GOOGLE_CLOUD_CONFERENCE.jpeg?v=1678798801&w=1920&h=1080","publishedAt":"2023-03-14T13:00:01Z","content":"Google is deepening its push into generative artificial intelligence, introducing features Tuesday that will let users create text in Gmail and Docs using the company's AI technology.\r\nThe company is… [+2869 chars]"},{"source":{"id":"the-verge","name":"The Verge"},"author":"Charles Pulliam-Moore","title":"Bayonetta Origins: Cereza and the Lost Demon is a gorgeous and gimmicky breath of fresh air - The Verge","description":"Bayonetta Origins: Cereza and the Lost Demon — out March 17th — is a beautiful new spin on PlatinumGames’ iconic Umbra Witch that plays more like an interactive storybook than a game.","url":"https://www.theverge.com/23638545/bayonetta-origins-cereza-and-the-lost-demon-review-nintendo-switch","urlToImage":"https://cdn.vox-cdn.com/thumbor/H3N0fiIfNpJ7LcEdZWif8a0L2nQ=/0x0:1920x1080/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24505010/Game_Page_Featured_Bayonetta_Origins_Cereza_and_the_Lost_Demon_Inits.jpeg","publishedAt":"2023-03-14T13:00:00Z","content":"PlatinumGames new Bayonetta prequel for the Nintendo Switch is a breezy change of pace for the series that exceeds by keeping combat simple and satisfying.\r\nByCharles Pulliam-Moore\r\nMar 14, 2023, 1:0… [+6001 chars]"},{"source":{"id":null,"name":"CBS Sports"},"author":"","title":"2023 NCAA Tournament bracket predictions: March Madness expert picks, winners, upsets, favorites to win - CBS Sports","description":"Our experts have filled out their brackets, so check who they predict will be cutting down the nets before you fill out yours","url":"https://www.cbssports.com/college-basketball/news/2023-ncaa-tournament-bracket-predictions-march-madness-expert-picks-winners-upsets-favorites-to-win/","urlToImage":"https://sportshub.cbsistatic.com/i/r/2023/03/11/8a8c4403-43fb-441f-9da6-170661e50b16/thumbnail/1200x675/cd1673c46b46fe57da9c26eeaf779ec6/march-madness-basketball-stand-2022-g.png","publishedAt":"2023-03-14T13:00:00Z","content":"The college basketball season began with more than 350 teams eligible to compete in the 2023 NCAA Tournament. On Sunday, the field of contenders shrunk to 68 as the Division I Men's Basketball Commit… [+4162 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"Alex Harring, Sarah Min","title":"Dow futures gain nearly 200 points after in-line inflation report, bank stock rebound: Live updates - CNBC","description":"Investors pushed up bank stocks while watching the latest inflation data","url":"https://www.cnbc.com/2023/03/13/stock-market-today-live-updates.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107138894-Traders-TF-Photo-202201021-ACJ-086-PRESS-4.jpg?v=1678745827&w=1920&h=1080","publishedAt":"2023-03-14T12:43:00Z","content":"February's index of small business optimism came in ahead of expectations and marked an improvement from last month, but still showed less optimism among business owners than seen historically, accor… [+1407 chars]"},{"source":{"id":"usa-today","name":"USA Today"},"author":"David Jackson","title":"Donald Trump: 'In many ways' you could blame Jan. 6 violence on .... Mike Pence - USA TODAY","description":"Trump responded to Pence's statement that history would hold the former president accountable for the insurrection of Jan. 6, 2021.","url":"https://www.usatoday.com/story/news/politics/2023/03/14/donald-trump-mike-pence-jan-6-blame/11469303002/","urlToImage":"https://www.gannett-cdn.com/presto/2022/11/11/USAT/3202dbbd-b3cf-44e8-b989-437516ae27a3-AFP_AFP_8R98LG.jpg?crop=3999,2250,x0,y0&width=3200&height=1801&format=pjpg&auto=webp","publishedAt":"2023-03-14T12:42:43Z","content":"WASHINGTON  Donald Trump further widened the breach with former Vice President Mike Pence by faulting him for the violence of Jan. 6, 2021   because he refused a potentially illegal demand that he ov… [+2954 chars]"},{"source":{"id":null,"name":"Fox Business"},"author":"Megan Henney","title":"Inflation rose 0.4% in February as prices remain stubbornly high - Fox Business","description":"Inflation rose in line with expectations in February as price pressures in the economy remain uncomfortably high, according to CPI data released Tuesday.","url":"https://www.foxbusiness.com/economy/inflation-rose-february-prices-remain-stubbornly-high","urlToImage":"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/03/0/0/grocery-store-nyc-inflation.jpg?ve=1&tl=1","publishedAt":"2023-03-14T12:41:27Z","content":"Inflation remained uncomfortably high in February, although it has cooled slightly from a peak notched in 2022.\r\nThe Labor Department said Tuesday that the consumer price index, a broad measure of th… [+4750 chars]"},{"source":{"id":null,"name":"Yahoo Entertainment"},"author":"Reuters","title":"Asset management firm Baron Capital bought Charles Schwab shares, CNBC reports - Yahoo Finance","description":"The 79-year-old founder of Baron Capital didn't disclose how much he purchased, according to the report.  On Monday, the Texas-based Charles Schwab reported ...","url":"https://finance.yahoo.com/news/asset-management-firm-baron-capital-124037422.html","urlToImage":"https://media.zenfs.com/en/reuters-finance.com/282154121a5751dc07f34be288dbbe24","publishedAt":"2023-03-14T12:40:37Z","content":"(Reuters) - Billionaire investor Ron Baron said he \"modestly increased\" his position in Charles Schwab, CNBC reported on Tuesday, aiming to buy a dip in its shares amid a meltdown in financial stocks… [+862 chars]"},{"source":{"id":null,"name":"Page Six"},"author":"Riley Cardoza","title":"Jason Kennedy praises Ashley Graham for handling Hugh Grant's Oscars 'nonsense' - Page Six","description":"The entertainment journalist threw shade at the English actor, writing, “Now you see why Hugh Grant isn’t one of our favorites to interview live.”","url":"https://pagesix.com/2023/03/14/jason-kennedy-ashley-graham-handled-hugh-grants-oscars-nonsense/","urlToImage":"https://pagesix.com/wp-content/uploads/sites/3/2023/03/jason-kennedy-ashley-graham-hugh-grant-67.jpg?quality=75&strip=all&w=1200","publishedAt":"2023-03-14T11:34:00Z","content":"Ashley Graham has Jason Kennedy’s stamp of approval after her awkward Hugh Grant interview on the Oscars 2023 red carpet.\r\n“Dont worry @ashleygraham now you see why Hugh Grant isnt one of our favorit… [+2592 chars]"},{"source":{"id":"fox-news","name":"Fox News"},"author":"Brandon Gillespie","title":"Manchin aligns with GOP on Biden oil drilling project, defends record on energy production as Dems fret - Fox News","description":"Democrat West Virginia Sen. Joe Manchin aligned himself with Republicans in support of President Biden's decision to reapprove a massive oil drilling project in Alaska.","url":"https://www.foxnews.com/politics/manchin-aligns-gop-biden-oil-drilling-project-defends-record-energy-production-democrats-fret","urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2022/11/Joe-Manchin.jpg","publishedAt":"2023-03-14T11:00:00Z","content":"Democrat West Virginia Sen. Joe Manchin joined his Republican colleagues Monday in support of President Joe Biden's decision to approve a massive oil drilling project in Alaska, despite a number of h… [+3485 chars]"},{"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"North Carolina's top court to hear redistricting case with national implications - Reuters","description":"The new conservative majority on North Carolina's top court will consider on Tuesday whether to overturn the court's decision last year outlawing partisan redistricting, a move that would boost Republicans ahead of the 2024 congressional elections.","url":"https://www.reuters.com/legal/north-carolinas-top-court-hear-redistricting-case-with-national-implications-2023-03-14/","urlToImage":"https://www.reuters.com/resizer/UF4jJiWFjl_goY70nftsI8MN3Z4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZPZCVJVWVZIVDHS4FFQARA3MLI.jpg","publishedAt":"2023-03-14T10:34:00Z","content":"March 14 (Reuters) - The new conservative majority on North Carolina's top court will consider on Tuesday whether to overturn the court's decision last year outlawing partisan redistricting, a move t… [+3263 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"This Hollywood Star \"Literally Gasped\" When Natasha Poonawalla Passed By At Vanity Fair Party - NDTV Movies","description":"For the event, Natasha Poonawalla stepped out in a Jean Paul Gaultier ensemble in bright gold","url":"https://www.ndtv.com/entertainment/on-natasha-poonawalla-s-oscar-after-party-look-ariana-debose-said-this-3859267","urlToImage":"https://c.ndtvimg.com/2023-03/g09cjdp8_natasha-_625x300_14_March_23.jpg","publishedAt":"2023-03-14T10:08:00Z","content":"Natasha Poonawalla shared this image. (courtesy: natasha.poonawalla)\r\nNatasha Poonawalla has become synonymous with iconic red-carpet looks that manage to impress fashion connoisseurs across the worl… [+1985 chars]"},{"source":{"id":null,"name":"Daily Beast"},"author":"Sam Skove","title":"Huliapole in Southern Ukraine Braces for 'Decisive' Counteroffensive on Russian Forces - The Daily Beast","description":"The next onslaught could very well be this town’s do-or-die moment.","url":"https://www.thedailybeast.com/huliapole-in-southern-ukraine-braces-for-decisive-counteroffensive-on-russian-forces","urlToImage":"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1678760356/041423-skove-ukrainer-hero_dr7u8i","publishedAt":"2023-03-14T09:41:02Z","content":"HULIAIPOLE, UkraineThe lightning crack of shellfire has long replaced the hum of traffic on the streets of Huliaipole, a historic farming city on Ukraines front line.\r\nOn a February morning blanketed… [+6645 chars]"},{"source":{"id":null,"name":"The Weather Channel"},"author":"The Weather Channel","title":"Nor'easter Brings Heavy Snow, High Winds To East - The Weather Channel","description":"Here's our latest forecast for who will see heavy snowfall, rain, high winds and coastal flooding. - Articles from The Weather Channel | weather.com","url":"https://weather.com/storms/winter/news/2023-03-13-noreaster-forecast-winter-storm-sage-northeast-winter-storm","urlToImage":"https://s.w-x.co/sagetueam.jpg","publishedAt":"2023-03-14T09:31:17Z","content":"At a Glance\r\n<ul><li>A nor'easter will continue to impact the East Coast through Wednesday.</li><li>Damaging winds, heavy snow and rain are expected.</li><li>Coastal flooding is also a threat at high… [+4718 chars]"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"Rachel Pannett","title":"Biden reveals that he'll deliver a eulogy for Jimmy Carter - The Washington Post","description":"President Biden said he had recently spent time with the former president — who is in home hospice care — and was asked to deliver a eulogy.","url":"https://www.washingtonpost.com/politics/2023/03/14/president-biden-jimmy-carter-eulogy/","urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/74PF6CFM7YI6XAWBRFVMVFK3XE.jpg&w=1440","publishedAt":"2023-03-14T09:02:00Z","content":"Comment on this story\r\nPresident Biden inadvertently revealed that he has been asked by former president Jimmy Carter, who entered home hospice care last month, to deliver a eulogy.\r\nSpeaking at a fu… [+1684 chars]"},{"source":{"id":null,"name":"SciTechDaily"},"author":null,"title":"NASA, DOE Telescope on Far Side of the Moon Will Reveal the Dark Ages of the Universe - SciTechDaily","description":"NASA and the Department of Energy (DOE) are working together to develop a science instrument that will survive the harsh and unforgiving environment of the lunar surface at night on the far side of the Moon to attempt first-of-its-kind measurements of the Dar…","url":"https://scitechdaily.com/nasa-doe-telescope-on-far-side-of-the-moon-will-reveal-the-dark-ages-of-the-universe/","urlToImage":"https://scitechdaily.com/images/Commercial-Lunar-Lander.jpg","publishedAt":"2023-03-14T08:23:11Z","content":"ByNASAMarch 14, 2023\r\nNASA and the Department of Energy are collaborating to create an instrument called the Lunar Surface Electromagnetics Experiment Night (LuSEE-Night), which can withstand the har… [+7803 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Jeremy Diamond, Kevin Liptak","title":"China looms large as Biden makes submarine moves with UK, Australia - CNN","description":"President Joe Biden was flanked on Monday by a 377-foot submarine -- the USS Missouri -- as he announced an accelerated timeline for Australia to receive its own nuclear-powered submarines early next decade.","url":"https://www.cnn.com/2023/03/13/politics/joe-biden-aukus-china/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230313105549-01-joe-biden-030923.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-03-14T07:18:00Z","content":"President Joe Biden was flanked on Monday by a 377-foot submarine the USS Missouri as he announced an accelerated timeline for Australia to receive its own nuclear-powered submarines early next decad… [+9144 chars]"},{"source":{"id":null,"name":"Euronews"},"author":null,"title":"War in Ukraine: Intense fighting in Bakhmut as Finland considers sending fighter jets to Kyiv - Euronews","description":"Intense fighting continues in the Eastern Ukrainian city of Bakhmut as Moscow agrees to a 60-day grain deal extension.","url":"https://www.euronews.com/2023/03/14/war-in-ukraine-intense-fighting-in-bakhmut-as-finland-considers-sending-fighter-jets-to-ky","urlToImage":"https://static.euronews.com/articles/stories/07/46/25/82/1000x563_cmsv2_01356052-a86a-5762-8fed-414c8327b509-7462582.jpg","publishedAt":"2023-03-14T06:47:35Z","content":"Intense fighting continued for the centre of the eastern Ukrainian city of Bakhmut, the site of the longest and bloodiest battle since the start of Russias full-scale invasion.\r\n\"Assault detachments … [+2020 chars]"}
    ]
    const [state,setState]=useState(articles);
    const [page,setPage]=useState(1);
    const [totalResults,setTotalResults]=useState(0);
   
    const fetchAPI=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=ea63f8cfa94e4498804d48d3ab4302b9&page=1&pageSize=${props.pageSize}`;
      const data=  await fetch(url);
      const parsedData= await data.json();
      setState(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      }
    
    

    useEffect(() => {
     
      fetchAPI()
      },[])

      const handleNextClick=async()=>{
        console.log('next');
        if(page+1>Math.ceil(totalResults/props.pageSize))
        {

        }
        else{
          let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=ea63f8cfa94e4498804d48d3ab4302b9&page=${page+1}&pageSize=${props.pageSize}`;
          let data=  await fetch(url);
          let parsedData=await data.json();
          setState(parsedData.articles)
          setPage(page+1);
        }
       

      }

      const handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=ea63f8cfa94e4498804d48d3ab4302b9&page=${page-1}&pageSize=${props.pageSize}`;
        let data=  await fetch(url);
        let parsedData=await data.json();
        setState(parsedData.articles)
        setPage(page-1);

      }
      
     
      

  return (
   <>
    
    <div className="abc">
      <h2><b>Recent Articles</b></h2>
      <div className="wrpper">
       
        <div className="flex slider" ref={listRef}>
      {state.map((element)=>{
            return <div className="news-crd" key={element.url}>
            <Card  title={element.title?element.title.slice(0,75):""} description={element.description?element.description.slice(0,100):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div> 
            
           })}
          <div className="container d-flex justify-content-between">
            <button disabled={page<=1} className="btn btn-dark w-5" onClick={handlePrevClick}>&larr; Go Back</button>
          <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} className="btn btn-dark w-5" onClick={handleNextClick}>Load More &rarr;</button>
          </div>
           
            </div>
           
           

      </div>
   
     
        
        
    </div>
    </>
  )
}

export default memo(CardSlider)