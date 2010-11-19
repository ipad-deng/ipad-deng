// Created by iWeb 3.0.2 local-build-20101119

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('CNPinyin_files/PrintedPaper_frame_01_1.png'),IWCreateImage('CNPinyin_files/PrintedPaper_frame_02_1.png'),IWCreateImage('CNPinyin_files/PrintedPaper_frame_03_1.png'),IWCreateImage('CNPinyin_files/PrintedPaper_frame_06_1.png'),IWCreateImage('CNPinyin_files/PrintedPaper_frame_09_1.png'),IWCreateImage('CNPinyin_files/PrintedPaper_frame_08_1.png'),IWCreateImage('CNPinyin_files/PrintedPaper_frame_07_1.png'),IWCreateImage('CNPinyin_files/PrintedPaper_frame_04_1.png')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,6.000000,6.000000,6.000000,6.000000,9.000000,9.000000,9.000000,9.000000,null,null,null,0.500000),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://ipad-deng.appspot.com/ipad-deng/CNPinyin/rss.xml");}
function onPageLoad()
{loadMozillaCSS('CNPinyin_files/CNPinyinMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
