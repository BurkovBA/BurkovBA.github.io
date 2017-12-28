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

        <h3>Chapter 5. Critical Path</h3>
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
        <h3>Chapter 15. Viral Marketing</h3>
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
        <h3>Chapter 17. Business Development</h3>
        <p>
          Chris Fralic, former senior business development executive at AOL, Half.con, eBay and Delicious, currently
          a partner at first round capital described business development at each of his startups.
        </p>
        <p>
          Google had 2 key partnerships: in 1999 they partnered with Netscape to be default search engine in Netscape
          Navigator. Then Google achieved key partnership with Yahoo!
        </p>
        <h4>Strategy</h4>
        <ul>
          <li>Standard partnerships - e.g. Apple/Nike Nike+ shoe, communicating with iPod or iPhone</li>
          <li>Joint ventures - Starbucks Frappuccino or Doubleshot Espresso - entirely new product from Starbucks/Pepsi</li>
          <li>
            Licensing - Starbucks lent its brand to an ice cream manufacturer for Starbucks-flavoured ice cream or Spotify
            and Grooveshark forced into licensing agreements by the nature of their business - they have to license
            music content from record labels.
          </li>
          <li>
            Distribution deals - Groupon gets discount to its mailing list from a restaurant. Or Kayak signed a
            distribution deal with AOL - Kayak used its search technology to power an AOL-owned travel search engine.
          </li>
          <li>Supply partnerships - Half.com bought books, Hulu and Wallmart getting stock from channel partners.</li>
        </ul>
        <p>
          Business development requirs discipline and strategic thinking. It's tempting to go for partnership with big
          brand, but this might require you to go off your Critical Path - don't!
        </p>
        <p>Chris Fralic from Half.com:</p>
        <blockquote>
          In the case of Half.com, there were three key things that we needed before we launched. Number one, the site
          had to work (this was pre-Amazon Cloud days) to ensure that people actually use the site. Then there was
          inventory. We decided, we needed one million books, movies, etc. at launch, because it sounded like a nice big
          number. So my team and I worked on how we get product on the shelves. It was our job (prior to launch) to find
          inventory and get it listed no the site. The third was to get distribution. So we went out and created one of
          the early affiliate programs and did distribution and marketing partnerships.
        </blockquote>
        <p>
          Charlie O'Donnell, partner at VC firm Brooklyn Bridge Ventures:
        </p>
        <blockquote>
          Create an exhaustive list of all your possible [partners]. ... Make a very simple spreadsheet: Company,
          Partner Type (Publisher, Carrier, Reseller etc.), Contact Person/Email, Size, Relevance, Ease of Use, and then
          a subjective prioirty score. There's no reason why a company shouldn't have 50 potential business development
          partners in their pipeline, maybe one hundred, and be actively working the phones, inboxes, and pounding the
          pavement to get the deals you need to get - be it for distribution, revenue, PR, or just to outflank the
          competitor. The latter is totally underutilized. If you go in and impress the top 50 folks in your space, it
          makes it that much harder for a competitor to get a deal done - because you're seen as the category leader.
        </blockquote>
        <p>
          Once you have a list of potential partners, send it to your investors, friends and advisers for warm
          introductions. Don't prioritize based just on brand name - instead, say "I want to go for Internet retailers
          that are between 20 and 250 on the IR (Internet Retailer) 500 - because this puts them in this kind of revenue
          range - and have a director of e-commerce."
        </p>
        <p>
          Chris at Delicious worked on deals with The Washington Post, Mozilla, Wikipedia. Delicious approached its
          potential partners with a clear idea of how each of them would benefit from partnership. For
          <i>The Washington Post</i> the value proposition was to use Delicious's social bookmarks to optimize content
          for social media. <i>The Washington Post</i> agreed because it was a simple integration with little downside.
          After that the nunmber of sites, willing to partner with Delicious skyrocketed. It made possible other
          partnerships, such as with Mozilla, which released 2.0 at that point, so that one of the first new things that
          upgrading users were seeing was Delicious extension. This more than tripled Delicious user base. At the same
          time, most deals won't close - e.g. they pursued integration with Wikipedia deal, which failed.
        </p>
        <h4>Tactics</h4>
        <p>
          Brenda Spoonemore, former senior VP of interactive services at NBA:
        </p>
        <blockquote>
          What do you have that they [big companies] need? You're more focused than they are. You have an idea and
          you're slolving a problem. You've developed content or technology and you have a focus. That is very difficult
          to do at a big corporation.
        </blockquote>
        <p>
          You need to identify a right contact in company that you're going to work with. There could be a business
          development department or you could approach someone like a product director or C-level executive you want to
          engage with. Find, who's in charge of metric, you're interested in, e.g. selling more T-shirts and put your
          stake on that person. Just because you're offering a Web site widget doesn't mean that Web site team is ideal
          set of stakeholders. Then try to get warm introduction through a mutual contact with an overview of your
          proposal that can be easily forwarded. Then be sure to follow up and set time lines for next steps. Chris
          Fralic mentioned that it was key for him to get a meeting or phone call set up as quickly as possible,
          sometimes even on the same day. Then start negotiations - both Chris and Brenda suggest that you make your
          term sheet as simple as possible - often just 1 page - so that deal requires less lawyers and engineers. After
          the deal is done, create a memo "how the deal was done" to repeat the process.
        </p>
        <p>
          There can be low-touch BD - e.g. through utilization of public APIs, e.g. Disqus, SlideShare or SoundCloud.
          Those can work, but you'd better start with landing a few traditional deals.
        </p>
        <h3>Chapter 18. Sales</h3>
        <h4>Strategy</h4>
        <p>
          Sean Murphy, owner of customer development and sales consulting firm SKMurphy says that first customer is
          someone the startup knows or they know. He suggests that startup does a lunch pitch (over a coffee or
          something) with 5-10 key points. Early conversation is about prospect's problem and pain points.
        </p>
        <p>
          John Raguin, cofounder of insurance company Guidewire Software explains:
        </p>
        <blockquote>
          We went to our potential customers, insurance companies, and proposed to do a short free consulting study that
          would provide [an assessment] of their operation. We would spend approximately 7-10 man-days of effort
          understanding their operations and in the end we would give them a high-level presentation, benchmarking them
          as compared to their peers. In return, we asked for a feedback on what would make the best system that would
          meet their needs. In the end, we were able to work with over 40 insurance companies this way. We were honest
          about our motives all the time, and we made sure to provide quality output.
        </blockquote>
        <p>Sales conversation structure (Neil Rackham), called SPIN progression:</p>
        <ul>
          <li>
            <b>Situation questions</b> - e.g. "How many employees do you have?" or "How is your organisation structured?" -
            no more then 1-2 or they'll feel like they're giving information and not getting anything in return, especially
            executive directors - you ask this to check if you're talking to a likely candidate for sale.
          </li>
          <li>
            <b>Problem questions</b> - e.g. "Are you happy with your current solution?" or "What problems do you face with it?"
          </li>
          <li>
            <b>Implication questions</b> - e.g. "Does this problem hurt your productivity?", this is meant to emphasize
            that the problem is not a necessary cost of doing business or a nuisance, but actually an avoidable cost.
          </li>
          <li>
            <b>Need-payoff questions</b> - e.g. "How do you feel this solution would help you?"
          </li>
        </ul>
        <p>
          Steve Barsh, former CEO of SECA, acquired by MCI: "You get your first customers by picking up the phone".
          Good if you have a warm introduction, but you may have to do cold calling or emailing.
        </p>
        <p>
          Todd Vollmer, enterprise sales professional with 20 years of experience: set daily/weekly targets, be
          judicious about whom to contact - you might be scared to call senior employees - don't.
        </p>
        <p>Sean Murphy:</p>
        <blockquote>
          Ordinarily, it's somebody who is one level or two levels up in the organisation; they've got enough perspective
          on the problem and on the organization to understand what's going to be involved in bringing change
          to organization. As we work with them they may take up the hierarchy to sell to more senior folks. We don't
          tend to start at the top unless we are calling on a very small business, in which case you've got to call
          on the CEO or one of the key execs because no one else can make any decisions.
        </blockquote>
        <p>
          Todd suggests to ask 5 questions:
        </p>
        <ul>
          <li><b>Process</b> - how does company buy solutions like the one you're offering?</li>
          <li><b>Need</b> - how badly does this company need a solution like yours?</li>
          <li><b>Authority</b> - which individuals have the authority to make the purchase happen?</li>
          <li><b>Money</b> - do they have the funds to buy what you're selling? how much does NOT solving the problem cost them?</li>
          <li><b>Estimated Timing</b> - what are the budget and decision time lines for a purchase?</li>
        </ul>
        <p>
          After a call don't forget to send an email with questions, such as "Will you agree to this closing time line?"
        </p>
        <p>
          Two common situations when you contact a wrong person in organization: 1) a person invites you, but isn't
          interested in your product, but wants a free consultancy; 2) person thinks about self as a change agent,
          but has no power - you ask them "Have you ever brought other technology into your company?" - "Well, no, but
          you know, I've only been here 6 months nad this is what's going to let me make a big difference."
        </p>
        <h3>Tactics</h3>
        <p>
          David Skok, general partner at Matrix Partners has taken 3 companies public and 1 was acquired. He says that
          doing cold calls is very expensive and it's better to do marketing first, get relatively hot prospects and
          pass them on to sales to close. Then try to qualify the prospects by likelihood to close - e.g. if they left
          e-mail, when accessing your free courses on site, they are hotter. If they are some tiny business on Etsy or
          Ebay, they are less likely to buy a big package.
        </p>
        <p>
          Mark Suster from Upfront Ventures classifies deals into A, B and C, A are likely to close in 3 months,
          B - within 3 to 12 months, C - unlikely to close in a year. A deals take 66-75% of salesperson's time,
          B - depends on sales pipeline, C - no time at all - they go to marketing. Marketing's job is (1) to arm
          sales reps with presentations, ROI calculators, competitive analysis etc. and (2) to aim at best leads.
        </p>
        <p>
          Finally, you convert prospects and close the deals. Lay out purchasing timeline and ask "yes" or "no" - e.g.
          "We'll set up a pilot system for you within 2 weeks After 2 weeks, if you like the system we've built and it
          meets your needs, you'll buy from us. Yes or no?". Binary answer helps you to waste less time on cusomters who
          are just unwilling to buy. You may have a field sales team or inside one.
        </p>
        <p>
          Remember to put yourself in place of your customer and don't forget about questions they might have and be
          blocked by, e.g. "is this the best solution on the market?" or "am I sure this works for me?". Possible
          solutions for those:
        </p>
        <ul>
          <li>Remove the needs for installing software with SaaS</li>
          <li>Free trials</li>
            <li>Channel partners (resellers)</li>
            <li>Demo videos</li>
            <li>FAQs</li>
            <li>Reference customers (testimonials, case studies)</li>
            <li>Email campaigns</li>
            <li>Webinars or personal demos</li>
            <li>Ease of installatino and ease of use</li>
            <li>Low introductory price (less than $250/month for SMB, $10,00 for enerprises)</li>
            <li>Eliminating committee decision making</li>
        </ul>
        <h4>Case study: JBoss</h4>
        <p>
          Middleware software provider, created a sales funnel that drove $65 million in revenue just 2 years after
          founding (and were later acquired by RedHat for $350 million).
        </p>
        <p>
          JBoss initially focused on generating leads, over 5 million people downloaded its free software through
          SourceForge, but JBoss had no contact information of those people. To get it, they gave away their
          documentation for free (previouslly they used to charge for it), in exchange for contact details.
          This generated over 10,000 leads per month.
        </p>
        <p>
          Then they qualified those leads to determine most likely to buy. The company used Eloqua, marketing automation
          software, to determine the pages and links a prospect engaged with before accessing documentation. Prospects,
          who spent a lot of time on support pages were good candidates for payed JBoss support service - main source of
          income. Marketing team would further contact those to determine, if they had a desire to get deal done.
        </p>
        <p>
          Finally, marketing would pass those prospects to sales with their calls, demos, white papers etc. The sales
          team was able to close about 25% of leads, whereas industry average is 7-10%. Unqualified leads, not ready for
          sales yet, were put into nurturing campagins, received JBoss Newsletter, invitations to webinars, were
          encouraged to subscribe to JBoss blog. After a certain time of nurturing, they were brought back into sales
          pipeline. Each deal's cost was about $10,000.
        </p>
        <h3>Chapter 19. Affiliate Programs</h3>
        <p>
          Amazon, Zappos, eBay, Orbitz, Netflix use affiliate programs to drive significant portions of their revenue.
          Interviewed Kris Jones, founder of Pepperjam, which became the 4th largest affiliate network and was acquired
          by eBay in 2009. At one point, it had a single advertiser, generating $50 million annually through its network.
        </p>
        <h4>Strategy</h4>
        <p>
          Affiliate programs are frequently found in retail, information products and lead generation. In retail
          the market size is over $2 billion annually with largest programs being Amazon, Target and Walmart. Amazon pays
          4-8.5% of each sale, depending on how many items affiliate sells per month. Amazon and eBay have their own
          affiliate programs, but this is far too expensive. More often online retailers, such as Walmart, Apple,
          Starbucks, The North Face, The Home Depot, Verizon, Best Buy and others go through affiliate
          networks, such as Comission Junction (CJ), Pepperjam and LinkShare.
        </p>
        <p>Main categories of affiliate programs:</p>
        <ul>
          <li>
            <b>Coupon/deal sites</b> - RetailMeNot, CouponCabin, Brad's Deals, Slickdeals - offer discounts and take a share;
            e.g. when you search for "Zappos discount", RetailMeNot is likely to rank highly in search. When you visit
            RetailMeNot, you get coupon codes for Zappos; if you click through and buy something using a code, RetailMeNot
            gets a percentage.
          </li>
          <li>
            <b>Loyalty programs</b> - Upromise or Ebates have reward programs that offer cash back on purchases made
            through their partner networks. They earn money based on the amount their members spend through retail
            affiliate programs. E.g. if 1000 members buy gift certificates to Olive Garden, Upromise will get a
            percentage of every dollar spent. Then they pay part of what they earned back to their members.
          </li>
          <li>
            <b>Aggregators</b> - Nextag or PriceGrabber aggregate products from retailers. They often add information
            to product listings, like additional ratings or price comparisons.
          </li>
          <li>
            <b>Email lists</b> - many affiliates have large email lists to which they will recommend products
          </li>
          <li>
            <b>Vertical sites</b> - many 100,000s of sites (including vertical blogs) have amassed significant
            audiences geared toward a vertical, such as parenting, sports or electronics.
          </li>
        </ul>
        <p>
          Selling information products (e-books, software, music and education) through these is increasingly popular
          as creation of another digital copy has 0 cost. By far the largest affiliate network for info products is
          ClickBank, where affiliate commissions often reach 75%. ClickBank has more than 100,000 affiliates and
          millions of products.
        </p>
        <p>
          Lead generation is $26 billion industry. Insurance companies, law firms, mortgage brokers all pay hefty
          commissions to get customer leads. Depending on the industry, lead may include working email address, home
          address, phone number or even a credit score. Popular lead-gen networks are Affiliate.com, Clickbooth,
          Neverblue and Adknowledge.
        </p>
        <p>
          Affiliate programs are popular with financial services and insurance companies because the value of each
          customer is so high. Health or auto insurance is very expensive, thus leads are expensive, too. Insurance
          companies are top Google AdWords spenders, often paying $50-100 for a single click.
        </p>
        <h4>Tactics</h4>
        <p>
          How much of a CAC are you willing to pay? You'd better go with affiliate networks, such as Commission Junction,
          Pepperjam, ShareASale instead of recruiting affiliates on your own. At Commission Junction you'll have to pay
          over $2,000 upfront. However, affiliate sales will quickly cover these costs. Or you can build your own
          affiliate network, recruiting partners from your customer base or people, who have access to a group of
          customers you want to reach. In this case you don't have to pay all in cash, but can e.g. give away premium
          accounts, if you're based on Freemium model. E.g. Dropbox referral program was giving away free storage space;
          QuiBids, top penny auction site, built out a referral program for its current customers, giving free bids to
          people who refer other customers.
        </p>
        <p>
          The first place to look for affiliates is your own customer base. After that conteact content creators,
          bloggers, publishers, social media influencers, email list curators. Monetizing blogs is not easy, so those
          content creators might often look for $.
        </p>
        <p>
          Maneesh Sethi, popular blogger at HacktheSystem has long been an affiliate for many products.
          He was a cusomter of a product that taught SEO tactics. He loved the program, so he contacted the company
          himself and worked out a deal with them to give him a commission for each new customer he sent their way.
          After agreeing to terms, Maneesh sent out an email to his list, mentioning how the SEO program had helped
          him get better rankings on Google. That single offer has made him nearly $30,000 in 2 years and has made
          the company much more. He was also recommending RescueTime time-tracking app to more than 3,000 people,
          being one of its top affiliates. He says that building relationship with content creators is key: give
          them free access to product, help create content.
        </p>
        <p>
          Larger companies like Amazon or Netflix optimized how much they pay to affiliates for each lead. Startup
          will be less sure about underlying business and should start with a simpler approach like $5 flat fee or
          5% of the price. More complex affiliate programs segment products and reward top affiliates. eBay gives
          seasonal coupon codes to products it wants to push. Tiered payout programs are also popular - if you drive
          more transactions, your rate goes up and you make more money.
        </p>
        <h4>Major affiliate networks</h4>
        <ul>
          <li>
            <b>Commission Junction</b> - $2,000 upward minimum to sell your prodcut through it, but it curates affiliates and
          publishers
          </li>
          <li><b>ClickBank</b> - leader in infoproducts, cheap to start ($50 to list a product)</li>
          <li><b>Affiiliate.com</b> - very strict affiliate approval, claims higher-quality traffic</li>
          <li>
              <b>Pepperjam</b> - started by Kris Jones, the Pepperjam Exchange encompasses mobile, social, offline retail, print etc.
              Promotes customer support and transparency as selling points for its network, which costs $1,000 to join.
          </li>
          <li><b>ShareASale</b> - over 2,500 merchants, flexible commission structures, $500 to start</li>
          <li>
            <b>Adknowledge</b> - offers ad-buying services in addition to affiliate campaigns;
            works in mobile, search, social media and display ads, so you have affiliates and CPC in one platform
          </li>
          <li>
            <b>LinkShare</b> - helps companies find affiliates and build lead-gen programs for them. Macy's, Avon and
            Champion manage affiliates through them
          </li>
          <li>
            <b>MobAff</b> - mobile affiliate network, utilizes SMS, push notifications, click to call, mobile display
            and mobile search
          </li>
          <li>
            <b>Neverblue</b> - targeted towards advertisers, who spend more than $20,000 per month, works with
            advertising partners on their advertisement and campaigns.
          </li>
          <li>
            <b>Clickbooth</b> - uses search, email and many Web sites to promote brands like DirecTV, Dish Network and
            QuiBids.
          </li>
          <li>
            <b>RetailMeNot, Inc. (formerly WhaleShark Media)</b> - owns some of the most popular coupon sites in the
            world, including RetailMeNot and Deals2Buy.com. Google search requests to "term + coupon" often lead here.
          </li>
        </ul>
        <p>
          Affiliate networks are a bit nicer than SEM/PPC, because you don't risk. If your campaign is bad, you don't
          lose money - you just don't receive customers.
        </p>
        <h3>Chapter 20. Existing Platforms</h3>
        <p>
          Web sites, apps or networks with uge amounts of users. Apple and Android app stores, Mozilla and Chrome
          browser extensions, social platofrms like Facebook, Twitter and Pinterest, new rapidly growing platforms like
          Tumblr, Snapchat.
        </p>
        <p>
          Mobile video-sharing app Socialcam suggested users sign up with Facebook and Twitter, promoted user videos
          on both platforms and encouraged to invite friends from each site. It went on to hit 60 million users within
          12 months.
        </p>
        <h4>Strategy: app stores</h4>
        <p>
          Apps get easily discovered in App store, when they are top in rankings or featured. Rankings group apps by
          category, country, popularity and editor's choice.
        </p>
        <p>
          Trainyard, a paid iOS game developed by Matt Rix wasn't growing the way he hoped. He tried creating a free
          version (Trainyard Express). An editor at a popular Italian blog wrote a glowing piece on it almost immediately.
          This propelled the app to number-one free app in Italy - netting more than 22,000 downloads on the day alone!
          The app then hit the top spot in the UK and was downloaded more than 450,000 times in a week. 7 days later
          Appled decided to feature it and that dwarfed everything that was before. Downloads skyrocketed by 50x and
          persisted there while feature was live. Even after that downloads remained significantly elevated.
        </p>
        <p>
          Mark Johnson, founder of Focused Aps LLC tells how promotions work:
        </p>
        <ol>
          <li>Ads get the [app] somewhere into the charts</li>
          <li>Now it's in the charts, more people see it</li>
          <li>So it gets more organic downloads</li>
          <li>Which makes it go a bit higher up in the charts</li>
          <li>Now even more people see it and it gets more organic downloads</li>
          <li>People like it and it get more organic downloads</li>
          <li>It goes up higher in the charts</li>
          <li>Repeat from 5</li>
        </ol>
        <p>
          To get apps to top, they buy ads from AdMob, installs from Tapjoy, cross-promote their apps through networks
          or even buy their way through FreeAppADay. High ratings are important - editors choose apps to feature based
          on them - that's why even top apps are continually asking to rate them. Promotion tricks are good, but good UX
          is what's most important - Instagram, Path, Google Maps, Pandora, Spotify.
        </p>
        <p>
          Browser extensions in Chrome and add-ons in Firefox - e.g. Adblock Plus and YouTube video saving, bookmarks and
          passwords managers. Evernote said that its usage went up by 205% thanks to extension - and they already had
          6 million users. Again, portals with extensions and add-ons have features and rankings.
        </p>
        <h4>Strategy: social sites</h4>
        <p>
          New social platforms like Snapchat and Vine are emerging all the time. Sometimes you can find your place by
          filling in a gap in such platoform's functionality. E.g. in mid-2000s MySpace was the most visited social
          network in the world and YouTube filled the niche of videa sharing by allowing users to embed videos and users
          were directed back to YouTube by those embeds, which led to YouTube explosive growth. Bitly fulfilled the
          need for shorter links on Twitter. Imgur complemented image sharing functionality for reddit users. Airbnb saw
          much of its early growth from Craigslist customers and designed a special "Post to Craigslist" button, which
          drove 10,000s customers. PayPal targeted eBay users as its first customers - it purchased goods from eBay and
          required selleres to accept PayPal - this made them more popular than eBay's own payment system.
        </p>
        <h3>Case study: Evernote</h3>
        <p>
          Evernote (valued over $1 billion now) focused on every new and existing platforms to ride the bandwagon of
          that platoform's initial marketing push and increase chances of being featured. Evernote CEO Phil Libin says
          that they wanted Evernote to support every new device or platform from day 1. When iPhone launched, they were
          one of the very first iPhone apps, for iPod, Android and Kindle Fire they created a version specifically
          designed for the platform and available from the day 1.
          Evernote was featured in the Android store for 6 straight weeks in the early days which gave
          it 100,000s new customers. When Verizon picked up Android phones and started its marketing push, Evernote
          benefited from its effort. Alex Pachikov of Evernote says that big companies take new platforms as a gamble
          and want to wait and see, if it succeeds or not, which is not an option for a startup - you have to gamble.
          Evernote flopped doing the same on Nokia, Windows and BlackBerry - that's ok, wins justify losses.
        </p>
        <p>
          They thought: what can we do with our apps to make Apple/Google/Microsoft AppStore/whatever editors feature us?
          They crafted Evernote Peek which looked like magic and was showcased by Apple itself in their commercial,
          featured and number 1 in Education category for a month and brought 500,000 new users to Evernote's main
          business, which was one of the main drivers of growth for the project in 2012.
        </p>
        <h3>Trade shows</h3>
        <h4>Strategy</h4>
        <p>
          How to decide, which trade shows to attend? Visit a year before as a guest or ask those who did "How crowded
          was it? How high was the quality of the attendees? Would you go again?". Plan of actions from Brad Feld,
          partner at Foundry Group:
        </p>
        <ul>
          <li>Set your goals for a year: press, investors, major customers, partnerships?</li>
          <li>Write down all events in your industry</li>
          <li>
            Evaluate events in terms of your goals: if you need to personally interact with few major prospects,
            go for shows with more intimate atmosphere, if you just need more interaction - go for crowded ones.
          </li>
          <li>Figure out your budget, remember that your goals might change over time.</li>
          <li>
            Estimate CAC: take attendee list (ask organisers, if it's not available). E.g. if there are 10,000 people
            coming, 30% of them fit the profile of potential customer and attendance cost is $10,000 it's highly
            profitable to go if your LTV is $5k, but not so, if it's $50.
          </li>
        </ul>
        <p>
          SureStop did conversations with prospect partner companies, figured out what features they wanted from them,
          focused on them and only after that increased their expenses.
        </p>
        <h4>Tactics</h4>
        <p>
          Your preparations determine how successful you will be. Arrange meetings beforehand. E.g. Brian Riley sent
          well-researched emails beforehand with explanation of how SureStop and its technology can benefit them +
          a one-pager about the company. Jason Cohen of WP Engine/Smart Bear Software says that you should arrange
          meetings by sending emails like "At [Trade show X]: can we chat for 5 minutes?", at least 5 per day, you can
          also organise dinner/drinks afterwards. You can meet:
        </p>
        <ul>
          <li>
            Editors of online and offline magazines. Often overlooked, editors are your key to real press. I've
            been published in every major programming magazine; almost all of that I can directly attribute to talking
            with editors at trade shows! It wors.
          </li>
          <li>Blogger you like, especially if they are willing to write about you</li>
          <li>Existing customers</li>
          <li>Potential customers, currently trialing your stuff</li>
          <li>Your vendors</li>
          <li>Your competition</li>
          <li>Potential partners</li>
        </ul>
        <p>
          Media guys are attending trade shows specifically to see, what's going on in industry - give them something
          to write about!
        </p>
        <p>
          Mark Suster from Upfront Ventures suggests hosting dinners for journalists, potential
          customers/partners. You should start with inviting a few interesting friends, then work hard to bag a brand
          name person who others will want to meet. Just one. After that mention him to everyone else (along with others)
          and they'll come. Same with customers - invite several customers and several prospects with a few employees
          of yours - potential customers like to talk to existing cusomters for reference. Final tip: picking a hot
          venue is one of the best ways to bag high-profile people. However, this can be too costly, so you can split
          the costs with couple of other companies and extend your network that way.
        </p>
        <p>
          Don't forget about good booth location at the show and giveaways. Coffee mugs and stress balls are proven, but
          you can go with something more creative rleated to your proposition, such as yo-yos, coconuts, cigar cutters,
          sunglasses, key chains. You can give away as many bags with your company's name as possible to put tons of
          other giveaways into. Don't forget about specific Call To Action on your giveaways. Also, make your booth
          exciting, bring attention to it - show videos or make demonstrations of your product. SureStop managed to
          work out a relationship with Jamis, one of the largest players, and now make tons of sales through them.
        </p>
        <h3>WORK IN PROGRESS - TO BE CONCLUDED</h3>
      </div>
    );
  }
}

export default Content;
export {metadata};