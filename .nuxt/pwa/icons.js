export default async function (ctx, inject) {
  const icons = {"64x64":"/portfolio-r/_nuxt/icons/icon_64x64.5f6a36.png","120x120":"/portfolio-r/_nuxt/icons/icon_120x120.5f6a36.png","144x144":"/portfolio-r/_nuxt/icons/icon_144x144.5f6a36.png","152x152":"/portfolio-r/_nuxt/icons/icon_152x152.5f6a36.png","192x192":"/portfolio-r/_nuxt/icons/icon_192x192.5f6a36.png","384x384":"/portfolio-r/_nuxt/icons/icon_384x384.5f6a36.png","512x512":"/portfolio-r/_nuxt/icons/icon_512x512.5f6a36.png","ipad_1536x2048":"/portfolio-r/_nuxt/icons/splash_ipad_1536x2048.5f6a36.png","ipadpro9_1536x2048":"/portfolio-r/_nuxt/icons/splash_ipadpro9_1536x2048.5f6a36.png","ipadpro10_1668x2224":"/portfolio-r/_nuxt/icons/splash_ipadpro10_1668x2224.5f6a36.png","ipadpro12_2048x2732":"/portfolio-r/_nuxt/icons/splash_ipadpro12_2048x2732.5f6a36.png","iphonese_640x1136":"/portfolio-r/_nuxt/icons/splash_iphonese_640x1136.5f6a36.png","iphone6_50x1334":"/portfolio-r/_nuxt/icons/splash_iphone6_50x1334.5f6a36.png","iphoneplus_1080x1920":"/portfolio-r/_nuxt/icons/splash_iphoneplus_1080x1920.5f6a36.png","iphonex_1125x2436":"/portfolio-r/_nuxt/icons/splash_iphonex_1125x2436.5f6a36.png","iphonexr_828x1792":"/portfolio-r/_nuxt/icons/splash_iphonexr_828x1792.5f6a36.png","iphonexsmax_1242x2688":"/portfolio-r/_nuxt/icons/splash_iphonexsmax_1242x2688.5f6a36.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
