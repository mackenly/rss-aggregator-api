export const wordpressTestFile: string = String.raw`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	
	xmlns:georss="http://www.georss.org/georss"
	xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
	>

<channel>
	<title>Ryan Hayes</title>
	<atom:link href="https://ryanhayes.net/feed/" rel="self" type="application/rss+xml" />
	<link>https://ryanhayes.net/</link>
	<description>Software and Startup Skills to Boost Your Business and Career</description>
	<lastBuildDate>Fri, 08 Mar 2024 16:20:08 +0000</lastBuildDate>
	<language>en-US</language>
	<sy:updatePeriod>
	hourly	</sy:updatePeriod>
	<sy:updateFrequency>
	1	</sy:updateFrequency>
	<generator>https://wordpress.org/?v=6.4.3</generator>

<image>
	<url>https://i0.wp.com/ryanhayes.net/wp-content/uploads/2014/01/Ryan-Hayes_ugjn6e.jpg?fit=32%2C32&#038;ssl=1</url>
	<title>Ryan Hayes</title>
	<link>https://ryanhayes.net/</link>
	<width>32</width>
	<height>32</height>
</image> 
<site xmlns="com-wordpress:feed-additions:1">209681201</site>	<item>
		<title>Planetscale Likely Lost Over Half Their Customers This Week. Here&#8217;s Why That&#8217;s Good For The Business and The Customers That Stay</title>
		<link>https://ryanhayes.net/planetscale-free-tier-ending-good-for-customer/</link>
					<comments>https://ryanhayes.net/planetscale-free-tier-ending-good-for-customer/#respond</comments>
		
		<dc:creator><![CDATA[Ryan Hayes]]></dc:creator>
		<pubDate>Thu, 07 Mar 2024 17:19:30 +0000</pubDate>
				<category><![CDATA[Articles]]></category>
		<category><![CDATA[Entrepreneurship]]></category>
		<category><![CDATA[Software]]></category>
		<guid isPermaLink="false">https://ryanhayes.net/?p=1001360982</guid>

					<description><![CDATA[<p>All the indie devs on X today are upset at Planetscale. Everyone is leaving. Why? This week, PlanetScale decided to remove their Free tier, but there are lessons here for small startups and larger businesses alike. Their new, lowest tier of database is $40. $40! But this is not just any database, this is a [&#8230;]</p>
<p>The post <a href="https://ryanhayes.net/planetscale-free-tier-ending-good-for-customer/">Planetscale Likely Lost Over Half Their Customers This Week. Here&#8217;s Why That&#8217;s Good For The Business and The Customers That Stay</a> appeared first on <a href="https://ryanhayes.net">Ryan Hayes</a>.</p>
]]></description>
										<content:encoded><![CDATA[
<p>All the indie devs on X today are upset at Planetscale. Everyone is leaving. </p>



<p>Why?</p>



<p>This week, <a href="https://planetscale.com/blog/planetscale-forever">PlanetScale decided to remove their Free tier</a>, but there are lessons here for small startups and larger businesses alike.</p>



<p>Their new, lowest tier of database is $40.</p>



<p>$40!</p>



<p>But this is not just any database, <strong>this is a fully managed hyper-scaling database</strong>.</p>



<p>This means it has incredible infrastructure running for automation, governance, migrations, rollbacks, synchronization and sharding, incredibly detailed metrics and logging to support all this, and more.</p>



<p>For $40.</p>



<p><strong>If my normal &#8220;developer&#8221; rate is $150 an hour, this is less than 1/3 of that, so about 20 minutes of work per month to build and maintain all this infrastructure myself.</strong></p>



<p><strong>Can I build all that, and run it, and support it at midnight if something breaks and spend less than 20 minutes on it</strong><em>?</em></p>



<p>Absolutely not.</p>



<p>SECONDLY,</p>



<p><strong>Free tiers are generally a loss leader</strong>, to gain a pipeline of users that can *eventually* become a paying customer, and <strong>the idea is that these paying customers eventually can cover all of the free tier folks&#8217; expenses</strong> for the business as well as the paying tier customers&#8217; own.</p>



<p>This does work to get users, but it is <strong>very hard to make this sustainable</strong> when you:</p>



<ol>
<li>Have almost all free tier users that don&#8217;t *actually* need what you offer (in this case you may need MySQL, but don&#8217;t need a fully managed, ultra-scalable, lightening fast instance shaving a few milliseconds from your queries).</li>



<li>Are not profitable yet.</li>
</ol>



<p>If you are a hobbyist, I can see why the removal of the free tier and you having to move away stinks, because it *is* work &#8211; and not very fun work at that.</p>



<p>However, there are lessons here to help grow your small business and understand why large organizations buy some products over others &#8211; and why Planetscale is coming to terms with this reality.<br /></p>



<h2 class="wp-block-heading">Lesson 1: Revenue Growth vs Profitability</h2>



<p>There are two ways for a startup to be successful &#8211; direct profitability and an &#8220;Exit&#8221;.</p>



<h3 class="wp-block-heading">Profitability</h3>



<p>Direct profitability is the easiest to understand. If the money coming in is greater than the money you spend, then you are profitable! Congratulations, you are a successful business!<br /><br />Planetscale is not *yet* profitable, but that doesn&#8217;t mean that success isn&#8217;t possible. Why? Because there&#8217;s another way to be successful..</p>



<h3 class="wp-block-heading">Revenue Growth</h3>



<p>Many startups, likely Planetscale (I don&#8217;t know about their funding and structure, but they probably have taken investments), have <strong>the goal of growing revenue as high and fast as possible at nearly all costs</strong> &#8211; even if it means *losing* money.<br /><br />At first glance, this seems C<em>r<strong>A</strong></em><strong>z</strong>Y!!<br /><br />Why would a business *be ok* with losing money?<br /><br />Well, there are a few reasons, but they all revolve around the &#8220;exit&#8221;.<br /><br />As long as revenue is increasing, it&#8217;s ok for expenses to increase in tandem, because at some point you have one of two &#8220;exits&#8221;.<br /><br />The first Exit type is acquisition.<br /><br />When a large company buys a another smaller one like this that is *not* profitable, but increasing revenue, the larger company can find &#8220;synergies&#8221;, meaning HR becomes a duplicate area, some dev teams become duplicates, executive teams can become duplicates &#8211; so, layoffs happen.<br /><br />This is painful, but buying a company and reducing these overhead duplications means revenue stays the same, and costs dramatically decrease, and, in most cases &#8211; instant profitability.<br /><br />The second is when you get to profitability by yourself from this method. <br /><br />This, too, is painful, and many times the cuts come in the form of free tiers or layoffs, but generally fewer layoffs since you still need HR and all those other roles.<br /><br />The downside of *not* being profitable is that you have, quite literally, a limited expected runway. If you are losing money, you can calculate how long you will stay in business.<br /><br />If I have $35, and I buy one $5 latte every month (assuming that&#8217;s my only expense), I&#8217;ll be broke in 7 months. If I spend that in a day, I&#8217;ll have one week until I&#8217;m broke.<br /><br />The only way to increase runway in a company is to:</p>



<ol>
<li>Make more money (revenue)</li>



<li>Be given more money (investment, meaning strings are probably attached)</li>



<li>Borrow more money (debt)</li>
</ol>



<p>And not being profitable means you are kicking the can down the road trying to get to an Exit someday.<br /><br /><strong>If your business closes before you get to that exit, you have to take the <em>BAD</em> exit, and your customers lose access to your product or service.</strong></p>



<p><strong><em>And what if you have already built a multimillion-dollar business on a product that suddenly goes out of business</em></strong></p>



<p>Well, that leads to the second lesson here&#8230;.</p>



<h2 class="wp-block-heading">Lesson 2: Derisking</h2>



<p>If there&#8217;s one thing I&#8217;ve learned in personal finance and business, it&#8217;s that when you don&#8217;t have a lot of money, you should take <em>a lot</em> of risks (calculated, of course, let&#8217;s not get crazy here).<br /><br />However, as you grow wealth and your business, your mindset should slowly shift.<br /><br />Healthy, growing, and large organizations can have double digit (10% or so) revenue growth, generally, a far cry from some startups boasting 50% or more in some quarters.<br /><br />However, at that point they consistently make &#8211; and have &#8211; a <em>lot</em> more money.<br /><br />The bets they make now have a more balanced approach:<br /><br /><strong>The decision makers at companies are looking to make an investment that has great upside when things go right, but minimized downside if something goes wrong</strong>.<br /><br />They want to make calculated bets on their future and if your database provider (I dunno, in my opinion, a fairly key part of any app architecture) goes out of business, then the migration off of it will be incredibly expensive and sometimes near impossible depending on how proprietary the platform is!<br /><br />Because of this, CTOs and decision makers are always looking to make a great return on investment, but while keeping a close eye on the tail risk of their decision.<br /><br />If they make a decision and the worst-case scenario, is you can&#8217;t move your application, or it would take an effort larger than your own business could sustain, is that acceptable?<br /><br />For most orgs, probably not.<br /><br />For Planetscale, specifically, they likely have a few customers that pay the bills for everyone else &#8211; big customers! Millions of dollars per year (per month?) customers!<br /><br />Those paying customers want to know they are safe, and Planetscale is making the decision to make a move to de-risk those customers&#8217; choice to use their platform.</p>



<p>Remember, adding in this extra layer of trust could attract just *one* of these large customers and pay for lots of re-hires!</p>



<p>They even say they focus on problems that &#8220;enterprise-scale&#8221; companies have. Do you think &#8220;enterprise-scale&#8221; companies can foot a $40/mo bill to test out a database before going all in? Yes. Do they NEED a freemium tier? No.<br /><br />This means I can&#8217;t host free stuff on the platform anymore, but it also means that if my business makes money and is successful, then I can be more confident that <em>I </em>won&#8217;t go out of business just because Planetscale can&#8217;t pay the bills because I have 5 other free projects they are hosting and trying to use as a loss leader.</p>



<p>Side-note: If you are a startup and can&#8217;t get a handful of customers within the first year or so to cover $40/mo, then I think you should either charge more or pick a new idea. Then again, you might not need an &#8220;enterprise-scale&#8221; database, either.</p>



<h2 class="wp-block-heading">Conclusion</h2>



<p>Planetscale is making a decision to move away from freemium, which is a better path in their eyes to profitability (hey, the numbers agree with them).<br /><br />Remember that profitability increases stability, which increases trust for <em>real</em> businesses that are looking to balance &#8220;hey this is cool tech!&#8221; with &#8220;could we survive if they sent us an email and said they&#8217;re closing down in 30 days&#8221;?<br /><br />Free stuff and being frugal is very useful in the very early days of side projects, and for businesses to get leads, but when you start making money, mindsets shift.<br /><br />Swing for the fences, but don&#8217;t bet the farm.</p>
<span class="et_bloom_bottom_trigger"></span><p>The post <a href="https://ryanhayes.net/planetscale-free-tier-ending-good-for-customer/">Planetscale Likely Lost Over Half Their Customers This Week. Here&#8217;s Why That&#8217;s Good For The Business and The Customers That Stay</a> appeared first on <a href="https://ryanhayes.net">Ryan Hayes</a>.</p>
]]></content:encoded>
					
					<wfw:commentRss>https://ryanhayes.net/planetscale-free-tier-ending-good-for-customer/feed/</wfw:commentRss>
			<slash:comments>0</slash:comments>
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">1001360982</post-id>	</item>
		<item>
		<title>Azure Dev: Problem starting the plugin CredentialProvider.Microsoft [Solved]</title>
		<link>https://ryanhayes.net/azure-devproblem-starting-the-plugin-credentialprovider-microsoft-solved/</link>
					<comments>https://ryanhayes.net/azure-devproblem-starting-the-plugin-credentialprovider-microsoft-solved/#respond</comments>
		
		<dc:creator><![CDATA[Ryan Hayes]]></dc:creator>
		<pubDate>Mon, 15 Mar 2021 17:44:56 +0000</pubDate>
				<category><![CDATA[Articles]]></category>
		<category><![CDATA[Break/Fix]]></category>
		<guid isPermaLink="false">https://ryanhayes.net/?p=1001349175</guid>

					<description><![CDATA[<p>In this break/fix post, I&#8217;m going to show you how to fix a specific error that I was getting in an Azure DevOps pipeline during a dotnet publish command that stated &#8220;Problem starting the plugin &#8216;CredentialProvider.Microsoft'&#8221;. Here&#8217;s the full error message: A credential problem? It was only failing on one of three project publishes and [&#8230;]</p>
<p>The post <a href="https://ryanhayes.net/azure-devproblem-starting-the-plugin-credentialprovider-microsoft-solved/">Azure Dev: Problem starting the plugin CredentialProvider.Microsoft [Solved]</a> appeared first on <a href="https://ryanhayes.net">Ryan Hayes</a>.</p>
]]></description>
										<content:encoded><![CDATA[
<p>In this break/fix post, I&#8217;m going to show you how to fix a specific error that I was getting in an Azure DevOps pipeline during a <code>dotnet publish</code> command that stated &#8220;Problem starting the plugin &#8216;CredentialProvider.Microsoft'&#8221;.</p>



<p>Here&#8217;s the full error message:</p>



<pre class="wp-block-code"><code>C:\Program Files\dotnet\sdk\5.0.201\NuGet.targets(131,5): error : <strong>Problem starting the plugin</strong> 'C:\Users\VssAdministrator\.nuget\plugins\netcore\CredentialProvider.Microsoft\CredentialProvider.Microsoft.dll'. Plugin '<strong>CredentialProvider.Microsoft</strong>' <strong>failed within 5.256 seconds</strong> with exit code -1.</code></pre>



<h2 class="wp-block-heading">A credential problem?</h2>



<p>It was only failing on one of three project publishes and on the NuGet portion of the publish command. <strong>My first thought was that the credentials might be incorrect.</strong> We recently<a href="https://ryanhayes.net/expecting-developers-to-leave/"> had a developer leave</a> and I thought that potentially something was set up with his credentials and was revoked. I double-checked the <a href="https://docs.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&amp;tabs=yaml">service connections in Azure DevOps</a> and everything looked to be ok.</p>



<h2 class="wp-block-heading">A .NET CLI version upgrade?</h2>



<p>I then noticed that Azure DevOps was using Microsoft Build Engine version 16.9 as opposed to my local version of 16.8. I upgraded locally, and couldn&#8217;t reproduce the issue. Everything was great there.</p>



<h2 class="wp-block-heading">A timeout issue? (yes)</h2>



<p>This is when I took a closer look at the error message below.</p>



<pre class="wp-block-code"><code>C:\Program Files\dotnet\sdk\5.0.201\NuGet.targets(131,5): error : Problem starting the plugin 'C:\Users\VssAdministrator\.nuget\plugins\netcore\CredentialProvider.Microsoft\CredentialProvider.Microsoft.dll'. Plugin 'CredentialProvider.Microsoft' <strong>failed within 5.256 seconds</strong> with exit code -1.</code></pre>



<p>As it turns out, NuGet defaults to a 5-second timeout, which very closely aligns with the 5.256 timeframe of the error. Doing some more investigating, I found you can increase this timeout by setting an environment variable. I decided to increase the timeout from 5 to 20 seconds in the <code>azure-pipelines.yaml</code> and guess what? <em>It worked!</em></p>



<pre class="wp-block-code"><code># in your azure-pipelines.yaml

variables:
- name: NUGET.PLUGIN.HANDSHAKE.TIMEOUT.IN.SECONDS
  value: 20
- name: NUGET.PLUGIN.REQUEST.TIMEOUT.IN.SECONDS
  value: 20</code></pre>



<p>The above tells the running pipeline to inject the following environment variables during the run:</p>



<pre class="wp-block-code"><code>$env:NUGET_PLUGIN_HANDSHAKE_TIMEOUT_IN_SECONDS=20
$env:NUGET_PLUGIN_REQUEST_TIMEOUT_IN_SECONDS=20</code></pre>



<p>Maybe it was the Azure DevOps upgrade of the build tools to 16.9 made Azure Pipelines get <em>just slow enough</em> to push it past the 5-second timeout for the CredentialProvider.Microsoft plugin. </p>



<p>We&#8217;re also connecting to 3 external feeds during this project, so it&#8217;s more than the average project that may only connect to the main NuGet feed.</p>



<p>Hopefully, this gives you some insight into the problem and a quick solution to save you a few hours. On to the next fire!</p>
<span class="et_bloom_bottom_trigger"></span><p>The post <a href="https://ryanhayes.net/azure-devproblem-starting-the-plugin-credentialprovider-microsoft-solved/">Azure Dev: Problem starting the plugin CredentialProvider.Microsoft [Solved]</a> appeared first on <a href="https://ryanhayes.net">Ryan Hayes</a>.</p>
]]></content:encoded>
					
					<wfw:commentRss>https://ryanhayes.net/azure-devproblem-starting-the-plugin-credentialprovider-microsoft-solved/feed/</wfw:commentRss>
			<slash:comments>0</slash:comments>
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">1001349175</post-id>	</item>
		<item>
		<title>Expecting Developers to Leave</title>
		<link>https://ryanhayes.net/expecting-developers-to-leave/</link>
					<comments>https://ryanhayes.net/expecting-developers-to-leave/#respond</comments>
		
		<dc:creator><![CDATA[Ryan Hayes]]></dc:creator>
		<pubDate>Wed, 13 Jan 2021 14:05:10 +0000</pubDate>
				<category><![CDATA[Articles]]></category>
		<guid isPermaLink="false">https://ryanhayes.net/?p=1001348406</guid>

					<description><![CDATA[<p>Because they will. My current team is the longest I&#8217;ve ever been with an organization (other than my own freelancing business), almost 5 years. Over the years the needs, motivators, situations, and lives of people within an organization can and will change. It&#8217;s the nature of life. There are obvious ways to reduce turnover, like [&#8230;]</p>
<p>The post <a href="https://ryanhayes.net/expecting-developers-to-leave/">Expecting Developers to Leave</a> appeared first on <a href="https://ryanhayes.net">Ryan Hayes</a>.</p>
]]></description>
										<content:encoded><![CDATA[
<p>Because they will.</p>



<figure class="wp-block-image size-large"><a href="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?ssl=1"><img fetchpriority="high" decoding="async" width="942" height="1300" data-attachment-id="1001348415" data-permalink="https://ryanhayes.net/expecting-developers-to-leave/pexels-photo-1467592/" data-orig-file="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?fit=942%2C1300&amp;ssl=1" data-orig-size="942,1300" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;Photo by Craig Adderley on &lt;a href=\&quot;https:\/\/www.pexels.com\/photo\/brown-wooden-side-by-side-door-1467592\/\&quot; rel=\&quot;nofollow\&quot;&gt;Pexels.com&lt;\/a&gt;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;brown wooden side by side door&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="pexels-photo-1467592" data-image-description="" data-image-caption="&lt;p&gt;Photo by Craig Adderley on &lt;a href=&quot;https://www.pexels.com/photo/brown-wooden-side-by-side-door-1467592/&quot; rel=&quot;nofollow&quot;&gt;Pexels.com&lt;/a&gt;&lt;/p&gt;
" data-medium-file="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?fit=217%2C300&amp;ssl=1" data-large-file="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?fit=742%2C1024&amp;ssl=1" src="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?resize=942%2C1300&#038;ssl=1" alt="brown wooden side by side door" class="wp-image-1001348415" srcset="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?w=942&amp;ssl=1 942w, https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?resize=217%2C300&amp;ssl=1 217w, https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?resize=742%2C1024&amp;ssl=1 742w, https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-1467592.jpeg?resize=768%2C1060&amp;ssl=1 768w" sizes="(max-width: 942px) 100vw, 942px" data-recalc-dims="1" /></a><figcaption>Photo by Craig Adderley on <a href="https://www.pexels.com/photo/brown-wooden-side-by-side-door-1467592/" rel="nofollow">Pexels.com</a></figcaption></figure>



<p>My current team is the longest I&#8217;ve ever been with an organization (other than my own freelancing business), <em>almost</em> 5 years. Over the years the needs, motivators, situations, and lives of people within an organization can and will change. It&#8217;s the nature of life.</p>



<p>There are obvious ways to reduce turnover, like avoiding burnout of your team, compensating people well, providing adequate training and opportunities, and aligning individuals with meaningful work. Even with all of these things, and no matter how much people say it, no one is guaranteed to be around forever &#8211; or even the next year.</p>



<p>Twice now in my career, I have had someone say to me &#8220;I don&#8217;t plan on going anywhere&#8221; and then offer their two-weeks notice within 3 months&#8217; time. <em>And that&#8217;s ok.</em></p>



<p>We should celebrate when someone gets an opportunity to take a chance and chase a dream, or grow, or get a new opportunity.</p>



<p>What makes a difference at these points, is that the organizations and teams that expected developers to leave fare far better than those that do not.</p>



<h2 class="wp-block-heading">Why should you expect developers to leave? </h2>



<p>You have probably heard the phrase: <em>&#8220;What if ______ gets hit by a bus?&#8221;</em>.</p>



<p>This effectively means what if something unforeseen happens and the person is no longer with the organization. This phrase actually causes a huge problem in a lot of teams. Getting hit by a bus is a rare event. When we pause to ask if someone will not be with us, we phrase it and <em>think about it</em> as if it is a rare occurrence. In reality, <a href="https://www.bls.gov/news.release/pdf/tenure.pdf">in January 2020, the average tenure for a Computer Science/Math employee was only 3.9 years</a>. This means that not only will someone leave on your team, it&#8217;s probably going to occur sooner than you think.</p>



<h2 class="wp-block-heading">Why does <em>expecting</em> developers to leave help them not leave?</h2>



<p>When we <em>expect</em> people to leave, our priorities change. We switch from “I can always just ask” to “Make sure we can be successful without you”.</p>



<p>When we change the culture to focusing on simplifying, documenting the “why”, and ensuring others can easily maintain code without the original author, we inherently reduce complexity. When we reduce complexity and the baseline requirement for understanding code and systems, we free up our minds to be more creative in other places. </p>



<p>This benefits teams not just when the developer leaves, but also helps free that person from questions when <em>new </em>developers join the project without the extra hand-holding.</p>



<p>Assuming devs will leave helps us unlock the full potential of our teams in creating real value for customers, both faster and with more brain bandwidth to build better solutions.</p>



<hr class="wp-block-separator"/>



<p><strong>Thanks for reading! </strong><em>Enjoy this article? <a href="https://ryanhayes.ck.page/0f2722ffb4">Join the newsletter!</a></em><br /><br /><em><strong>Ten years ago I thought I had to choose between good opportunities as a software developer in larger cities or living where I actually wanted to live</strong> (a much smaller town).</em><br /><br /><em><strong>I spent the next decade building</strong> a personal brand, a freelancing business, side projects, a local and online developer community, and more to create the career I wanted and live where I wanted.</em><br /><br /><em><strong>Now, I want to teach you to do the same.</strong> <a href="https://ryanhayes.ck.page/0f2722ffb4">Join me and hundreds of developers on my newsletter for my most popular posts here and other useful tips and tools to help make your own opportunities.</a></em></p>
<span class="et_bloom_bottom_trigger"></span><p>The post <a href="https://ryanhayes.net/expecting-developers-to-leave/">Expecting Developers to Leave</a> appeared first on <a href="https://ryanhayes.net">Ryan Hayes</a>.</p>
]]></content:encoded>
					
					<wfw:commentRss>https://ryanhayes.net/expecting-developers-to-leave/feed/</wfw:commentRss>
			<slash:comments>0</slash:comments>
		
		
		<post-id xmlns="com-wordpress:feed-additions:1">1001348406</post-id>	</item>
		<item>
		<title>What is Success Syndrome? (And How To Leverage It For Your Personal Brand)</title>
		<link>https://ryanhayes.net/what-is-success-syndrome-and-how-to-leverage-it-for-your-personal-brand/</link>
					<comments>https://ryanhayes.net/what-is-success-syndrome-and-how-to-leverage-it-for-your-personal-brand/#respond</comments>
		
		<dc:creator><![CDATA[Ryan Hayes]]></dc:creator>
		<pubDate>Wed, 06 Jan 2021 06:00:00 +0000</pubDate>
				<category><![CDATA[Articles]]></category>
		<category><![CDATA[blogging]]></category>
		<category><![CDATA[documentation]]></category>
		<category><![CDATA[personal brand]]></category>
		<category><![CDATA[success syndrome]]></category>
		<guid isPermaLink="false">http://ryanhayes.wpengine.com/?p=1001347713</guid>

					<description><![CDATA[<p>First, what does Success Syndrome look like for a software developer? It&#8217;s when you become successful at something and then subsequently become overwhelmed. This can happen if you get a promotion, become the &#8220;go-to&#8221; person for something, or take on new opportunities due to your new recognition. You started out just wanting to be helpful [&#8230;]</p>
<p>The post <a href="https://ryanhayes.net/what-is-success-syndrome-and-how-to-leverage-it-for-your-personal-brand/">What is Success Syndrome? (And How To Leverage It For Your Personal Brand)</a> appeared first on <a href="https://ryanhayes.net">Ryan Hayes</a>.</p>
]]></description>
										<content:encoded><![CDATA[
<p>First, what does Success Syndrome look like for a software developer? It&#8217;s when you become successful at something and then subsequently become overwhelmed. This can happen if you get a promotion, become the &#8220;go-to&#8221; person for something, or take on new opportunities due to your new recognition.</p>



<p>You started out just wanting to be helpful or useful, and now you&#8217;re overwhelmed and can&#8217;t keep up.</p>



<figure class="wp-block-image size-large"><a href="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?ssl=1"><img decoding="async" width="1880" height="1254" data-attachment-id="1001348325" data-permalink="https://ryanhayes.net/what-is-success-syndrome-and-how-to-leverage-it-for-your-personal-brand/pexels-photo-3771129/" data-orig-file="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?fit=1880%2C1254&amp;ssl=1" data-orig-size="1880,1254" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;Photo by Andrea Piacquadio on &lt;a href=\&quot;https:\/\/www.pexels.com\/photo\/desperate-evicted-male-entrepreneur-standing-near-window-3771129\/\&quot; rel=\&quot;nofollow\&quot;&gt;Pexels.com&lt;\/a&gt;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;desperate evicted male entrepreneur standing near window&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="pexels-photo-3771129" data-image-description="" data-image-caption="&lt;p&gt;Photo by Andrea Piacquadio on &lt;a href=&quot;https://www.pexels.com/photo/desperate-evicted-male-entrepreneur-standing-near-window-3771129/&quot; rel=&quot;nofollow&quot;&gt;Pexels.com&lt;/a&gt;&lt;/p&gt;
" data-medium-file="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?fit=300%2C200&amp;ssl=1" data-large-file="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?fit=1024%2C683&amp;ssl=1" src="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?resize=1880%2C1254&#038;ssl=1" alt="sad business guy standing near a window" class="wp-image-1001348325" srcset="https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?w=1880&amp;ssl=1 1880w, https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?resize=1024%2C683&amp;ssl=1 1024w, https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?resize=1536%2C1025&amp;ssl=1 1536w, https://i0.wp.com/ryanhayes.net/wp-content/uploads/2021/01/pexels-photo-3771129.jpeg?resize=1200%2C800&amp;ssl=1 1200w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" /></a><figcaption>Photo by Andrea Piacquadio on <a href="https://www.pexels.com/photo/desperate-evicted-male-entrepreneur-standing-near-window-3771129/" rel="nofollow">Pexels.com</a></figcaption></figure>



<p>If left unchecked, Success Syndrome can actually lead to burnout and potentially depression. This can be especially bad if you pin all your hopes on productivity or accomplishments fulfilling you.</p>



<p>Let me just say, though, that &#8220;Success Syndrome&#8221; is an indicator you&#8217;re doing <em>something</em> right. It means you&#8217;ve built trust, relationships, knowledge, and the start of a personal brand within your workplace or community. I&#8217;m not saying that that Success Syndrome is all good, but <em>I am</em> saying that the burnout is what the real issue is here. And burnout comes particularly fast when you have to field questions from peers from the former position, as well as from the new position during promotions while also trying to complete your regular developer work.</p>



<p>One useful observation is that many of these questions <strong>tend to be the same. </strong></p>



<p>&#8220;Hey Ryan, how do you set up X.&#8221;</p>



<p> &#8220;Hey Ryan, you&#8217;re good with JavaScript, what framework should I use for this project we have coming up.&#8221;</p>



<p>&#8220;I got this error, what do I need to install again?&#8221;</p>



<p>  <strong>Requests from peers or others can usually be boiled down to a StackOverflow-style question and answer pair, which is (and here&#8217;s the secret) a content gold mine.</strong></p>



<p>If you&#8217;re experiencing burnout due to a large number of questions from peers that you get over and over from different people, and particularly if they aren&#8217;t NDA-based (which project-specific questions probably are, so check with your manager first) then what you need is to write those questions down!</p>



<p>Often times if you&#8217;re answering questions like this and they aren&#8217;t in blog-form, posted on your personal site, then you should start one and get to writing!</p>



<p>If you&#8217;re experiencing Success Syndrome, it&#8217;s likely that you feel good helping others and answering questions, but if they become repetitive and you&#8217;re asked something a few times, write an article and point people to it! It&#8217;ll save you time and also allow others on the internet to find it.</p>



<p>Multiple people asking the same thing also validates there is an audience for the question.</p>



<p>Questions from peers at work that might have project-specific answers, particularly ones over email, are ideal candidates to write up in a wiki or a ReadMe.md file right inside your repository.  Then, once you have things there, send a link to it in email to them. Other team members will be glad you did.</p>



<p></p>
<span class="et_bloom_bottom_trigger"></span><p>The post <a href="https://ryanhayes.net/what-is-success-syndrome-and-how-to-leverage-it-for-your-personal-brand/">What is Success Syndrome? (And How To Leverage It For Your Personal Brand)</a> appeared first on <a href="https://ryanhayes.net">Ryan Hayes</a>.</p>
]]></content:encoded>
					
					<wfw:commentRss>https://ryanhayes.net/what-is-success-syndrome-and-how-to-leverage-it-for-your-personal-brand/feed/</wfw:commentRss>
			<slash:comments>0</slash:comments>
		<post-id xmlns="com-wordpress:feed-additions:1">1001347713</post-id>	</item>
	</channel>
</rss>`