import React from 'react';


let metadata = {
  id: "2017-12-17-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "17.12.2017",
  language: "en",
  title: "Traction",
  subtitle: "\"MOST STARTUPS DON'T FAIL BECAUSE THEY CAN'T BUILD THE PRODUCT. MOST STARTUPS FAIL BECAUSE THEY CAN'T GET TRACTION.\"",
  abstract: "This is a digest of 2013 book by the creator of DuckDuckGo search engine Gabriel Weinberg and business writer Justin Mares.\n" +
  "In this book they explain how vital for an aspiring entrepreneur is to create customer/media awareness of their product\n" +
  "and give practical advices and examples of how this can be achieved.",
  cover: "http://t0.gstatic.com/images?q=tbn:ANd9GcRrs7XfZqihvWX-CCmLKp8R9Q0zncirJmWTOEVpa9oEFYQRXphz",
  categories: ["business", "programming", "people"],
  time_to_read: 30,
  views: "",
  comments: [],
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = metadata;
  }

  componentDidMount() {
    if (this.props.onload) this.props.onload(this.state);
  }

  render() {
    return (
      <div>
        <h3>Preface</h3>
        <p>
          Authors of the book are 2 people:<br />
          <b>Justin Mares</b> founded 2 startups, formerly director of revenue at Exceptional, acquired by Rackspace.<br />
          <b>Gabriel Weinberg</b> sold his first start-up for multiple million dollars in 2006 at the age of 27.
        </p>
        <p>
          After that Gabriel started writing DuckDuckGo alone, staying in his new house with his wife and released it in the fall of 2008.
          He posted it on HackerNews and got some interest (with lots of critique naturally). His first project used SEO and viral marketing
          channels to get traction.
          He tried to use SEO for this attempt, too, trying to optimize for "new search engine" search query.
          Then he came up with a widget that returned number of followers of a user to be embedded on their websites,
          this was bringing about 50 users a day, which clearly was not enough. He realized that for this case he will
          need to find a different channel of customer acquisition, which made him investigate the problem deeper and
          eventually led to creation of this manual.
        </p>
        <h3>Chapter 1. Traction Channels</h3>
        <p>
          Authors draw a parallel between company's traction efforts and a game of darts. In darts you need to hit the
          center of the target, called "bullseye", surrounded by 3 concentric rings. Similar to that, startup founders
          also needs to choose their trajectory to the bullseye of their marketing efforts, crossing 3 concentric rings to
          reach explosive customer growth.
        </p>
        <img className="image-responsive center-block" src="https://images-na.ssl-images-amazon.com/images/I/51mHSdQVlfL._SL500_AC_SS350_.jpg" />
        <p>
          3 rings are:
        </p>
        <ul>
          <li> Outer ring: enumerate all the available traction channels</li>
          <li> Middle ring: do cheap tests for all of them to see if particular channel is working for you or not</li>
          <li> Inner ring: get the most promising channel and optimise its performance</li>
        </ul>
        <p>
          Each of the remaining chapters of this book gives details on particular traction channels and suggests
          strategy and tactics of action with respect to one channel, examples of success/failure and interview with
          specialists in that particular channel
        </p>
        <p>Traction channels:</p>
        <ol>
          <li><b>Targeting blogs</b> - Noah Kagan, director of marketing at Mint (personal finance, acquired by Intuit for $170M)</li>
          <li><b>Publicity</b> - Jason Kincaid, TechCrunch writer; Ryan Holiday - media strategist, author of "Trust me, I'm lying"</li>
          <li><b>Unconventional PR</b> - Alexis Ohanian - Reddit and Hipmunk</li>
          <li><b>Search Engine Marketing</b> - Matthew Monahan of Inflection/Archives.com - acquired by Ancestry.com</li>
          <li><b>Social and Display Ads</b> - Nikhil Sethi of Adaptly - social and buying platform</li>
          <li><b>Offline Ads</b> - Jason Cohen of WP Engine and Smart Bear Software</li>
          <li><b>Search Engine Optimization</b> - Rand Fishkin of Moz (SEO soft), Patrick McKenzie of Appointment Reminder</li>
          <li><b>Content Marketing</b> - Rick Perreault of Unbounce, Sam Yagan of OkCupid</li>
          <li><b>Email Marketing</b> - Colin Nederkoorn, founder of Customer.io</li>
          <li><b>Engineering as Marketing</b> - Dharmesh Shah, founder of HubSpot, Marketing Grader</li>
          <li><b>Viral Marketing</b> - Andrew Chen, viral marketing expert at 500 Startups, Ashish Kundra of myZamana 100k -> 4M in less than 1 year</li>
          <li><b>Business Development</b> - Paul English, CEO of Kayak, early partnership with AOL, Chris Fralic of Half.com, bought by eBay for $350M</li>
          <li><b>Sales</b> - David Skok of Matrix partners</li>
          <li><b>Affiliate Programs</b> - Kristopher Jones of Pepperjam affiliate network, Maneesh  Sethi (?)</li>
          <li><b>Existing Platforms</b> - Alex Pachikov of Evernote (bandwagoned App Store)</li>
          <li><b>Trade Shows</b> - Brian Riley of SureStop - bike brakes</li>
          <li><b>Offline Events</b> - Rob Walling of MicroConf</li>
          <li><b>Speaking Engagements</b> - Eric Ries of Lean Startup, Dan Martell of Clarity</li>
          <li><b>Community Building</b> - Jeff Atwood of StackExchange</li>
        </ol>

        <h3>Chapter 2. Traction Thinking</h3>
        <p>
          Mark Andreeson, founder of Netscape and Andreeson-Horowitz, says that in successful startups 50 percent of
          engineering effort goes to traction. If founders don't have any idea of how to get traction or, even worse,
          deny the need of active promotion or the project, claiming that it will get viral - it's a bad signal for
          investor.
        </p>
        <p>
          There's a great temptation to postpone traction efforts until your project is in a very mature state. Don't do
          that: attempts to get traction actually help you get feedback and bring your attention to overlooked aspects
          of your project.
        </p>
        <p>
          For Dropbox Customer Acquisition cost was $230, while product was $99, so they had to rely on viral marketing.
        </p>
        <p>
          Naval Ravikant, founder of AngelList:
        </p>
        <blockquote>
          "In November 2010 you could've gotten daily deal startup founded pre-traction, 18 months later you couldn' get funded no matter what."
        </blockquote>
        <p>
          DuckDuckGo had security in mind since 2009, but nobody cared since 2013 until Snowden. After that anonimity
          became a major selling point for the project.
        </p>

        <h3>Chapter 3. Bullseye</h3>
        <p>Noting interesting.</p>

        <h3>Chapter 4. Traction Testing</h3>
        <p>
          Tools: Clicky, Mixpanel, Chartbeat.
        </p>
        <p>
          Indicators of traction channel: total number of customers available, conversion rate,
          cost to acquire a customer, lifetime value of a customer.
        </p>

        <h3>Chapter 5. Critical path</h3>
        <p>
          Your should envision a certain trajectory of your project, where at each step of its life you should strive
          to achieve certain <b>Key Performance Indicators (KPI)</b>. For instance, DuckDuckGo at certain point had a
          goal to get 1% of total search requests in the world.
        </p>
        <p>
          All the traction channels bring users to you, but some are too slow. For instance, SEO and engineering as
          marketing for DuckDuckGo were bringing users, but at the orders of magnitude slower than it was required.
          You physically won't have time to work on all the traction channels available.
        </p>
        <p>Thus, you should focus only on those channels that are significant enough to help you achieve KPIs.</p>

        <h3>Chapter 6. Targeting Blogs</h3>
        <p>
          Noah Kagan from Mint (personal finance service) was using blogs to reach early traction goal of 100 000 users
          in first 6 months. He held the following table to quantify their efforts:
        </p>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Traffic</th>
                <th>CTR</th>
                <th>Conversion</th>
                <th>Total users</th>
                <th>Status</th>
                <th>Confirmed</th>
                <th>Confirmed users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tech Crunch</td>
                <td>300,000</td>
                <td>10%</td>
                <td>25%</td>
                <td>7,500</td>
                <td>Friend</td>
                <td>Yes</td>
                <td>7,500</td>
              </tr>
              <tr>
                <td>Dave McClure</td>
                <td>30,000</td>
                <td>10%</td>
                <td>25%</td>
                <td>750</td>
                <td>Friend</td>
                <td>Yes</td>
                <td>750</td>
              </tr>
              <tr>
                <td>Mashable</td>
                <td>500,000</td>
                <td>100%</td>
                <td>25%</td>
                <td>12,500</td>
                <td>Email</td>
                <td>No</td>
                <td>0</td>
              </tr>
              <tr>
                <td>reddit</td>
                <td>25,000</td>
                <td>100%</td>
                <td>25%</td>
                <td>6,250</td>
                <td>Coordinated</td>
                <td>Yes</td>
                <td>6,250</td>
              </tr>
              <tr>
                <td>Digg</td>
                <td>100,000</td>
                <td>100%</td>
                <td>25%</td>
                <td>25,000</td>
                <td>Coordinated</td>
                <td>Yes</td>
                <td>25,000</td>
              </tr>
              <tr>
                <td>Google organic</td>
                <td>5000</td>
                <td>100%</td>
                <td>15%</td>
                <td>750</td>
                <td>Receiving</td>
                <td>Yes</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Google Ads</td>
                <td>1,000,000</td>
                <td>3%</td>
                <td>35%</td>
                <td>10,500</td>
                <td>Bought</td>
                <td>Yes</td>
                <td>10,500</td>
              </tr>
              <tr>
                <td>Paul Stamatiou</td>
                <td>50,000</td>
                <td>5%</td>
                <td>50%</td>
                <td>1,250</td>
                <td>Friend</td>
                <td>Yes</td>
                <td>1,250</td>
              </tr>
              <tr>
                <td>Personal Finance Sponsorships</td>
                <td>200,000</td>
                <td>10%</td>
                <td>75%</td>
                <td>52,000</td>
                <td>Coordinated</td>
                <td>Yes</td>
                <td>52,000</td>
              </tr>
              <tr>
                <td>Okdork.com</td>
                <td>3,000</td>
                <td>10%</td>
                <td>75%</td>
                <td>225</td>
                <td>Self</td>
                <td>Yes</td>
                <td>225</td>
              </tr>
              <tr>
                <td colSpan="4">Total:</td>
                <td colSpan="3">116,725</td>
                <td>104.225</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          How to find blogs in you niche:
        </p>
        <ul>
          <li>google "top X blogs" or "best blogs on X"</li>
          <li>YouTube</li>
          <li>Delicious</li>
          <li>Twitter</li>
          <li>Social Mention</li>
          <li>Talk to People</li>
        </ul>
        <p>
        Popular blogs you might not know about:
        reddit, Product Hunt, Hacker News, Inbound.org, Digg, Quora, Codecademy, Gumroad, Lifehacker.
        </p>
        <h3>Chapter 7: Publicity, PR</h3>
        <h4>Strategy:</h4>
        <p>
          Ryan Holiday, director of marketing at American Apparel, author of Trust me, I'm lying:
        </p>
        <blockquote>
          If New York tells about you, they make you a huge favor (their space is limited), if
          Business Insider posts about you, you make them a favor (their space is infinite).
        </blockquote>
        <p>
          Huffington Post now churns out hundreds of hundreds of articles a day - more articles
        - more page views - more ad money.
        </p>
        <p>
          CNN, New York Times, the Today show now scout smaller outlets for captivating stories.
        </p>
        <p>Ryan Holiday:</p>
        <blockquote>
          It's better to start small when targeting big media outlets. So you find the blogs,
          which TechCrunch reads and get story ideas from. Chances are, it will be easier to
          get those blogs' attention. You pitch there, which leads TechCrunch to email you or
          do a story about you based on the information [they've seen] on the news radar.
        </blockquote>
        <p>
          Food chain: Hackernews/subreddits -> TechCrunch/LifeHacker -> New York Times
        </p>
        <p>
          Case of Donors.org: Teachers in NYC often use it to raise money for their projects ->
          Newsweek picked it -> Oprah's team found it in Newsweek in 2010 -> funding from Gates
          foundation, major increase in donations.
        </p>
        <p>
          Jason Kincaid, formerly reporter of TechCrunch, says he got pitched >50 times a day.
        </p>
        <p>
          What gets attention: raising money, PR stunt, big partnership, special industry report.
          But better is a mix of those.
        </p>
        <p>
          No walls of text in emails to reporters!
        </p>
        <p>
          Emotional reaction: they wrote a book about stock exchange, explaining technical details
          and also noted that market is essentially rigged.
        </p>
        <p>
          Help a Reporter Out (HARO) service
        </p>
        <p>
          Reporter have Twitter accounts with surprisingly small numbers of followers.
        </p>
        <p>
          Plan of action:
        </p>
        <ol>
          <li>submit story to link-sharing sites (reddit, Hacker News) with larger audiences</li>
          <li>share it on social networks to drive awareness + add social ads</li>
          <li>email influencers in your industry for comment, some of them will share them with your audience</li>
          <li>ping blogs in your space, tell them that you have a story that's getting buzz - they may want to jump in and cover you themselves</li>
        </ol>
        <p>E-mail template:</p>
        <blockquote>
          Hey [name],

          I wanted to shoot you a note because I loved your post on [similar topic that did a lot of traffic]. I was going to give the following to
          our publicist, but I thought I would go to you with the exclusive because I read and really enjoy your stuff. My [company built a user base
          of 25000/book blows the lid of enormous XYZ scandal]. And I did it completely off the radar. This means you'll be first to have it.
          I can write up any details you need to make it great. Do you think this might be a good fit?
          If so, should I draft something around [their average] words and send it to you, or do you prefer a different process?
          If not, totally understand and thanks for reading this much.

                      All the best,
                      [your name]
        </blockquote>
        <p>Ryan Holiday about investors:</p>
        <blockquote>
          When people gamble, but they don't tell themselves they're gambling (as investors do), they need information
          to justify their decisions, and they need social proof and examples and evidence that thjey're doing the right
          thing. They already know if they want to invest in you or not, and they're looking for information that they
          made the right call. Press is one of the few things that push people over the edge and confirm they're doing
          the right thing.
        </blockquote>
        <h3>Chapter 8. Unconventional PR.</h3>
        <p>Two main directions: publicity stunts and customer appreciation</p>
        <h4>Publicity stunts</h4>
        <p>
          Richard Brenson was doing his press-conferences as outlandish as possible, dressing like a woman or
        driving a tank.
        </p>
        <p>
          In 1999 Half.com renamed a town called Halfway into Half.com for a year for $70k and hired a couple of
          employees there. Josh Copelman launched Half.com on Today show with the mayor of Halfway, Oregon.
          They received coverage from NY Times, PBS, Wall Street Journal and hundreds of other publications. This gave
          them 40 mln customers and they were acquired by Ebay in 6 months for 300 million dollars.
        </p>
        <p>
          WePay, Web payment startup, placed a 600-pound block of ice at the conference entrance - PayPal was criticized
          for freezing some of its customers accounts - and WePay drove attention to that at PayPal's own conference!
          1000s of signups.
        </p>
        <p>
          DuckDuckGo brought a billboard in Google's backyard, highlighting its privacy focus. Billboard got press
          at USA Today, Wired and other media outlets. This doubled their user base.
        </p>
        <p>
          Blendtec, blender manufacturer in Utah, in 2007 created a series of videos "Will it blend?",
          where they blended a rake, golf balls and iPhone. iPhone video received over 8 million views , and series
          became a top-100 most viewed on youtube. This increased sales by 500%.
        </p>
        <p>
          Dollar Shave Club, subscription shaving startup, got similar attention by launching a video
          "Our Blades are F**king Great". It also has millions of views on YouTube and was the main source of >12,000
          customers it acquired within 2 days of launching. Video was shared 31,000+ times on Facebook, received
          9,500+ comments, 12,000+ likes, 16,000+ tweets. They quickly ranked 3rd in Google search "shave".
          This was largely thanks to 1500 sites, linking to the video. It also led to features in Forbes,
          The Wall Street Journal and Wired.
        </p>
        <h4>Customer appreciation</h4>
        <p>
          Alexis Ohanian, founder of reddit and Hipmunk (travel booking site) was sending luggage tags with a chipmunk
          and handwritten notes to first several hundred people, who mentioned the site on Twitter. Also gave away
          T-shirts, stickers. Did same with reddit - T-shirts with alien, personally emailed users to thank them, those
          emails became a central theme in reddit's press articles.
        </p>
        <p>
          David Hauser used similar approach at Grasshopper.com. Was sending customers Skittles, homemade cookies,
          Starbucks gift cards, books and handwritten notes. Had 2 full-time employees, working solely on customer
          appreciation.
        </p>
        <p>
          Holding contests is a great way to generate publicity. Shopify.com, a popular e-commerce platform, is famous
          for its annual Build a Business competition and six-figure prize. Last year, the content drove 1,900 new
          customers and more than $3.5 million in sales on its platform. Dropbox used to hold Dropquest competition -
          users had to complete an intellectually challenging online scavenger hunt and were rewarded with online
          recognition, brand items and free Dropbox packages for life. In the first year of the competition, almost
          half a million people went through the quest. Hipmunk had Mother's Day Giveaway: asked to write, why you
          love mother more than Hipmunk. Received hundreds of submissions via Twitter, sent flowers and chocolates to
          the moms of happy winners. For $500 Hipmunk generated a lot of attention. Hipmunk has run other contests -
          flying customers to Thanksgiving. Hired cartoonists to draw "chipmunked" portraits of customers - received
          hundreds requests in less than 1 hour, increased Facebook fanbase by >350%.
        </p>
        <p>
          Zappos support team was super-nice, they classified its expenses as marketing investment, average phone call
          length was huge. They were assisting with returns, ordering pizzas, exchanging workout clothes for deep fat
          fryer. This made Zappos famous among customers.
        </p>
        <h4>More cases by David Hauser</h4>
        <p>
          While launching Grasshopper.com instead of a press release, they sent chocolate-covered grasshoppers to 5000
          influencial people. With each grasshopper they sent a promotional video. After launching this campaign, they
          got coverage from Fox News, tweets by Guy Kawasaki and Kevin Rose (who had millions of Twitter followers).
          For $65,000 they became a well-known brand among entrepreneurs. This received major media coverage, created a
          Youtube video, watched over 200,000 times, over 150 blog posts, increased number of visitors, coming from
          Twitter and Facebook by over 3,000%.
        </p>
        <p>
          Also they created a viral video "The New Dork" with startup-themed humor,
          parody on Jay-Z and Alicia Keys song "Empire State of Mind", which received 1 mln views and mentions from
          Ashton Kutcher, Mashable and TechCrunch. Consciously made references to Mashable in that video, gave a note
          to them after video release, which gave them more incentive to give more exposure.
        </p>
        <p>
          David's team at another startup Chargify attended SXFW conference and instead of paying $10-15k for
          sponsorship, they hired a stuntman for $3,000 to run in a big green bull's dress, do backflips, drive Corvette
          and draw attention otherwise.
        </p>
        <p>
          David's failures: unsuccessful March Madness promotions, failed ticket giveaways, failed dancing grasshoppers
          video. Anyways, his channel works for them and they leverage it more than any other.
        </p>
        <h3>Chapter 9. Search Engine Marketing (SEM)</h3>
        <p>
          Online marketers spend over $100 million every day on Google's AdWords. Works in B2C, focuses on people, who
          are already looking for what you're selling.
        </p>
        <p>Terms:</p>
        <ul>
          <li><b>Click-Through Rate (CTR)</b> - percentage of ad impressions that result in clicks to your site. If
          100 people see your ad and 3 click it, CTR=3%.</li>
          <li><b>Cost per Click (CPC)</b> - amount it costs to buy a click on an advertisement. CPC is the maximum
          amount you're willing to pay for a potential customer to come to your site.</li>
          <li><b>Cost per Acquisition (CPA)</b> - how much it costs to acquire a customer, not just a click. If you
          buy clicks at $1 and 10% of those who clicked become customers ("convert"),
          CPA = $10 = CPC / conversion percentage.</li>
        </ul>
        <p>
          Matthew Monahan, CEO and cofounder of Inflection, was spending six figures per month on SEM. They were
          acquired by Ancestry.com for $100 million. Initially they used SEM to get the initial user base and
          validate their product (good feedback for just $500-5000). This gave the ballpark of most important metrics:
          conversions of landing pages, how well email captures are working, average customer acquisition cost (CAC),
          customer lifetime value (LTV). They used AdWords to drive traffic to landings BEFORE investing into product development.
          By measuring CTR for different keywords and conversion on those landings, they determined most interesting
          aspects for customers. They were not sure about scenarios of how customer will use Ancestry.com and this gave
          them idea. By the time they were building the product, they knew exactly what users wanted. Their initial SEM
          campaign broke even in a few weeks, meaning that their CPA/CAC=LTV without optimizations of landings, thus
          they started to spend $100,000 a month on this channel.
        </p>
        <h4>Strategy</h4>
        <p>
          Google AdWords is the major SEM platform, although BingsAds are also worth considering (they are running on
          Yahoo!, Bing and DuckDuckGo).
        </p>
        <p>Tools to find out, what keywords your audience is looking for and what keywords your rivals are using:</p>
        <ul>
          <li>Google's Keyword Planner</li>
          <li>Keyword Spy</li>
          <li>SEMrush</li>
          <li>SpyFu</li>
        </ul>
        <p>
          SEM gets more expensive the more popular your keywords are, thus for testing purposes it is ideal to use
          "long-tail keywords", such as "1990 census data" instead of just "census data". The ad itself should contain
          a catchy and relevant title, a well-articulated Call To Action and keywords. After that you should use Google
          Analytics URL Builder tool to create uniquie URLs pointing to your landing pages to track which ads are
          converting, not only being clicked at. According to Matthew, just 4 ads are enough to get a baseline of SEM
          performance and still testing messaging, demographics and landing pages.
        </p>
        <p>
          If customer acquisition cost (CAC) was 15 cents and you make revenue of 13 cents per click, you're in minus.
          But if you optimize your (sales - marketing) values, you can achieve huge profit margin improvements and
          dramatically change you business.
        </p>
        <p>
          Optimizely and Visual Website Optimizer are tools to run A/B tests on landing pages.
        </p>
        <p>
          Ads and ad groups are assigned a quality score by Google. It primarily depends on CTR (average CTR is 2%,
          if CTR is below 1.5%, Google assigns a low score) and time people spend on your website.
          The higher your quality score, the better ad placings and pricing you get from Google.
        </p>
        <h4>Tactics</h4>
        <p>
          2 subtypes of AdWords are Google search network - paid search links - and Google content network - ads on
          non-Google sites.
        </p>
        <p>
          Retargeting with sites like AdRoll and Perfect Audience allows you to make people, who visited your site, see
          your links on other sites and be driven back. This increases CTR by 3x or 10x - those users are already hot
          and close to the center of your conversion funnel.
        </p>
        <p>
          Google Conversion Optimizer is a tool that analyzes your conversion tracking data and automatically adjusts
          your ads to perform better. You can also use scripts to dynamically manage large number of ads and keywords.
        </p>
        <h3>Chapter 10. Social and Display Ads.</h3>
        <p>
          Display ads (= banner ads) and social ads are often used both to increase brand awareness much like offline ads
          and to elicit a direct response. One exclusive application of social ads is to build audience, engage with
          it over time, eventually convert it into customers.
        </p>
        <h4>Display ads</h4>
        <p>
          Ad networks:
        </p>
          <ul>
            <li>Google's Display Network (aka Google Content Network) - 4B daily pageviews, 700 unique monthly users, 80% of total online audience</li>
            <li>Advertising.com (owned by AOL)</li>
            <li>Tribal Fusion</li>
            <li>Conversant</li>
            <li>Adblade</li>
          </ul>
        <p>
          Ad networks allow you to focus on different audience demographics, use images, video, interactive or text ads.
          Unlike SEM, with display ads user doesn't have to search for your query exactly - e.g. if you're selling
          a weight-loss product, you can display it on any sites, mentioning nutrition or carbohydrates.
        </p>
        <p>
          There are niche ad networks, focused on smaller sites and a specific audience demographics.
        </p>
        <p>Other tools:</p>
        <ul>
          <li>the Deck - niche audience of Web creatives</li>
          <li>BuySellAds - marketplaces for directly buying ads from advertisers</li>
          <li>MixRank, Adbeat - show you what ads your competitors are running</li>
          <li>Alexa and Quantcast - show you who visit sites that your competitors are using for their ads</li>
        </ul>
        <h4>Social ads</h4>
        <p>
          With social ads it often makes sense to create interest about a piece of content, rather than go for clicks
          directly.
        </p>
        <p>
          CareOne, debt consolidation and relief company, did a survey: social media connections filled out lead
          generation form at 179% higher rate than typical customers, were 217% more likely to do first payment, came
          back to fill sign-up form  after partially signing it and quitting at 680% higher rate, made first payment
          at 732% higher rate.
        </p>
        <p>
          Social ads are good to promote a piece of content that is already popular by itself - it's like organic
          traffic on steroids. At Airbrake Justin Mares promoted some of their best content on Twitter and Facebook:
          after spending $15 on Twitter ads, tehy received hundreds of organic retweets, tens of Facebook likes, 2
          submissions on reddit and Hacker News, in total driving tens of thousands visitors to their site by paying $15
          and creating and interview with Stripe's CTO.
        </p>
        <p>
          Outbrain and Sharethrough are content distribution networks that promote your content on popular partner sites
          such as Forbes, Thought Catalog, Vice, Gothamist and hundreds more. They make your content look life native
          on target sites.
        </p>
        <p>
          You can also create social experiences. Warby Parker was mailing eyeglasses for free trial, if you create a
          photo and share it in social networks.
        </p>
        <p>Major social sites:</p>
        <ul>
          <li>LinkedIn - 250M professionals. Targeting: job title, company, industry, other business demographics.</li>
          <li>Twitter - 250M users. Sponsored tweets in users feeds. Effective in right time, e.g. sell sportswear during Olympics.</li>
          <li>
            Facebook - over 1B active users. Targteting: user interests, pages they like, connections. Gabriel once
            targeted just his wife by zip code, alma mater and interest affinities - showed her a picture of their son. It's
            important that your customers might recommend you to their connections.
          </li>
          <li>StumbleUpon - 25M "stumblers", actively looking for something new. Ads are part of content. Users are very
          likely to go away very quickly, so you have to engage them with blog posts, infographics and video.</li>
          <li>Foursquare - over 45M users. Good for targeting local population.</li>
          <li>Tumblr - 100M users. Sponsored posts.</li>
          <li>
            reddit - 5B monthly page views, 175M monthly unique users, over 500,000 communities. Ads are sponsored links
            at the top or sponsored links along the sidebar. You can target communities, good ads are funny or
            controversial and encourage users to engage.
          </li>
          <li>YouTube - over 1B monthly unique users, ads are pre-rolls (run before video) or banner ads.</li>
          <li>Others: BuzzFeed, Scribd, SlideShare, Pinterest.</li>
        </ul>
        <p>
          Display ads and social ads are similar in principle: they require that you understand your audience. They
          can be used at any product phase as they have a low minimal price and scale.
        </p>
        <h3>Chapter 11. Offline Ads.</h3>
        <p>Offline ad market is still larger than online.</p>
        <p>
          Tim Ferris, author of "The 4-Hour Body" and "The 4-Hour Workweek":
        </p>
        <blockquote>
          If dealing with national magazines, consider using "remnant ads" buying agency such as Manhattan Media
          or Novous Media that specializes in negotiating discounted pricing of up to 90% off rate card.
          Feel free to negotiate still lower them as a go-between.
        </blockquote>
        <p>
          Offline ads efficiency is harder to track - you can use promo codes to do this, e.g. tractionbook.com/flyer.
          Jason Cohen of Smart Bear Software was including a section "How did you hear about us?" in the questionary
          for new customers. Also included an offer of a free book in Dr. Dobb's Journal.
        </p>
        <h4>Print advertisement</h4>
        <p>
          There are 7000 magazines in the US falling in 3 major categories: consumer publications for large audiences
          (those in grocery stores), trade publications on particular industry and local magazines. To understand reader
          demographics, circulation and publication frequency, ask for media package/media package/press kit.
        </p>
        <p>
          Newspapers are similar to journals, but slant towards over-thirty demographic - many young people still buy
          magazines, not many young people buy newspapers offline. Some ad campaigns are uniquely suited towards
          newspapers, e.g. time-sensitive offers (for events/sales), awareness campaigns (often, multi-channel) and
          widely publicized announcements (e.g. for product launch).
        </p>
        <p>
          Direct mail can be surprisingly targeted. You can buy direct mail list for your audience from seller companies.
          You can buy lists, grouped by demographic, geography or both. Prices are ~$100 per 1000 consumer names and
          a bit more for business names and addresses. You can even buy a service that creates address list, prints
          materials and assembles and mails everything for you.
        </p>
        <ul>
          <li>if it's a postal direct response campaign, provide a self-addressed envelope to increase chances of respone</li>
          <li>use handwritten envelopes</li>
          <li>have a clear Call to Action</li>
          <li>investigate bulk mail with local postal service to reduce pricing</li>
        </ul>
        <p>
          Local print ads, such as flyers, directories, calendars or publications such as church bulletins, community
          newsletters or coupon booklets are a worth ~$100s of dollars, but can expose you to thousands people. Nice
          case: InstaCab hired cyclists to bike around San Francisco and hand out business cards to people trying to
          hail a taxi.
        </p>
        <h4>Outdoor advertising</h4>
        <p>
          In the US Lamar, Clear Channel and Outfront Media are 3 most powerful players in this $6B industry. Their
          sites provide PDFs with local available billboards.
        </p>
        <p>
          Gabriel strategically placed a billboard in the startup-heavy SoMa district of San-Francisco to call out
          the differences between the privacy practices of Google and DuckDuckGo. This received lots of media attention
          from Wired, USA Today, Business Insider etc. and made DuckDuckGo user base double that month.
        </p>
        <p>
          Billboard cost was $7,000 a month. Billboards in less prominent locations can cost $300-$2500 a month. Ads in
          Times Square can run you $30,000-$100,000 a month. Billboards have a GRP score (Gross Ratings Points), based
          on location, number of impressions, type of billboard (e.g. digital). Full score means that a given billbaord
          should reach 100% of diving population a month.
        </p>
        <p>
          Transit ads are better that billboards in terms of "actionability". Billboard are more about awareness - drivers
          don't drop everything to go for your ads. Blue Line Media is a company, doing transit ads.
        </p>
        <h4>Radio and TV ads</h4>
        <p>
          Radio and TV ads are priced on a cost-per-point (CPP) basis, where each point represents what it will cost to
          reach 1 percent of radio station's listeners. The higher the CPP, the more it will cost you to run ad on a
          station. Cost depends on market, time and how many ads you bought. Ballpark is week of running ad might cost
          $500-$1500 in a local market or $4,000-$8,000 in a larger market, such as Chicago.
        </p>
        <p>
          Satellite radios, such as Sirius XM with over 50 million subscribers, are an option.
        </p>
        <p>
          TV ads are often used as a branding mechanism. 90% consumers watch TV, average adult in the US watches
          26 hours of TV/week. Production costs for actors, video equipment, editing, sound and effects, shooting etc.
          can run to ~$10,000s with most expensive ones closer to $200,000.
        </p>
        <p>
          National average for airtime is $350,000. However, there are 1,300-plus local TV stations in the US that
          can be effective and reasonably priced. Prices for local commercials are $5-$50 per thousand viewers
          per 30-second time slot. Buying TV ads is rather opaque, there's a lot of negotiations, no rate cards etc.
          It's likely that you'll want to hire a media buyer or agency to do this.
        </p>
        <p>
          Infomercials from Snuggie to ShamWow sell all sorts of knives, vacuum cleaners and workout and body care
          products, work from home equipment. They were the main force behind P90X $400 million sales. Infomercials
          can cost between $50,000 and $500,000 to make and last 2 minutes. Traditionally, they are inserted in
          28-minute TV show episodes. They are almost always direct response ads. Require cheap testing in advance.
        </p>
        <p>Jason Cohen:</p>
        <blockquote>
          One thing I learnt at Smart Bear is that I have zero ability to predict, what's going to work. There'd be
          a piddly magazine where I thought "This is just some piddly magazine, surely no one ready this", and sure
          enough it was cheap (due to small circulation) and it'd do terrifically! Our ROI on some of those were
          incredible. ... And it changed over time - an ad might be good for a quarter, or a year, and then decay
          slowly until it wasn't valuable anymore.
        </blockquote>
        <h3>Chapter 12. Search Engine Optimization (SEO)</h3>
        <h4>Strategy</h4>
        <p>
          Read Moz Beginner's Guide to SEO for basics.
        </p>
        <p>
          There are 2 high-level strategies: fat head and long tail. 30% of searches are made of 1-word or 2-word
          queries, such as "Dishwashers", while 70% are longer searches that don't get searched as much, but in the
          aggregate add up to the majority of searches made. Fat-head strategy means that you would try to focus on
          short queries, such as "wooden toys", while long-tail - on long queries, such as "wood puzzles for 3 year olds".
        </p>
        <p>
          Only ~10% of clicks occur beyond the first 10 links, so you want to be as high on the first page as possible.
        </p>
        <h4>Fat-head strategy</h4>
        <ol>
          <li>
            Use Google AdWords Keyword Planner to find terms that best describe your product. You need such keywords
            that if you captured 10% of search traffic, it still results in meaningful traffic.
          </li>
          <li>
            Use Open Site Explorer to find the number of links, competitors use for a given term. This will give you
            a rough idea of how dofficult it will be to rank high for a given term. If competitor has thousands links
            to that term, it will take lots of focus on building links and optimizing SEO higher than them.
          </li>
          <li>
            Use Google Trends to narrow down your keywords list to just a handful. Have certain terms been search more
            or less often the last year? Is geography ok?
          </li>
          <li>Try SEM ads against your keywords. Do they convert well?</li>
          <li>Make titles and headers of your site include your search terms of choice.</li>
          <li>Get other sites link to your site, ideally, using exact links you're optimizing for.</li>
        </ol>
        <p>
          For something totally new SEO doesn't work too well - e.g. search terms for Uber would sound like "alternatives
          to taxicabs that I can hire via my phone".
        </p>
        <h3>Long-tail strategy</h3>
        <p>
          You can still start from Google Keyword Planner or go with Google Analytics/Clicky and analyze organic traffic
          leading to your website. If you don't have enough content, drawing people through long-tail keywords, you
          have 2 choices. You can either create Web pages and then after few months check analytics or you could look
          at competitors sites for signs of meaningful long-tail SEO traffic: they have lots of landing pages (check
          site:moz.com) or Alexa search rankings and look at the percentage of visitors your competitors are receiving
          from search - if one competitor receives a lot more traffic from search than others, they are using some kind
          of SEO strategy.
        </p>
        <p>
          Patrick McKenzie, founder of Bingo Card Creator and Appointment Reminder:
        </p>
        <blockquote>
          You build a machine that takes money on one end and spits rankings on the other. With Bingo Card Creator I pay
          money to a freelancer to write bingo cards with associated content about them that get slapped up on a page
          on the Web site. Because those bingo cards are far too niche for any educational publisher to target, I tend
          to rank very well for them.
        </blockquote>
        <blockquote>
          For $10-20 per search term, you can pay someone to write an article that you won't be embarrassed to put on
          your Web site. For many SaaS startups, the lifetime value of a customer at the margin might be hundreds of
          thousands of dollars. So they [articles and landing pages] don't need much traffic at all on an individual
          basis to aggregate into a meaningful number to the business.
        </blockquote>
        <blockquote>
          The reason my business works is fundamentally because this SEO strategy works phenomenally well.
        </blockquote>
        <p>
          Patrick would hire freelancer to create a page for $3.5 and over 3 years it brings $60-100. At scale of
          hundreds of such sorts, this is fairly good money. Subpages of his site target a bucket of keywords he wants
          to rank for. For example, "plants and animals" bingo card category includes pages like "dog breeds bingo",
          "cat breeds bingo". For each of those, he hired a freelancer to research the term and create a unique set of
          bingo cards and associated landing pages. You can hire freelancers via oDesk/Elance to churn out targeted
          articles for long-tail topics that your audience is interested in.
        </p>
        <p>
          Another way to approach long-tail SEO is to use content that naturally flows from your business - just ask
          yourself, what data pf ours might be interesting for users. Yelp, TripAdvisor, Wikipedia have all gained most
          of their traffic by producing automated long-tail content. Gabriel's Names Database used this - people
          searched for old friends and classmates and would find them on Names Database. Pages were auto-generated from
          data gathered by the product. This generated tons of organic traffic.
        </p>
        <h4>Tactics</h4>
        <p>
          You need to be able to get links. This can be done via:
        </p>
        <ul>
          <li>Publicity - reporters link to your site</li>
          <li>Product - e.g. LinkedIn profile pages</li>
          <li>Content marketing - creating strong content that people are willing to share</li>
          <li>Widgets</li>
        </ul>
        <p>
          Links are dominant factor in site ranking. Open Site Explorer can tell you, how many links you are getting and
          where they are coming from. You can look at your competitors link profile to get the idea of where to get links.
          There's a difference between quality content and cheap freelancer-generated content. First is good for
          fat-head strategy and natural link building. Infographics, slideshows, images, original research - that's
          what drives user's traffic.
        </p>
        <p>Don't buy links - you'll get heavilly penalized; don't do black hat SEO - it works short-term, but doesn't long-term.</p>
        <p>
          SEO is one of the cornerstones of "inbound" marketing - "inbound" marketing brings customers inbound from SEO
          or social media - thus, unlike SEM or social media ads, money invested in it, stay with you. Rand Fishkin of
          Moz says, 85% of their marketing is inbound.
        </p>
        <p>
          Mike Volpe from HubSpot:
        </p>
        <blockquote>
          Today we have 30 people in marketing and 120 in sales, all based in Cambridge, MA (no outside sales) and we
          attract 45-50k new leads per month, 60-80 percent of which are from inbound marketing (not paid). The inbound
          leads are 50% cheaper and close to 100% more than paid leads. My personal experience and industry knowledge
          tells me that most other SaaS companies get more like 10% of their leads from inbound marketing, and generate
          2-5k leads per month in total, whereas we get 70-80 percent of our leads from inbound, resulting in 45k+
          new leads per month.
        </blockquote>
        <h3>Chapter 13 - Content Marketing</h3>
        <p>
          Blog is an important way to attract new customers to your business.
        </p>
        <p>
          Rick Perreault, founder and CEO of Unbounce, service for building Landing Pages and optimizing conversions.
          They started blogging a year before launch.
          Sam Yagan, cofounder of OkCupid, popular dating service, launched in 2004, started blogging in 2009. That's
          when they started to take off.
        </p>
        <p>Rick Perreault hired a blogger as the first employee:</p>
        <blockquote>
          If we had not started blogging at the beginning the way we did, Unbounce would not be here today. ... Our
          content still drives customers. Something we wrote in January 2010 still drives customers today. Wherease, if
          I had spent money on advertising in January, that's it. That money is spent. If you invest in content, it gets
          picked up by Google. People find it, they share it, and it refers customers almost indefinitely.
        </blockquote>
        <blockquote>
          By the time we launched in the summer of 2010, we were doing 20,00 unique visitors per month to the
          blog. ... Now our blog is our primary source of customer acquisition. People write about Unbounce. Other
          people tweet about our posts. Our blog i scenterpiece of all our marketing.
        </blockquote>
        <p>
          Unbounce created a mailing list of 5,000. This wasn't your typical startup product launch. They relied heavily
          on social media, driving opinion leaders to their blog by pinging them on Twitter asking for feedback.
          It took their blog a while though: after 6 months they were getting only 800 monthly visits. To speed up
          visitors acquisition, they started to engage with communities in their field, writing useful answers on
          targeted forums like Quora, reaching out to influential people on Twitter (this was particularly effective).
          This is not scalable, but ok for kick-off to make the content start spreading organically. It was often hard
          to predict, which posts would resonate with the audience, thus keeping a blog schedule was good.
        </p>
        <p>
          OkCupid was acquired by Match.com for $50 million. OkCupid approached its blog differently from Unbounce. They
          were writing longer posts once a month, studying the usage patterns of their members, headlined with
          intentionally controversial titles, e.g. "How your race affects the messages you get" to generated traffic and
          conversation. They are free site, so they couldn't afford high customer acquisition costs, thus were limited
          to publicity, content marketing, SEO and viral marketing to dirve their growth. They received more traffic
          from blog than from PR firms. CNN, Rachael Ray, the New York Times and many other outlets wrote about blog
          topics they covered. As a result, in a year they were near the top of search results for "online dating".
        </p>
        <h4>Tactics</h4>
        <p>
          According to Unbounce, infographics is shared 20 times more often than text and are more likely to get picked
          up by other online publications. Their <a href="https://unbounce.com/noob-guide-to-online-marketing-infographic/">Noob Guide to Online Marketing"</a>
          infographic drove ~10,000s of paying customers and in a year it was shared on Twitter ~ once and hour.
        </p>
        <p>
          One of the secrets of shareable content: show the readers that they have a problem they didn't know about
          or couldn't articulate. Solution is nice, but anxiety about the problem is what drives them to your post.
        </p>
        <p>
          Quick: name 3 venture capitalists or ask your friends to do so. Many people will mention Fred Wilson, Brad Feld
          and Mark Suster, because they have popular blogs. Blog can help you position yourself as an indsutry leader in
          a competitive field. This recognition leads to huge opportunities, such as speaking on major conferences,
          giving press quotes to journalists, even influencing industry direction. That means, your content is shared
          even more and your opportunities for business development expand greatly. E.g. Unbounce got integrations with
          such companies as Salesforce. It's also helpful for 8 other traction channels: SEO, publicity, email marketing,
          targeting blogs, community building, offline events, existing platforms and business development.
        </p>
        <h3>Email marketing</h3>
        <p>
          Groupon, JackTreads, Thrillist and Zappos use email marketing as their core traction channel.
        </p>
        <p>
          Email marketing is good for building familiarity with prospects, acquiring customers and retaining customers.
        </p>
        <h4>Email marketing for finding customers</h4>
        <p>
          Don't spam your users with bulk, unsolicited email. Instead, create interested users lists - just ask for
          emails for delivery of premium content (such as videos, textbooks or white papers, short mini-courses on your
          area of expertise) on the bottom of blog posts and landing pages.
        </p>
        <p>You can also consider advertising on email newsletters.</p>
        <h4>Email marketing for engaging customers</h4>
        <p>
          Customer activation is an important and often overlooked part of building a successful product. E.g. for
          Twitter activated cusomters are those, who actively send Tweets or follow more than 5 people, for Dropbox -
          those, who uploaded at least 1 file.
        </p>
        <p>
          A popular approach to activate cusomters is to create a series of email, exposing cusomters to new features
          like "Hey, did you know we have this feature?". Colin Nederkoorn, CEO of Customer.io (company that offers
          to send email based on actions their customers' users take):
        </p>
        <blockquote>
          You create the ideal experience for your users when they sign up for your trial. You then create all of the
          paths they can go down when they fail to go through the ideal experience. And you have an email to catch them
          and help them get back on that [ideal] path.
        </blockquote>
        <p>
          E.g. Dropbox will email newly signed-up users to remind them to upload a file. You can use tools like Vero and
          Customer.io to automate those messages. E.g. Cusomter.io will send an email to customers 30 minutes after
          registration and ask, if they need any help. Those emails recieve 17% reply rate.
        </p>
        <h3>Email marketing for retaining customers</h3>
        <p>
          Digest or notification emails are great for customer retention. Mint sends you weekly financial summaries,
          BillGuard, service that monitors your credit cards for suspicious transactions, sends a similar monthly report.
          Planscope (project planning tool for freelancers) sends a weekly email to freelancers, telling how much they
          made this week. These are "you are awesome" emails, which are pleasant to read. Similary, photo sites will
          send you photos you took a week ago.
        </p>
        <h3>Email marketing for revenue</h3>
        <p>
          Patrick McKenzie says that email subscribers are 70x more likely to buy one of his courses than
          targeting blog/SEO/content marketing subscribers. Emails are good for upselling customers, e.g. WP Engine,
          WordPress hosting company, gets customers on premium plans via series of emails. They've built a blog speed
          testing tool (speed.wpengine.com), which measures site performance. They will send 3 emails over a month with
          an email course about WordPress speed and scalability with 3 quick ways to improve site speed, including payed
          hosting. If they see that customer is not ready to convert, they switch them to a less frequent monthly mailing
          list.
        </p>
        <p>
          Email retargeting is also good for customers, who filled in their cart, but left the site before checkout.
        </p>
        <h3>Email marketing for referrals</h3>
        <p>
          Groupon doesn't give you a discount, unless you mail several friends. Dropbox gives you and your friend whom
          you brought in extra space. Even some B2B products like Asana will ask customers to import their address books
          to share with their friends.
        </p>
        <h3>Tactics</h3>
        <p>
          MailChimp, ConstantlyContact and similar providers ensure email delivery. A/B test every aspect for campaign,
          especially email timing (e.g. 9-12 or evening). Don't use noreply@example.com - feedback might be valuable.
          For email content, see <a href="copyhackers.com">Copy Hackers</a>.
        </p>
        <h3>Chapter 15. Viral marketing</h3>
        <p>
          If every user brings in at least one other user, your project is "going viral". This was the main driving
          force behind Facebook, Twitter, WhatsApp. Even if you can't get exponential growth, viral marketing can
          greatly decrease your customer acquisition cost. Andrew Chen, founder of Muzy (app with over 25 million users),
          says that with existing platforms, such as Facebook, it's very easy now to become viral.
        </p>
        <h3>Strategy</h3>
        <p>
          Some products have an inherent virality (e.g. messengers, social networks, Uber with someone), sometimes you
          can encourage virality via discounts offers like Dropbox or AirBnB (sign up a friend and you both get
          a discount). You can also promote virality by adding "sent via iPhone" or use of widgets and embeds like Youtube.
        </p>
        <p>
          Your viral coefficient K = number of invitees * conversion percentage, e.g. K = 3 * 60% = 1.8. Also, take
          into account your viral cycle time - make it as simple as possible, create urgency.
        </p>
        <h3>Tactics</h3>
        <p>
          Measure your initial viral coefficient and viral cycle time. According to Andrew, it takes 2-3 months and
          an 1-2 engineers to create a good viral loop. Map all the steps within the loop, cut redundant, increase the
          number of invitations, customers send. Ashish Kundra, founder of myZamana Indian dating network. When user
          gets an invitation, it should be designed to have maximum conversion + maximum personal hooks. You can also
          make "conversion pages", where new users land after getting an invitation, could be usable without login to
          increase interest.
        </p>
        <p>Optimization directions</p>
        <ul>
          <li>Buttons vs text links</li>
          <li>Locations of calls to action</li>
          <li>Size, color and contrast of action buttons</li>
          <li>Page speed</li>
          <li>More images</li>
          <li>Headlines</li>
          <li>Site copy</li>
          <li>Testimonials</li>
          <li>Signs of social proofs (happy customers, case studies, press mentions, statistics of usage)</li>
          <li>Number of form fields</li>
          <li>Allow users to test the product before signup</li>
          <li>Ease of signup - OAuth</li>
          <li>Length of signup process</li>
        </ul>
        <p>
          There could exist viral pockets - niches, where you liftoff faster - may be country, age or profession. If you
          found such a niche - optimize for it - e.g. translate app to their language.
        </p>
        <p>
          Don't forget to do seeding in new demographics - attract new cusomters in other channels with other
          strategies, such as SEO, SEM or display/social ads - inexpensive for tests.
        </p>
        <p>Copy someone else's viral loop exactly, down to detail.</p>
        <p>Possible mistakes:</p>
        <ul>
          <li>Product is not inherently viral, but tries to add viral features</li>
          <li>Bad product in general, nobody cares about</li>
          <li>Not enough A/B tests (assume that 1-3 out of 10 yield postive results)</li>
          <li>Not understanding, how users are currently communicating</li>
          <li>Not getting guidance from people, who already did this</li>
          <li>Thinking of virality as a tactics, rather than a deep strategy</li>
        </ul>
        <h3>Chapter 16. Engineering as Marketing</h3>
        <h3>Strategy</h3>
        <p>
          HubSpot, a marketing automation software company, has reached ~$10s millions in revenue in a few short years.
          One of the keys to its success was a free marketing review tool Marketing Grader. It reports, how well you're
          doing with your online marketing (socical media mentions, blog post shares, basic SEO). It's free for users
          and gives HubSpot some idea about you as a potential customer.
        </p>
        <p>Dharmesh Shah, HubSpot founder:</p>
        <blockquote>
          The early story of Marketing Grader is interesting. There were only 3 people at Hubspot at that time. My
          cofounder and I would regularly "sell" (in the early days a lot of those sales calls were with friends and
          friends of friends). One of the initial steps in the sales process was for me to get a sense for how good
          a given company's Web site was at inbound marketing. My cofounder [Brian Halligan] would constantly send me
          Web sites he wanted me to take a look at so we could determine if they were a good fit.
        </blockquote>
        <blockquote>
          After a few days of this, I got tired of going through the manual steps (look at Alexa, look at their page
          titles, check out their domains etc.). So I built an application to automate that process for me. On a related
          note I also started angel investing at the time, and I used the same process to assess the markting savviness
          of potential startups I was considering investing in. Once the app was built (it didn't take more than a few
          days for the initial version), I thought it might be useful for other pople, so I registered "websitegrader.com"
          and made the app available publicly. We eventually started collecting email addresses in the app, and kept
          iterating on it.
        </blockquote>
        <p>
          More than 3 million sites used Marketing Grader. It accounts for a large portion of 50k+ leads HubSpot gets
          each month. Its users are at the same time potential HubSpot customers. And inbound marketing works like an
          asset - once you  spent money on it, it continues to bring returns.
        </p>
        <p>
          Another example is SEO company Moz - their free tools Followerwonk and Open Site Explorer, have driven
          ~10,000s of leads to Moz. Followerwonk allows to analyze Twitter audience and get tips on growing it.
          Open Site Explorer shows, where sites are getting links, which is a valuable competitive advantage.
        </p>
        <p>WP Engine, a WordPress hosting provider, asks for email for checking how fast your WordPress site loads.</p>
        <h3>Tactics</h3>
        <p>You can take advantage of cyclical and seasonal behaviour.</p>
        <ul>
          <li>Codecademy's Code Year free course with lessons, sent by email weekly, got them 450,000 new users during 2012.</li>
          <li>Patrick McKenzie, Bingo Card Creator, makes Halloween and Christmas-themed cards.</li>
          <li>In 2011 Gabriel built a microsite DontTrack.us, which showed, how Google tracks you and how this can be harmful.
          NSA tracking news or Data Privacy Day increase awareness about this website. Strategy works so well that
          DuckDuckGo now has multiple such microsites with different domain names, which is good for SEO and just
          memorable.</li>
          <li>Chris Fralic of Delicious and Half.com says that Delicious bookmark widget more than trippled adoption of
          their social bookmarking product.</li>
          <li>Facebook, StumbleUpon, Google+, Twitter share buttons</li>
        </ul>
        <p>
          Robert Moore of RJMetrics (e-commerce analytics company) uses its own products to discover interesting
          trends on some of the most popular media sites like Twitter, Tumblr, Instagram and Pinterest. They started
          to build microsites on those hot topics, like cohortanalysis.com or querymongo.com. The last one was
          translating SQL queries to Mongo. They look for high ROI on engineering time: if a few days of engineering
          drive hundreds of leads - it's worth it.
        </p>
        <h3>WORK IN PROGRESS - TO BE CONCLUDED</h3>
      </div>
    );
  }
}

export default Content;
export {metadata};