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
          In 1999 Half.com renamed a town called Halfway into Half.com for a year and hired a couple of employees there.
          Josh Copelman launched Half.com on Today show with the mayor of Halfway, Oregon.
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
          Blendtec, blender manufacturer in Utah, in 2007 created a series of videos "Willl it blend?",
          where they blended a rake, golf balls and iPhone. iPhone video received over 8 million views , and series
          became a top-100 most viewed on youtube.
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
      </div>
    );
  }
}

export default Content;
export {metadata};