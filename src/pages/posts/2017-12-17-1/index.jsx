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
  time_to_read: 20,
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

      </div>
    );
  }
}

export default Content;
export {metadata};