<template>
	<div>
		<van-swipe :autoplay="3000" indicator-color="white" :height="150">
			<van-swipe-item v-for="item in banner">
				<img :src="item.bannerUrl" />
			</van-swipe-item>
		</van-swipe>
		<van-row class="icon-list">
			<van-col v-for="item in iconData" span="8">
				<router-link :to="item.link+'/'+item.id">
					<div class="icon">
						<van-icon :name="item.icon" />
					</div>
					{{item.name}}
				</router-link>
			</van-col>
		</van-row>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		mounted() {
			this.$store.commit("updateNeedShowFooter", true);
			this.$store.commit("updateSelected", 0);
		},
		data () {
			return {
				banner: [
					{
						bannerUrl: 'http://vgcoolsteamgame.oss-cn-hangzhou.aliyuncs.com/c57441ec925a4c79bbf604a1e42278ba.jpg'
					},
					{
						bannerUrl: '//m.360buyimg.com/mobilecms/jfs/t1/6602/1/4121/85325/5bd81553E20466fca/ad2e8f788a3e9b0e.jpg!cr_1125x549_0_72'
					},
					{
						bannerUrl: '//gw.alicdn.com/imgextra/i3/14/O1CN011ByS1820vrzLgGd_!!14-0-lubanu.jpg'
					},
					{
						bannerUrl: '//gw.alicdn.com/imgextra/i2/31/O1CN01o9Pawf1C6EkX4Qv9x_!!31-0-lubanu.jpg'
					}
				],
				iconData: [
					{
						id: '1',
						name: '分类1',
						icon: 'point-gift-o',
						link: '/news'
					}, {
						id: '2',
						name: '分类2',
						icon: 'medel-o',
						link: '/news'
					}, {
						id: '3',
						name: '分类3',
						icon: 'bar-chart-o',
						link: '/news'
					}, {
						id: '4',
						name: '分类4',
						icon: 'photo-o',
						link: '/news'
					}, {
						id: '5',
						name: '分类5',
						icon: 'music-o',
						link: '/news'
					}, {
						id: '6',
						name: '分类6',
						icon: 'vip-card-o',
						link: '/news'
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.van-swipe-item {
		img {
			width: 100%;
			height: 150px;
		}
	}

	.icon-list {
		text-align: center;
		.van-col {
			padding: 30px 10px;
			a {
				color: #333;
			}
			.icon {
				font-size: 30px;
				color: #999;
			}
		}
	}
</style>