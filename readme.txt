<strong>How to create and deploy?</strong>

1) Copy this repository and create your own project.
2) Then click on "settings" and find "GitHub pages". Select "master branch".
Here you can find more information: https://pages.github.com/.
After you successfully copy the project you can make changes simply pushing your code into the master branch. Deployment can take 5-15 min.
----------------------------------------------------------------------------


<strong>How to create custom domain?</strong>
1) You should add your domain in settings tab.
2) Then you should go to your domain website and make DNS settings.
Here you can find more information: https://help.github.com/en/articles/using-a-custom-domain-with-github-pages
----------------------------------------------------------------------------


<strong>Newsletter section settings</strong>
For the contact form, we are using https://formspree.io/ service. In order to receive emails in your email, you need to change it in the code.
Please find this line in index.html and legal/index.html and change andrew.okonar@gmail.com to your own email.
`<form action="https://formspree.io/andrew.okonar@gmail.com" method="POST" name="input">`
----------------------------------------------------------------------------


<strong>Trainings & Talks settings</strong>
In order to add a new post you need to copy the previous one and paste it at the end of section:
`
<div class="col-lg-4 col-md-6 item block">
  <div class="image-cover">
    <img src="dist/img/label-yellow.png" alt="csm certified">
    <p class="date">22 Aug</p>
  </div>
  <div class="information">
    <p>Talk</p>
    <p>Berlin, Germany</p>
  </div>
  <p class="block-title">Certified Scrum Master Training Deluxe</p>
  <p class="block-text">This is a three-day course by Anton Skornyakov (Certified Scrum Trainer) and I with a focus on Coaching and Facilitation that will allow you to become a Certified Scrum Master. This course is in German.</p>
</div>
`

To make the post inactive you just need to add class "old":
`
<div class="col-lg-4 col-md-6 item block old">
`
----------------------------------------------------------------------------


<strong>For developers</strong>
2) To automatically recompile sources during development run: 'gulp' -- starting server and watch

`
Gulp tasks available:

name		description

styles		Compile Sass
js		Compile all JS
js:app		Concat and minify all application scripts
js:libs		Concat and minify 3rd parties scripts
copy:images	Copy images into /dist/images
build		Run all tasks above
clean		Removes /dist folder
server		Started localserver
watch		Watch all sources
`
