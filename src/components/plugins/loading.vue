<template>
	<div>
		<div class="mask-layer"></div>
		<div class="spinner-center">
			<div class="spinner-cc">
				<div class="bar1"></div>
				<div class="bar2"></div>
				<div class="bar3"></div>
				<div class="bar4"></div>
				<div class="bar5"></div>
				<div class="bar6"></div>
				<div class="bar7"></div>
				<div class="bar8"></div>
				<div class="bar9"></div>
				<div class="bar10"></div>
				<div class="bar11"></div>
				<div class="bar12"></div>
			</div>
		</div>
	</div>
</template>

<script>

  	export default {

  	}

</script>
<style lang="less" scoped rel="stylesheet/less">
	@base: 50px;
	/*遮罩层*/
	.mask-layer {
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0);
		z-index: 900;
	}
	.spinner-center {
		position: fixed;
		width: 60px;
		left: 50%;
		top: 40%;
		background: rgba(0, 0, 0, 0.6);
		border-radius: 0.1 * @base;
		padding: 0.3 * @base 0 0.2 * @base;
		text-align: center;
		font-size: 16px;
		z-index: 1010;
		transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
	}
	@media screen and (max-width: 321px) {
		.spinner-center {
			font-size: 16px;
		}
	}
	@media screen and (min-width: 321px) and (max-width: 400px) {
		.spinner-center {
			font-size: 17px;
		}
	}
	@media screen and (min-width: 400px) {
		.spinner-center {
			font-size: 19px;
		}
	}
	.loading-message {
		color: #fff;
		padding-top: 0.16 * @base;
	}
	.spinner-cc {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		width: 0.6 * @base;
		height: 0.6 * @base;
	}
	.spinner-cc div {
		background-color: white;
		position: absolute;
		width: 8%;
		height: 25%;
		top: 60%;
		left: 50%;
		margin-left: -4.15%;
		opacity: 0;
		border-bottom-left-radius: 0.7 * @base 1.2 * @base;
		border-bottom-right-radius: 0.7 * @base 1.2 * @base;
		-webkit-transform-origin: center -80%;
		-ms-transform-origin: center -80%;
		transform-origin: center -80%;
		-webkit-animation: fade 1s linear infinite;
	}
	.spinner-cc div.bar1 {
		-webkit-transform: rotate(0deg);
		-webkit-animation-delay: 0s;
	}
	.spinner-cc div.bar2 {
		-webkit-transform: rotate(30deg);
		-webkit-animation-delay: -0.9167s;
	}
	.spinner-cc div.bar3 {
		-webkit-transform: rotate(60deg);
		-webkit-animation-delay: -0.833s;
	}
	.spinner-cc div.bar4 {
		-webkit-transform: rotate(90deg);
		-webkit-animation-delay: -0.75s;
	}
	.spinner-cc div.bar5 {
		-webkit-transform: rotate(120deg);
		-webkit-animation-delay: -0.667s;
	}
	.spinner-cc div.bar6 {
		-webkit-transform: rotate(150deg);
		-webkit-animation-delay: -0.5833s;
	}
	.spinner-cc div.bar7 {
		-webkit-transform: rotate(180deg);
		-webkit-animation-delay: -0.5s;
	}
	.spinner-cc div.bar8 {
		-webkit-transform: rotate(210deg);
		-webkit-animation-delay: -0.41667s;
	}
	.spinner-cc div.bar9 {
		-webkit-transform: rotate(240deg);
		-webkit-animation-delay: -0.333s;
	}
	.spinner-cc div.bar10 {
		-webkit-transform: rotate(270deg);
		-webkit-animation-delay: -0.25s;
	}
	.spinner-cc div.bar11 {
		-webkit-transform: rotate(300deg);
		-webkit-animation-delay: -0.1667s;
	}
	.spinner-cc div.bar12 {
		-webkit-transform: rotate(330deg);
		-webkit-animation-delay: -0.0833s;
	}
	@-webkit-keyframes fade {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
