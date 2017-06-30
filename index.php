<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
   <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-84267331-1', 'auto');
      ga('send', 'pageview');

    </script>
    <link rel="apple-touch-icon" sizes="57x57" href="img/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="img/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="img/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="img/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="img/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="img/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="img/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="img/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="img/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <link rel="manifest" href="img/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="img/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
	<link rel="stylesheet" href="css/portfolio.css">
	<link href='https://fonts.googleapis.com/css?family=Shadows+Into+Light' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Advent+Pro:500' rel='stylesheet' type='text/css'>
	<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
	<link rel="stylesheet" href="css/lazyYT.css"><!-- lazyYT written by: tylerpearson https://github.com/tylerpearson -->
	<script type="text/javascript" src="js/lazyYT.js"></script><!-- lazyYT written by: tylerpearson https://github.com/tylerpearson -->
	<script type="text/javascript" src="js/portfolio.js"></script>

	<title>Joey Hicklin</title>
</head>

<body>
<div id="bodyWrapper">
<div id="currentWorkButton"></div>
<!-- <img id="profile" src="img/profile.jpg" alt="A picture of the author of this page, standing on a bridge, overlooking a Canadian forest."> -->
<button id="profile">Skills</button>
<div class="bio bio1">I am a self-motivated team member who has a knack for</div>
<div class="bio bio2">troubleshooting anything; from electronics and appliances to coding</div>
<div class="bio bio3">applications and generalized life or social challenges. My rich</div>
<div class="bio bio4">background gives me a prismatic viewpoint to see the world in many different aspects. As well, those experiences have given me a powerful toolkit that spans across multiple disciplines. I can build a house from scratch, just as efficiently as I can build a computer or create a custom gourmet dish. I also enjoy analyzing designs, as it grants me the opportunity to use my many hats for scrutinizing a subject from multiple viewpoints.</div>
<div id="bioIBox">
	<div class="bio bioI bio1">I am a self-motivated team member who has a knack for</div>
	<div class="bio bioI bio2">troubleshooting anything; from electronics and appliances to coding</div>
	<div class="bio bioI bio3">applications and generalized life or social challenges. My rich</div>
	<div class="bio bioI bio4">background gives me a prismatic viewpoint to see the world in many different aspects. As well, those experiences have given me a powerful toolkit that spans across multiple disciplines. I can build a house from scratch, just as efficiently as I can build a computer or create a custom gourmet dish. I also enjoy analyzing designs, as it grants me the opportunity to use my many hats for scrutinizing a subject from multiple viewpoints.</div>
</div>
<div id="skills">
	<div id="skillTopBlur"></div>
	<div id="skillBottomBlur"></div>
	<div id="skillsBox">
	<?php function statBox($imgSrc, $class1, $text, $class2=""){ ?>
		<div class="statBox">
			<div class="statIcon">
				<img src="img/<?php echo $imgSrc; ?> />
			</div>
			<div class="statBarBox">
				<div class="statBar <?php echo $class1; ?>"></div>
				<div class="statChevron statChevron1">^</div>
				<div class="statChevron statChevron2">^</div>
				<div class="statChevron statChevron3">^</div>
			</div>
			<div class="statText <?php echo $class2; ?>">
				<?php echo $text; ?>
				<div class="sharpText"><?php echo $text; ?></div>
			</div>
		</div>
		<?php }
			statBox("HTML_logo.png\" alt=\"An icon representing HTML5.\"", "htmlSkill", "I'm well versed in current standards and formatting for validation. I am also very familiar with visualizing the box model when building complex systems from scratch.");

			statBox("CSS_logo.png\" alt=\"An icon representing CSS3.\"", "cssSkill", "I have built everything imaginable through pure CSS, from menus to animations and complex transforms, all of which are completely responsive. Through practice with the heirarchy I can pass values through elements with ease.");

			statBox("javascript_logo.png\" alt=\"An icon representing Javascript.\"", "jsSkill", "I can manipulate the DOM easily, using minimalistic functions. I can animate and add logic to the point of creating browser-based games. I am also excited to learn any new libraries that a current project inspires me to learn.");
        
            statBox("node_logo.png\" alt=\"An icon representing Node.\"", "nodeSkill", "I understand many of the core Node concepts and I can build a web server using Express, routing, EJS or JADE files and a few other various Node tricks. I love the modular form of Node, but by nature it means that I'll always be learning new modules, which gives me tons of room to learn and expand what I can do with the platform.");
        
            statBox("react_logo.png\" alt=\"An icon representing React.\"", "reactSkill", "Though I'm new to the React world, modularization through components is really fun! I love the simplicity of JSX, and the snappy reactivity of components updating their state allows for tons of interesting projects. This is definitely something I'd love to learn more about.");
        
            statBox("webpack_logo.png\" alt=\"An icon representing Webpack.\"", "webpackSkill", "Though Webpack is the only module-loader/task-runner I have experience with, I'm really enjoying the speed that I'm getting during my development process. Once constructed, Webpack scripts let me develop at blazing speeds.");

			statBox("PHP_logo.png\" alt=\"An icon representing PHP.\"", "phpSkill", "I can perform almost any logic sequence imaginable. My familiarity with the language allows me to learn new functions quickly as I need them, so my knowledge base is always growing.");

			statBox("SQL_logo.png\" alt=\"An icon representing SQL.\"", "sqlSkill", "I am highly proficient in laying out the architecture for a database, normalizing for maximum performance. I can perform mildly-complex queries through PHP, but I am always excited to learn new techniques.");

			statBox("jquery_logo.png\" alt=\"An icon representing J Query.\"", "jqSkill", "I am familiar with about 40% of the entire library. I am also very experienced in using jQuery and JavaScript side-by-side in order to execute complex actions with simplistic code.");

			statBox("AJAX_logo.png\" alt=\"An icon representing Ajax.\"", "ajaxSkill", "I can utilize AJAX to connect my server-side and client-side scripts, but I only know about 70% of the background processes of the tool, since I haven't been using it since it's XML days.");

			statBox("Python_logo.png\" alt=\"An icon representing Python.\"", "pySkill", "I have experience building a handfull of desktop applications, from simple automated background processes, to a few desktop games using the graphics library. I'd be very interested in expanding my experience here.");

			statBox("Photoshop_logo.png\" alt=\"An icon representing Adobe Photoshop.\"", "psSkill", "I've been using PS since 2003. I can use every tool and filter to accomplish just about any intermediate-level task. I am not however, a PS guru.");

			statBox("Illustrator_logo.png\" alt=\"An icon representing Adobe Illustrator.\"", "aiSkill", "I have some experience in creating graphs, models and a few logos. I am very interested in expanding my knowledge base here.");

			statBox("After_Effects_logo.png\" alt=\"An icon representing Adobe After Effects.\"", "aeSkill", "I have built a handful of overlays and videos. I really enjoy creating things with the software, but I don't often find a reason to create something. Here's an example of something I built for the intro to my wedding video:<br><br><div class=\"js-lazyYT\" data-youtube-id=\"fx8LWIud2uI\" data-width=\"55vw\"></div>", "aeSkillT");

			statBox("Premiere_Pro_logo.png\" alt=\"An icon representing Adobe Premiere.\"", "prSkill", "I have done simple to mildly-complex video editing in this tool, but my speed is still on the intermediate level.");
		 ?>
	</div> <!-- End of SkillsBox Div -->
	<!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fx8LWIud2uI\" frameborder=\"0\" allowfullscreen></iframe> -->
</div> <!-- End of Skills Div -->
<div id="myName">Joey Hicklin</div>
<div id="myEmail">j.Hicklin87@yahoo.com</div>
<div id="gradientBox">
	<div id="gradient"></div>
	<div id="gradientSolid"></div>
</div>

<div id="contactBox">
	<div id="contactButton">EMAIL ME</div>
	<form method="post" action="sendMail.php">
		<input type="text" name="name" placeholder="Name" required>
		<input type="text" name="email" placeholder="Your Email" required>
		<textarea rows="6" name="message" placeholder="What can I do for you today?" required></textarea>
		<input id="contactSubmit" type="submit" value="SEND EMAIL">
	</form>
	<div id="contactInfo">
		<div class="contactInfoItem">Joey Hicklin</div>
		<div class="contactInfoItem">(360)936-9768</div>
		<div class="contactInfoItem">j.Hicklin87@yahoo.com</div>
	</div>
	<div id="themeName"></div>
</div>
</div> <!-- End of #bodyWrapper -->
</body>
</html>