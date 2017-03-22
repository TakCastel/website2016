// CHARTS GRAPHICS FILLER

$(document).ready(function(){
	$('#skills').viewportChecker({
		callbackFunction: function(elem, action){
			setTimeout(function(){

				(function($){ 
					$.fn.percentPie = function(options){

						var settings = $.extend({
							width: 125,
							trackColor: "f2f3f4",
							barColor: "#2e3546",
							barWeight:25,
							startPercent: 0,
							endPercent: 1,
							fps: 60
						}, options);

						this.css({
							width: settings.width,
							height: settings.width
						});

						var that = this,
							hoverPolice = false,
							canvasWidth = settings.width,
							canvasHeight = canvasWidth,
							id = $('canvas').length,
							canvasElement = $('<canvas id="'+ id +'" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>'),
							canvas = canvasElement.get(0).getContext("2d"),
							centerX = canvasWidth/2,
							centerY = canvasHeight/2,
							radius = settings.width/2 - settings.barWeight/2;
							counterClockwise = false,
							fps = 1000 / settings.fps,
							update = .003;
							this.angle = settings.startPercent;

						this.drawArc = function(startAngle, percentFilled, color){
							var drawingArc = true;
							canvas.beginPath();
							canvas.arc(centerX, centerY, radius, (Math.PI/180)*(startAngle * 360 - 90), (Math.PI/180)*(percentFilled * 360 - 90), counterClockwise);
							canvas.strokeStyle = color;
							canvas.lineWidth = settings.barWeight;
							canvas.stroke();
							drawingArc = false;
						}

						this.fillChart = function(stop){
							var loop = setInterval(function(){
								hoverPolice = true;
								canvas.clearRect(0, 0, canvasWidth, canvasHeight);

								that.drawArc(0, 360, settings.trackColor);
								that.angle += update;
								that.drawArc(settings.startPercent, that.angle, settings.barColor);

								if(that.angle > stop){
									clearInterval(loop);
									hoverPolice = false;
								}
							}, fps);
						}

						setTimeout(function(){
							if(hoverPolice == false){
								that.angle = settings.startPercent;
								that.fillChart(settings.endPercent);
							}
						});

						this.fillChart(settings.endPercent);
						this.append(canvasElement);
						return this;
					}

					$('.html').percentPie({
						width: 125,
						trackColor: "#2e3546",
						barColor: "#e84225",
						barWeight:25,
						endPercent: 1,
						fps: 60
					});

					$('.css').percentPie({
						width: 125,
						trackColor: "#2e3546",
						barColor: "#25a6e8",
						barWeight:25,
						endPercent: .90,
						fps: 60
					});

					$('.javascript').percentPie({
						width: 125,
						trackColor: "#2e3546",
						barColor: "#e8d425",
						barWeight:25,
						endPercent: .20,
						fps: 60
					});

					$('.adobe').percentPie({
						width: 125,
						trackColor: "#2e3546",
						barColor: "#e82525",
						barWeight:25,
						endPercent: .25,
						fps: 60
					});

					$('.office').percentPie({
						width: 125,
						trackColor: "#2e3546",
						barColor: "#25e8ba",
						barWeight:25,
						endPercent: .80,
						fps: 60
					});

					$('.php').percentPie({
						width: 125,
						trackColor: "#2e3546",
						barColor: "#9025e8",
						barWeight:25,
						endPercent: .33,
						fps: 60
					});

				}(jQuery));
			});
		},
	});
});

// BACK TO TOP AND SCROLL DOWN FADE IN AND OUT

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 800) {
		$('.back-to-top').fadeIn();
	} else {
		$('.back-to-top').fadeOut();
	}
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 100) {
		$('.arrow').fadeOut();
	} else {
		$('.arrow').fadeIn();
	}
});

// ACTIVATE ANIMATION IN VIEWPORT

$(document).ready(function(){
	$('.project-block').viewportChecker({
		callbackFunction: function(elem, action){
			setTimeout(function(){
				$('.project-block').addClass('fadeInUp');
				$( document ).ready(function() {
					setTimeout (function() {
						$('#fadeInUp-initial-1').addClass('fadeInUp-visible');
					}, 1500)

					setTimeout (function() {
						$('#fadeInUp-initial-2').addClass('fadeInUp-visible');
					}, 1750)

					setTimeout (function() {
						$('#fadeInUp-initial-3').addClass('fadeInUp-visible');
					}, 2000)

					setTimeout (function() {
						$('#fadeInUp-initial-4').addClass('fadeInUp-visible');
					}, 2250)
				});
			});
		},
	});
});

// GOOGLE ANALYTICS

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70682731-1', 'auto');
ga('send', 'pageview');