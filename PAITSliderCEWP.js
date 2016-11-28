<script type="text/javascript" src="//code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="../SiteAssets/PAITSlider.js?rev=09" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/unslider/2.0.3/js/unslider-min.js" ></script>

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/unslider/2.0.3/css/unslider.css">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/unslider/2.0.3/css/unslider-dots.css">


<style type="text/css">
 
.PAITSlide
{
	height: 200px;
	width: 500px;
    margin: auto;
    border: 2px solid #000000;
}

.unslider-nav ol li {
  border: 2px solid #000;
}
.unslider-nav ol li.unslider-active {
  background: #000;
}

.unslider-arrow {
 }
.next, .prev {
  font-size: 24px;
  color: #3d3d3d;
  top: 50%;
  width: 25px;
  height: 25px;
  line-height: 20px;
  text-align: center;
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid #000;
  cursor: pointer;
}

</style>

<script type="text/javascript">

  $().PAITSlider({
        listName:  'PromotedLinks', //name of Promoted Links list to use for slides
		viewTitle: 'All Promoted Links', //name of the view to use
        prev: "<", //HTML for the previous arrow
        next: ">", //HTML for the next arrow
		autoplay: true, 
		infinite: true,
		animation: 'horizontal',
		arrows: true,
		dots: true,
		keys: true,
		delay: 3000		
		
    });
    
</script>

